Topotest — local development

This is a small static web app (HTML/CSS/JS) that draws a Netherlands map and runs a geography quiz.

Why serve over HTTP
-------------------
Modern browsers block fetch requests to local files when the page is opened via file://. To let the app fetch `assets/provinces.geojson` from the `assets/` folder, serve the project over HTTP.

Quick local server (Python 3)
-----------------------------
Run from the project root (`/Users/razr/workspace/Topotest`):

```bash
# from the project folder
python3 -m http.server 8000
# then open http://localhost:8000 in your browser
```

Alternatives
------------
- Embed GeoJSON into `game.js`: safer for offline usage, but increases the JS bundle size.
- Overwrite `assets/provinces.geojson` with a detailed FeatureCollection: if you want full realistic shapes in the repo, I can add the detailed GeoJSON file (it will be large).

What to test
------------
1. Start the local server above.
2. Open http://localhost:8000 in a browser.
3. Start the game and confirm the map loads.
4. Confirm the marked (target) province fills black and its label is white.

If anything breaks or you want me to write the full detailed GeoJSON into `assets/provinces.geojson` or embed it into `game.js`, tell me which option you prefer and I'll do it.
# Topotest
Een educatief topografie spel voor kinderen om de Nederlandse geografie te leren.

## Beschrijving
Topotest is een interactief spel waarbij kinderen de Nederlandse topografie leren door naar een kaart te kijken en de namen van gemarkeerde gebieden in te voeren.

## Levels

### Level 1: Provincies & Hoofdsteden
In dit level leren kinderen de namen van de 12 Nederlandse provincies en hun hoofdsteden:
- Groningen (Groningen)
- Friesland (Leeuwarden)
- Drenthe (Assen)
- Overijssel (Zwolle)
- Flevoland (Lelystad)
- Gelderland (Arnhem)
- Utrecht (Utrecht)
- Noord-Holland (Haarlem)
- Zuid-Holland (Den Haag)
- Zeeland (Middelburg)
- Noord-Brabant (Den Bosch)
- Limburg (Maastricht)

### Level 2: Wateren
In dit level leren kinderen de namen van belangrijke Nederlandse wateren:
- IJssel
- Maas
- Waal
- Neder-Rijn
- Amsterdam-Rijnkanaal
- Waddenzee
- Oosterschelde
- Westerschelde
- IJsselmeer
- Markermeer
- Nieuwe Waterweg
- Lek

## Hoe te gebruiken
1. Open `index.html` in een webbrowser
2. Kies een level (Level 1 of Level 2)
3. Klik op "Start Spel"
4. Bekijk de gemarkeerde regio op de kaart
5. Voer de naam in van de gemarkeerde regio
6. Klik op "Controleer" of druk op Enter
7. Krijg feedback en ga door naar de volgende vraag

## Features
- Twee levels met verschillende moeilijkheidsgraden
- Interactieve kaart met gemarkeerde gebieden
- **Geografisch accurate kaart van Nederland** met realistische provincie- en waterlichaamvormen
- **Overlay highlighting** voor de gevraagde regio's en steden
- Score tracking
- Direct feedback op antwoorden
- Responsief ontwerp voor verschillende schermformaten
- **Automatische deployment naar GitHub Pages**

## Technologie
- HTML5
- CSS3
- Vanilla JavaScript (geen frameworks vereist)

## Installatie
Geen installatie nodig! Open gewoon `index.html` in een moderne webbrowser.

## Deployment
De applicatie wordt automatisch gedeployed naar GitHub Pages bij elke push naar de main branch. Je kunt het spel spelen op: `https://[username].github.io/Topotest/`

Om GitHub Pages in te schakelen:
1. Ga naar de repository Settings
2. Navigeer naar Pages onder de Code and automation sectie
3. Selecteer "GitHub Actions" als bron
4. De workflow in `.github/workflows/deploy.yml` zorgt voor automatische deployment
