const fs = require('fs');
const path = require('path');
const vm = require('vm');
const { JSDOM } = require('jsdom');

function loadPonerBandera(dom) {
  const code = fs.readFileSync(path.resolve(__dirname, '../js/tarea5.js'), 'utf8');
  const context = { window: dom.window, document: dom.window.document };
  vm.createContext(context);
  vm.runInContext(code, context);
  return context.ponerBandera;
}

describe('ponerBandera', () => {
  let dom;
  let ponerBandera;

  beforeEach(() => {
    dom = new JSDOM(`
      <select id="listaBanderas">
        <option value="Guatemala">Guatemala</option>
        <option value="India">India</option>
        <option value="Bajos">Bajos</option>
        <option value="Francia">Francia</option>
        <option value="Suecia">Suecia</option>
        <option value="Suiza">Suiza</option>
      </select>
      <article id="ejercicio1"></article>
      <article id="ejercicio2"></article>
      <article id="ejercicio3"></article>
      <article id="ejercicio4"></article>
      <article id="ejercicio5"></article>
      <article id="ejercicio6"></article>
    `);
    ponerBandera = loadPonerBandera(dom);
  });

  function getDisplays(document) {
    return [1,2,3,4,5,6].map(i => document.getElementById(`ejercicio${i}`).style.display);
  }

  test('shows Guatemala section only', () => {
    const { document } = dom.window;
    document.getElementById('listaBanderas').value = 'Guatemala';
    ponerBandera();
    expect(getDisplays(document)).toEqual(['block','none','none','none','none','none']);
  });

  test('shows India section only', () => {
    const { document } = dom.window;
    document.getElementById('listaBanderas').value = 'India';
    ponerBandera();
    expect(getDisplays(document)).toEqual(['none','block','none','none','none','none']);
  });
});
