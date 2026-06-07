/**
 * @jest-environment jsdom
 */
const fs = require('fs');
const path = require('path');

describe('Level 6 Data', () => {
  let level6Data;

  beforeEach(() => {
    level6Data = [
      { name: "Texel", region: "Noord-Holland", type: "island" },
      { name: "Den Helder", region: "Noord-Holland", type: "city" },
      { name: "Alkmaar", region: "Noord-Holland", type: "city" },
      { name: "Purmerend", region: "Noord-Holland", type: "city" },
      { name: "Amsterdam", region: "Noord-Holland", type: "city" },
      { name: "Amstelveen", region: "Noord-Holland", type: "city" },
      { name: "Zaandam", region: "Noord-Holland", type: "city" },
      { name: "Haarlem", region: "Noord-Holland", type: "city" },
      { name: "Hilversum", region: "Noord-Holland", type: "city" },
      { name: "Enkhuizen", region: "Noord-Holland", type: "city" },
      { name: "Schiphol", region: "Noord-Holland", type: "airport" },
      { name: "Leiden", region: "Zuid-Holland", type: "city" },
      { name: "Alphen aan de Rijn", region: "Zuid-Holland", type: "city" },
      { name: "Den Haag", region: "Zuid-Holland", type: "city" },
      { name: "Delft", region: "Zuid-Holland", type: "city" },
      { name: "Gouda", region: "Zuid-Holland", type: "city" },
      { name: "Dordrecht", region: "Zuid-Holland", type: "city" },
      { name: "Rotterdam", region: "Zuid-Holland", type: "city" },
      { name: "Zoetermeer", region: "Zuid-Holland", type: "city" },
      { name: "Terneuzen", region: "Zeeland", type: "city" },
      { name: "Vlissingen", region: "Zeeland", type: "city" },
      { name: "Middelburg", region: "Zeeland", type: "city" }
    ];
  });

  test('Level 6 should include all Noord-Holland places', () => {
    const names = level6Data.map(item => item.name);
    expect(names).toEqual(expect.arrayContaining([
      'Texel',
      'Den Helder',
      'Alkmaar',
      'Purmerend',
      'Amsterdam',
      'Amstelveen',
      'Zaandam',
      'Haarlem',
      'Hilversum',
      'Enkhuizen',
      'Schiphol'
    ]));
  });

  test('Level 6 should include all Zuid-Holland cities', () => {
    const names = level6Data.map(item => item.name);
    expect(names).toEqual(expect.arrayContaining([
      'Leiden',
      'Alphen aan de Rijn',
      'Den Haag',
      'Delft',
      'Gouda',
      'Dordrecht',
      'Rotterdam',
      'Zoetermeer'
    ]));
  });

  test('Level 6 should include Zeeland cities', () => {
    const names = level6Data.map(item => item.name);
    expect(names).toEqual(expect.arrayContaining([
      'Terneuzen',
      'Vlissingen',
      'Middelburg'
    ]));
  });

  test('Level 6 should have 22 total items', () => {
    expect(level6Data).toHaveLength(22);
  });

  test('Level 6 should have correct city distribution', () => {
    const noordHollandCities = level6Data.filter(item => item.type === 'city' && item.region === 'Noord-Holland');
    expect(noordHollandCities).toHaveLength(9);

    const zuidHollandCities = level6Data.filter(item => item.type === 'city' && item.region === 'Zuid-Holland');
    expect(zuidHollandCities).toHaveLength(8);

    const zeelandCities = level6Data.filter(item => item.type === 'city' && item.region === 'Zeeland');
    expect(zeelandCities).toHaveLength(3);
  });

  test('Level 6 should not include water feature questions by default', () => {
    const waterTypes = new Set(['lake', 'river', 'estuary', 'waterway', 'canal', 'dam']);
    const waters = level6Data.filter(item => waterTypes.has(item.type));
    expect(waters).toHaveLength(0);
  });
});

