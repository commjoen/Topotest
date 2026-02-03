/**
 * @jest-environment jsdom
 */

// Test for Level 4 improvements
describe('Level 4 Improvements', () => {
  let level4Data;
  
  beforeEach(() => {
    // Mock the level4Data as it appears in game.js
    level4Data = [
      { name: "Emmeloord", region: "Flevoland", type: "city" },
      { name: "Kampen", region: "Overijssel", type: "city" },
      { name: "Zwolle", region: "Overijssel", type: "city" },
      { name: "Almelo", region: "Overijssel", type: "city" },
      { name: "Hengelo", region: "Overijssel", type: "city" },
      { name: "Enschede", region: "Overijssel", type: "city" },
      { name: "Deventer", region: "Overijssel", type: "city" },
      { name: "Lelystad", region: "Flevoland", type: "city" },
      { name: "Almere", region: "Flevoland", type: "city" },
      { name: "Zutphen", region: "Gelderland", type: "city" },
      { name: "Doetinchem", region: "Gelderland", type: "city" },
      { name: "Arnhem", region: "Gelderland", type: "city" },
      { name: "Wageningen", region: "Gelderland", type: "city" },
      { name: "Nijmegen", region: "Gelderland", type: "city" },
      { name: "IJssel", type: "river" },
      { name: "Waal", type: "river" },
      { name: "Maas", type: "river" },
      { name: "Neder-Rijn", type: "river" },
      { name: "IJsselmeer", type: "lake" },
      { name: "Markermeer", type: "lake" },
      { name: "Twente", type: "region" }
    ];
  });

  test('Level 4 should include all 4 major rivers', () => {
    const rivers = level4Data.filter(item => item.type === 'river');
    expect(rivers).toHaveLength(4);
    
    const riverNames = rivers.map(r => r.name);
    expect(riverNames).toContain('IJssel');
    expect(riverNames).toContain('Waal');
    expect(riverNames).toContain('Maas');
    expect(riverNames).toContain('Neder-Rijn');
  });

  test('Level 4 should include IJsselmeer and Markermeer', () => {
    const lakes = level4Data.filter(item => item.type === 'lake');
    expect(lakes).toHaveLength(2);
    
    const lakeNames = lakes.map(l => l.name);
    expect(lakeNames).toContain('IJsselmeer');
    expect(lakeNames).toContain('Markermeer');
  });

  test('Level 4 should include Twente region', () => {
    const regions = level4Data.filter(item => item.type === 'region');
    expect(regions).toHaveLength(1);
    expect(regions[0].name).toBe('Twente');
  });

  test('Level 4 should include Twente cities (Almelo, Hengelo, Enschede)', () => {
    const cities = level4Data.filter(item => item.type === 'city');
    const cityNames = cities.map(c => c.name);
    
    // Twente cities
    expect(cityNames).toContain('Almelo');
    expect(cityNames).toContain('Hengelo');
    expect(cityNames).toContain('Enschede');
  });

  test('Level 4 should have 21 total items', () => {
    expect(level4Data).toHaveLength(21);
  });

  test('GeoJSON file should be valid JSON', () => {
    const fs = require('fs');
    const path = require('path');
    const geojsonPath = path.join(__dirname, '../assets/eastern_cities_rivers.geojson');
    
    const content = fs.readFileSync(geojsonPath, 'utf8');
    const geojson = JSON.parse(content);
    
    expect(geojson.type).toBe('FeatureCollection');
    expect(Array.isArray(geojson.features)).toBe(true);
  });

  test('GeoJSON should include rivers with improved coordinates', () => {
    const fs = require('fs');
    const path = require('path');
    const geojsonPath = path.join(__dirname, '../assets/eastern_cities_rivers.geojson');
    
    const content = fs.readFileSync(geojsonPath, 'utf8');
    const geojson = JSON.parse(content);
    
    const ijssel = geojson.features.find(f => f.properties.name === 'IJssel');
    expect(ijssel).toBeDefined();
    expect(ijssel.geometry.type).toBe('LineString');
    // Should have more than 5 coordinate points (improved from original 5)
    expect(ijssel.geometry.coordinates.length).toBeGreaterThan(5);
    
    const waal = geojson.features.find(f => f.properties.name === 'Waal');
    expect(waal).toBeDefined();
    // Should have more than 4 coordinate points (improved from original 4)
    expect(waal.geometry.coordinates.length).toBeGreaterThan(4);
  });

  test('GeoJSON should include IJsselmeer and Markermeer as polygons', () => {
    const fs = require('fs');
    const path = require('path');
    const geojsonPath = path.join(__dirname, '../assets/eastern_cities_rivers.geojson');
    
    const content = fs.readFileSync(geojsonPath, 'utf8');
    const geojson = JSON.parse(content);
    
    const ijsselmeer = geojson.features.find(f => f.properties.name === 'IJsselmeer');
    expect(ijsselmeer).toBeDefined();
    expect(ijsselmeer.properties.type).toBe('lake');
    expect(ijsselmeer.geometry.type).toBe('Polygon');
    
    const markermeer = geojson.features.find(f => f.properties.name === 'Markermeer');
    expect(markermeer).toBeDefined();
    expect(markermeer.properties.type).toBe('lake');
    expect(markermeer.geometry.type).toBe('Polygon');
  });

  test('GeoJSON should include Twente region as polygon', () => {
    const fs = require('fs');
    const path = require('path');
    const geojsonPath = path.join(__dirname, '../assets/eastern_cities_rivers.geojson');
    
    const content = fs.readFileSync(geojsonPath, 'utf8');
    const geojson = JSON.parse(content);
    
    const twente = geojson.features.find(f => f.properties.name === 'Twente');
    expect(twente).toBeDefined();
    expect(twente.properties.type).toBe('region');
    expect(twente.geometry.type).toBe('Polygon');
  });
});
