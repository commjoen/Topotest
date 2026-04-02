/**
 * @jest-environment jsdom
 */

// Tests for Level 5: Central and Southern Province Cities, Waters & Landmarks
describe('Level 5 Data', () => {
  let level5Data;

  beforeEach(() => {
    level5Data = [
      { name: "Utrecht", region: "Utrecht", type: "city" },
      { name: "Amersfoort", region: "Utrecht", type: "city" },
      { name: "Bergen op Zoom", region: "Noord-Brabant", type: "city" },
      { name: "Breda", region: "Noord-Brabant", type: "city" },
      { name: "Roosendaal", region: "Noord-Brabant", type: "city" },
      { name: "Tilburg", region: "Noord-Brabant", type: "city" },
      { name: "Oss", region: "Noord-Brabant", type: "city" },
      { name: "'s-Hertogenbosch", region: "Noord-Brabant", type: "city" },
      { name: "Eindhoven", region: "Noord-Brabant", type: "city" },
      { name: "Helmond", region: "Noord-Brabant", type: "city" },
      { name: "Venlo", region: "Limburg", type: "city" },
      { name: "Roermond", region: "Limburg", type: "city" },
      { name: "Maastricht", region: "Limburg", type: "city" },
      { name: "Heerlen", region: "Limburg", type: "city" },
      { name: "Amsterdam-Rijnkanaal", type: "canal" },
      { name: "Maas", type: "river" },
      { name: "Neder-Rijn", type: "river" },
      { name: "Waal", type: "river" },
      { name: "Vaalserberg", type: "mountain" },
      { name: "Biesbosch", type: "nature" }
    ];
  });

  test('Level 5 should include Utrecht province cities', () => {
    const cities = level5Data.filter(item => item.type === 'city');
    const cityNames = cities.map(c => c.name);
    expect(cityNames).toContain('Utrecht');
    expect(cityNames).toContain('Amersfoort');
  });

  test('Level 5 should include all Noord-Brabant cities', () => {
    const cities = level5Data.filter(item => item.type === 'city');
    const cityNames = cities.map(c => c.name);
    expect(cityNames).toContain('Bergen op Zoom');
    expect(cityNames).toContain('Breda');
    expect(cityNames).toContain('Roosendaal');
    expect(cityNames).toContain('Tilburg');
    expect(cityNames).toContain('Oss');
    expect(cityNames).toContain("'s-Hertogenbosch");
    expect(cityNames).toContain('Eindhoven');
    expect(cityNames).toContain('Helmond');
  });

  test('Level 5 should include all Limburg cities', () => {
    const cities = level5Data.filter(item => item.type === 'city');
    const cityNames = cities.map(c => c.name);
    expect(cityNames).toContain('Venlo');
    expect(cityNames).toContain('Roermond');
    expect(cityNames).toContain('Maastricht');
    expect(cityNames).toContain('Heerlen');
  });

  test('Level 5 should include all required waterways', () => {
    const waters = level5Data.filter(item => item.type === 'river' || item.type === 'canal');
    const waterNames = waters.map(w => w.name);
    expect(waterNames).toContain('Amsterdam-Rijnkanaal');
    expect(waterNames).toContain('Maas');
    expect(waterNames).toContain('Neder-Rijn');
    expect(waterNames).toContain('Waal');
  });

  test('Level 5 should include Vaalserberg', () => {
    const mountains = level5Data.filter(item => item.type === 'mountain');
    const mountainNames = mountains.map(m => m.name);
    expect(mountainNames).toContain('Vaalserberg');
  });

  test('Level 5 should include Biesbosch', () => {
    const nature = level5Data.filter(item => item.type === 'nature');
    const natureNames = nature.map(n => n.name);
    expect(natureNames).toContain('Biesbosch');
  });

  test('Level 5 should have 20 total items', () => {
    expect(level5Data).toHaveLength(20);
  });

  test('Level 5 should have 14 cities', () => {
    const cities = level5Data.filter(item => item.type === 'city');
    expect(cities).toHaveLength(14);
  });

  test('Level 5 cities should have correct province assignments', () => {
    const utrechtCities = level5Data.filter(item => item.type === 'city' && item.region === 'Utrecht');
    expect(utrechtCities).toHaveLength(2);

    const brabantCities = level5Data.filter(item => item.type === 'city' && item.region === 'Noord-Brabant');
    expect(brabantCities).toHaveLength(8);

    const limburgCities = level5Data.filter(item => item.type === 'city' && item.region === 'Limburg');
    expect(limburgCities).toHaveLength(4);
  });
});

