/* eslint-disable prefer-destructuring */
import { decorateButtons, decorateBlockHrs } from '../../utils/decorate.js';
import { loadStyle, getConfig, createTag } from '../../utils/utils.js';
import { addFooter } from '../card/cardUtils.js';
import { decorateLinkAnalytics } from '../../martech/attributes.js';
import { replaceKey } from '../../features/placeholders.js';
import '../../deps/commerce.js';
import '../../deps/commerce-web-components.js';

const { miloLibs, codeRoot } = getConfig();
const base = miloLibs || codeRoot;

loadStyle(`${base}/deps/commerce-web-components.css`);

const cardTypes = ['segment', 'special-offer', 'plans'];

const getPodType = (styles) => styles?.find((style) => cardTypes.includes(style));

const createDescription = (rows, cardType) => createTag('div', {
  slot: 'body',
  class: `consonant-${cardType}-description`,
}, rows.slice(0, rows.length - 1));

const createTitle = (titles, cardType) => {
  const titleWrapper = createTag('div', { slot: 'heading', class: `consonant-${cardType}-title` });
  titles?.forEach((title) => titleWrapper.appendChild(title));
  return titleWrapper;
};

const decorateFooter = (el, altCtaMetaData, styles, cardType) => {
  const cardFooter = el.querySelector('.consonant-CardFooter');
  const decorateWithSecureTransactionSign = () => {
    const secureTransactionWrapper = createTag('div', { class: 'secure-transaction-wrapper' });
    const label = createTag('span', { class: 'secure-transaction-label' });
    const secureElement = createTag('span', { class: 'secure-transaction-icon' });
    secureTransactionWrapper.append(secureElement, label);
    replaceKey('secure-transaction', getConfig()).then((replacedKey) => {
      label.textContent = replacedKey;
    });
    return secureTransactionWrapper;
  };

  const createCheckbox = (checkBoxText) => {
    cardFooter.querySelector('hr')?.remove();
    const container = createTag('label', { class: 'checkbox-container' });
    const input = createTag('input', { id: 'alt-cta', type: 'checkbox' });
    const checkmark = createTag('span', { class: 'checkmark' });
    const label = createTag('span', { class: 'checkbox-label' }, checkBoxText.innerHTML);
    container.append(input, checkmark, label);
    return container;
  };

  const createSecureSign = () => {
    const cardFooterRow = el.querySelector('.consonant-CardFooter-row');
    const standardWrapper = createTag('div', { class: 'standard-wrapper' });
    const secureTransactionWrapper = decorateWithSecureTransactionSign();
    standardWrapper.append(secureTransactionWrapper, cardFooterRow);
    cardFooter?.append(standardWrapper);
  };

  const decorateAlternativeCta = () => {
    const altCtaRegex = /href=".*"/;
    if (!altCtaRegex.test(altCtaMetaData[1]?.innerHTML)) return;
    const cardFooterRow = el.querySelector('.consonant-CardFooter-row');
    const originalCtaButton = cardFooterRow.querySelector('.consonant-CardFooter-cell--right');
    const checkboxContainer = createCheckbox(altCtaMetaData[0]);
    const altCtaButtonData = altCtaMetaData[1];
    decorateButtons(altCtaButtonData);
    const altCtaButton = createTag('div', { class: originalCtaButton.classList }, altCtaButtonData.innerHTML);
    altCtaButton.classList.add('button--inactive');
    checkboxContainer.querySelector('input[type="checkbox"]').addEventListener('change', ({ target: { checked } }) => {
      originalCtaButton.classList.toggle('button--inactive', checked);
      altCtaButton.classList.toggle('button--inactive', !checked);
    });
    cardFooterRow.append(altCtaButton);
    cardFooter.prepend(checkboxContainer);
    altCtaMetaData[0].parentNode.remove();
  };
  if (altCtaMetaData !== null) decorateAlternativeCta();
  if (el.classList.contains('secure')) createSecureSign();
  cardFooter.querySelectorAll('.consonant-CardFooter-cell').forEach((cell) => cell.classList.add(`consonant-${cardType}-cell`));
};

const addInner = (el, altCta, cardType, merchCard) => {
  const innerElements = [...el.querySelectorAll('h1, h2, h3, h4, h5, h6, p, ul')];
  const styles = [...el.classList];
  const merch = styles.includes('merch-card');
  const pElement = merch && el.querySelector(':scope > div > div > p:last-of-type');
  const links = pElement ? pElement.querySelectorAll('a') : el.querySelectorAll('a');
  const list = el.querySelector('ul');

  const inner = el.querySelector(':scope > div:not([class])');
  const title = createTitle(titles, cardType);
  const description = createDescription(rows, cardType, inner);

  merchCard.prepend(title);
  merchCard.append(description);
  addFooter(links, inner, merchCard);
  decorateFooter(el, altCta, cardType);
  merchCard.append(inner);
};

const returnRibbonStyle = (ribbonMetadata) => {
  const ribbonStyleRegex = /^#[0-9a-fA-F]+, #[0-9a-fA-F]+$/;
  if (!ribbonStyleRegex.test(ribbonMetadata[0]?.innerText)) return null;
  const style = ribbonMetadata[0].innerText;
  const ribbonWrapper = ribbonMetadata[0].parentNode;
  const value = ribbonMetadata[1].innerText;
  ribbonWrapper.remove();
  return { style, value };
};

const init = (el) => {
  const headings = el.querySelectorAll('h1, h2, h3, h4, h5, h6');
  decorateLinkAnalytics(el, headings);
  const images = el.querySelectorAll('picture');
  let image;
  const icons = [];
  const rows = el.querySelectorAll(':scope > *');
  const ribbonMetadata = rows[0].children?.length === 2 ? rows[0].children : null;
  const row = rows[ribbonMetadata === null ? 0 : 1];
  const altCta = rows[rows.length - 1].children?.length === 2
    ? rows[rows.length - 1].children : null;
  const allPElems = row.querySelectorAll('p');
  const ctas = allPElems[allPElems.length - 1];
  const styles = [...el.classList];
  const cardType = getPodType(styles);
  decorateBlockHrs(el);
  images.forEach((img) => {
    const imgNode = img.querySelector('img');
    const { width, height } = imgNode;
    const isSquare = Math.abs(width - height) <= 10;
    if (img) {
      if (isSquare) {
        icons.push(img);
      } else {
        image = img;
      }
    }
  });

  const merchCard = createTag('merch-card', { class: el.className, variant: cardType });

  if (ribbonMetadata !== null) {
    const badge = returnRibbonStyle(ribbonMetadata);
    if (badge !== null) {
      merchCard.setAttribute('badge', JSON.stringify(badge));
    }
  }
  if (image !== undefined) {
    merchCard.setAttribute('image', image.querySelector('img').src);
    image?.parentElement.remove();
  }
  if (!icons || icons.length > 0) {
    merchCard.setAttribute('icons', JSON.stringify(Array.from(icons).map((icon) => icon.querySelector('img').src)));
    icons.forEach((icon) => icon.parentElement.remove());
  }

  if (ctas) decorateButtons(ctas);
  const footer = createTag('div', { slot: 'footer' });
  footer.appendChild(ctas);
  addInner(el, altCta, cardType, merchCard);
  merchCard.appendChild(footer);
  el.replaceWith(merchCard);
};

export default init;
