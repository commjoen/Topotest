/**
 * @jest-environment jsdom
 */
const fs = require('fs');
const path = require('path');
const vm = require('vm');
const { level8Data, normalizeAnswer } = require('../game');

const root = path.join(__dirname, '..');
const europe = JSON.parse(fs.readFileSync(path.join(root, 'assets/europe.geojson'), 'utf8'));
const gameCode = fs.readFileSync(path.join(root, 'game.js'), 'utf8');
const html = fs.readFileSync(path.join(root, 'index.html'), 'utf8');

describe('Level 8: Noord-Europa', () => {
  test('contains all requested places and waters with distinct types', () => {
    const expected = {
      country: ['IJsland', 'Ierland', 'Verenigd Koninkrijk', 'Noorwegen', 'Denemarken', 'Zweden', 'Finland', 'Estland', 'Letland', 'Litouwen', 'Nederland', 'België'],
      region: ['Engeland', 'Schotland', 'Scandinavië', 'Vlaanderen', 'Wallonië', 'Ardennen'],
      city: ['Dublin', 'Londen', 'Liverpool', 'Glasgow', 'Oslo', 'Stockholm', 'Helsinki', 'Kopenhagen', 'Antwerpen', 'Brussel'],
      river: ['Theems'],
      sea: ['Noordzee', 'Het Kanaal', 'Oostzee']
    };
    Object.entries(expected).forEach(([type, names]) => {
      expect(level8Data.filter(item => item.type === type).map(item => item.name)).toEqual(expect.arrayContaining(names));
    });
    expect(level8Data).toHaveLength(32);
  });

  test('accepts spelling variations without confusing England with the UK', () => {
    [['Belgie', 'België'], ['Scandinavie', 'Scandinavië'], ['Wallonie', 'Wallonië'], ['Thames', 'Theems']].forEach(([answer, name]) => {
      const item = level8Data.find(place => place.name === name);
      expect([item.name, ...(item.aliases || [])].map(normalizeAnswer)).toContain(normalizeAnswer(answer));
    });
    expect(level8Data.find(item => item.name === 'Verenigd Koninkrijk').aliases).not.toContain('Engeland');
  });

  test('offers both desktop and mobile level selection', () => {
    expect(html).toContain('id="level8-btn"');
    expect(html).toContain('selectLevel(8)');
    expect(html).toContain('<option value="8">Level 8: Noord-Europa</option>');
  });
});

describe('Level 8 rendering and gameplay', () => {
  let context;

  beforeEach(() => {
    document.body.innerHTML = html.match(/<body>([\s\S]*)<\/body>/)[1];
    localStorage.clear();
    context = vm.createContext({
      document, localStorage, console, setInterval, clearInterval, setTimeout: jest.fn(),
      fetch: jest.fn().mockResolvedValue({ ok: true, json: async () => europe })
    });
    vm.runInContext(gameCode, context);
  });

  test.each(['loaded GeoJSON', 'offline embedded GeoJSON'])('highlights every target with %s and no d3', async mode => {
    if (mode.startsWith('offline')) context.fetch.mockRejectedValue(new Error('offline'));
    for (let i = 0; i < level8Data.length; i++) {
      document.getElementById('map').innerHTML = '';
      await vm.runInContext(`renderNorthernEurope(level8Data[${i}], document.getElementById('map'), ++mapRenderId)`, context);
      const highlighted = [...document.querySelectorAll('#map .highlighted')];
      expect(highlighted.length).toBe(level8Data[i].name === 'Scandinavië' ? 4 : 1);
      highlighted.forEach(element => expect(element.dataset.region).toBe(level8Data[i].name));
      if (['Engeland', 'Schotland', 'Vlaanderen', 'Wallonië', 'Ardennen'].includes(level8Data[i].name)) {
        expect(highlighted[0].getAttribute('clip-path')).toMatch(/^url\(#northern-region-/);
      }
    }
    expect(document.querySelector('[data-region="IJsland"]').getAttribute('d')).toMatch(/^M/);
  });

  test('selects the level, accepts an alias, and saves scores from older records', () => {
    localStorage.setItem('topotest-highscores', JSON.stringify({ level7: 9 }));
    vm.runInContext('selectLevel(8)', context);
    expect(document.getElementById('level8-btn').classList.contains('active')).toBe(true);
    expect(document.getElementById('level-dropdown').value).toBe('8');
    expect(document.getElementById('high-score').textContent).toBe('0');
    vm.runInContext("gameStarted = true; shuffledData = [level8Data.find(item => item.name === 'Theems')]; currentQuestionIndex = 0", context);
    document.getElementById('answer-input').value = 'Thames';
    vm.runInContext('checkAnswer(); saveHighScore(8, 1)', context);
    expect(document.getElementById('feedback').classList.contains('correct')).toBe(true);
    expect(JSON.parse(localStorage.getItem('topotest-highscores'))).toEqual({ level7: 9, level8: 1 });
  });

  test('does not draw an outdated map after switching levels', async () => {
    let resolveFetch;
    context.fetch.mockReturnValue(new Promise(resolve => { resolveFetch = resolve; }));
    const pending = vm.runInContext("renderNorthernEurope(level8Data[0], document.getElementById('map'), ++mapRenderId)", context);
    vm.runInContext('selectLevel(1)', context);
    resolveFetch({ ok: true, json: async () => europe });
    await pending;
    expect(document.querySelector('#map [data-region="IJsland"]')).toBeNull();
  });
});