describe('Level 5 GeoJSON', () => {
  test('GeoJSON file should be valid JSON', () => {
    const fs = require('fs');
    const path = require('path');
    const geojsonPath = path.join(__dirname, '../assets/central_southern_cities.geojson');

    const content = fs.readFileSync(geojsonPath, 'utf8');
    const geojson = JSON.parse(content);

    expect(geojson.type).toBe('FeatureCollection');
    expect(Array.isArray(geojson.features)).toBe(true);
  });

  test('GeoJSON should have 20 features', () => {
    const fs = require('fs');
    const path = require('path');
    const geojsonPath = path.join(__dirname, '../assets/central_southern_cities.geojson');

    const content = fs.readFileSync(geojsonPath, 'utf8');
    const geojson = JSON.parse(content);

    expect(geojson.features).toHaveLength(20);
  });

  test('GeoJSON should include all cities as Points', () => {
    const fs = require('fs');
    const path = require('path');
    const geojsonPath = path.join(__dirname, '../assets/central_southern_cities.geojson');

    const content = fs.readFileSync(geojsonPath, 'utf8');
    const geojson = JSON.parse(content);

    const cities = geojson.features.filter(f => f.properties.type === 'city');
    expect(cities).toHaveLength(14);
    cities.forEach(city => {
      expect(city.geometry.type).toBe('Point');
      expect(city.geometry.coordinates).toHaveLength(2);
    });
  });

  test('GeoJSON should include waterways as LineStrings with sufficient coordinates', () => {
    const fs = require('fs');
    const path = require('path');
    const geojsonPath = path.join(__dirname, '../assets/central_southern_cities.geojson');

    const content = fs.readFileSync(geojsonPath, 'utf8');
    const geojson = JSON.parse(content);

    const maas = geojson.features.find(f => f.properties.name === 'Maas');
    expect(maas).toBeDefined();
    expect(maas.geometry.type).toBe('LineString');
    expect(maas.geometry.coordinates.length).toBeGreaterThan(5);

    const ark = geojson.features.find(f => f.properties.name === 'Amsterdam-Rijnkanaal');
    expect(ark).toBeDefined();
  });

  test('GeoJSON should include Amsterdam-Rijnkanaal as canal', () => {
    const fs = require('fs');
    const path = require('path');
    const geojsonPath = path.join(__dirname, '../assets/central_southern_cities.geojson');

    const content = fs.readFileSync(geojsonPath, 'utf8');
    const geojson = JSON.parse(content);

    const ark = geojson.features.find(f => f.properties.name === 'Amsterdam-Rijnkanaal');
    expect(ark).toBeDefined();
    expect(ark.properties.type).toBe('canal');
    expect(ark.geometry.type).toBe('LineString');
    expect(ark.geometry.coordinates.length).toBeGreaterThan(5);
  });

  test('GeoJSON should include Vaalserberg as mountain Point', () => {
    const fs = require('fs');
    const path = require('path');
    const geojsonPath = path.join(__dirname, '../assets/central_southern_cities.geojson');

    const content = fs.readFileSync(geojsonPath, 'utf8');
    const geojson = JSON.parse(content);

    const vaalserberg = geojson.features.find(f => f.properties.name === 'Vaalserberg');
    expect(vaalserberg).toBeDefined();
    expect(vaalserberg.properties.type).toBe('mountain');
    expect(vaalserberg.geometry.type).toBe('Point');
  });

  test('GeoJSON should include Biesbosch as nature Polygon', () => {
    const fs = require('fs');
    const path = require('path');
    const geojsonPath = path.join(__dirname, '../assets/central_southern_cities.geojson');

    const content = fs.readFileSync(geojsonPath, 'utf8');
    const geojson = JSON.parse(content);

    const biesbosch = geojson.features.find(f => f.properties.name === 'Biesbosch');
    expect(biesbosch).toBeDefined();
    expect(biesbosch.properties.type).toBe('nature');
    expect(biesbosch.geometry.type).toBe('Polygon');
  });

  test('GeoJSON Maastricht should be in Limburg coordinate range', () => {
    const fs = require('fs');
    const path = require('path');
    const geojsonPath = path.join(__dirname, '../assets/central_southern_cities.geojson');

    const content = fs.readFileSync(geojsonPath, 'utf8');
    const geojson = JSON.parse(content);

    const maastricht = geojson.features.find(f => f.properties.name === 'Maastricht');
    expect(maastricht).toBeDefined();
    const [lon, lat] = maastricht.geometry.coordinates;
    // Maastricht is in southern Netherlands
    expect(lat).toBeLessThan(51.0);
    expect(lon).toBeGreaterThan(5.5);
    expect(lon).toBeLessThan(6.5);
  });
});
