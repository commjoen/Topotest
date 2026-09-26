/**
 * @jest-environment jsdom
 */
const fs = require('fs');
const path = require('path');
const { level7Data, normalizeAnswer } = require('../game');

describe('Level 7: Europa Data', () => {
  test('level7Data should be defined and exported', () => {
    expect(level7Data).toBeDefined();
    expect(Array.isArray(level7Data)).toBe(true);
    expect(level7Data.length).toBeGreaterThanOrEqual(30);
  });

  test('should include all required countries', () => {
    const countryNames = level7Data.filter(i => i.type === 'country').map(i => i.name);
    const expectedCountries = [
      'Nederland',
      'België',
      'Luxemburg',
      'Noorwegen',
      'Zweden',
      'Rusland',
      'Verenigd Koninkrijk',
      'Frankrijk',
      'Zwitserland',
      'Oostenrijk',
      'Duitsland',
      'Polen',
      'Italië',
      'Spanje'
    ];
    expectedCountries.forEach(country => {
      expect(countryNames).toContain(country);
    });
  });

  test('should include all required cities', () => {
    const cityNames = level7Data.filter(i => i.type === 'city').map(i => i.name);
    const expectedCities = [
      'Amsterdam',
      'Brussel',
      'Luxemburg',
      'Oslo',
      'Stockholm',
      'Moskou',
      'Londen',
      'Parijs',
      'Bern',
      'Wenen',
      'Berlijn',
      'Warschau',
      'Rome',
      'Madrid'
    ];
    expectedCities.forEach(city => {
      expect(cityNames).toContain(city);
    });
  });

  test('should include all required rivers', () => {
    const riverNames = level7Data.filter(i => i.type === 'river').map(i => i.name);
    const expectedRivers = [
      'Schelde',
      'Volga',
      'Thames',
      'Seine',
      'Rhône',
      'Donau'
    ];
    expectedRivers.forEach(river => {
      expect(riverNames).toContain(river);
    });
  });

  test('should include all required mountain ranges', () => {
    const mountainNames = level7Data.filter(i => i.type === 'mountain').map(i => i.name);
    const expectedMountains = [
      'Oeral',
      'Kaukasus',
      'Alpen',
      'Pyreneeën'
    ];
    expectedMountains.forEach(mountain => {
      expect(mountainNames).toContain(mountain);
    });
  });

  test('should include all required seas and straits', () => {
    const waterNames = level7Data.filter(i => i.type === 'sea' || i.type === 'strait').map(i => i.name);
    const expectedWaters = [
      'Oostzee',
      'Noordzee',
      'Middellandse Zee',
      'Straat van Gibraltar'
    ];
    expectedWaters.forEach(water => {
      expect(waterNames).toContain(water);
    });
  });

  test('should accept aliases and spelling variations from issue description', () => {
    const testCases = [
      { input: 'LKonden', target: 'Londen' },
      { input: 'Wnen', target: 'Wenen' },
      { input: 'Warshau', target: 'Warschau' },
      { input: 'Noorwgen', target: 'Noorwegen' },
      { input: 'Zwitersland', target: 'Zwitserland' },
      { input: 'Oosternrijk', target: 'Oostenrijk' },
      { input: 'Italie', target: 'Italië' },
      { input: 'Belgie', target: 'België' },
      { input: 'Ural', target: 'Oeral' },
      { input: 'Pyrineen', target: 'Pyreneeën' },
      { input: 'Noorzee', target: 'Noordzee' },
      { input: 'middelandse zee', target: 'Middellandse Zee' }
    ];

    testCases.forEach(({ input, target }) => {
      const item = level7Data.find(i => i.name === target);
      expect(item).toBeDefined();
      const inputNorm = normalizeAnswer(input);
      const nameNorm = normalizeAnswer(item.name);
      const matches = (inputNorm === nameNorm) ||
        (item.aliases && item.aliases.some(alias => normalizeAnswer(alias) === inputNorm));
      expect(matches).toBe(true);
    });
  });
});