describe('Level 6 GeoJSON', () => {
  test('GeoJSON file should be valid JSON', () => {
    const geojsonPath = path.join(__dirname, '../assets/western_cities_waters.geojson');

    const content = fs.readFileSync(geojsonPath, 'utf8');
    const geojson = JSON.parse(content);

    expect(geojson.type).toBe('FeatureCollection');
    expect(Array.isArray(geojson.features)).toBe(true);
  });

  test('GeoJSON should have 32 features', () => {
    const geojsonPath = path.join(__dirname, '../assets/western_cities_waters.geojson');

    const content = fs.readFileSync(geojsonPath, 'utf8');
    const geojson = JSON.parse(content);

    expect(geojson.features).toHaveLength(32);
  });

  test('GeoJSON should include all cities as points', () => {
    const geojsonPath = path.join(__dirname, '../assets/western_cities_waters.geojson');

    const content = fs.readFileSync(geojsonPath, 'utf8');
    const geojson = JSON.parse(content);

    const cities = geojson.features.filter(f => f.properties.type === 'city');
    expect(cities).toHaveLength(20);
    cities.forEach(city => {
      expect(city.geometry.type).toBe('Point');
      expect(city.geometry.coordinates).toHaveLength(2);
    });
  });

  test('GeoJSON should include Schiphol as an airport point', () => {
    const geojsonPath = path.join(__dirname, '../assets/western_cities_waters.geojson');

    const content = fs.readFileSync(geojsonPath, 'utf8');
    const geojson = JSON.parse(content);

    const schiphol = geojson.features.find(f => f.properties.name === 'Schiphol');
    expect(schiphol).toBeDefined();
    expect(schiphol.properties.type).toBe('airport');
    expect(schiphol.geometry.type).toBe('Point');
  });

  test('GeoJSON should include Texel as an island polygon', () => {
    const geojsonPath = path.join(__dirname, '../assets/western_cities_waters.geojson');

    const content = fs.readFileSync(geojsonPath, 'utf8');
    const geojson = JSON.parse(content);

    const texel = geojson.features.find(f => f.properties.name === 'Texel');
    expect(texel).toBeDefined();
    expect(texel.properties.type).toBe('island');
    expect(texel.geometry.type).toBe('Polygon');
  });

  test('GeoJSON should include line features for Afsluitdijk and Zuid-Holland waters', () => {
    const geojsonPath = path.join(__dirname, '../assets/western_cities_waters.geojson');

    const content = fs.readFileSync(geojsonPath, 'utf8');
    const geojson = JSON.parse(content);

    const afsluitdijk = geojson.features.find(f => f.properties.name === 'Afsluitdijk');
    expect(afsluitdijk).toBeDefined();
    expect(afsluitdijk.geometry.type).toBe('LineString');
    expect(afsluitdijk.geometry.coordinates.length).toBeGreaterThan(2);

    const nieuweWaterweg = geojson.features.find(f => f.properties.name === 'Nieuwe Waterweg');
    expect(nieuweWaterweg).toBeDefined();
    expect(nieuweWaterweg.geometry.type).toBe('LineString');

    const lek = geojson.features.find(f => f.properties.name === 'Lek');
    expect(lek).toBeDefined();
    expect(lek.geometry.type).toBe('LineString');
  });

  test('GeoJSON should include water polygons for lakes and estuaries', () => {
    const geojsonPath = path.join(__dirname, '../assets/western_cities_waters.geojson');

    const content = fs.readFileSync(geojsonPath, 'utf8');
    const geojson = JSON.parse(content);

    ['IJsselmeer', 'Markermeer', 'Haarlemmermeer', 'Rijnmond', 'Oosterschelde', 'Westerschelde'].forEach(name => {
      const feature = geojson.features.find(f => f.properties.name === name);
      expect(feature).toBeDefined();
      expect(feature.geometry.type).toBe('Polygon');
    });
  });

  describe('Level 6 Rendering Style', () => {
    test('Level 6 renderer should apply dedicated class in both d3 and fallback paths', () => {
      const gameJsPath = path.join(__dirname, '../game.js');
      const source = fs.readFileSync(gameJsPath, 'utf8');

      const classAssignment = "map-waterbody map-waterbody-level6";
      const assignmentCount = source.split(classAssignment).length - 1;
      expect(assignmentCount).toBe(2);

      expect(source).toMatch(/renderWesternCitiesAndWatersFallback[\s\S]*map-waterbody map-waterbody-level6/);
      expect(source).toMatch(/renderWesternCitiesAndWaters[\s\S]*map-waterbody map-waterbody-level6/);
    });

    test('Level 6 d3 projection should fit provinces together with level data GeoJSON', () => {
      const gameJsPath = path.join(__dirname, '../game.js');
      const source = fs.readFileSync(gameJsPath, 'utf8');

      expect(source).toContain('const projectionFeatures = dataGeo');
      expect(source).toContain('? (LEVEL6_INCLUDE_WATER');
      expect(source).toContain(": dataGeo.features.filter(feat => !LEVEL6_WATER_TYPES.has(feat.properties?.type)))");
      expect(source).toContain('features: [...westernProvincesGeo.features, ...projectionFeatures]');
      expect(source).toMatch(/fitSize\(\[width, height\], projectionGeo\)/);
    });

    test('Level 6 water body class should override blend mode', () => {
      const cssPath = path.join(__dirname, '../style.css');
      const source = fs.readFileSync(cssPath, 'utf8');

      expect(source).toMatch(/\.map-waterbody-level6\s*\{[^}]*mix-blend-mode:\s*normal;[^}]*\}/);
    });
  });
});
