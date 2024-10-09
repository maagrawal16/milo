import { readFile } from '@web/test-runner-commands';
import { expect } from '@esm-bundle/chai';
import { stub, useFakeTimers, restore } from 'sinon';
import loadBlock from '../../libs/navigation/bootstrapper.js';
import fetchedFooter from '../blocks/global-footer/mocks/fetched-footer.js';
import placeholders from '../blocks/global-navigation/mocks/placeholders.js';
import { setConfig } from '../../libs/utils/utils.js';
import { mockRes } from '../blocks/global-navigation/test-utilities.js';

document.body.innerHTML = await readFile({ path: './mocks/body.html' });

const blockConfig = {
  footer: {
    name: 'global-footer',
    targetEl: 'footer',
    appendType: 'append',
  },
  header: {
    name: 'global-navigation',
    targetEl: 'header',
    appendType: 'prepend',
    unav: { unavComponents: 'profile' },
  },
};

const miloLibs = 'http://localhost:2000/libs';

describe('Bootstrapper', async () => {
  beforeEach(async () => {
    stub(window, 'fetch').callsFake(async (url) => {
      if (url.includes('/footer')) {
        return mockRes({
          payload: fetchedFooter(
            { regionPickerHash: '/fragments/regions#langnav' },
          ),
        });
      }
      if (url.includes('/placeholders')) return mockRes({ payload: placeholders });
      if (url.includes('/footer.plain.html')) return mockRes({ payload: await readFile({ path: '../blocks/region-nav/mocks/regions.html' }) });
      if (url.includes('/gnav.plain.html')) return mockRes({ payload: await readFile({ path: './mocks/gnav.html' }) });

      return null;
    });
    setConfig({ miloLibs, contentRoot: '/federal/dev' });
  });

  afterEach(() => {
    restore();
  });

  it('Renders the footer block', async () => {
    await loadBlock(miloLibs, blockConfig.footer);
    const clock = useFakeTimers({
      toFake: ['setTimeout'],
      shouldAdvanceTime: true,
    });
    clock.tick(3000);
    const el = document.getElementsByTagName('footer');
    expect(el).to.exist;
  });

  it('Renders the header block', async () => {
    await loadBlock(miloLibs, blockConfig.header);
    const el = document.getElementsByTagName('header');
    expect(el).to.exist;
  });

  it('Renders the header with full width', async () => {
    blockConfig.header.layout = 'fullWidth';
    await loadBlock(miloLibs, blockConfig.header);
    const el = document.querySelector('header');
    expect(el.classList.contains('feds--full-width')).to.be.true;
  });

  it('Renders the header with no border bottom', async () => {
    blockConfig.header.noBorder = true;
    await loadBlock(miloLibs, blockConfig.header);
    const el = document.querySelector('header');
    expect(el.classList.contains('feds--no-border')).to.be.true;
  });
});
