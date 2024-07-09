import { html, signal, useEffect, useMemo } from '../../../deps/htm-preact.js';
import { urls } from '../utils/state.js';
import { setActions, openWord, handleAction } from './index.js';

function useSignal(value) {
  return useMemo(() => signal(value), []);
}

function useActionState(actions) {
  const action = actions.value;
  const url = urls.value.find((item) => item.pathname === action.path
    || item.langstore.pathname === action.path);
  const valid = url?.valid !== undefined && url.valid;
  const getActionState = (btn) => ({ valid, exists: btn?.status === 200 });
  const buttons = Object.keys(action).filter((key) => key !== 'path');
  const actionState = {};
  buttons.forEach((btn) => { actionState[btn] = getActionState(action[btn]); });
  return actionState;
}

function Actions({ item }) {
  const isExcel = item.value.path.endsWith('.json') ? ' locui-url-action-edit-excel' : ' locui-url-action-edit-word';
  const { edit, preview, live } = useActionState(item);
  return html`
    <div class=locui-url-source-actions>
      <button
        disabled=${item.value.edit?.status === 404}
        class="locui-url-action locui-url-action-edit${isExcel}${edit.valid ? '' : ' disabled'}"
        onClick=${(e) => openWord(e, item)}>Edit</button>
      <button
        disabled=${!preview.valid}
        class="locui-url-action locui-url-action-view${!preview.exists ? ' disabled' : ''}"
        onClick=${(e) => handleAction(e, item, true)}>Preview</button>
      <button
        disabled=${!live.exists || !live.valid}
        class="locui-url-action locui-url-action-view${!live.exists ? ' disabled' : ''}"
        onClick=${(e) => handleAction(e, item)}>${!live.exists ? 'Not ' : ''}Live</button>
    </div>
  `;
}

function Details({ item }) {
  return html`
    <div class=locui-url-source-details>
      <div class=locui-url-source-details-col>
        <h3>Modified</h3>
        <p class=locui-url-source-details-date>
          ${item.value.edit.modified[0]}
        </p>
        <p class=locui-url-source-details-time>
          ${item.value.edit.modified[1]}
        </p>
      </div>
      <div class=locui-url-source-details-col>
        <h3>Previewed</h3>
        <p>${item.value.preview.modified[0]}</p>
        <p>${item.value.preview.modified[1]}</p>
      </div>
      <div class=locui-url-source-details-col>
        <h3>Published</h3>
        <p>${item.value.live.modified[0]}</p>
        <p>${item.value.live.modified[1]}</p>
      </div>
    </div>
  `;
}

function setTab(tabs, active) {
  tabs.value = tabs.value.map((tab) => {
    const selected = tab.title === active.title;
    return { ...tab, selected };
  });
}

function setPanel(title, item) {
  switch (title) {
    case 'Actions':
      return html`<${Actions} item=${item} />`;
    case 'Details':
      return html`<${Details} item=${item} />`;
    default:
      return html`<p>No matching panel.</p>`;
  }
}

function TabButton({ tabs, tab, idx }) {
  const id = `tab-${idx + 1}`;
  const selected = tab.selected === true;
  return html`
    <button
      id=${id}
      class=locui-url-tab-button
      key=${tab.title}
      aria-selected=${selected}
      onClick=${() => setTab(tabs, tab)}>
      ${tab.title}
    </button>`;
}

function TabPanel({ tab, idx, item }) {
  const id = `panel-${idx + 1}`;
  const labeledBy = `tab-${idx + 1}`;
  const selected = tab.selected === true;

  return html`
    <div
      id=${id}
      class=locui-tab-panel
      aria-labelledby=${labeledBy}
      key=${tab.title}
      aria-selected=${selected}
      role="tabpanel">
      ${setPanel(tab.title, item)}
    </div>`;
}

export default function Tabs({ suffix, path }) {
  const tabs = useSignal([
    { title: 'Actions', selected: true },
    { title: 'Details' },
  ]);
  const item = useSignal({ path });
  useEffect(() => { setActions(item); }, [item]);
  return html`
    <div class=locui-tabs>
      <div class=locui-tab-buttons>
        ${tabs.value.map((tab, idx) => html`<${TabButton} tabs=${tabs} tab=${tab} idx=${idx} />`)}
        <span class=locui-tab-buttons-suffix>(${suffix})</span>
      </div>
      <div class=locui-tab-content>
        ${item.value.preview && html`
          ${tabs.value.map((tab, idx) => html`<${TabPanel} tab=${tab} idx=${idx} item=${item} />`)}
        `}
      </div>
    </div>
  `;
}