describe('Level 7 GeoJSON File', () => {
  const geojsonPath = path.join(__dirname, '../assets/europe.geojson');

  test('assets/europe.geojson should exist and be valid JSON', () => {
    expect(fs.existsSync(geojsonPath)).toBe(true);
    const raw = fs.readFileSync(geojsonPath, 'utf8');
    const geojson = JSON.parse(raw);
    expect(geojson.type).toBe('FeatureCollection');
    expect(Array.isArray(geojson.features)).toBe(true);
    expect(geojson.features.length).toBeGreaterThanOrEqual(40);
  });

  test('assets/custom.geo.json should exist as the source dataset', () => {
    const customPath = path.join(__dirname, '../assets/custom.geo.json');
    expect(fs.existsSync(customPath)).toBe(true);
    const raw = fs.readFileSync(customPath, 'utf8');
    const customGeo = JSON.parse(raw);
    expect(customGeo.type).toBe('FeatureCollection');
    expect(customGeo.features.length).toBeGreaterThanOrEqual(30);
  });

  test('should contain features for all required level 7 items', () => {
    const raw = fs.readFileSync(geojsonPath, 'utf8');
    const geojson = JSON.parse(raw);
    const featureNames = geojson.features.map(f => f.properties.name);

    const requiredItems = [
      'Nederland', 'België', 'Luxemburg', 'Noorwegen', 'Zweden', 'Rusland',
      'Verenigd Koninkrijk', 'Frankrijk', 'Zwitserland', 'Oostenrijk',
      'Duitsland', 'Polen', 'Italië', 'Spanje',
      'Amsterdam', 'Brussel', 'Luxemburg', 'Oslo', 'Stockholm', 'Moskou',
      'Londen', 'Parijs', 'Bern', 'Wenen', 'Berlijn', 'Warschau', 'Rome', 'Madrid',
      'Schelde', 'Volga', 'Thames', 'Seine', 'Rhône', 'Donau',
      'Oeral', 'Kaukasus', 'Alpen', 'Pyreneeën',
      'Oostzee', 'Noordzee', 'Middellandse Zee', 'Straat van Gibraltar'
    ];

    requiredItems.forEach(item => {
      expect(featureNames).toContain(item);
    });
  });

  test('feature geometries should be valid and populated', () => {
    const raw = fs.readFileSync(geojsonPath, 'utf8');
    const geojson = JSON.parse(raw);

    geojson.features.forEach(f => {
      expect(f.geometry).toBeDefined();
      expect(f.geometry.coordinates).toBeDefined();
      expect(f.properties).toBeDefined();
      expect(f.properties.name).toBeDefined();
      expect(f.properties.type).toBeDefined();
      if (f.geometry.type === 'Point') {
        expect(f.geometry.coordinates.length).toBe(2);
        expect(typeof f.geometry.coordinates[0]).toBe('number');
        expect(typeof f.geometry.coordinates[1]).toBe('number');
      }
    });
  });
});

describe('Level 7 HTML Interface', () => {
  test('index.html should contain Level 7 button and option', () => {
    const htmlPath = path.join(__dirname, '../index.html');
    const html = fs.readFileSync(htmlPath, 'utf8');

    expect(html).toContain('id="level7-btn"');
    expect(html).toContain('selectLevel(7)');
    expect(html).toContain('<option value="7">Level 7: Europa</option>');
  });
});

describe('Level 7 Embedded GeoJSON and Rendering', () => {
  test('game.js should define EMBEDDED_EUROPE for offline/file:// reliability', () => {
    const gamePath = path.join(__dirname, '../game.js');
    const code = fs.readFileSync(gamePath, 'utf8');

    expect(code).toContain('const EMBEDDED_EUROPE =');
    expect(code).toContain('renderEurope()');
    expect(code).toContain('renderEuropeFallback()');
  });
});
