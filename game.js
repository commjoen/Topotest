// Game data for Level 1: Dutch Provinces and Capitals
const level1Data = [
    { name: "Groningen", capital: "Groningen", type: "province" },
    { name: "Friesland", capital: "Leeuwarden", type: "province" },
    { name: "Drenthe", capital: "Assen", type: "province" },
    { name: "Overijssel", capital: "Zwolle", type: "province" },
    { name: "Flevoland", capital: "Lelystad", type: "province" },
    { name: "Gelderland", capital: "Arnhem", type: "province" },
    { name: "Utrecht", capital: "Utrecht", type: "province" },
    { name: "Noord-Holland", capital: "Haarlem", type: "province" },
    { name: "Zuid-Holland", capital: "Den Haag", type: "province" },
    { name: "Zeeland", capital: "Middelburg", type: "province" },
    { name: "Noord-Brabant", capital: "'s-Hertogenbosch", type: "province" },
    { name: "Limburg", capital: "Maastricht", type: "province" }
];

// Game data for Level 2: Waterways
const level2Data = [
    { name: "IJssel", type: "river" },
    { name: "Maas", type: "river" },
    { name: "Waal", type: "river" },
    { name: "Neder-Rijn", type: "river" },
    { name: "Amsterdam-Rijnkanaal", type: "canal" },
    { name: "Waddenzee", type: "sea" },
    { name: "Oosterschelde", type: "estuary" },
    { name: "Westerschelde", type: "estuary" },
    { name: "IJsselmeer", type: "lake" },
    { name: "Markermeer", type: "lake" },
    { name: "Nieuwe Waterweg", type: "waterway" },
    { name: "Lek", type: "river" },
    { name: "Noordzeekanaal", type: "canal" }
];

// Game data for Level 3: Cities of Northern Provinces
const level3Data = [
    { name: "Leeuwarden", province: "Friesland", type: "city" },
    { name: "Sneek", province: "Friesland", type: "city" },
    { name: "Heerenveen", province: "Friesland", type: "city" },
    { name: "Drachten", province: "Friesland", type: "city" },
    { name: "Groningen", province: "Groningen", type: "city" },
    { name: "Delfzijl", province: "Groningen", type: "city" },
    { name: "Veendam", province: "Groningen", type: "city" },
    { name: "Assen", province: "Drenthe", type: "city" },
    { name: "Meppel", province: "Drenthe", type: "city" },
    { name: "Hoogeveen", province: "Drenthe", type: "city" },
    { name: "Emmen", province: "Drenthe", type: "city" }
];

// Game data for Level 4: Eastern Province Cities & Rivers
const level4Data = [
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
    { name: "Apeldoorn", region: "Gelderland", type: "city" },
    { name: "IJssel", type: "river" },
    { name: "Waal", type: "river" },
    { name: "Maas", type: "river" },
    { name: "Neder-Rijn", type: "river" },
    { name: "IJsselmeer", type: "lake" },
    { name: "Markermeer", type: "lake" },
    { name: "Twente", type: "region" },
    { name: "Veluwe", type: "region" }
];

// Game data for Level 5: Central and Southern Province Cities, Waters & Landmarks
const level5Data = [
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

// Game data for Level 6: Western Province Cities, Waters & Landmarks
const LEVEL6_WATER_TYPES = new Set(['lake', 'river', 'estuary', 'waterway', 'canal', 'dam']);
const LEVEL6_INCLUDE_WATER = true;
const LEVEL6_TEXEL_Y_OFFSET = -32;
const LEVEL6_FEATURE_TRANSFORMS = {
    'Texel': { x: 0, y: LEVEL6_TEXEL_Y_OFFSET, sx: 1, sy: 1 },
    'IJsselmeer': { x: 30, y: -8, sx: 0.62, sy: 0.84 },
    'Markermeer': { x: 38, y: -6, sx: 0.44, sy: 0.8 },
    'Afsluitdijk': { x: 22, y: -10, sx: 0.78, sy: 1 },
    'Haarlemmermeer': { x: 18, y: 10, sx: 0.7, sy: 0.76 },
    'Rijnmond': { x: -18, y: 18, sx: 0.84, sy: 0.88 }
};

const LEVEL6_CITY_OFFSETS = {
    'Enkhuizen': { x: -24, y: -8 },
    'Purmerend': { x: -12, y: -8 }
};

function getLevel6FeatureTransform(name) {
    return LEVEL6_FEATURE_TRANSFORMS[name] || { x: 0, y: 0, sx: 1, sy: 1 };
}

function getLevel6CityOffset(name) {
    return LEVEL6_CITY_OFFSETS[name] || { x: 0, y: 0 };
}

function transformLevel6ProjectedPoints(points, name) {
    const transform = getLevel6FeatureTransform(name);
    if (!points || points.length === 0) return points;

    const cx = points.reduce((sum, point) => sum + point[0], 0) / points.length;
    const cy = points.reduce((sum, point) => sum + point[1], 0) / points.length;

    return points.map(([x, y]) => {
        const tx = cx + (x - cx) * transform.sx + transform.x;
        const ty = cy + (y - cy) * transform.sy + transform.y;
        return [tx, ty];
    });
}

const level6AllData = [
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
    { name: "IJsselmeer", type: "lake" },
    { name: "Markermeer", type: "lake" },
    { name: "Afsluitdijk", type: "dam" },
    { name: "Noordzeekanaal", type: "canal" },
    { name: "Haarlemmermeer", type: "lake" },
    { name: "Schiphol", region: "Noord-Holland", type: "airport" },
    { name: "Leiden", region: "Zuid-Holland", type: "city" },
    { name: "Alphen aan de Rijn", region: "Zuid-Holland", type: "city" },
    { name: "Den Haag", region: "Zuid-Holland", type: "city" },
    { name: "Delft", region: "Zuid-Holland", type: "city" },
    { name: "Gouda", region: "Zuid-Holland", type: "city" },
    { name: "Dordrecht", region: "Zuid-Holland", type: "city" },
    { name: "Rotterdam", region: "Zuid-Holland", type: "city" },
    { name: "Zoetermeer", region: "Zuid-Holland", type: "city" },
    { name: "Nieuwe Waterweg", type: "waterway" },
    { name: "Lek", type: "river" },
    { name: "Rijnmond", type: "estuary" },
    { name: "Terneuzen", region: "Zeeland", type: "city" },
    { name: "Vlissingen", region: "Zeeland", type: "city" },
    { name: "Middelburg", region: "Zeeland", type: "city" },
    { name: "Oosterschelde", type: "estuary" },
    { name: "Westerschelde", type: "estuary" }
];
const level6Data = LEVEL6_INCLUDE_WATER
    ? level6AllData
    : level6AllData.filter(item => !LEVEL6_WATER_TYPES.has(item.type));

// Game data for Level 7: Europa
const level7Data = [
    // Landen
    { name: "Nederland", type: "country", aliases: ["Holland", "The Netherlands"] },
    { name: "België", type: "country", aliases: ["Belgie", "Belgium"] },
    { name: "Luxemburg", type: "country", aliases: ["Luxembourg"] },
    { name: "Noorwegen", type: "country", aliases: ["Noorwgen", "Norway"] },
    { name: "Zweden", type: "country", aliases: ["Sweden"] },
    { name: "Rusland", type: "country", aliases: ["Russia", "Russische Federatie"] },
    { name: "Verenigd Koninkrijk", type: "country", aliases: ["VK", "UK", "Groot-Brittannië", "Groot-Brittannie", "Engeland", "United Kingdom", "Great Britain"] },
    { name: "Frankrijk", type: "country", aliases: ["France"] },
    { name: "Zwitserland", type: "country", aliases: ["Zwitersland", "Switzerland", "Zwitserlan"] },
    { name: "Oostenrijk", type: "country", aliases: ["Oosternrijk", "Austria"] },
    { name: "Duitsland", type: "country", aliases: ["Germany", "Bondsrepubliek Duitsland"] },
    { name: "Polen", type: "country", aliases: ["Poland"] },
    { name: "Italië", type: "country", aliases: ["Italie", "Italy"] },
    { name: "Spanje", type: "country", aliases: ["Spain"] },

    // Steden
    { name: "Amsterdam", region: "Nederland", type: "city" },
    { name: "Brussel", region: "België", type: "city", aliases: ["Brussels", "Bruxelles"] },
    { name: "Luxemburg", region: "Luxemburg", type: "city", aliases: ["Luxembourg", "Luxemburg-Stad", "Luxembourg City"] },
    { name: "Oslo", region: "Noorwegen", type: "city" },
    { name: "Stockholm", region: "Zweden", type: "city" },
    { name: "Moskou", region: "Rusland", type: "city", aliases: ["Moscow", "Moskva"] },
    { name: "Londen", region: "Verenigd Koninkrijk", type: "city", aliases: ["London", "LKonden"] },
    { name: "Parijs", region: "Frankrijk", type: "city", aliases: ["Paris"] },
    { name: "Bern", region: "Zwitserland", type: "city" },
    { name: "Wenen", region: "Oostenrijk", type: "city", aliases: ["Vienna", "Wnen"] },
    { name: "Berlijn", region: "Duitsland", type: "city", aliases: ["Berlin"] },
    { name: "Warschau", region: "Polen", type: "city", aliases: ["Warsaw", "Warshau"] },
    { name: "Rome", region: "Italië", type: "city", aliases: ["Roma"] },
    { name: "Madrid", region: "Spanje", type: "city" },

    // Rivieren
    { name: "Schelde", type: "river", aliases: ["Scheldt", "Escaut"] },
    { name: "Volga", type: "river", aliases: ["Wolga"] },
    { name: "Thames", type: "river", aliases: ["Theems"] },
    { name: "Seine", type: "river" },
    { name: "Rhône", type: "river", aliases: ["Rhone"] },
    { name: "Donau", type: "river", aliases: ["Danube"] },

    // Gebergten
    { name: "Oeral", type: "mountain", aliases: ["Ural", "Oeralgebergte", "Ural Mountains", "Uralgebergte"] },
    { name: "Kaukasus", type: "mountain", aliases: ["Caucasus", "Kaukasusgebergte", "Caucasus Mountains"] },
    { name: "Alpen", type: "mountain", aliases: ["Alps"] },
    { name: "Pyreneeën", type: "mountain", aliases: ["Pyreneeen", "Pyrineen", "Pyrenees"] },

    // Zeeën & Zeestraten
    { name: "Oostzee", type: "sea", aliases: ["Baltische Zee", "Baltic Sea"] },
    { name: "Noordzee", type: "sea", aliases: ["Noorzee", "North Sea"] },
    { name: "Middellandse Zee", type: "sea", aliases: ["Middelandse zee", "Middellandsezee", "Mediterranean Sea", "Middellandse"] },
    { name: "Straat van Gibraltar", type: "strait", aliases: ["Gibraltar", "Straat Gibraltar", "Strait of Gibraltar"] }
];

// Game state
let currentLevel = 1;
let currentQuestionIndex = 0;
let score = 0;
let gameStarted = false;
let currentData = [];
let shuffledData = [];
let askedQuestions = [];
let timerEnabled = false;
let timerInterval = null;
let timerSeconds = 0;
let questionLimit = 'all';

// LocalStorage functions for high scores
function getHighScores() {
    try {
        const scores = localStorage.getItem('topotest-highscores');
        return scores ? JSON.parse(scores) : { level1: 0, level2: 0, level3: 0, level4: 0, level5: 0, level6: 0, level7: 0 };
    } catch (e) {
        return { level1: 0, level2: 0, level3: 0, level4: 0, level5: 0, level6: 0, level7: 0 };
    }
}

function saveHighScore(level, score) {
    try {
        const scores = getHighScores();
        const key = `level${level}`;
        if (score > scores[key]) {
            scores[key] = score;
            localStorage.setItem('topotest-highscores', JSON.stringify(scores));
            return true; // New high score!
        }
        return false;
    } catch (e) {
        return false;
    }
}

function displayHighScore() {
    const scores = getHighScores();
    const highScore = scores[`level${currentLevel}`];
    const highScoreElement = document.getElementById('high-score');
    if (highScoreElement) {
        highScoreElement.textContent = highScore;
    }
}

// LocalStorage functions for question limit
function getQuestionLimit() {
    try {
        const limit = localStorage.getItem('topotest-question-limit');
        return limit !== null ? limit : 'all';
    } catch (e) {
        return 'all';
    }
}

function saveQuestionLimit(limit) {
    try {
        localStorage.setItem('topotest-question-limit', limit);
    } catch (e) {
        // Ignore errors
    }
}

function validateQuestionLimit(value) {
    // Allow "all" or positive integers
    if (value.toLowerCase() === 'all') {
        return 'all';
    }
    const num = parseInt(value, 10);
    if (!isNaN(num) && num > 0) {
        return String(num);
    }
    // Invalid input, return default
    return 'all';
}

// SVG map paths for provinces (geographically accurate shapes based on real Netherlands geography)
const provincePaths = {
    "Groningen": "M 545,20 L 560,18 L 580,17 L 600,18 L 620,20 L 638,24 L 652,30 L 665,38 L 675,48 L 682,60 L 686,72 L 686,84 L 682,96 L 674,106 L 663,114 L 650,119 L 635,121 L 620,120 L 605,116 L 592,112 L 580,110 L 568,112 L 558,117 L 550,123 L 544,127 L 540,125 L 538,118 L 536,108 L 535,96 L 535,84 L 536,72 L 538,60 L 540,48 L 542,36 L 544,28 Z",
    "Friesland": "M 245,32 L 260,28 L 278,26 L 295,26 L 312,28 L 330,31 L 348,35 L 366,40 L 384,45 L 402,50 L 420,56 L 438,62 L 456,68 L 474,75 L 490,82 L 505,90 L 518,98 L 528,106 L 534,114 L 536,122 L 534,130 L 528,136 L 520,140 L 510,142 L 498,142 L 486,140 L 474,136 L 462,132 L 450,128 L 438,123 L 426,118 L 414,113 L 402,108 L 390,103 L 378,98 L 366,93 L 354,88 L 342,83 L 330,78 L 318,73 L 306,68 L 294,63 L 282,58 L 270,53 L 258,48 L 248,43 L 242,38 L 240,35 Z",
    "Drenthe": "M 538,128 L 548,130 L 560,134 L 572,139 L 584,145 L 596,152 L 607,160 L 617,169 L 625,179 L 631,190 L 634,202 L 634,214 L 631,226 L 625,236 L 617,244 L 607,250 L 595,254 L 583,256 L 571,256 L 559,254 L 548,250 L 539,244 L 532,236 L 527,226 L 524,214 L 523,202 L 524,190 L 527,179 L 532,169 L 538,160 L 543,152 L 545,145 L 542,138 L 540,133 Z",
    "Overijssel": "M 488,108 L 502,111 L 516,116 L 530,122 L 542,130 L 552,139 L 560,149 L 566,160 L 571,172 L 574,185 L 575,198 L 574,211 L 571,224 L 566,236 L 559,247 L 550,257 L 539,265 L 527,271 L 514,275 L 501,277 L 488,277 L 476,275 L 465,271 L 456,265 L 448,257 L 442,247 L 438,236 L 435,224 L 434,211 L 435,198 L 438,185 L 442,172 L 448,160 L 456,149 L 465,139 L 476,130 L 484,122 L 488,116 Z",
    "Flevoland": "M 355,142 L 368,138 L 382,136 L 396,136 L 410,138 L 423,142 L 435,148 L 445,156 L 453,166 L 459,177 L 463,189 L 464,202 L 463,215 L 459,227 L 453,238 L 445,247 L 435,254 L 423,259 L 410,262 L 396,263 L 382,262 L 368,259 L 356,254 L 346,247 L 338,238 L 332,227 L 328,215 L 327,202 L 328,189 L 332,177 L 338,166 L 346,156 L 352,149 Z",
    "Gelderland": "M 468,216 L 485,219 L 502,224 L 519,230 L 536,238 L 552,247 L 567,258 L 580,270 L 592,284 L 602,299 L 610,315 L 616,332 L 620,350 L 621,368 L 620,386 L 616,403 L 610,419 L 602,434 L 592,447 L 580,459 L 567,469 L 552,477 L 536,483 L 519,487 L 502,489 L 485,489 L 470,487 L 456,483 L 444,477 L 434,469 L 426,459 L 420,447 L 416,434 L 414,419 L 414,403 L 416,386 L 420,368 L 426,350 L 434,332 L 444,315 L 456,299 L 468,284 L 478,270 L 485,258 L 489,247 L 490,238 L 487,230 L 482,224 L 475,220 Z",
    "Utrecht": "M 338,220 L 352,218 L 366,218 L 380,220 L 394,224 L 407,230 L 419,238 L 429,248 L 437,260 L 443,273 L 447,287 L 448,302 L 447,317 L 443,331 L 437,343 L 429,354 L 419,363 L 407,370 L 394,375 L 380,378 L 366,379 L 352,378 L 340,375 L 329,370 L 320,363 L 313,354 L 308,343 L 305,331 L 304,317 L 305,302 L 308,287 L 313,273 L 320,260 L 329,248 L 336,238 Z",
    "Noord-Holland": "M 195,62 L 208,58 L 222,55 L 237,54 L 252,54 L 267,56 L 281,60 L 295,66 L 308,74 L 320,84 L 330,96 L 338,110 L 344,125 L 348,141 L 350,158 L 350,175 L 348,192 L 344,207 L 338,221 L 330,234 L 320,245 L 308,254 L 295,261 L 281,266 L 267,269 L 252,270 L 237,269 L 224,266 L 212,261 L 202,254 L 194,245 L 188,234 L 184,221 L 182,207 L 182,192 L 184,175 L 188,158 L 194,141 L 202,125 L 212,110 L 222,96 L 232,84 L 242,74 L 252,66 L 262,60 L 272,56 L 282,54 L 292,54 Z",
    "Zuid-Holland": "M 188,215 L 202,213 L 217,213 L 232,215 L 247,219 L 262,225 L 276,233 L 289,243 L 300,255 L 310,269 L 318,285 L 324,302 L 328,320 L 329,339 L 328,358 L 324,375 L 318,391 L 310,405 L 300,417 L 289,427 L 276,435 L 262,441 L 247,445 L 232,447 L 217,447 L 203,445 L 190,441 L 179,435 L 170,427 L 163,417 L 158,405 L 155,391 L 154,375 L 155,358 L 158,339 L 163,320 L 170,302 L 179,285 L 188,269 L 196,255 L 203,243 L 209,233 L 214,225 Z",
    "Zeeland": "M 65,342 L 78,338 L 92,336 L 106,336 L 120,338 L 134,342 L 148,348 L 161,356 L 173,366 L 184,378 L 193,392 L 200,407 L 205,423 L 208,440 L 208,457 L 205,473 L 200,488 L 193,501 L 184,512 L 173,521 L 161,528 L 148,533 L 134,536 L 120,537 L 106,536 L 93,533 L 81,528 L 71,521 L 63,512 L 57,501 L 53,488 L 51,473 L 51,457 L 53,440 L 57,423 L 63,407 L 71,392 L 80,378 L 88,366 L 95,356 L 101,348 Z",
    "Noord-Brabant": "M 218,335 L 235,332 L 252,331 L 270,332 L 288,335 L 306,340 L 324,347 L 342,356 L 359,367 L 375,380 L 390,395 L 404,412 L 416,430 L 427,450 L 435,471 L 441,493 L 445,516 L 446,540 L 445,563 L 441,585 L 435,606 L 427,625 L 416,642 L 404,657 L 390,669 L 375,679 L 359,686 L 342,691 L 324,693 L 306,693 L 288,691 L 270,686 L 252,679 L 235,669 L 220,657 L 207,642 L 196,625 L 188,606 L 182,585 L 179,563 L 178,540 L 179,516 L 182,493 L 188,471 L 196,450 L 207,430 L 217,412 L 226,395 L 234,380 L 240,367 L 244,356 L 246,347 Z",
    "Limburg": "M 498,398 L 512,394 L 526,392 L 540,392 L 554,394 L 567,398 L 579,404 L 590,412 L 599,422 L 607,434 L 613,448 L 617,463 L 619,479 L 619,496 L 617,513 L 613,530 L 607,546 L 599,561 L 590,574 L 579,585 L 567,594 L 554,601 L 540,606 L 526,609 L 512,610 L 498,609 L 485,606 L 473,601 L 463,594 L 455,585 L 449,574 L 445,561 L 443,546 L 443,530 L 445,513 L 449,496 L 455,479 L 463,463 L 473,448 L 485,434 L 494,422 L 501,412 Z"
};

// SVG map paths for waterways (more geographically accurate)
// These are rivers and canals rendered as lines
const waterwayPaths = {
    "IJssel": "M 515,214 L 522,229 L 528,246 L 532,264 L 535,284 L 538,304 L 540,324 L 542,344",
    "Maas": "M 495,398 L 500,418 L 505,441 L 508,464 L 510,486 L 512,508 L 513,531 L 515,554 L 518,576",
    "Waal": "M 430,308 L 460,311 L 490,315 L 520,317 L 550,319 L 580,320",
    "Neder-Rijn": "M 380,296 L 408,298 L 435,300 L 462,302 L 488,302",
    "Amsterdam-Rijnkanaal": "M 310,199 L 322,214 L 335,231 L 348,249 L 360,268 L 372,287",
    "Nieuwe Waterweg": "M 160,285 L 190,287 L 220,290 L 250,291 L 280,292"
};

// Embedded water polygon paths (for lakes, seas, estuaries) - rendered as filled shapes
const waterPolygonPaths = {
    "IJsselmeer": "M 305,220 L 340,190 L 390,160 L 450,145 L 490,155 L 470,185 L 410,205 L 350,220 L 305,220 Z",
    "Markermeer": "M 305,260 L 320,240 L 360,220 L 400,225 L 390,245 L 350,260 L 305,260 Z",
    "Waddenzee": "M 35.9,107.1 L 161.5,64.3 L 341.0,21.4 L 556.4,21.4 L 664.1,64.3 L 628.2,107.1 L 484.6,117.9 L 215.4,117.9 L 35.9,107.1 Z",
    "Oosterschelde": "M 89.7,407.1 L 143.6,396.4 L 179.5,385.7 L 215.4,385.7 L 233.3,396.4 L 197.4,407.1 L 89.7,407.1 Z",
    "Westerschelde": "M 35.9,492.9 L 107.7,471.4 L 161.5,450.0 L 215.4,439.3 L 233.3,450.0 L 143.6,482.1 L 35.9,492.9 Z",
    "Lek": "M 320,308 L 350,309 L 380,310 L 410,311 L 440,312 L 440,324 L 410,323 L 380,322 L 350,321 L 320,320 Z",
    "Noordzeekanaal": "M 170,215 L 220,217 L 270,219 L 320,220 L 320,232 L 270,230 L 220,228 L 170,226 Z"
};

// SVG path for Twente region (used in Level 4 fallback rendering)
const TWENTE_REGION_PATH = "M 580,200 L 700,200 L 700,320 L 580,320 Z";


// Use the simplified embedded provinces GeoJSON (kept small for offline/file:// use)
const EMBEDDED_PROVINCES = {
    "type": "FeatureCollection",
    "features": [
        { "type": "Feature", "properties": { "NAME": "Groningen" }, "geometry": { "type": "Polygon", "coordinates": [[[6.1, 53.5],[6.8,53.5],[7.0,53.3],[6.6,53.0],[6.2,53.0],[6.1,53.2],[6.1,53.5]]] } },
        { "type": "Feature", "properties": { "NAME": "Friesland" },  "geometry": { "type": "Polygon", "coordinates": [[[5.2,53.3],[6.0,53.3],[6.2,53.1],[5.9,52.9],[5.4,52.9],[5.2,53.1],[5.2,53.3]]] } },
        { "type": "Feature", "properties": { "NAME": "Drenthe" },   "geometry": { "type": "Polygon", "coordinates": [[[6.0,52.9],[6.6,52.9],[6.7,52.6],[6.4,52.5],[6.0,52.6],[6.0,52.9]]] } },
        { "type": "Feature", "properties": { "NAME": "Overijssel" },"geometry": { "type": "Polygon", "coordinates": [[[5.8,52.6],[6.4,52.6],[6.6,52.3],[6.2,52.0],[5.8,52.1],[5.8,52.6]]] } },
        { "type": "Feature", "properties": { "NAME": "Flevoland" }, "geometry": { "type": "Polygon", "coordinates": [[[5.0,52.5],[5.6,52.5],[5.8,52.3],[5.4,52.1],[5.0,52.2],[5.0,52.5]]] } },
        { "type": "Feature", "properties": { "NAME": "Gelderland" }, "geometry": { "type": "Polygon", "coordinates": [[[5.8,52.2],[6.6,52.2],[6.8,51.9],[6.2,51.6],[5.8,51.7],[5.8,52.2]]] } },
        { "type": "Feature", "properties": { "NAME": "Utrecht" },    "geometry": { "type": "Polygon", "coordinates": [[[5.0,52.1],[5.6,52.1],[5.8,51.9],[5.4,51.8],[5.0,51.9],[5.0,52.1]]] } },
        { "type": "Feature", "properties": { "NAME": "Noord-Holland" },"geometry": { "type": "Polygon", "coordinates": [[[4.5,52.4],[5.4,52.4],[5.6,52.1],[5.2,51.9],[4.8,51.9],[4.5,52.1],[4.5,52.4]]] } },
        { "type": "Feature", "properties": { "NAME": "Zuid-Holland" },"geometry": { "type": "Polygon", "coordinates": [[[4.0,52.0],[5.0,52.0],[5.2,51.7],[4.8,51.6],[4.3,51.7],[4.0,52.0]]] } },
        { "type": "Feature", "properties": { "NAME": "Zeeland" },     "geometry": { "type": "Polygon", "coordinates": [[[3.6,51.3],[4.2,51.3],[4.3,51.1],[3.9,51.0],[3.6,51.1],[3.6,51.3]]] } },
        { "type": "Feature", "properties": { "NAME": "Noord-Brabant" },"geometry": { "type": "Polygon", "coordinates": [[[4.6,51.6],[5.6,51.6],[5.8,51.3],[5.2,51.0],[4.6,51.0],[4.6,51.6]]] } },
        { "type": "Feature", "properties": { "NAME": "Limburg" },     "geometry": { "type": "Polygon", "coordinates": [[[5.6,50.9],[6.4,50.9],[6.6,50.6],[6.0,50.5],[5.6,50.6],[5.6,50.9]]] } }
    ]
};

const EMBEDDED_EUROPE = {"type": "FeatureCollection", "features": [{"type": "Feature", "properties": {"name": "Frankrijk", "name_nl": "Frankrijk", "name_en": "France", "type": "country"}, "geometry": {"type": "MultiPolygon", "coordinates": [[[[6.19, 49.46], [6.66, 49.2], [8.1, 49.02], [7.59, 48.33], [7.47, 47.62], [7.19, 47.45], [6.74, 47.54], [6.77, 47.29], [6.04, 46.73], [6.02, 46.27], [6.5, 46.43], [6.84, 45.99], [6.8, 45.71], [7.1, 45.33], [6.75, 45.03], [7.01, 44.25], [7.55, 44.13], [7.44, 43.69], [6.53, 43.13], [4.56, 43.4], [3.1, 43.08], [2.99, 42.47], [1.83, 42.34], [0.7, 42.8], [0.34, 42.58], [-1.5, 43.03], [-1.9, 43.42], [-1.38, 44.02], [-1.19, 46.01], [-2.23, 47.06], [-2.96, 47.57], [-4.49, 47.95], [-4.59, 48.68], [-3.3, 48.9], [-1.62, 48.64], [-1.93, 49.78], [-0.99, 49.35], [1.34, 50.13], [1.64, 50.95], [2.51, 51.15], [2.66, 50.8], [3.12, 50.78], [3.59, 50.38], [4.29, 49.91], [4.8, 49.99], [5.67, 49.53], [5.9, 49.44], [6.19, 49.46]]], [[[8.75, 42.63], [9.39, 43.01], [9.56, 42.15], [9.23, 41.38], [8.78, 41.58], [8.54, 42.26], [8.75, 42.63]]]]}}, {"type": "Feature", "properties": {"name": "Oekraïne", "name_nl": "Oekraïne", "name_en": "Ukraine", "type": "country"}, "geometry": {"type": "Polygon", "coordinates": [[[31.79, 52.1], [32.16, 52.06], [32.41, 52.29], [32.72, 52.24], [33.75, 52.34], [34.39, 51.77], [34.14, 51.57], [34.22, 51.26], [35.02, 51.21], [35.38, 50.77], [35.36, 50.58], [36.63, 50.23], [37.39, 50.38], [38.01, 49.92], [38.59, 49.93], [40.07, 49.6], [40.08, 49.31], [39.67, 48.78], [39.9, 48.23], [39.74, 47.9], [38.77, 47.83], [38.26, 47.55], [38.22, 47.1], [37.43, 47.02], [36.76, 46.7], [35.82, 46.65], [34.96, 46.27], [35.01, 45.74], [34.86, 45.77], [34.73, 45.97], [34.41, 46.01], [33.7, 46.22], [33.44, 45.97], [33.3, 46.08], [31.74, 46.33], [31.68, 46.71], [30.75, 46.58], [30.38, 46.03], [29.6, 45.29], [29.15, 45.46], [28.68, 45.3], [28.23, 45.49], [28.49, 45.6], [28.66, 45.94], [28.93, 46.26], [28.86, 46.44], [29.07, 46.52], [29.17, 46.38], [29.76, 46.35], [30.02, 46.42], [29.84, 46.53], [29.91, 46.67], [29.56, 46.93], [29.42, 47.35], [29.05, 47.51], [29.12, 47.85], [28.67, 48.12], [28.26, 48.16], [27.52, 48.47], [26.86, 48.37], [26.62, 48.22], [26.2, 48.22], [25.95, 47.99], [25.21, 47.89], [24.87, 47.74], [24.4, 47.98], [23.76, 47.99], [23.14, 48.1], [22.71, 47.88], [22.64, 48.15], [22.09, 48.42], [22.28, 48.83], [22.56, 49.09], [22.78, 49.03], [22.52, 49.48], [23.43, 50.31], [23.92, 50.42], [24.03, 50.71], [23.53, 51.58], [24.01, 51.62], [24.55, 51.89], [25.33, 51.91], [26.34, 51.83], [27.45, 51.59], [28.24, 51.57], [28.62, 51.43], [28.99, 51.6], [29.25, 51.37], [30.16, 51.42], [30.56, 51.32], [30.62, 51.82], [30.93, 52.04], [31.79, 52.1]]]}}, {"type": "Feature", "properties": {"name": "Wit-Rusland", "name_nl": "Wit-Rusland", "name_en": "Belarus", "type": "country"}, "geometry": {"type": "Polygon", "coordinates": [[[28.18, 56.17], [29.23, 55.92], [29.37, 55.67], [29.9, 55.79], [30.87, 55.55], [30.97, 55.08], [30.76, 54.81], [31.38, 54.16], [31.79, 53.97], [31.73, 53.79], [32.41, 53.62], [32.69, 53.35], [32.3, 53.13], [31.5, 53.17], [31.31, 53.07], [31.54, 52.74], [31.79, 52.1], [31.79, 52.1], [30.93, 52.04], [30.62, 51.82], [30.56, 51.32], [30.16, 51.42], [29.25, 51.37], [28.99, 51.6], [28.62, 51.43], [28.24, 51.57], [27.45, 51.59], [26.34, 51.83], [25.33, 51.91], [24.55, 51.89], [24.01, 51.62], [23.53, 51.58], [23.51, 52.02], [23.2, 52.49], [23.8, 52.69], [23.8, 53.09], [23.53, 53.47], [23.48, 53.91], [24.45, 53.91], [25.54, 54.28], [25.77, 54.85], [26.59, 55.17], [26.49, 55.62], [27.1, 55.78], [28.18, 56.17]]]}}, {"type": "Feature", "properties": {"name": "Litouwen", "name_nl": "Litouwen", "name_en": "Lithuania", "type": "country"}, "geometry": {"type": "Polygon", "coordinates": [[[26.49, 55.62], [26.59, 55.17], [25.77, 54.85], [25.54, 54.28], [24.45, 53.91], [23.48, 53.91], [23.24, 54.22], [22.73, 54.33], [22.65, 54.58], [22.76, 54.86], [22.32, 55.02], [21.27, 55.19], [21.06, 56.03], [22.2, 56.34], [23.88, 56.27], [24.86, 56.37], [25.0, 56.16], [25.53, 56.1], [26.49, 55.62]]]}}, {"type": "Feature", "properties": {"name": "Rusland", "name_nl": "Rusland", "name_en": "Russia", "type": "country"}, "geometry": {"type": "MultiPolygon", "coordinates": [[[[49.1, 46.4], [48.65, 45.81], [47.68, 45.64], [46.68, 44.61], [47.59, 43.66], [47.49, 42.99], [48.58, 41.81], [48.58, 41.81], [47.99, 41.41], [47.82, 41.15], [47.37, 41.22], [46.69, 41.83], [46.4, 41.86], [45.78, 42.09], [45.47, 42.5], [44.54, 42.71], [43.93, 42.55], [43.76, 42.74], [42.39, 43.22], [40.92, 43.38], [40.08, 43.55], [39.96, 43.43], [38.68, 44.28], [37.54, 44.66], [36.68, 45.24], [37.4, 45.4], [38.23, 46.24], [37.67, 46.64], [39.15, 47.04], [39.12, 47.26], [38.22, 47.1], [38.26, 47.55], [38.77, 47.83], [39.74, 47.9], [39.9, 48.23], [39.67, 48.78], [40.08, 49.31], [40.07, 49.6], [38.59, 49.93], [38.01, 49.92], [37.39, 50.38], [36.63, 50.23], [35.36, 50.58], [35.38, 50.77], [35.02, 51.21], [34.22, 51.26], [34.14, 51.57], [34.39, 51.77], [33.75, 52.34], [32.72, 52.24], [32.41, 52.29], [32.16, 52.06], [31.79, 52.1], [31.79, 52.1], [31.54, 52.74], [31.31, 53.07], [31.5, 53.17], [32.3, 53.13], [32.69, 53.35], [32.41, 53.62], [31.73, 53.79], [31.79, 53.97], [31.38, 54.16], [30.76, 54.81], [30.97, 55.08], [30.87, 55.55], [29.9, 55.79], [29.37, 55.67], [29.23, 55.92], [28.18, 56.17], [27.86, 56.76], [27.77, 57.24], [27.29, 57.47], [27.72, 57.79], [27.42, 58.72], [28.13, 59.3], [27.98, 59.48], [27.98, 59.48], [29.12, 60.03], [28.07, 60.5], [28.07, 60.5], [30.21, 61.78], [31.14, 62.36], [31.52, 62.87], [30.04, 63.55], [30.44, 64.2], [29.54, 64.95], [30.22, 65.81], [29.05, 66.94], [29.98, 67.7], [28.45, 68.36], [28.59, 69.06], [29.4, 69.16], [31.1, 69.56], [31.1, 69.56], [32.13, 69.91], [33.78, 69.3], [36.51, 69.06], [40.29, 67.93], [41.06, 67.46], [41.13, 66.79], [40.02, 66.27], [38.38, 66.0], [33.92, 66.76], [33.18, 66.63], [34.81, 65.9], [34.88, 65.44], [34.94, 64.41], [36.23, 64.11], [37.01, 63.85], [37.14, 64.33], [36.54, 64.76], [37.18, 65.14], [39.59, 64.52], [40.44, 64.76], [39.76, 65.5], [42.09, 66.48], [43.02, 66.42], [43.95, 66.07], [44.53, 66.76], [43.7, 67.35], [44.19, 67.95], [43.45, 68.57], [46.25, 68.25], [46.82, 67.69], [45.56, 67.57], [45.56, 67.01], [46.35, 66.67], [47.89, 66.88], [48.14, 67.52], [50.23, 68.0], [53.72, 68.86], [54.47, 68.81], [53.49, 68.2], [54.73, 68.1], [55.44, 68.44], [57.32, 68.47], [58.8, 68.88], [59.94, 68.28], [60.0, 68.0], [59.0, 62.0], [58.0, 56.0], [59.93, 50.84], [59.64, 50.55], [58.36, 51.06], [56.78, 51.04], [55.72, 50.62], [54.53, 51.03], [52.33, 51.72], [50.77, 51.69], [48.7, 50.61], [48.58, 49.87], [47.55, 50.45], [46.75, 49.36], [47.04, 49.15], [46.47, 48.39], [47.32, 47.72], [48.06, 47.74], [48.69, 47.08], [48.59, 46.56], [49.1, 46.4]]]]}}, {"type": "Feature", "properties": {"name": "Tsjechië", "name_nl": "Tsjechië", "name_en": "Czechia", "type": "country"}, "geometry": {"type": "Polygon", "coordinates": [[[15.02, 51.11], [15.49, 50.78], [16.24, 50.7], [16.18, 50.42], [16.72, 50.22], [16.87, 50.47], [17.55, 50.36], [17.65, 50.05], [18.39, 49.99], [18.85, 49.5], [18.55, 49.5], [18.4, 49.32], [18.17, 49.27], [18.1, 49.04], [17.91, 49.0], [17.89, 48.9], [17.55, 48.8], [17.1, 48.82], [16.96, 48.6], [16.5, 48.79], [16.03, 48.73], [15.25, 49.04], [14.9, 48.96], [14.34, 48.56], [13.6, 48.88], [13.03, 49.31], [12.52, 49.55], [12.42, 49.97], [12.24, 50.27], [12.97, 50.48], [13.34, 50.73], [14.06, 50.93], [14.31, 51.12], [14.57, 51.0], [15.02, 51.11]]]}}, {"type": "Feature", "properties": {"name": "Duitsland", "name_nl": "Duitsland", "name_en": "Germany", "type": "country"}, "geometry": {"type": "Polygon", "coordinates": [[[14.12, 53.76], [14.35, 53.25], [14.07, 52.98], [14.44, 52.62], [14.69, 52.09], [14.61, 51.75], [15.02, 51.11], [14.57, 51.0], [14.31, 51.12], [14.06, 50.93], [13.34, 50.73], [12.97, 50.48], [12.24, 50.27], [12.42, 49.97], [12.52, 49.55], [13.03, 49.31], [13.6, 48.88], [13.24, 48.42], [12.88, 48.29], [13.03, 47.64], [12.93, 47.47], [12.62, 47.67], [12.14, 47.7], [11.43, 47.52], [10.54, 47.57], [10.4, 47.3], [9.9, 47.58], [9.59, 47.53], [8.52, 47.83], [8.32, 47.61], [7.47, 47.62], [7.59, 48.33], [8.1, 49.02], [6.66, 49.2], [6.19, 49.46], [6.24, 49.9], [6.04, 50.13], [6.16, 50.8], [5.99, 51.85], [6.59, 51.85], [6.84, 52.23], [7.09, 53.14], [6.91, 53.48], [7.1, 53.69], [7.94, 53.75], [8.12, 53.53], [8.8, 54.02], [8.57, 54.4], [8.53, 54.96], [9.28, 54.83], [9.92, 54.98], [9.94, 54.6], [10.95, 54.36], [10.94, 54.01], [11.96, 54.2], [12.52, 54.47], [13.65, 54.08], [14.12, 53.76]]]}}, {"type": "Feature", "properties": {"name": "Estland", "name_nl": "Estland", "name_en": "Estonia", "type": "country"}, "geometry": {"type": "Polygon", "coordinates": [[[27.98, 59.48], [27.98, 59.48], [28.13, 59.3], [27.42, 58.72], [27.72, 57.79], [27.29, 57.47], [26.46, 57.48], [25.6, 57.85], [25.16, 57.97], [24.31, 57.79], [24.43, 58.38], [24.06, 58.26], [23.43, 58.61], [23.34, 59.19], [24.6, 59.47], [25.86, 59.61], [26.95, 59.45], [27.98, 59.48], [27.98, 59.48]]]}}, {"type": "Feature", "properties": {"name": "Letland", "name_nl": "Letland", "name_en": "Latvia", "type": "country"}, "geometry": {"type": "Polygon", "coordinates": [[[27.29, 57.47], [27.77, 57.24], [27.86, 56.76], [28.18, 56.17], [27.1, 55.78], [26.49, 55.62], [25.53, 56.1], [25.0, 56.16], [24.86, 56.37], [23.88, 56.27], [22.2, 56.34], [21.06, 56.03], [21.09, 56.78], [21.58, 57.41], [22.52, 57.75], [23.32, 57.01], [24.12, 57.03], [24.31, 57.79], [25.16, 57.97], [25.6, 57.85], [26.46, 57.48], [27.29, 57.47]]]}}, {"type": "Feature", "properties": {"name": "Noorwegen", "name_nl": "Noorwegen", "name_en": "Norway", "type": "country"}, "geometry": {"type": "MultiPolygon", "coordinates": [[[[31.1, 69.56], [29.4, 69.16], [28.59, 69.06], [29.02, 69.77], [27.73, 70.16], [26.18, 69.83], [25.69, 69.09], [24.74, 68.65], [23.66, 68.89], [22.36, 68.84], [21.24, 69.37], [20.65, 69.11], [20.03, 69.07], [19.88, 68.41], [17.99, 68.57], [17.73, 68.01], [16.77, 68.01], [16.11, 67.3], [15.11, 66.19], [13.56, 64.79], [13.92, 64.45], [13.57, 64.05], [12.58, 64.07], [11.93, 63.13], [11.99, 61.8], [12.63, 61.29], [12.3, 60.12], [11.47, 59.43], [11.03, 58.86], [10.36, 59.47], [8.38, 58.31], [7.05, 58.08], [5.67, 58.59], [5.31, 59.66], [4.99, 61.97], [5.91, 62.61], [8.55, 63.45], [10.53, 64.49], [12.36, 65.88], [14.76, 67.81], [16.44, 68.56], [19.18, 69.82], [21.38, 70.26], [23.02, 70.2], [24.55, 71.03], [26.37, 70.99], [28.17, 71.19], [31.29, 70.45], [30.01, 70.19], [31.1, 69.56]]]]}}, {"type": "Feature", "properties": {"name": "Zweden", "name_nl": "Zweden", "name_en": "Sweden", "type": "country"}, "geometry": {"type": "Polygon", "coordinates": [[[11.03, 58.86], [11.47, 59.43], [12.3, 60.12], [12.63, 61.29], [11.99, 61.8], [11.93, 63.13], [12.58, 64.07], [13.57, 64.05], [13.92, 64.45], [13.56, 64.79], [15.11, 66.19], [16.11, 67.3], [16.77, 68.01], [17.73, 68.01], [17.99, 68.57], [19.88, 68.41], [20.03, 69.07], [20.65, 69.11], [21.98, 68.62], [23.54, 67.94], [23.57, 66.4], [23.9, 66.01], [22.18, 65.72], [21.21, 65.03], [21.37, 64.41], [19.78, 63.61], [17.85, 62.75], [17.12, 61.34], [17.83, 60.64], [18.79, 60.08], [17.87, 58.95], [16.83, 58.72], [16.45, 57.04], [15.88, 56.1], [14.67, 56.2], [14.1, 55.41], [12.94, 55.36], [12.63, 56.31], [11.79, 57.44], [11.03, 58.86]]]}}, {"type": "Feature", "properties": {"name": "Finland", "name_nl": "Finland", "name_en": "Finland", "type": "country"}, "geometry": {"type": "Polygon", "coordinates": [[[28.59, 69.06], [28.45, 68.36], [29.98, 67.7], [29.05, 66.94], [30.22, 65.81], [29.54, 64.95], [30.44, 64.2], [30.04, 63.55], [31.52, 62.87], [31.14, 62.36], [30.21, 61.78], [28.07, 60.5], [28.07, 60.5], [28.07, 60.5], [26.26, 60.42], [24.5, 60.06], [22.87, 59.85], [22.29, 60.39], [21.32, 60.72], [21.54, 61.71], [21.06, 62.61], [21.54, 63.19], [22.44, 63.82], [24.73, 64.9], [25.4, 65.11], [25.29, 65.53], [23.9, 66.01], [23.57, 66.4], [23.54, 67.94], [21.98, 68.62], [20.65, 69.11], [21.24, 69.37], [22.36, 68.84], [23.66, 68.89], [24.74, 68.65], [25.69, 69.09], [26.18, 69.83], [27.73, 70.16], [29.02, 69.77], [28.59, 69.06]]]}}, {"type": "Feature", "properties": {"name": "Luxemburg", "name_nl": "Luxemburg", "name_en": "Luxembourg", "type": "country"}, "geometry": {"type": "Polygon", "coordinates": [[[6.04, 50.13], [6.24, 49.9], [6.19, 49.46], [5.9, 49.44], [5.67, 49.53], [5.78, 50.09], [6.04, 50.13]]]}}, {"type": "Feature", "properties": {"name": "België", "name_nl": "België", "name_en": "Belgium", "type": "country"}, "geometry": {"type": "Polygon", "coordinates": [[[6.16, 50.8], [6.04, 50.13], [5.78, 50.09], [5.67, 49.53], [4.8, 49.99], [4.29, 49.91], [3.59, 50.38], [3.12, 50.78], [2.66, 50.8], [2.51, 51.15], [3.31, 51.35], [3.32, 51.35], [3.31, 51.35], [4.05, 51.27], [4.97, 51.48], [5.61, 51.04], [6.16, 50.8]]]}}, {"type": "Feature", "properties": {"name": "Noord-Macedonië", "name_nl": "Noord-Macedonië", "name_en": "North Macedonia", "type": "country"}, "geometry": {"type": "Polygon", "coordinates": [[[22.38, 42.32], [22.88, 42.0], [22.95, 41.34], [22.76, 41.3], [22.6, 41.13], [22.06, 41.15], [21.67, 40.93], [21.02, 40.84], [20.61, 41.09], [20.46, 41.52], [20.59, 41.86], [20.59, 41.86], [20.72, 41.85], [20.76, 42.05], [21.35, 42.21], [21.58, 42.25], [21.92, 42.3], [22.38, 42.32]]]}}, {"type": "Feature", "properties": {"name": "Albanië", "name_nl": "Albanië", "name_en": "Albania", "type": "country"}, "geometry": {"type": "Polygon", "coordinates": [[[21.02, 40.84], [21.0, 40.58], [20.67, 40.43], [20.62, 40.11], [20.15, 39.62], [19.98, 39.69], [19.96, 39.92], [19.41, 40.25], [19.32, 40.73], [19.4, 41.41], [19.54, 41.72], [19.37, 41.88], [19.37, 41.88], [19.3, 42.2], [19.74, 42.69], [19.8, 42.5], [20.07, 42.59], [20.28, 42.32], [20.52, 42.22], [20.59, 41.86], [20.59, 41.86], [20.46, 41.52], [20.61, 41.09], [21.02, 40.84]]]}}, {"type": "Feature", "properties": {"name": "Kosovo", "name_nl": "Kosovo", "name_en": "Kosovo", "type": "country"}, "geometry": {"type": "Polygon", "coordinates": [[[20.59, 41.86], [20.52, 42.22], [20.28, 42.32], [20.07, 42.59], [20.26, 42.81], [20.5, 42.88], [20.64, 43.22], [20.81, 43.27], [20.96, 43.13], [21.14, 43.07], [21.27, 42.91], [21.44, 42.86], [21.63, 42.68], [21.78, 42.68], [21.66, 42.44], [21.54, 42.32], [21.58, 42.25], [21.35, 42.21], [20.76, 42.05], [20.72, 41.85], [20.59, 41.86]]]}}, {"type": "Feature", "properties": {"name": "Spanje", "name_nl": "Spanje", "name_en": "Spain", "type": "country"}, "geometry": {"type": "Polygon", "coordinates": [[[-7.45, 37.1], [-7.54, 37.43], [-7.17, 37.8], [-7.03, 38.08], [-7.37, 38.37], [-7.1, 39.03], [-7.5, 39.63], [-7.07, 39.71], [-7.03, 40.18], [-6.86, 40.33], [-6.85, 41.11], [-6.39, 41.38], [-6.67, 41.88], [-7.25, 41.92], [-7.42, 41.79], [-8.01, 41.79], [-8.26, 42.28], [-8.67, 42.13], [-9.03, 41.88], [-8.98, 42.59], [-9.39, 43.03], [-7.98, 43.75], [-6.75, 43.57], [-5.41, 43.57], [-4.35, 43.4], [-3.52, 43.46], [-1.9, 43.42], [-1.5, 43.03], [0.34, 42.58], [0.7, 42.8], [1.83, 42.34], [2.99, 42.47], [3.04, 41.89], [2.09, 41.23], [0.81, 41.01], [0.72, 40.68], [0.11, 40.12], [-0.28, 39.31], [0.11, 38.74], [-0.47, 38.29], [-0.68, 37.64], [-1.44, 37.44], [-2.15, 36.67], [-3.42, 36.66], [-4.37, 36.68], [-5.0, 36.32], [-5.38, 35.95], [-5.87, 36.03], [-6.24, 36.37], [-6.52, 36.94], [-7.45, 37.1]]]}}, {"type": "Feature", "properties": {"name": "Denemarken", "name_nl": "Denemarken", "name_en": "Denmark", "type": "country"}, "geometry": {"type": "MultiPolygon", "coordinates": [[[[9.92, 54.98], [9.28, 54.83], [8.53, 54.96], [8.12, 55.52], [8.09, 56.54], [8.26, 56.81], [8.54, 57.11], [9.42, 57.17], [9.78, 57.45], [10.58, 57.73], [10.55, 57.22], [10.25, 56.89], [10.37, 56.61], [10.91, 56.46], [10.67, 56.08], [10.37, 56.19], [9.65, 55.47], [9.92, 54.98]]], [[[12.37, 56.11], [12.69, 55.61], [12.09, 54.8], [11.04, 55.36], [10.9, 55.78], [12.37, 56.11]]]]}}, {"type": "Feature", "properties": {"name": "Roemenië", "name_nl": "Roemenië", "name_en": "Romania", "type": "country"}, "geometry": {"type": "Polygon", "coordinates": [[[28.23, 45.49], [28.68, 45.3], [29.15, 45.46], [29.6, 45.29], [29.63, 45.04], [29.14, 44.82], [28.84, 44.91], [28.56, 43.71], [27.97, 43.81], [27.24, 44.18], [26.07, 43.94], [25.57, 43.69], [24.1, 43.74], [23.33, 43.9], [22.94, 43.82], [22.66, 44.23], [22.47, 44.41], [22.71, 44.58], [22.46, 44.7], [22.15, 44.48], [21.56, 44.77], [21.48, 45.18], [20.87, 45.42], [20.76, 45.73], [20.22, 46.13], [21.02, 46.32], [21.63, 46.99], [22.1, 47.67], [22.71, 47.88], [23.14, 48.1], [23.76, 47.99], [24.4, 47.98], [24.87, 47.74], [25.21, 47.89], [25.95, 47.99], [26.2, 48.22], [26.62, 48.22], [26.92, 48.12], [27.23, 47.83], [27.55, 47.41], [28.13, 46.81], [28.16, 46.37], [28.05, 45.94], [28.23, 45.49]]]}}, {"type": "Feature", "properties": {"name": "Hongarije", "name_nl": "Hongarije", "name_en": "Hungary", "type": "country"}, "geometry": {"type": "Polygon", "coordinates": [[[22.09, 48.42], [22.64, 48.15], [22.71, 47.88], [22.1, 47.67], [21.63, 46.99], [21.02, 46.32], [20.22, 46.13], [19.6, 46.17], [18.83, 45.91], [18.83, 45.91], [18.46, 45.76], [17.63, 45.95], [16.88, 46.38], [16.56, 46.5], [16.37, 46.84], [16.2, 46.85], [16.53, 47.5], [16.34, 47.71], [16.9, 47.71], [16.98, 48.12], [17.49, 47.87], [17.86, 47.76], [18.7, 47.88], [18.78, 48.08], [19.17, 48.11], [19.66, 48.27], [19.77, 48.2], [20.24, 48.33], [20.47, 48.56], [20.8, 48.62], [21.87, 48.32], [22.09, 48.42]]]}}, {"type": "Feature", "properties": {"name": "Slowakije", "name_nl": "Slowakije", "name_en": "Slovakia", "type": "country"}, "geometry": {"type": "Polygon", "coordinates": [[[22.56, 49.09], [22.28, 48.83], [22.09, 48.42], [21.87, 48.32], [20.8, 48.62], [20.47, 48.56], [20.24, 48.33], [19.77, 48.2], [19.66, 48.27], [19.17, 48.11], [18.78, 48.08], [18.7, 47.88], [17.86, 47.76], [17.49, 47.87], [16.98, 48.12], [16.88, 48.47], [16.96, 48.6], [17.1, 48.82], [17.55, 48.8], [17.89, 48.9], [17.91, 49.0], [18.1, 49.04], [18.17, 49.27], [18.4, 49.32], [18.55, 49.5], [18.85, 49.5], [18.91, 49.44], [19.32, 49.57], [19.83, 49.22], [20.42, 49.43], [20.89, 49.33], [21.61, 49.47], [22.56, 49.09]]]}}, {"type": "Feature", "properties": {"name": "Polen", "name_nl": "Polen", "name_en": "Poland", "type": "country"}, "geometry": {"type": "Polygon", "coordinates": [[[23.48, 53.91], [23.53, 53.47], [23.8, 53.09], [23.8, 52.69], [23.2, 52.49], [23.51, 52.02], [23.53, 51.58], [24.03, 50.71], [23.92, 50.42], [23.43, 50.31], [22.52, 49.48], [22.78, 49.03], [22.56, 49.09], [21.61, 49.47], [20.89, 49.33], [20.42, 49.43], [19.83, 49.22], [19.32, 49.57], [18.91, 49.44], [18.85, 49.5], [18.39, 49.99], [17.65, 50.05], [17.55, 50.36], [16.87, 50.47], [16.72, 50.22], [16.18, 50.42], [16.24, 50.7], [15.49, 50.78], [15.02, 51.11], [14.61, 51.75], [14.69, 52.09], [14.44, 52.62], [14.07, 52.98], [14.35, 53.25], [14.12, 53.76], [14.8, 54.05], [16.36, 54.51], [17.62, 54.85], [18.62, 54.68], [18.7, 54.44], [19.66, 54.43], [20.89, 54.31], [22.73, 54.33], [23.24, 54.22], [23.48, 53.91]]]}}, {"type": "Feature", "properties": {"name": "Ierland", "name_nl": "Ierland", "name_en": "Ireland", "type": "country"}, "geometry": {"type": "Polygon", "coordinates": [[[-6.2, 53.87], [-6.03, 53.15], [-6.79, 52.26], [-8.56, 51.67], [-9.98, 51.82], [-9.17, 52.86], [-9.69, 53.88], [-8.33, 54.66], [-7.57, 55.13], [-7.37, 54.6], [-7.57, 54.06], [-6.95, 54.07], [-6.2, 53.87]]]}}, {"type": "Feature", "properties": {"name": "Verenigd Koninkrijk", "name_nl": "Verenigd Koninkrijk", "name_en": "United Kingdom", "type": "country"}, "geometry": {"type": "MultiPolygon", "coordinates": [[[[-6.2, 53.87], [-6.95, 54.07], [-7.57, 54.06], [-7.37, 54.6], [-7.57, 55.13], [-6.73, 55.17], [-5.66, 54.55], [-6.2, 53.87]]], [[[-3.09, 53.4], [-3.09, 53.4], [-2.95, 53.98], [-3.61, 54.6], [-3.63, 54.62], [-4.84, 54.79], [-5.08, 55.06], [-4.72, 55.51], [-5.05, 55.78], [-5.59, 55.31], [-5.64, 56.28], [-6.15, 56.79], [-5.79, 57.82], [-5.01, 58.63], [-4.21, 58.55], [-3.01, 58.64], [-4.07, 57.55], [-3.06, 57.69], [-1.96, 57.68], [-2.22, 56.87], [-3.12, 55.97], [-2.09, 55.91], [-2.01, 55.8], [-1.11, 54.62], [-0.43, 54.46], [0.18, 53.33], [0.47, 52.93], [1.68, 52.74], [1.56, 52.1], [1.05, 51.81], [1.45, 51.29], [0.55, 50.77], [-0.79, 50.77], [-2.49, 50.5], [-2.96, 50.7], [-3.62, 50.23], [-4.54, 50.34], [-5.25, 49.96], [-5.78, 50.16], [-4.31, 51.21], [-3.41, 51.43], [-3.42, 51.43], [-4.98, 51.59], [-5.27, 51.99], [-4.22, 52.3], [-4.77, 52.84], [-4.58, 53.5], [-3.09, 53.4]]]]}}, {"type": "Feature", "properties": {"name": "Griekenland", "name_nl": "Griekenland", "name_en": "Greece", "type": "country"}, "geometry": {"type": "MultiPolygon", "coordinates": [[[[26.29, 35.3], [26.16, 35.0], [24.72, 34.92], [24.74, 35.08], [23.51, 35.28], [23.7, 35.71], [24.25, 35.37], [25.03, 35.42], [25.77, 35.35], [25.75, 35.18], [26.29, 35.3]]], [[[22.95, 41.34], [23.69, 41.31], [24.49, 41.58], [25.2, 41.23], [26.11, 41.33], [26.12, 41.83], [26.6, 41.56], [26.29, 40.94], [26.06, 40.82], [25.45, 40.85], [24.93, 40.95], [23.71, 40.69], [24.41, 40.12], [23.9, 39.96], [23.34, 39.96], [22.81, 40.48], [22.63, 40.26], [22.85, 39.66], [23.35, 39.19], [22.97, 38.97], [23.53, 38.51], [24.03, 38.22], [24.04, 37.66], [23.12, 37.92], [23.41, 37.41], [22.77, 37.31], [23.15, 36.42], [22.49, 36.41], [21.67, 36.84], [21.3, 37.64], [21.12, 38.31], [20.73, 38.77], [20.22, 39.34], [20.15, 39.62], [20.62, 40.11], [20.67, 40.43], [21.0, 40.58], [21.02, 40.84], [21.67, 40.93], [22.06, 41.15], [22.6, 41.13], [22.76, 41.3], [22.95, 41.34]]]]}}, {"type": "Feature", "properties": {"name": "Oostenrijk", "name_nl": "Oostenrijk", "name_en": "Austria", "type": "country"}, "geometry": {"type": "Polygon", "coordinates": [[[16.98, 48.12], [16.9, 47.71], [16.34, 47.71], [16.53, 47.5], [16.2, 46.85], [16.01, 46.68], [15.14, 46.66], [14.63, 46.43], [13.81, 46.51], [12.38, 46.77], [12.15, 47.12], [11.16, 46.94], [11.05, 46.75], [10.44, 46.89], [9.93, 46.92], [9.48, 47.1], [9.63, 47.35], [9.59, 47.53], [9.9, 47.58], [10.4, 47.3], [10.54, 47.57], [11.43, 47.52], [12.14, 47.7], [12.62, 47.67], [12.93, 47.47], [13.03, 47.64], [12.88, 48.29], [13.24, 48.42], [13.6, 48.88], [14.34, 48.56], [14.9, 48.96], [15.25, 49.04], [16.03, 48.73], [16.5, 48.79], [16.96, 48.6], [16.88, 48.47], [16.98, 48.12]]]}}, {"type": "Feature", "properties": {"name": "Italië", "name_nl": "Italië", "name_en": "Italy", "type": "country"}, "geometry": {"type": "MultiPolygon", "coordinates": [[[[10.44, 46.89], [11.05, 46.75], [11.16, 46.94], [12.15, 47.12], [12.38, 46.77], [13.81, 46.51], [13.7, 46.02], [13.94, 45.59], [13.14, 45.74], [12.33, 45.38], [12.38, 44.89], [12.26, 44.6], [12.59, 44.09], [13.53, 43.59], [14.03, 42.76], [15.14, 41.96], [15.93, 41.96], [16.17, 41.74], [15.89, 41.54], [16.79, 41.18], [17.52, 40.88], [18.38, 40.36], [18.48, 40.17], [18.29, 39.81], [17.74, 40.28], [16.87, 40.44], [16.45, 39.8], [17.17, 39.42], [17.05, 38.9], [16.64, 38.84], [16.1, 37.99], [15.68, 37.91], [15.69, 38.21], [15.89, 38.75], [16.11, 38.96], [15.72, 39.54], [15.41, 40.05], [15.0, 40.17], [14.7, 40.6], [14.06, 40.79], [13.63, 41.19], [12.89, 41.25], [12.11, 41.7], [11.19, 42.36], [10.51, 42.93], [10.2, 43.92], [9.7, 44.04], [8.89, 44.37], [8.43, 44.23], [7.85, 43.77], [7.44, 43.69], [7.55, 44.13], [7.01, 44.25], [6.75, 45.03], [7.1, 45.33], [6.8, 45.71], [6.84, 45.99], [7.27, 45.78], [7.76, 45.82], [8.32, 46.16], [8.49, 46.01], [8.97, 46.04], [9.18, 46.44], [9.92, 46.31], [10.36, 46.48], [10.44, 46.89]]], [[[14.76, 38.14], [15.52, 38.23], [15.16, 37.44], [15.31, 37.13], [15.1, 36.62], [14.34, 37.0], [13.83, 37.1], [12.43, 37.61], [12.57, 38.13], [13.74, 38.03], [14.76, 38.14]]], [[[8.71, 40.9], [9.21, 41.21], [9.81, 40.5], [9.67, 39.18], [9.21, 39.24], [8.81, 38.91], [8.43, 39.17], [8.39, 40.38], [8.16, 40.95], [8.71, 40.9]]]]}}, {"type": "Feature", "properties": {"name": "Zwitserland", "name_nl": "Zwitserland", "name_en": "Switzerland", "type": "country"}, "geometry": {"type": "Polygon", "coordinates": [[[9.59, 47.53], [9.63, 47.35], [9.48, 47.1], [9.93, 46.92], [10.44, 46.89], [10.36, 46.48], [9.92, 46.31], [9.18, 46.44], [8.97, 46.04], [8.49, 46.01], [8.32, 46.16], [7.76, 45.82], [7.27, 45.78], [6.84, 45.99], [6.5, 46.43], [6.02, 46.27], [6.04, 46.73], [6.77, 47.29], [6.74, 47.54], [7.19, 47.45], [7.47, 47.62], [8.32, 47.61], [8.52, 47.83], [9.59, 47.53]]]}}, {"type": "Feature", "properties": {"name": "Nederland", "name_nl": "Nederland", "name_en": "Netherlands", "type": "country"}, "geometry": {"type": "Polygon", "coordinates": [[[6.91, 53.48], [7.09, 53.14], [6.84, 52.23], [6.59, 51.85], [5.99, 51.85], [6.16, 50.8], [5.61, 51.04], [4.97, 51.48], [4.05, 51.27], [3.31, 51.35], [3.32, 51.35], [3.83, 51.62], [4.71, 53.09], [6.07, 53.51], [6.91, 53.48]]]}}, {"type": "Feature", "properties": {"name": "Servië", "name_nl": "Servië", "name_en": "Serbia", "type": "country"}, "geometry": {"type": "Polygon", "coordinates": [[[18.83, 45.91], [18.83, 45.91], [19.6, 46.17], [20.22, 46.13], [20.76, 45.73], [20.87, 45.42], [21.48, 45.18], [21.56, 44.77], [22.15, 44.48], [22.46, 44.7], [22.71, 44.58], [22.47, 44.41], [22.66, 44.23], [22.41, 44.01], [22.5, 43.64], [22.99, 43.21], [22.6, 42.9], [22.44, 42.58], [22.55, 42.46], [22.38, 42.32], [21.92, 42.3], [21.58, 42.25], [21.54, 42.32], [21.66, 42.44], [21.78, 42.68], [21.63, 42.68], [21.44, 42.86], [21.27, 42.91], [21.14, 43.07], [20.96, 43.13], [20.81, 43.27], [20.64, 43.22], [20.5, 42.88], [20.26, 42.81], [20.34, 42.9], [19.96, 43.11], [19.63, 43.21], [19.48, 43.35], [19.22, 43.52], [19.45, 43.57], [19.6, 44.04], [19.12, 44.42], [19.37, 44.86], [19.01, 44.86], [19.01, 44.86], [19.39, 45.24], [19.07, 45.52], [18.83, 45.91]]]}}, {"type": "Feature", "properties": {"name": "Kroatië", "name_nl": "Kroatië", "name_en": "Croatia", "type": "country"}, "geometry": {"type": "Polygon", "coordinates": [[[16.56, 46.5], [16.88, 46.38], [17.63, 45.95], [18.46, 45.76], [18.83, 45.91], [19.07, 45.52], [19.39, 45.24], [19.01, 44.86], [18.55, 45.08], [17.86, 45.07], [17.0, 45.23], [16.53, 45.21], [16.32, 45.0], [15.96, 45.23], [15.75, 44.82], [16.24, 44.35], [16.46, 44.04], [16.92, 43.67], [17.3, 43.45], [17.67, 43.03], [18.56, 42.65], [18.45, 42.48], [18.45, 42.48], [17.51, 42.85], [16.93, 43.21], [16.02, 43.51], [15.17, 44.24], [15.38, 44.32], [14.92, 44.74], [14.9, 45.08], [14.26, 45.23], [13.95, 44.8], [13.66, 45.14], [13.68, 45.48], [13.72, 45.5], [14.41, 45.47], [14.6, 45.63], [14.94, 45.47], [15.33, 45.45], [15.32, 45.73], [15.67, 45.83], [15.77, 46.24], [16.56, 46.5]]]}}, {"type": "Feature", "properties": {"name": "Slovenië", "name_nl": "Slovenië", "name_en": "Slovenia", "type": "country"}, "geometry": {"type": "Polygon", "coordinates": [[[13.81, 46.51], [14.63, 46.43], [15.14, 46.66], [16.01, 46.68], [16.2, 46.85], [16.37, 46.84], [16.56, 46.5], [15.77, 46.24], [15.67, 45.83], [15.32, 45.73], [15.33, 45.45], [14.94, 45.47], [14.6, 45.63], [14.41, 45.47], [13.72, 45.5], [13.94, 45.59], [13.7, 46.02], [13.81, 46.51]]]}}, {"type": "Feature", "properties": {"name": "Bulgarije", "name_nl": "Bulgarije", "name_en": "Bulgaria", "type": "country"}, "geometry": {"type": "Polygon", "coordinates": [[[22.66, 44.23], [22.94, 43.82], [23.33, 43.9], [24.1, 43.74], [25.57, 43.69], [26.07, 43.94], [27.24, 44.18], [27.97, 43.81], [28.56, 43.71], [28.04, 43.29], [27.67, 42.58], [28.0, 42.01], [27.14, 42.14], [26.12, 41.83], [26.11, 41.33], [25.2, 41.23], [24.49, 41.58], [23.69, 41.31], [22.95, 41.34], [22.88, 42.0], [22.38, 42.32], [22.55, 42.46], [22.44, 42.58], [22.6, 42.9], [22.99, 43.21], [22.5, 43.64], [22.41, 44.01], [22.66, 44.23]]]}}, {"type": "Feature", "properties": {"name": "Montenegro", "name_nl": "Montenegro", "name_en": "Montenegro", "type": "country"}, "geometry": {"type": "Polygon", "coordinates": [[[20.07, 42.59], [19.8, 42.5], [19.74, 42.69], [19.3, 42.2], [19.37, 41.88], [19.16, 41.96], [18.88, 42.28], [18.45, 42.48], [18.56, 42.65], [18.71, 43.2], [19.03, 43.43], [19.22, 43.52], [19.48, 43.35], [19.63, 43.21], [19.96, 43.11], [20.34, 42.9], [20.26, 42.81], [20.07, 42.59]]]}}, {"type": "Feature", "properties": {"name": "Bosnië en Herzegovina", "name_nl": "Bosnië en Herzegovina", "name_en": "Bosnia and Herz.", "type": "country"}, "geometry": {"type": "Polygon", "coordinates": [[[18.56, 42.65], [17.67, 43.03], [17.3, 43.45], [16.92, 43.67], [16.46, 44.04], [16.24, 44.35], [15.75, 44.82], [15.96, 45.23], [16.32, 45.0], [16.53, 45.21], [17.0, 45.23], [17.86, 45.07], [18.55, 45.08], [19.01, 44.86], [19.01, 44.86], [19.37, 44.86], [19.12, 44.42], [19.6, 44.04], [19.45, 43.57], [19.22, 43.52], [19.03, 43.43], [18.71, 43.2], [18.56, 42.65]]]}}, {"type": "Feature", "properties": {"name": "Portugal", "name_nl": "Portugal", "name_en": "Portugal", "type": "country"}, "geometry": {"type": "Polygon", "coordinates": [[[-9.03, 41.88], [-8.67, 42.13], [-8.26, 42.28], [-8.01, 41.79], [-7.42, 41.79], [-7.25, 41.92], [-6.67, 41.88], [-6.39, 41.38], [-6.85, 41.11], [-6.86, 40.33], [-7.03, 40.18], [-7.07, 39.71], [-7.5, 39.63], [-7.1, 39.03], [-7.37, 38.37], [-7.03, 38.08], [-7.17, 37.8], [-7.54, 37.43], [-7.45, 37.1], [-7.86, 36.84], [-8.38, 36.98], [-8.9, 36.87], [-8.75, 37.65], [-8.84, 38.27], [-9.29, 38.36], [-9.53, 38.74], [-9.45, 39.39], [-9.05, 39.76], [-8.98, 40.16], [-8.77, 40.76], [-8.79, 41.18], [-8.99, 41.54], [-9.03, 41.88]]]}}, {"type": "Feature", "properties": {"name": "Moldavië", "name_nl": "Moldavië", "name_en": "Moldova", "type": "country"}, "geometry": {"type": "Polygon", "coordinates": [[[26.62, 48.22], [26.86, 48.37], [27.52, 48.47], [28.26, 48.16], [28.67, 48.12], [29.12, 47.85], [29.05, 47.51], [29.42, 47.35], [29.56, 46.93], [29.91, 46.67], [29.84, 46.53], [30.02, 46.42], [29.76, 46.35], [29.17, 46.38], [29.07, 46.52], [28.86, 46.44], [28.93, 46.26], [28.66, 45.94], [28.49, 45.6], [28.23, 45.49], [28.05, 45.94], [28.16, 46.37], [28.13, 46.81], [27.55, 47.41], [27.23, 47.83], [26.92, 48.12], [26.62, 48.22]]]}}, {"type": "Feature", "properties": {"name": "IJsland", "name_nl": "IJsland", "name_en": "Iceland", "type": "country"}, "geometry": {"type": "Polygon", "coordinates": [[[-14.51, 66.46], [-14.74, 65.81], [-13.61, 65.13], [-14.91, 64.36], [-17.79, 63.68], [-18.66, 63.5], [-19.97, 63.64], [-22.76, 63.96], [-21.78, 64.4], [-23.96, 64.89], [-22.18, 65.08], [-22.23, 65.38], [-24.33, 65.61], [-23.65, 66.26], [-22.13, 66.41], [-20.58, 65.73], [-19.06, 66.28], [-17.8, 65.99], [-16.17, 66.53], [-14.51, 66.46]]]}}, {"type": "Feature", "properties": {"name": "Amsterdam", "region": "Nederland", "type": "city"}, "geometry": {"type": "Point", "coordinates": [4.9, 52.37]}}, {"type": "Feature", "properties": {"name": "Brussel", "region": "België", "type": "city"}, "geometry": {"type": "Point", "coordinates": [4.35, 50.85]}}, {"type": "Feature", "properties": {"name": "Luxemburg", "region": "Luxemburg", "type": "city"}, "geometry": {"type": "Point", "coordinates": [6.13, 49.61]}}, {"type": "Feature", "properties": {"name": "Oslo", "region": "Noorwegen", "type": "city"}, "geometry": {"type": "Point", "coordinates": [10.75, 59.91]}}, {"type": "Feature", "properties": {"name": "Stockholm", "region": "Zweden", "type": "city"}, "geometry": {"type": "Point", "coordinates": [18.07, 59.33]}}, {"type": "Feature", "properties": {"name": "Moskou", "region": "Rusland", "type": "city"}, "geometry": {"type": "Point", "coordinates": [37.62, 55.76]}}, {"type": "Feature", "properties": {"name": "Londen", "region": "Verenigd Koninkrijk", "type": "city"}, "geometry": {"type": "Point", "coordinates": [-0.13, 51.51]}}, {"type": "Feature", "properties": {"name": "Parijs", "region": "Frankrijk", "type": "city"}, "geometry": {"type": "Point", "coordinates": [2.35, 48.86]}}, {"type": "Feature", "properties": {"name": "Bern", "region": "Zwitserland", "type": "city"}, "geometry": {"type": "Point", "coordinates": [7.45, 46.95]}}, {"type": "Feature", "properties": {"name": "Wenen", "region": "Oostenrijk", "type": "city"}, "geometry": {"type": "Point", "coordinates": [16.37, 48.21]}}, {"type": "Feature", "properties": {"name": "Berlijn", "region": "Duitsland", "type": "city"}, "geometry": {"type": "Point", "coordinates": [13.4, 52.52]}}, {"type": "Feature", "properties": {"name": "Warschau", "region": "Polen", "type": "city"}, "geometry": {"type": "Point", "coordinates": [21.01, 52.23]}}, {"type": "Feature", "properties": {"name": "Rome", "region": "Italië", "type": "city"}, "geometry": {"type": "Point", "coordinates": [12.5, 41.9]}}, {"type": "Feature", "properties": {"name": "Madrid", "region": "Spanje", "type": "city"}, "geometry": {"type": "Point", "coordinates": [-3.7, 40.42]}}, {"type": "Feature", "properties": {"name": "Schelde", "type": "river"}, "geometry": {"type": "LineString", "coordinates": [[3.25, 50.0], [3.35, 50.45], [3.72, 51.05], [4.4, 51.22], [4.1, 51.38], [3.6, 51.44]]}}, {"type": "Feature", "properties": {"name": "Volga", "type": "river"}, "geometry": {"type": "LineString", "coordinates": [[32.47, 57.25], [35.9, 56.86], [39.87, 57.63], [44.0, 56.33], [49.1, 55.79], [50.1, 53.2], [46.0, 51.5], [44.5, 48.7], [48.0, 46.3]]}}, {"type": "Feature", "properties": {"name": "Thames", "type": "river"}, "geometry": {"type": "LineString", "coordinates": [[-2.0, 51.69], [-1.25, 51.75], [-0.97, 51.46], [-0.5, 51.45], [-0.12, 51.5], [0.7, 51.5]]}}, {"type": "Feature", "properties": {"name": "Seine", "type": "river"}, "geometry": {"type": "LineString", "coordinates": [[4.7, 47.5], [4.08, 48.3], [2.68, 48.4], [2.35, 48.85], [1.1, 49.44], [0.1, 49.48]]}}, {"type": "Feature", "properties": {"name": "Rhône", "type": "river"}, "geometry": {"type": "LineString", "coordinates": [[8.38, 46.56], [6.85, 46.4], [6.14, 46.2], [4.84, 45.76], [4.84, 44.93], [4.8, 43.95], [4.63, 43.68], [4.84, 43.33]]}}, {"type": "Feature", "properties": {"name": "Donau", "type": "river"}, "geometry": {"type": "LineString", "coordinates": [[8.18, 48.09], [10.0, 48.4], [12.1, 49.0], [14.3, 48.3], [16.37, 48.2], [17.1, 48.14], [19.04, 47.5], [19.8, 45.25], [20.45, 44.82], [22.6, 44.6], [24.8, 43.7], [28.0, 44.3], [28.7, 45.2], [29.6, 45.3]]}}, {"type": "Feature", "properties": {"name": "Alpen", "type": "mountain"}, "geometry": {"type": "Polygon", "coordinates": [[[5.5, 44.2], [6.5, 45.6], [7.5, 46.2], [9.5, 47.0], [12.0, 47.5], [14.5, 47.6], [15.5, 47.2], [15.0, 46.5], [13.0, 46.2], [10.5, 45.8], [7.5, 45.0], [5.5, 44.2]]]}}, {"type": "Feature", "properties": {"name": "Pyreneeën", "type": "mountain"}, "geometry": {"type": "Polygon", "coordinates": [[[-1.8, 43.4], [0.5, 42.9], [3.2, 42.5], [3.0, 42.2], [0.5, 42.4], [-1.8, 43.1], [-1.8, 43.4]]]}}, {"type": "Feature", "properties": {"name": "Oeral", "type": "mountain"}, "geometry": {"type": "Polygon", "coordinates": [[[62.0, 68.0], [60.0, 63.0], [59.0, 58.0], [57.0, 52.0], [55.5, 52.0], [57.5, 58.0], [58.5, 63.0], [60.5, 68.0], [62.0, 68.0]]]}}, {"type": "Feature", "properties": {"name": "Kaukasus", "type": "mountain"}, "geometry": {"type": "Polygon", "coordinates": [[[37.0, 45.0], [42.0, 43.5], [47.5, 41.5], [49.8, 40.5], [48.5, 40.0], [44.0, 41.5], [40.0, 43.0], [37.0, 45.0]]]}}, {"type": "Feature", "properties": {"name": "Oostzee", "type": "sea"}, "geometry": {"type": "Polygon", "coordinates": [[[10.5, 54.5], [14.0, 54.0], [19.0, 54.5], [24.5, 56.5], [29.0, 60.0], [25.0, 60.5], [23.0, 65.5], [18.0, 63.0], [18.0, 59.0], [12.5, 56.0], [10.5, 54.5]]]}}, {"type": "Feature", "properties": {"name": "Noordzee", "type": "sea"}, "geometry": {"type": "Polygon", "coordinates": [[[-2.5, 52.0], [1.0, 51.2], [3.5, 51.5], [8.0, 54.0], [8.5, 57.5], [5.0, 61.0], [-1.0, 61.0], [-2.0, 57.0], [-2.5, 52.0]]]}}, {"type": "Feature", "properties": {"name": "Middellandse Zee", "type": "sea"}, "geometry": {"type": "Polygon", "coordinates": [[[-5.0, 36.0], [5.0, 42.5], [14.0, 41.0], [19.0, 40.0], [24.0, 38.0], [34.0, 35.0], [34.0, 31.5], [20.0, 32.0], [10.0, 36.0], [-1.0, 35.5], [-5.0, 36.0]]]}}, {"type": "Feature", "properties": {"name": "Straat van Gibraltar", "type": "strait"}, "geometry": {"type": "Polygon", "coordinates": [[[-5.8, 35.85], [-5.3, 35.95], [-5.3, 36.15], [-5.8, 36.05], [-5.8, 35.85]]]}}]};


// Small alias map for province names that appear in some GeoJSON sources (Frisian names etc.)
const PROVINCE_ALIASES = {
    'Fryslân': 'Friesland',
    'Fryslan': 'Friesland',
    'Frÿslan': 'Friesland'
};

// Initialize the game
function init() {
    selectLevel(1);
    updateStats();
    displayHighScore();
    
    // Load question limit from localStorage
    questionLimit = getQuestionLimit();
    const numQuestionsInput = document.getElementById('num-questions');
    numQuestionsInput.value = questionLimit;
    updateStats(); // Update stats after loading the saved preference
    
    // Add event listeners for settings
    const timerCheckbox = document.getElementById('enable-timer');
    timerCheckbox.addEventListener('change', function() {
        timerEnabled = this.checked;
        updateTimerDisplay();
    });
    
    numQuestionsInput.addEventListener('change', function() {
        const validatedValue = validateQuestionLimit(this.value);
        this.value = validatedValue;
        questionLimit = validatedValue;
        saveQuestionLimit(questionLimit);
        updateStats(); // Update the display when question limit changes
    });
    
    numQuestionsInput.addEventListener('blur', function() {
        const validatedValue = validateQuestionLimit(this.value);
        this.value = validatedValue;
        questionLimit = validatedValue;
        saveQuestionLimit(questionLimit);
        updateStats(); // Update the display when question limit changes
    });
}

// Timer functions
function startTimer() {
    if (!timerEnabled) return;
    
    timerSeconds = 0;
    updateTimerDisplay();
    
    timerInterval = setInterval(() => {
        timerSeconds++;
        updateTimerDisplay();
    }, 1000);
}

function stopTimer() {
    if (timerInterval) {
        clearInterval(timerInterval);
        timerInterval = null;
    }
}

function updateTimerDisplay() {
    const timerDisplay = document.getElementById('timer-display');
    const timerValue = document.getElementById('timer-value');
    
    if (timerEnabled) {
        timerDisplay.style.display = 'inline';
        const minutes = Math.floor(timerSeconds / 60);
        const seconds = timerSeconds % 60;
        timerValue.textContent = `${minutes}:${seconds.toString().padStart(2, '0')}`;
    } else {
        timerDisplay.style.display = 'none';
    }
}

// Map zoom state
let currentZoom = 1;
const MIN_ZOOM = 0.5;
const MAX_ZOOM = 3;
const ZOOM_STEP = 0.25;

// Zoom functions
function zoomIn() {
    currentZoom = Math.min(MAX_ZOOM, currentZoom + ZOOM_STEP);
    applyZoom();
}

function zoomOut() {
    currentZoom = Math.max(MIN_ZOOM, currentZoom - ZOOM_STEP);
    applyZoom();
}

function resetZoom() {
    currentZoom = 1;
    applyZoom();
}

function applyZoom() {
    const mapElement = document.getElementById('map');
    if (mapElement) {
        mapElement.style.transform = `scale(${currentZoom})`;
    }
}

// Select level
function selectLevel(level) {
    currentLevel = level;
    
    // Update button states
    document.getElementById('level1-btn').classList.toggle('active', level === 1);
    document.getElementById('level2-btn').classList.toggle('active', level === 2);
    document.getElementById('level3-btn').classList.toggle('active', level === 3);
    document.getElementById('level4-btn').classList.toggle('active', level === 4);
    const level5Btn = document.getElementById('level5-btn');
    if (level5Btn) level5Btn.classList.toggle('active', level === 5);
    const level6Btn = document.getElementById('level6-btn');
    if (level6Btn) level6Btn.classList.toggle('active', level === 6);
    const level7Btn = document.getElementById('level7-btn');
    if (level7Btn) level7Btn.classList.toggle('active', level === 7);
    
    // Update dropdown selection
    const dropdown = document.getElementById('level-dropdown');
    if (dropdown) {
        dropdown.value = level.toString();
    }
    
    // Reset game state
    currentQuestionIndex = 0;
    score = 0;
    gameStarted = false;
    askedQuestions = [];
    
    // Stop timer
    stopTimer();
    timerSeconds = 0;
    updateTimerDisplay();
    
    // Set current data based on level
    currentData = level === 1 ? level1Data : (level === 2 ? level2Data : (level === 3 ? level3Data : (level === 4 ? level4Data : (level === 5 ? level5Data : (level === 6 ? level6Data : level7Data)))));
    
    // Reset UI
    document.getElementById('answer-input').value = '';
    document.getElementById('feedback').className = 'feedback hidden';
    document.getElementById('feedback').textContent = '';
    document.getElementById('start-btn').style.display = 'inline-block';
    document.getElementById('next-btn').style.display = 'none';
    document.getElementById('restart-btn').style.display = 'none';
    document.getElementById('submit-btn').disabled = false;
    
    updateStats();
    displayHighScore();
    drawMap();
}

// Start the game
function startGame() {
    gameStarted = true;
    currentQuestionIndex = 0;
    score = 0;
    askedQuestions = [];
    
    // Shuffle the data
    let dataToUse = [...currentData].sort(() => Math.random() - 0.5);
    
    // Apply question limit
    if (questionLimit !== 'all') {
        const limit = parseInt(questionLimit);
        dataToUse = dataToUse.slice(0, limit);
    }
    
    shuffledData = dataToUse;
    
    document.getElementById('start-btn').style.display = 'none';
    document.getElementById('submit-btn').disabled = false;
    document.getElementById('answer-input').disabled = false;
    
    // Start timer if enabled
    startTimer();
    
    nextQuestion();
}

// Display next question
function nextQuestion() {
    if (currentQuestionIndex >= shuffledData.length) {
        endGame();
        return;
    }
    
    document.getElementById('answer-input').value = '';
    document.getElementById('answer-input').disabled = false;
    document.getElementById('feedback').className = 'feedback hidden';
    document.getElementById('feedback').textContent = '';
    document.getElementById('next-btn').style.display = 'none';
    document.getElementById('submit-btn').disabled = false;
    
    updateStats();
    drawMap();
    
    // Focus on input
    document.getElementById('answer-input').focus();
}

// Check the answer
function checkAnswer() {
    if (!gameStarted || currentQuestionIndex >= shuffledData.length) return;
    
    const userAnswer = document.getElementById('answer-input').value.trim().toLowerCase();
    const currentQuestion = shuffledData[currentQuestionIndex];
    
    if (!userAnswer) {
        alert('Voer alstublieft een antwoord in!');
        return;
    }
    
    const feedback = document.getElementById('feedback');
    let isCorrect = false;
    
    // Check province name or capital
    if (currentLevel === 1) {
        // Check if asking for province or capital
        const askingForProvince = askedQuestions[currentQuestionIndex] === 'province';
        
        if (askingForProvince) {
            isCorrect = normalizeAnswer(userAnswer) === normalizeAnswer(currentQuestion.name);
            if (isCorrect) {
                feedback.textContent = `Correct! Het is ${currentQuestion.name}.`;
            } else {
                feedback.textContent = `Helaas, het juiste antwoord is ${currentQuestion.name}.`;
            }
        } else {
            isCorrect = normalizeAnswer(userAnswer) === normalizeAnswer(currentQuestion.capital);
            if (isCorrect) {
                feedback.textContent = `Correct! De hoofdstad is ${currentQuestion.capital}.`;
            } else {
                feedback.textContent = `Helaas, de hoofdstad is ${currentQuestion.capital}.`;
            }
        }
    } else if (currentLevel === 2) {
        // Level 2: waterways
        isCorrect = normalizeAnswer(userAnswer) === normalizeAnswer(currentQuestion.name);
        if (isCorrect) {
            feedback.textContent = `Correct! Het is de ${currentQuestion.name}.`;
        } else {
            feedback.textContent = `Helaas, het juiste antwoord is de ${currentQuestion.name}.`;
        }
    } else if (currentLevel === 3 || currentLevel === 4 || currentLevel === 5 || currentLevel === 6 || currentLevel === 7) {
        // Level 3: northern cities; Level 4: eastern cities and rivers; Level 5/6: advanced mixed geography levels; Level 7: Europa
        const userNorm = normalizeAnswer(userAnswer);
        const nameNorm = normalizeAnswer(currentQuestion.name);
        isCorrect = userNorm === nameNorm ||
            (currentQuestion.aliases && currentQuestion.aliases.some(alias => userNorm === normalizeAnswer(alias)));
        if (isCorrect) {
            feedback.textContent = `Correct! Het is ${currentQuestion.name}.`;
        } else {
            feedback.textContent = `Helaas, het juiste antwoord is ${currentQuestion.name}.`;
        }
    }
    
    if (isCorrect) {
        score++;
        feedback.className = 'feedback correct';
    } else {
        feedback.className = 'feedback incorrect';
    }
    
    document.getElementById('answer-input').disabled = true;
    document.getElementById('submit-btn').disabled = true;
    
    currentQuestionIndex++;
    updateStats();
    
    if (currentQuestionIndex < shuffledData.length) {
        document.getElementById('next-btn').style.display = 'inline-block';
    } else {
        setTimeout(endGame, 1500);
    }
}

// Normalize answer for comparison
function normalizeAnswer(answer) {
    // Normalize unicode and strip combining diacritics first
    try {
        answer = answer.normalize('NFD').replace(/[-\u0300-\u036f]/g, '');
    } catch (e) {
        // normalize may not be supported in some environments; ignore
    }

    return answer
        .toLowerCase()
        .replace(/\s+/g, '')
        .replace(/-/g, '')
        .replace(/['\u2018\u2019\u02bc]/g, '')
        // fall back simple replacements for characters that sometimes remain
        .replace(/ë/g, 'e')
        .replace(/ï/g, 'i')
        .replace(/ö/g, 'o')
        .replace(/ü/g, 'u')
        .replace(/é/g, 'e')
        .replace(/è/g, 'e')
        .replace(/ê/g, 'e')
        .replace(/á/g, 'a')
        .replace(/à/g, 'a')
        .replace(/â/g, 'a')
        .replace(/ó/g, 'o')
        .replace(/ò/g, 'o')
        .replace(/ô/g, 'o');
}

// End the game
function endGame() {
    // Stop timer
    stopTimer();
    
    const totalQuestions = shuffledData.length;
    const percentage = Math.round((score / totalQuestions) * 100);
    
    // Check and save high score
    const isNewHighScore = saveHighScore(currentLevel, score);
    displayHighScore();
    
    const feedback = document.getElementById('feedback');
    feedback.className = 'feedback';
    feedback.style.background = '#e7f3ff';
    feedback.style.color = '#004085';
    feedback.style.border = '2px solid #b8daff';
    
    let message = `Spel afgelopen! Je score: ${score}/${totalQuestions} (${percentage}%)`;
    
    if (timerEnabled) {
        const minutes = Math.floor(timerSeconds / 60);
        const seconds = timerSeconds % 60;
        message += ` | Tijd: ${minutes}:${seconds.toString().padStart(2, '0')}`;
    }
    
    if (isNewHighScore) {
        message += ' 🏆 Nieuw record!';
    }
    
    if (percentage === 100) {
        message += ' 🎉 Perfect!';
    } else if (percentage >= 80) {
        message += ' 👍 Uitstekend!';
    } else if (percentage >= 60) {
        message += ' 👌 Goed gedaan!';
    } else {
        message += ' 💪 Blijf oefenen!';
    }
    
    feedback.textContent = message;
    
    document.getElementById('next-btn').style.display = 'none';
    document.getElementById('restart-btn').style.display = 'inline-block';
    document.getElementById('answer-input').disabled = true;
}

// Restart the game
function restartGame() {
    selectLevel(currentLevel);
}

// Update statistics display
function updateStats() {
    document.getElementById('score').textContent = score;
    let total;
    if (gameStarted) {
        total = shuffledData.length;
    } else {
        // Calculate expected total based on questionLimit setting
        if (questionLimit === 'all') {
            total = currentData.length;
        } else {
            const limit = parseInt(questionLimit, 10);
            total = Math.min(limit, currentData.length);
        }
    }
    document.getElementById('question-number').textContent = `${currentQuestionIndex}/${total}`;
}

// Draw the map
function drawMap() {
    const mapSvg = document.getElementById('map');
    // Clear previous render but preserve any <defs> (gradients, patterns, filters)
    const existingDefs = mapSvg.querySelector('defs');
    Array.from(mapSvg.children).forEach(child => {
        if (child !== existingDefs) mapSvg.removeChild(child);
    });
    
    if (!gameStarted) {
        // Show welcome message
        const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        text.setAttribute('x', '350');
        text.setAttribute('y', '300');
        text.setAttribute('text-anchor', 'middle');
        text.setAttribute('font-size', '24');
        text.setAttribute('fill', '#666');
        text.textContent = 'Klik op "Start Spel" om te beginnen!';
        mapSvg.appendChild(text);
        return;
    }
    
    if (currentQuestionIndex >= shuffledData.length) return;
    
    const paths = currentLevel === 1 ? provincePaths : waterwayPaths;
    const currentQuestion = shuffledData[currentQuestionIndex];

    // If drawing waterways (level 2), render both polygon water bodies and river lines
    if (currentLevel === 2) {
        renderWatersEmbedded();
        setQuestionText();
        return;
    }

    // If drawing cities (level 3), render cities as points on the northern provinces map
    if (currentLevel === 3) {
        renderNorthernCities();
        setQuestionText();
        return;
    }

    // If drawing eastern cities and rivers (level 4), render cities and rivers
    if (currentLevel === 4) {
        renderEasternCitiesAndRivers();
        setQuestionText();
        return;
    }

    // If drawing central/southern cities and landmarks (level 5), render cities, rivers and landmarks
    if (currentLevel === 5) {
        renderCentralSouthernCities();
        setQuestionText();
        return;
    }

    // If drawing western cities, waters and landmarks (level 6), render mixed western features
    if (currentLevel === 6) {
        renderWesternCitiesAndWaters();
        setQuestionText();
        return;
    }

    // If drawing Europe (level 7), render European geography
    if (currentLevel === 7) {
        renderEurope();
        setQuestionText();
        return;
    }

    // SVG defs live in index.html (landPatternBase, waterGradient, waterGlow, shadow)
    
    // For level 1, randomly decide whether to ask for province or capital
    if (currentLevel === 1 && askedQuestions.length === currentQuestionIndex) {
        askedQuestions.push(Math.random() < 0.5 ? 'province' : 'capital');
    }
    
    // Draw all regions
    const tintMap = {
        "Groningen": '#c77c6b',
        "Friesland": '#d08a6c',
        "Drenthe": '#c46f53',
        "Overijssel": '#d89b75',
        "Flevoland": '#e0ad86',
        "Gelderland": '#b96447',
        "Utrecht": '#c97a5f',
        "Noord-Holland": '#d99b78',
        "Zuid-Holland": '#cc6b4a',
        "Zeeland": '#b86b53',
        "Noord-Brabant": '#b85a45',
        "Limburg": '#a84f3f'
    };

    // Try loading a detailed local GeoJSON first (assets/provinces.geojson).
    // If that fails (missing file, parse error, or CORS when served via file://), fall back to the embedded simplified dataset.
    (async function tryLoadLocalGeoJSON() {
        // Check if d3 is available before attempting GeoJSON rendering
        if (typeof d3 === 'undefined') {
            console.warn('d3.js not loaded, using fallback rendering');
            renderFallback(paths, tintMap, mapSvg, currentLevel, currentQuestion);
            setQuestionText();
            return;
        }
        
        try {
            const resp = await fetch('assets/provinces.geojson');
            if (resp.ok) {
                const geo = await resp.json();
                renderGeoJSON(geo);
                setQuestionText();
                return;
            }
        } catch (e) {
            // fetch can fail under file:// or if the file is absent — fall back below
            console.warn('Failed to load provinces.geojson:', e);
        }

        // final fallback: embedded simplified data
        try {
            renderGeoJSON(EMBEDDED_PROVINCES);
            setQuestionText();
            return;
        } catch (err) {
            // fall through to the old vector fallback
            console.warn('Failed to render embedded provinces:', err);
            renderFallback(paths, tintMap, mapSvg, currentLevel, currentQuestion);
            setQuestionText();
        }
    })();

    // Render helper for water bodies (Level 2) using embedded paths
    function renderWatersEmbedded() {
        // First, render water body polygons (lakes, seas, estuaries) as filled shapes
        Object.keys(waterPolygonPaths).forEach(waterName => {
            const pathData = waterPolygonPaths[waterName];
            
            // Create water body polygon with fill
            const waterBody = document.createElementNS('http://www.w3.org/2000/svg', 'path');
            waterBody.setAttribute('d', pathData);
            waterBody.setAttribute('class', 'map-waterbody');
            waterBody.setAttribute('fill', 'url(#waterGradient)');
            waterBody.setAttribute('opacity', '0.85');
            waterBody.setAttribute('data-region', waterName);
            
            // Add shore outline for better visibility
            const shore = document.createElementNS('http://www.w3.org/2000/svg', 'path');
            shore.setAttribute('d', pathData);
            shore.setAttribute('class', 'map-waterbody-shore');
            
            mapSvg.appendChild(waterBody);
            mapSvg.appendChild(shore);
            
            // Highlight if this is the current question
            if (currentQuestion && normalizeAnswer(waterName) === normalizeAnswer(currentQuestion.name)) {
                waterBody.classList.add('highlighted');
                waterBody.setAttribute('opacity', '1');
            }
        });

        // Render rivers and canals as lines
        Object.keys(waterwayPaths).forEach(riverName => {
            const pathData = waterwayPaths[riverName];
            const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
            path.setAttribute('d', pathData);
            path.setAttribute('class', 'map-waterway');
            path.setAttribute('fill', 'none');
            path.setAttribute('stroke', 'url(#waterGradient)');
            path.setAttribute('stroke-width', '8');
            path.setAttribute('filter', 'url(#waterGlow)');
            path.setAttribute('stroke-linecap', 'round');
            path.setAttribute('stroke-linejoin', 'round');
            path.setAttribute('data-region', riverName);
            
            mapSvg.appendChild(path);
            
            // Highlight if this is the current question
            if (currentQuestion && normalizeAnswer(riverName) === normalizeAnswer(currentQuestion.name)) {
                path.classList.add('highlighted');
            }
        });
    }

    // Render helper for northern cities (Level 3)
    async function renderNorthernCities() {
        // Check if d3 is available before attempting GeoJSON rendering
        if (typeof d3 === 'undefined') {
            console.warn('d3.js not loaded, cannot render cities');
            return;
        }
        
        try {
            // First, load and render the northern provinces as background
            const provincesResp = await fetch('assets/provinces.geojson');
            if (provincesResp.ok) {
                const provincesGeo = await provincesResp.json();
                
                // Filter to only show northern provinces (Groningen, Friesland, Drenthe)
                const northernProvinces = provincesGeo.features.filter(feat => {
                    const name = feat.properties.name || feat.properties.NAME || '';
                    return ['Groningen', 'Friesland', 'Drenthe'].includes(name);
                });
                
                // Create a filtered GeoJSON with only northern provinces
                const northernProvincesGeo = {
                    type: 'FeatureCollection',
                    features: northernProvinces
                };
                
                const width = 700, height = 600;
                const projection = d3.geoMercator().fitSize([width, height], northernProvincesGeo);
                const pathGen = d3.geoPath().projection(projection);
                
                // Draw provinces as background
                const tintMap = {
                    "Groningen": '#c77c6b',
                    "Friesland": '#d08a6c',
                    "Drenthe": '#c46f53'
                };
                
                northernProvinces.forEach(feat => {
                    let name = feat.properties.name || feat.properties.NAME || 'Unknown';
                    const d = pathGen(feat);
                    
                    if (!d) return;
                    
                    const tint = tintMap[name] || '#d09a74';
                    const group = document.createElementNS('http://www.w3.org/2000/svg', 'g');
                    const base = document.createElementNS('http://www.w3.org/2000/svg', 'path');
                    base.setAttribute('d', d);
                    base.setAttribute('fill', tint);
                    base.setAttribute('class', 'map-region');
                    base.setAttribute('data-region', name);
                    group.appendChild(base);
                    
                    // borders
                    const inner = document.createElementNS('http://www.w3.org/2000/svg', 'path');
                    inner.setAttribute('d', d);
                    inner.setAttribute('fill', 'none');
                    inner.setAttribute('stroke', '#fff');
                    inner.setAttribute('stroke-width', '0.9');
                    inner.setAttribute('pointer-events', 'none');
                    group.appendChild(inner);
                    
                    mapSvg.appendChild(group);
                });
                
                // Now load and render cities
                const citiesResp = await fetch('assets/northern_cities.geojson');
                if (citiesResp.ok) {
                    const citiesGeo = await citiesResp.json();
                    
                    citiesGeo.features.forEach(feat => {
                        const cityName = feat.properties.name;
                        const coords = projection(feat.geometry.coordinates);
                        
                        if (!coords) return;
                        
                        const [cx, cy] = coords;
                        
                        // Draw city marker (circle)
                        const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
                        circle.setAttribute('cx', cx);
                        circle.setAttribute('cy', cy);
                        circle.setAttribute('r', '6');
                        circle.setAttribute('class', 'city-marker');
                        circle.setAttribute('data-region', cityName);
                        
                        // Highlight if this is the current question
                        if (currentQuestion && normalizeAnswer(cityName) === normalizeAnswer(currentQuestion.name)) {
                            circle.classList.add('highlighted');
                            circle.setAttribute('r', '10');
                        }
                        
                        mapSvg.appendChild(circle);
                        
                        // Draw city label - show ??? for all cities except show actual name for highlighted city
                        const label = document.createElementNS('http://www.w3.org/2000/svg', 'text');
                        label.setAttribute('x', cx);
                        label.setAttribute('y', cy - 10);
                        label.setAttribute('text-anchor', 'middle');
                        label.setAttribute('class', 'city-label');
                        
                        // Only show the name for the current question city, hide others with ???
                        if (currentQuestion && normalizeAnswer(cityName) === normalizeAnswer(currentQuestion.name)) {
                            label.textContent = '???';
                            label.classList.add('highlighted');
                        } else {
                            label.textContent = '???';
                        }
                        
                        mapSvg.appendChild(label);
                    });
                } else {
                    console.warn('Failed to load northern_cities.geojson');
                }
            } else {
                console.warn('Failed to load provinces.geojson');
            }
        } catch (e) {
            console.error('Error rendering northern cities:', e);
        }
    }

    // Fallback rendering for Level 4 when d3.js is not available
    function renderEasternCitiesAndRiversFallback() {
        // Draw simplified provinces as background using embedded paths
        const easternProvincePaths = {
            "Overijssel": provincePaths["Overijssel"],
            "Flevoland": provincePaths["Flevoland"],
            "Gelderland": provincePaths["Gelderland"]
        };
        
        const tintMap = {
            "Overijssel": '#d89b75',
            "Flevoland": '#e0ad86',
            "Gelderland": '#b96447'
        };
        
        // Draw provinces
        Object.keys(easternProvincePaths).forEach(name => {
            const pathData = easternProvincePaths[name];
            const tint = tintMap[name] || '#d09a74';
            
            const group = document.createElementNS('http://www.w3.org/2000/svg', 'g');
            const base = document.createElementNS('http://www.w3.org/2000/svg', 'path');
            base.setAttribute('d', pathData);
            base.setAttribute('fill', tint);
            base.setAttribute('class', 'map-region');
            base.setAttribute('data-region', name);
            group.appendChild(base);
            
            const inner = document.createElementNS('http://www.w3.org/2000/svg', 'path');
            inner.setAttribute('d', pathData);
            inner.setAttribute('fill', 'none');
            inner.setAttribute('stroke', '#fff');
            inner.setAttribute('stroke-width', '0.9');
            inner.setAttribute('pointer-events', 'none');
            group.appendChild(inner);
            
            mapSvg.appendChild(group);
        });
        
        // Draw rivers using embedded waterwayPaths
        const level4Rivers = ["IJssel", "Maas", "Waal", "Neder-Rijn"];
        level4Rivers.forEach(riverName => {
            const pathData = waterwayPaths[riverName];
            if (!pathData) return;
            
            const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
            path.setAttribute('d', pathData);
            path.setAttribute('class', 'map-waterway');
            path.setAttribute('fill', 'none');
            path.setAttribute('stroke', 'url(#waterGradient)');
            path.setAttribute('stroke-width', '8');
            path.setAttribute('filter', 'url(#waterGlow)');
            path.setAttribute('stroke-linecap', 'round');
            path.setAttribute('stroke-linejoin', 'round');
            path.setAttribute('data-region', riverName);
            
            // Highlight if this is the current question
            if (currentQuestion && normalizeAnswer(riverName) === normalizeAnswer(currentQuestion.name)) {
                path.classList.add('highlighted');
            }
            
            mapSvg.appendChild(path);
        });
        
        // Draw lakes using waterPolygonPaths
        const level4Lakes = ["IJsselmeer", "Markermeer"];
        level4Lakes.forEach(lakeName => {
            const pathData = waterPolygonPaths[lakeName];
            if (!pathData) return;
            
            const lakeBody = document.createElementNS('http://www.w3.org/2000/svg', 'path');
            lakeBody.setAttribute('d', pathData);
            lakeBody.setAttribute('class', 'map-waterbody');
            lakeBody.setAttribute('fill', 'url(#waterGradient)');
            lakeBody.setAttribute('opacity', '0.7');
            lakeBody.setAttribute('stroke', '#176fb0');
            lakeBody.setAttribute('stroke-width', '2');
            lakeBody.setAttribute('data-region', lakeName);
            
            // Highlight if this is the current question
            if (currentQuestion && normalizeAnswer(lakeName) === normalizeAnswer(currentQuestion.name)) {
                lakeBody.classList.add('highlighted');
                lakeBody.setAttribute('opacity', '0.95');
            }
            
            mapSvg.appendChild(lakeBody);
        });
        
        // Draw cities at fixed coordinates (simplified positions)
        const level4Cities = [
            { name: "Emmeloord", x: 410, y: 195 },
            { name: "Kampen", x: 515, y: 214 },
            { name: "Zwolle", x: 488, y: 246 },
            { name: "Almelo", x: 640, y: 275 },
            { name: "Hengelo", x: 670, y: 294 },
            { name: "Enschede", x: 697, y: 310 },
            { name: "Deventer", x: 530, y: 285 },
            { name: "Lelystad", x: 365, y: 230 },
            { name: "Almere", x: 340, y: 265 },
            { name: "Zutphen", x: 540, y: 325 },
            { name: "Doetinchem", x: 580, y: 368 },
            { name: "Arnhem", x: 500, y: 340 },
            { name: "Wageningen", x: 450, y: 345 },
            { name: "Nijmegen", x: 495, y: 382 }
        ];
        
        level4Cities.forEach(city => {
            const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
            circle.setAttribute('cx', city.x);
            circle.setAttribute('cy', city.y);
            circle.setAttribute('r', '6');
            circle.setAttribute('class', 'city-marker');
            circle.setAttribute('data-region', city.name);
            
            // Highlight if this is the current question
            if (currentQuestion && normalizeAnswer(city.name) === normalizeAnswer(currentQuestion.name)) {
                circle.classList.add('highlighted');
                circle.setAttribute('r', '10');
            }
            
            mapSvg.appendChild(circle);
            
            // Draw city label
            const label = document.createElementNS('http://www.w3.org/2000/svg', 'text');
            label.setAttribute('x', city.x);
            label.setAttribute('y', city.y - 10);
            label.setAttribute('text-anchor', 'middle');
            label.setAttribute('class', 'city-label');
            label.textContent = '???';
            
            if (currentQuestion && normalizeAnswer(city.name) === normalizeAnswer(currentQuestion.name)) {
                label.classList.add('highlighted');
            }
            
            mapSvg.appendChild(label);
        });
        
        // Draw Twente region outline (simplified rectangular boundary)
        const regionPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        regionPath.setAttribute('d', TWENTE_REGION_PATH);
        regionPath.setAttribute('class', 'map-region-highlight');
        regionPath.setAttribute('fill', 'none');
        regionPath.setAttribute('stroke', '#ff9900');
        regionPath.setAttribute('stroke-width', '3');
        regionPath.setAttribute('stroke-dasharray', '10,5');
        regionPath.setAttribute('opacity', '0.6');
        regionPath.setAttribute('data-region', 'Twente');
        
        // Highlight if this is the current question
        if (currentQuestion && normalizeAnswer('Twente') === normalizeAnswer(currentQuestion.name)) {
            regionPath.classList.add('highlighted');
            regionPath.setAttribute('fill', 'rgba(255, 153, 0, 0.15)');
            regionPath.setAttribute('opacity', '1.0');
            regionPath.setAttribute('stroke-width', '5');
        }
        
        mapSvg.appendChild(regionPath);
    }

    // Render helper for eastern cities and rivers (Level 4)
    async function renderEasternCitiesAndRivers() {
        // Check if d3 is available before attempting GeoJSON rendering
        if (typeof d3 === 'undefined') {
            console.warn('d3.js not loaded, using fallback rendering for Level 4');
            renderEasternCitiesAndRiversFallback();
            return;
        }
        
        try {
            // First, load and render the eastern provinces as background (Overijssel, Flevoland, Gelderland)
            const provincesResp = await fetch('assets/provinces.geojson');
            if (provincesResp.ok) {
                const provincesGeo = await provincesResp.json();
                
                // Filter to only show eastern provinces
                const easternProvinces = provincesGeo.features.filter(feat => {
                    const name = feat.properties.name || feat.properties.NAME || '';
                    return ['Overijssel', 'Flevoland', 'Gelderland'].includes(name);
                });
                
                // Create a filtered GeoJSON with only eastern provinces
                const easternProvincesGeo = {
                    type: 'FeatureCollection',
                    features: easternProvinces
                };
                
                const width = 700, height = 600;
                const projection = d3.geoMercator().fitSize([width, height], easternProvincesGeo);
                const pathGen = d3.geoPath().projection(projection);
                
                // Draw provinces as background
                const tintMap = {
                    "Overijssel": '#d89b75',
                    "Flevoland": '#e0ad86',
                    "Gelderland": '#b96447'
                };
                
                easternProvinces.forEach(feat => {
                    let name = feat.properties.name || feat.properties.NAME || 'Unknown';
                    const d = pathGen(feat);
                    
                    if (!d) return;
                    
                    const tint = tintMap[name] || '#d09a74';
                    const group = document.createElementNS('http://www.w3.org/2000/svg', 'g');
                    const base = document.createElementNS('http://www.w3.org/2000/svg', 'path');
                    base.setAttribute('d', d);
                    base.setAttribute('fill', tint);
                    base.setAttribute('class', 'map-region');
                    base.setAttribute('data-region', name);
                    group.appendChild(base);
                    
                    // borders
                    const inner = document.createElementNS('http://www.w3.org/2000/svg', 'path');
                    inner.setAttribute('d', d);
                    inner.setAttribute('fill', 'none');
                    inner.setAttribute('stroke', '#fff');
                    inner.setAttribute('stroke-width', '0.9');
                    inner.setAttribute('pointer-events', 'none');
                    group.appendChild(inner);
                    
                    mapSvg.appendChild(group);
                });
                
                // Now load and render cities and rivers
                const dataResp = await fetch('assets/eastern_cities_rivers.geojson');
                if (dataResp.ok) {
                    const dataGeo = await dataResp.json();
                    
                    dataGeo.features.forEach(feat => {
                        const itemName = feat.properties.name;
                        const itemType = feat.properties.type;
                        if (!LEVEL6_INCLUDE_WATER && LEVEL6_WATER_TYPES.has(itemType)) return;
                        
                        if (itemType === 'city') {
                            // Draw city marker
                            const coords = projection(feat.geometry.coordinates);
                            if (!coords) return;
                            
                            const [cx, cy] = coords;
                            
                            const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
                            circle.setAttribute('cx', cx);
                            circle.setAttribute('cy', cy);
                            circle.setAttribute('r', '6');
                            circle.setAttribute('class', 'city-marker');
                            circle.setAttribute('data-region', itemName);
                            
                            // Highlight if this is the current question
                            if (currentQuestion && normalizeAnswer(itemName) === normalizeAnswer(currentQuestion.name)) {
                                circle.classList.add('highlighted');
                                circle.setAttribute('r', '10');
                            }
                            
                            mapSvg.appendChild(circle);
                            
                            // Draw city label
                            const label = document.createElementNS('http://www.w3.org/2000/svg', 'text');
                            label.setAttribute('x', cx);
                            label.setAttribute('y', cy - 10);
                            label.setAttribute('text-anchor', 'middle');
                            label.setAttribute('class', 'city-label');
                            label.textContent = '???';
                            
                            if (currentQuestion && normalizeAnswer(itemName) === normalizeAnswer(currentQuestion.name)) {
                                label.classList.add('highlighted');
                            }
                            
                            mapSvg.appendChild(label);
                        } else if (itemType === 'river') {
                            // Draw river as a line
                            const pathData = feat.geometry.coordinates.map((coord, i) => {
                                const projCoord = projection(coord);
                                if (!projCoord) return '';
                                return `${i === 0 ? 'M' : 'L'} ${projCoord[0]} ${projCoord[1]}`;
                            }).join(' ');
                            
                            const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
                            path.setAttribute('d', pathData);
                            path.setAttribute('class', 'map-waterway');
                            path.setAttribute('fill', 'none');
                            path.setAttribute('stroke', 'url(#waterGradient)');
                            path.setAttribute('stroke-width', '8');
                            path.setAttribute('filter', 'url(#waterGlow)');
                            path.setAttribute('stroke-linecap', 'round');
                            path.setAttribute('stroke-linejoin', 'round');
                            path.setAttribute('data-region', itemName);
                            
                            // Highlight if this is the current question
                            if (currentQuestion && normalizeAnswer(itemName) === normalizeAnswer(currentQuestion.name)) {
                                path.classList.add('highlighted');
                            }
                            
                            mapSvg.appendChild(path);
                        } else if (itemType === 'lake') {
                            // Draw lake as a polygon
                            const d = pathGen(feat);
                            if (!d) return;
                            
                            const lakePath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
                            lakePath.setAttribute('d', d);
                            lakePath.setAttribute('class', 'map-waterbody');
                            lakePath.setAttribute('fill', 'url(#waterGradient)');
                            lakePath.setAttribute('opacity', '0.7');
                            lakePath.setAttribute('stroke', '#176fb0');
                            lakePath.setAttribute('stroke-width', '2');
                            lakePath.setAttribute('data-region', itemName);
                            
                            // Highlight if this is the current question
                            if (currentQuestion && normalizeAnswer(itemName) === normalizeAnswer(currentQuestion.name)) {
                                lakePath.classList.add('highlighted');
                                lakePath.setAttribute('opacity', '0.95');
                            }
                            
                            mapSvg.appendChild(lakePath);
                        } else if (itemType === 'region') {
                            // Draw region (like Twente) as a highlighted area
                            const d = pathGen(feat);
                            if (!d) return;
                            
                            const regionPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
                            regionPath.setAttribute('d', d);
                            regionPath.setAttribute('class', 'map-region-highlight');
                            regionPath.setAttribute('fill', 'none');
                            regionPath.setAttribute('stroke', '#ff9900');
                            regionPath.setAttribute('stroke-width', '3');
                            regionPath.setAttribute('stroke-dasharray', '10,5');
                            regionPath.setAttribute('opacity', '0.6');
                            regionPath.setAttribute('data-region', itemName);
                            
                            // Highlight if this is the current question
                            if (currentQuestion && normalizeAnswer(itemName) === normalizeAnswer(currentQuestion.name)) {
                                regionPath.classList.add('highlighted');
                                regionPath.setAttribute('fill', 'rgba(255, 153, 0, 0.15)');
                                regionPath.setAttribute('opacity', '1.0');
                                regionPath.setAttribute('stroke-width', '5');
                            }
                            
                            mapSvg.appendChild(regionPath);
                        }
                    });
                } else {
                    console.warn('Failed to load eastern_cities_rivers.geojson');
                }
            } else {
                console.warn('Failed to load provinces.geojson');
            }
        } catch (e) {
            console.error('Error rendering eastern cities and rivers:', e);
        }
    }

    // Fallback rendering for Level 5 when d3.js is not available
    function renderCentralSouthernCitiesFallback() {
        const southernProvincePaths = {
            "Utrecht": provincePaths["Utrecht"],
            "Noord-Brabant": provincePaths["Noord-Brabant"],
            "Limburg": provincePaths["Limburg"]
        };

        const tintMap5 = {
            "Utrecht": '#c97a5f',
            "Noord-Brabant": '#b85a45',
            "Limburg": '#a84f3f'
        };

        // Draw provinces as background
        Object.keys(southernProvincePaths).forEach(name => {
            const pathData = southernProvincePaths[name];
            const tint = tintMap5[name] || '#d09a74';

            const group = document.createElementNS('http://www.w3.org/2000/svg', 'g');
            const base = document.createElementNS('http://www.w3.org/2000/svg', 'path');
            base.setAttribute('d', pathData);
            base.setAttribute('fill', tint);
            base.setAttribute('class', 'map-region');
            base.setAttribute('data-region', name);
            group.appendChild(base);

            const inner = document.createElementNS('http://www.w3.org/2000/svg', 'path');
            inner.setAttribute('d', pathData);
            inner.setAttribute('fill', 'none');
            inner.setAttribute('stroke', '#fff');
            inner.setAttribute('stroke-width', '0.9');
            inner.setAttribute('pointer-events', 'none');
            group.appendChild(inner);

            mapSvg.appendChild(group);
        });

        // Draw rivers and canal as lines
        const level5Waterways = [
            { name: "Amsterdam-Rijnkanaal", d: "M 275,220 L 290,240 L 305,260 L 325,285 L 350,305 L 390,315" },
            { name: "Maas", d: "M 500,570 L 510,540 L 510,508 L 508,480 L 510,455 L 555,438 L 540,415 L 510,398 L 475,385 L 440,378 L 410,375 L 380,378" },
            { name: "Neder-Rijn", d: "M 488,302 L 460,302 L 430,302 L 400,305 L 370,308 L 340,310 L 310,312 L 285,316" },
            { name: "Waal", d: "M 490,315 L 460,314 L 430,313 L 400,314 L 375,316 L 345,320 L 310,322 L 275,325 L 245,328 L 215,332 L 185,336" }
        ];

        level5Waterways.forEach(waterway => {
            const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
            path.setAttribute('d', waterway.d);
            path.setAttribute('class', 'map-waterway');
            path.setAttribute('fill', 'none');
            path.setAttribute('stroke', 'url(#waterGradient)');
            path.setAttribute('stroke-width', '8');
            path.setAttribute('filter', 'url(#waterGlow)');
            path.setAttribute('stroke-linecap', 'round');
            path.setAttribute('stroke-linejoin', 'round');
            path.setAttribute('data-region', waterway.name);

            if (currentQuestion && normalizeAnswer(waterway.name) === normalizeAnswer(currentQuestion.name)) {
                path.classList.add('highlighted');
            }

            mapSvg.appendChild(path);
        });

        // Draw Biesbosch nature area
        const biesboschPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        biesboschPath.setAttribute('d', 'M 190,378 L 215,370 L 238,374 L 242,390 L 228,405 L 200,407 L 185,395 Z');
        biesboschPath.setAttribute('class', 'map-nature');
        biesboschPath.setAttribute('fill', 'rgba(60, 160, 80, 0.5)');
        biesboschPath.setAttribute('stroke', '#2d7a3a');
        biesboschPath.setAttribute('stroke-width', '2');
        biesboschPath.setAttribute('data-region', 'Biesbosch');

        if (currentQuestion && normalizeAnswer('Biesbosch') === normalizeAnswer(currentQuestion.name)) {
            biesboschPath.classList.add('highlighted');
            biesboschPath.setAttribute('fill', 'rgba(60, 160, 80, 0.8)');
        }
        mapSvg.appendChild(biesboschPath);

        // Draw cities as circles
        const level5Cities = [
            { name: "Utrecht", x: 375, y: 300 },
            { name: "Amersfoort", x: 405, y: 275 },
            { name: "Bergen op Zoom", x: 190, y: 430 },
            { name: "Breda", x: 230, y: 430 },
            { name: "Roosendaal", x: 215, y: 445 },
            { name: "Tilburg", x: 295, y: 455 },
            { name: "Oss", x: 385, y: 440 },
            { name: "'s-Hertogenbosch", x: 345, y: 445 },
            { name: "Eindhoven", x: 360, y: 490 },
            { name: "Helmond", x: 390, y: 480 },
            { name: "Venlo", x: 555, y: 430 },
            { name: "Roermond", x: 530, y: 475 },
            { name: "Maastricht", x: 510, y: 565 },
            { name: "Heerlen", x: 555, y: 558 }
        ];

        level5Cities.forEach(city => {
            const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
            circle.setAttribute('cx', city.x);
            circle.setAttribute('cy', city.y);
            circle.setAttribute('r', '6');
            circle.setAttribute('class', 'city-marker');
            circle.setAttribute('data-region', city.name);

            if (currentQuestion && normalizeAnswer(city.name) === normalizeAnswer(currentQuestion.name)) {
                circle.classList.add('highlighted');
                circle.setAttribute('r', '10');
            }

            mapSvg.appendChild(circle);

            const label = document.createElementNS('http://www.w3.org/2000/svg', 'text');
            label.setAttribute('x', city.x);
            label.setAttribute('y', city.y - 10);
            label.setAttribute('text-anchor', 'middle');
            label.setAttribute('class', 'city-label');
            label.textContent = '???';

            if (currentQuestion && normalizeAnswer(city.name) === normalizeAnswer(currentQuestion.name)) {
                label.classList.add('highlighted');
            }

            mapSvg.appendChild(label);
        });

        // Draw Vaalserberg as a mountain marker
        const vbX = 490, vbY = 595;
        const vbMarker = document.createElementNS('http://www.w3.org/2000/svg', 'polygon');
        vbMarker.setAttribute('points', `${vbX},${vbY - 14} ${vbX - 10},${vbY + 2} ${vbX + 10},${vbY + 2}`);
        vbMarker.setAttribute('class', 'mountain-marker');
        vbMarker.setAttribute('fill', '#8B6914');
        vbMarker.setAttribute('stroke', '#5a4209');
        vbMarker.setAttribute('stroke-width', '1.5');
        vbMarker.setAttribute('data-region', 'Vaalserberg');

        if (currentQuestion && normalizeAnswer('Vaalserberg') === normalizeAnswer(currentQuestion.name)) {
            vbMarker.classList.add('highlighted');
            vbMarker.setAttribute('fill', '#e6a800');
        }
        mapSvg.appendChild(vbMarker);

        const vbLabel = document.createElementNS('http://www.w3.org/2000/svg', 'text');
        vbLabel.setAttribute('x', vbX);
        vbLabel.setAttribute('y', vbY - 18);
        vbLabel.setAttribute('text-anchor', 'middle');
        vbLabel.setAttribute('class', 'city-label');
        vbLabel.textContent = '???';

        if (currentQuestion && normalizeAnswer('Vaalserberg') === normalizeAnswer(currentQuestion.name)) {
            vbLabel.classList.add('highlighted');
        }
        mapSvg.appendChild(vbLabel);
    }

    // Render helper for central/southern cities and landmarks (Level 5)
    async function renderCentralSouthernCities() {
        if (typeof d3 === 'undefined') {
            console.warn('d3.js not loaded, using fallback rendering for Level 5');
            renderCentralSouthernCitiesFallback();
            return;
        }

        try {
            const provincesResp = await fetch('assets/provinces.geojson');
            if (provincesResp.ok) {
                const provincesGeo = await provincesResp.json();

                const southernProvinces = provincesGeo.features.filter(feat => {
                    const name = feat.properties.name || feat.properties.NAME || '';
                    return ['Utrecht', 'Noord-Brabant', 'Limburg'].includes(name);
                });

                const southernProvincesGeo = {
                    type: 'FeatureCollection',
                    features: southernProvinces
                };

                const width = 700, height = 600;
                const projection = d3.geoMercator().fitSize([width, height], southernProvincesGeo);
                const pathGen = d3.geoPath().projection(projection);

                const tintMap5 = {
                    "Utrecht": '#c97a5f',
                    "Noord-Brabant": '#b85a45',
                    "Limburg": '#a84f3f'
                };

                southernProvinces.forEach(feat => {
                    let name = feat.properties.name || feat.properties.NAME || 'Unknown';
                    const d = pathGen(feat);

                    if (!d) return;

                    const tint = tintMap5[name] || '#d09a74';
                    const group = document.createElementNS('http://www.w3.org/2000/svg', 'g');
                    const base = document.createElementNS('http://www.w3.org/2000/svg', 'path');
                    base.setAttribute('d', d);
                    base.setAttribute('fill', tint);
                    base.setAttribute('class', 'map-region');
                    base.setAttribute('data-region', name);
                    group.appendChild(base);

                    const inner = document.createElementNS('http://www.w3.org/2000/svg', 'path');
                    inner.setAttribute('d', d);
                    inner.setAttribute('fill', 'none');
                    inner.setAttribute('stroke', '#fff');
                    inner.setAttribute('stroke-width', '0.9');
                    inner.setAttribute('pointer-events', 'none');
                    group.appendChild(inner);

                    mapSvg.appendChild(group);
                });

                const dataResp = await fetch('assets/central_southern_cities.geojson');
                if (dataResp.ok) {
                    const dataGeo = await dataResp.json();

                    dataGeo.features.forEach(feat => {
                        const itemName = feat.properties.name;
                        const itemType = feat.properties.type;
                        if (!LEVEL6_INCLUDE_WATER && LEVEL6_WATER_TYPES.has(itemType)) return;

                        if (itemType === 'city') {
                            const coords = projection(feat.geometry.coordinates);
                            if (!coords) return;

                            const [cx, cy] = coords;

                            const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
                            circle.setAttribute('cx', cx);
                            circle.setAttribute('cy', cy);
                            circle.setAttribute('r', '6');
                            circle.setAttribute('class', 'city-marker');
                            circle.setAttribute('data-region', itemName);

                            if (currentQuestion && normalizeAnswer(itemName) === normalizeAnswer(currentQuestion.name)) {
                                circle.classList.add('highlighted');
                                circle.setAttribute('r', '10');
                            }

                            mapSvg.appendChild(circle);

                            const label = document.createElementNS('http://www.w3.org/2000/svg', 'text');
                            label.setAttribute('x', cx);
                            label.setAttribute('y', cy - 10);
                            label.setAttribute('text-anchor', 'middle');
                            label.setAttribute('class', 'city-label');
                            label.textContent = '???';

                            if (currentQuestion && normalizeAnswer(itemName) === normalizeAnswer(currentQuestion.name)) {
                                label.classList.add('highlighted');
                            }

                            mapSvg.appendChild(label);
                        } else if (itemType === 'river' || itemType === 'canal') {
                            const pathData = feat.geometry.coordinates.map((coord, i) => {
                                const projCoord = projection(coord);
                                if (!projCoord) return '';
                                return `${i === 0 ? 'M' : 'L'} ${projCoord[0]} ${projCoord[1]}`;
                            }).join(' ');

                            const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
                            path.setAttribute('d', pathData);
                            path.setAttribute('class', 'map-waterway');
                            path.setAttribute('fill', 'none');
                            path.setAttribute('stroke', 'url(#waterGradient)');
                            path.setAttribute('stroke-width', '8');
                            path.setAttribute('filter', 'url(#waterGlow)');
                            path.setAttribute('stroke-linecap', 'round');
                            path.setAttribute('stroke-linejoin', 'round');
                            path.setAttribute('data-region', itemName);

                            if (currentQuestion && normalizeAnswer(itemName) === normalizeAnswer(currentQuestion.name)) {
                                path.classList.add('highlighted');
                            }

                            mapSvg.appendChild(path);
                        } else if (itemType === 'mountain') {
                            const coords = projection(feat.geometry.coordinates);
                            if (!coords) return;

                            const [cx, cy] = coords;

                            const marker = document.createElementNS('http://www.w3.org/2000/svg', 'polygon');
                            marker.setAttribute('points', `${cx},${cy - 14} ${cx - 10},${cy + 2} ${cx + 10},${cy + 2}`);
                            marker.setAttribute('class', 'mountain-marker');
                            marker.setAttribute('fill', '#8B6914');
                            marker.setAttribute('stroke', '#5a4209');
                            marker.setAttribute('stroke-width', '1.5');
                            marker.setAttribute('data-region', itemName);

                            if (currentQuestion && normalizeAnswer(itemName) === normalizeAnswer(currentQuestion.name)) {
                                marker.classList.add('highlighted');
                                marker.setAttribute('fill', '#e6a800');
                            }

                            mapSvg.appendChild(marker);

                            const label = document.createElementNS('http://www.w3.org/2000/svg', 'text');
                            label.setAttribute('x', cx);
                            label.setAttribute('y', cy - 18);
                            label.setAttribute('text-anchor', 'middle');
                            label.setAttribute('class', 'city-label');
                            label.textContent = '???';

                            if (currentQuestion && normalizeAnswer(itemName) === normalizeAnswer(currentQuestion.name)) {
                                label.classList.add('highlighted');
                            }

                            mapSvg.appendChild(label);
                        } else if (itemType === 'nature') {
                            const d = pathGen(feat);
                            if (!d) return;

                            const naturePath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
                            naturePath.setAttribute('d', d);
                            naturePath.setAttribute('class', 'map-nature');
                            naturePath.setAttribute('fill', 'rgba(60, 160, 80, 0.5)');
                            naturePath.setAttribute('stroke', '#2d7a3a');
                            naturePath.setAttribute('stroke-width', '2');
                            naturePath.setAttribute('data-region', itemName);

                            if (currentQuestion && normalizeAnswer(itemName) === normalizeAnswer(currentQuestion.name)) {
                                naturePath.classList.add('highlighted');
                                naturePath.setAttribute('fill', 'rgba(60, 160, 80, 0.8)');
                            }

                            mapSvg.appendChild(naturePath);
                        }
                    });
                } else {
                    console.warn('Failed to load central_southern_cities.geojson');
                }
            } else {
                console.warn('Failed to load provinces.geojson');
            }
        } catch (e) {
            console.error('Error rendering central/southern cities:', e);
        }
    }

    // Fallback rendering for Level 6 when d3.js is not available
    async function renderWesternCitiesAndWatersFallback() {
        const westernProvincePaths = {
            "Noord-Holland": provincePaths["Noord-Holland"],
            "Zuid-Holland": provincePaths["Zuid-Holland"],
            "Zeeland": provincePaths["Zeeland"]
        };

        const tintMap6 = {
            "Noord-Holland": '#c97a5f',
            "Zuid-Holland": '#b85a45',
            "Zeeland": '#a84f3f'
        };

        Object.keys(westernProvincePaths).forEach(name => {
            const pathData = westernProvincePaths[name];
            const tint = tintMap6[name] || '#d09a74';

            const group = document.createElementNS('http://www.w3.org/2000/svg', 'g');
            const base = document.createElementNS('http://www.w3.org/2000/svg', 'path');
            base.setAttribute('d', pathData);
            base.setAttribute('fill', tint);
            base.setAttribute('class', 'map-region');
            base.setAttribute('data-region', name);
            group.appendChild(base);

            const inner = document.createElementNS('http://www.w3.org/2000/svg', 'path');
            inner.setAttribute('d', pathData);
            inner.setAttribute('fill', 'none');
            inner.setAttribute('stroke', '#fff');
            inner.setAttribute('stroke-width', '0.9');
            inner.setAttribute('pointer-events', 'none');
            group.appendChild(inner);

            mapSvg.appendChild(group);
        });

        const projectFallbackCoord = ([lon, lat]) => {
            const minLon = 3.35, maxLon = 7.25;
            const minLat = 50.75, maxLat = 53.65;
            const x = ((lon - minLon) / (maxLon - minLon)) * 700;
            const y = ((maxLat - lat) / (maxLat - minLat)) * 600;
            return [x, y];
        };

        try {
            const dataResp = await fetch('assets/western_cities_waters.geojson');
            if (!dataResp.ok) {
                console.warn('Failed to load western_cities_waters.geojson');
                return;
            }

            const dataGeo = await dataResp.json();

            dataGeo.features.forEach(feat => {
                const itemName = feat.properties.name;
                const itemType = feat.properties.type;

                if (itemType === 'city' || itemType === 'airport') {
                    const [cx, cy] = projectFallbackCoord(feat.geometry.coordinates);
                    const cityOffset = getLevel6CityOffset(itemName);
                    const cityX = cx + cityOffset.x;
                    const cityY = cy + cityOffset.y;

                    const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
                    circle.setAttribute('cx', cityX);
                    circle.setAttribute('cy', cityY);
                    circle.setAttribute('r', itemType === 'airport' ? '7' : '6');
                    circle.setAttribute('class', 'city-marker');
                    circle.setAttribute('data-region', itemName);

                    if (currentQuestion && normalizeAnswer(itemName) === normalizeAnswer(currentQuestion.name)) {
                        circle.classList.add('highlighted');
                        circle.setAttribute('r', itemType === 'airport' ? '11' : '10');
                    }

                    mapSvg.appendChild(circle);

                    const label = document.createElementNS('http://www.w3.org/2000/svg', 'text');
                    label.setAttribute('x', cityX);
                    label.setAttribute('y', cityY - 10);
                    label.setAttribute('text-anchor', 'middle');
                    label.setAttribute('class', 'city-label');
                    label.textContent = '???';

                    if (currentQuestion && normalizeAnswer(itemName) === normalizeAnswer(currentQuestion.name)) {
                        label.classList.add('highlighted');
                    }

                    mapSvg.appendChild(label);
                } else if (itemType === 'river' || itemType === 'canal' || itemType === 'waterway' || itemType === 'dam') {
                    const projectedPoints = feat.geometry.coordinates.map(coord => projectFallbackCoord(coord));
                    const transformedPoints = transformLevel6ProjectedPoints(projectedPoints, itemName);
                    const pathData = transformedPoints.map((point, i) => {
                        return `${i === 0 ? 'M' : 'L'} ${point[0]} ${point[1]}`;
                    }).join(' ');

                    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
                    path.setAttribute('d', pathData);
                    path.setAttribute('class', 'map-waterway');
                    path.setAttribute('fill', 'none');
                    path.setAttribute('stroke', itemType === 'dam' ? '#8a6a57' : 'url(#waterGradient)');
                    path.setAttribute('stroke-width', itemType === 'dam' ? '10' : '8');
                    if (itemType !== 'dam') {
                        path.setAttribute('filter', 'url(#waterGlow)');
                    }
                    path.setAttribute('stroke-linecap', 'round');
                    path.setAttribute('stroke-linejoin', 'round');
                    path.setAttribute('data-region', itemName);

                    if (currentQuestion && normalizeAnswer(itemName) === normalizeAnswer(currentQuestion.name)) {
                        path.classList.add('highlighted');
                    }

                    mapSvg.appendChild(path);
                } else if (itemType === 'lake' || itemType === 'estuary' || itemType === 'island') {
                    const ring = feat.geometry.coordinates[0] || [];
                    const projectedPoints = ring.map(coord => projectFallbackCoord(coord));
                    const transformedPoints = transformLevel6ProjectedPoints(projectedPoints, itemName);
                    const pathData = transformedPoints.map((point, i) => {
                        return `${i === 0 ? 'M' : 'L'} ${point[0]} ${point[1]}`;
                    }).join(' ') + ' Z';

                    const areaPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
                    areaPath.setAttribute('d', pathData);
                    areaPath.setAttribute('data-region', itemName);

                    if (itemType === 'island') {
                        areaPath.setAttribute('class', 'map-region');
                        areaPath.setAttribute('fill', '#c97a5f');
                        areaPath.setAttribute('stroke', '#8a6a57');
                        areaPath.setAttribute('stroke-width', '1.2');
                    } else {
                        areaPath.setAttribute('class', 'map-waterbody map-waterbody-level6');
                        areaPath.setAttribute('fill', 'url(#waterGradient)');
                        areaPath.setAttribute('opacity', itemType === 'lake' ? '0.7' : '0.78');
                        areaPath.setAttribute('stroke', '#176fb0');
                        areaPath.setAttribute('stroke-width', '2');
                    }

                    if (currentQuestion && normalizeAnswer(itemName) === normalizeAnswer(currentQuestion.name)) {
                        areaPath.classList.add('highlighted');
                        if (itemType !== 'island') {
                            areaPath.setAttribute('opacity', '0.95');
                        }
                    }

                    mapSvg.appendChild(areaPath);
                }
            });
        } catch (e) {
            console.error('Error rendering western cities and waters fallback:', e);
        }
    }

    // Render helper for western cities, waters and landmarks (Level 6)
    async function renderWesternCitiesAndWaters() {
        if (typeof d3 === 'undefined') {
            console.warn('d3.js not loaded, using fallback rendering for Level 6');
            renderWesternCitiesAndWatersFallback();
            return;
        }

        try {
            const provincesResp = await fetch('assets/provinces.geojson');
            if (provincesResp.ok) {
                const provincesGeo = await provincesResp.json();

                const westernProvinces = provincesGeo.features.filter(feat => {
                    const name = feat.properties.name || feat.properties.NAME || '';
                    return ['Noord-Holland', 'Zuid-Holland', 'Zeeland'].includes(name);
                });

                const westernProvincesGeo = {
                    type: 'FeatureCollection',
                    features: westernProvinces
                };

                const width = 700, height = 600;
                const projection = d3.geoMercator().fitSize([width, height], westernProvincesGeo);
                const pathGen = d3.geoPath().projection(projection);

                // Build polygon paths from projected coordinates to avoid globe-complement fill
                // artifacts when source ring winding is inconsistent.
                const buildProjectedPolygonPath = (geometry, featureName = '') => {
                    if (!geometry) return '';

                    const polygonRings = geometry.type === 'Polygon'
                        ? [geometry.coordinates]
                        : (geometry.type === 'MultiPolygon' ? geometry.coordinates : []);

                    let pathData = '';
                    polygonRings.forEach(rings => {
                        if (!Array.isArray(rings) || !rings.length) return;
                        const outerRing = rings[0];
                        if (!Array.isArray(outerRing) || !outerRing.length) return;

                        const projectedPoints = outerRing.map(coord => projection(coord)).filter(Boolean);
                        const transformedPoints = transformLevel6ProjectedPoints(projectedPoints, featureName);

                        const ringPath = transformedPoints.map((point, i) => {
                            if (!point) return '';
                            return `${i === 0 ? 'M' : 'L'} ${point[0]} ${point[1]}`;
                        }).join(' ');

                        if (ringPath) {
                            pathData += `${ringPath} Z `;
                        }
                    });

                    return pathData.trim();
                };

                const dataResp = await fetch('assets/western_cities_waters.geojson');
                const dataGeo = dataResp.ok ? await dataResp.json() : null;

                const tintMap6 = {
                    "Noord-Holland": '#c97a5f',
                    "Zuid-Holland": '#b85a45',
                    "Zeeland": '#a84f3f'
                };

                westernProvinces.forEach(feat => {
                    const name = feat.properties.name || feat.properties.NAME || 'Unknown';
                    const d = pathGen(feat);

                    if (!d) return;

                    const tint = tintMap6[name] || '#d09a74';
                    const group = document.createElementNS('http://www.w3.org/2000/svg', 'g');
                    const base = document.createElementNS('http://www.w3.org/2000/svg', 'path');
                    base.setAttribute('d', d);
                    base.setAttribute('fill', tint);
                    base.setAttribute('class', 'map-region');
                    base.setAttribute('data-region', name);
                    group.appendChild(base);

                    const inner = document.createElementNS('http://www.w3.org/2000/svg', 'path');
                    inner.setAttribute('d', d);
                    inner.setAttribute('fill', 'none');
                    inner.setAttribute('stroke', '#fff');
                    inner.setAttribute('stroke-width', '0.9');
                    inner.setAttribute('pointer-events', 'none');
                    group.appendChild(inner);

                    mapSvg.appendChild(group);
                });

                if (dataGeo) {
                    dataGeo.features.forEach(feat => {
                        const itemName = feat.properties.name;
                        const itemType = feat.properties.type;

                        if (itemType === 'city' || itemType === 'airport') {
                            const coords = projection(feat.geometry.coordinates);
                            if (!coords) return;

                            const [cx, cy] = coords;
                            const cityOffset = getLevel6CityOffset(itemName);
                            const cityX = cx + cityOffset.x;
                            const cityY = cy + cityOffset.y;

                            const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
                            circle.setAttribute('cx', cityX);
                            circle.setAttribute('cy', cityY);
                            circle.setAttribute('r', itemType === 'airport' ? '7' : '6');
                            circle.setAttribute('class', 'city-marker');
                            circle.setAttribute('data-region', itemName);

                            if (currentQuestion && normalizeAnswer(itemName) === normalizeAnswer(currentQuestion.name)) {
                                circle.classList.add('highlighted');
                                circle.setAttribute('r', itemType === 'airport' ? '11' : '10');
                            }

                            mapSvg.appendChild(circle);

                            const label = document.createElementNS('http://www.w3.org/2000/svg', 'text');
                            label.setAttribute('x', cityX);
                            label.setAttribute('y', cityY - 10);
                            label.setAttribute('text-anchor', 'middle');
                            label.setAttribute('class', 'city-label');
                            label.textContent = '???';

                            if (currentQuestion && normalizeAnswer(itemName) === normalizeAnswer(currentQuestion.name)) {
                                label.classList.add('highlighted');
                            }

                            mapSvg.appendChild(label);
                        } else if (itemType === 'river' || itemType === 'canal' || itemType === 'waterway' || itemType === 'dam') {
                            const projectedPoints = feat.geometry.coordinates.map(coord => projection(coord)).filter(Boolean);
                            const transformedPoints = transformLevel6ProjectedPoints(projectedPoints, itemName);
                            const pathData = transformedPoints.map((point, i) => {
                                return `${i === 0 ? 'M' : 'L'} ${point[0]} ${point[1]}`;
                            }).join(' ');

                            const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
                            path.setAttribute('d', pathData);
                            path.setAttribute('class', 'map-waterway');
                            path.setAttribute('fill', 'none');
                            path.setAttribute('stroke', itemType === 'dam' ? '#8a6a57' : 'url(#waterGradient)');
                            path.setAttribute('stroke-width', itemType === 'dam' ? '10' : '8');
                            if (itemType !== 'dam') {
                                path.setAttribute('filter', 'url(#waterGlow)');
                            }
                            path.setAttribute('stroke-linecap', 'round');
                            path.setAttribute('stroke-linejoin', 'round');
                            path.setAttribute('data-region', itemName);

                            if (currentQuestion && normalizeAnswer(itemName) === normalizeAnswer(currentQuestion.name)) {
                                path.classList.add('highlighted');
                            }

                            mapSvg.appendChild(path);
                        } else if (itemType === 'lake' || itemType === 'estuary') {
                            const d = buildProjectedPolygonPath(feat.geometry, itemName);
                            if (!d) return;

                            const waterPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
                            waterPath.setAttribute('d', d);
                            waterPath.setAttribute('class', 'map-waterbody map-waterbody-level6');
                            waterPath.setAttribute('fill', 'url(#waterGradient)');
                            waterPath.setAttribute('opacity', itemType === 'lake' ? '0.7' : '0.78');
                            waterPath.setAttribute('stroke', '#176fb0');
                            waterPath.setAttribute('stroke-width', '2');
                            waterPath.setAttribute('data-region', itemName);

                            if (currentQuestion && normalizeAnswer(itemName) === normalizeAnswer(currentQuestion.name)) {
                                waterPath.classList.add('highlighted');
                                waterPath.setAttribute('opacity', '0.95');
                            }

                            mapSvg.appendChild(waterPath);
                        } else if (itemType === 'island') {
                            const d = buildProjectedPolygonPath(feat.geometry, itemName);
                            if (!d) return;

                            const islandPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
                            islandPath.setAttribute('d', d);
                            islandPath.setAttribute('class', 'map-region');
                            islandPath.setAttribute('fill', '#c97a5f');
                            islandPath.setAttribute('stroke', '#8a6a57');
                            islandPath.setAttribute('stroke-width', '1.2');
                            islandPath.setAttribute('data-region', itemName);

                            if (currentQuestion && normalizeAnswer(itemName) === normalizeAnswer(currentQuestion.name)) {
                                islandPath.classList.add('highlighted');
                            }

                            mapSvg.appendChild(islandPath);
                        }
                    });
                } else {
                    console.warn('Failed to load western_cities_waters.geojson');
                }
            } else {
                console.warn('Failed to load provinces.geojson');
            }
        } catch (e) {
            console.error('Error rendering western cities and waters:', e);
            renderWesternCitiesAndWatersFallback();
        }
    }

    // Render helper for Europe (Level 7)
    async function renderEurope() {
        if (typeof d3 === 'undefined') {
            console.warn('d3.js not loaded, using fallback rendering for Level 7');
            renderEuropeFallback();
            return;
        }

        try {
            let geojson = null;
            try {
                const resp = await fetch('assets/europe.geojson');
                if (resp.ok) {
                    geojson = await resp.json();
                }
            } catch (err) {
                console.warn('Could not fetch assets/europe.geojson, using embedded fallback:', err);
            }

            if (!geojson && typeof EMBEDDED_EUROPE !== 'undefined') {
                geojson = EMBEDDED_EUROPE;
            }

            if (!geojson) {
                renderEuropeFallback();
                return;
            }

            const width = 700, height = 600;
            const mainlandFeatures = geojson.features.filter(f => f.properties && f.properties.name !== 'IJsland');
            const projectionGeo = (mainlandFeatures && mainlandFeatures.length > 0)
                ? { type: 'FeatureCollection', features: mainlandFeatures }
                : geojson;
            const projection = d3.geoMercator().fitExtent([[-1500, -500], [1900,2000]], projectionGeo);
            const pathGen = d3.geoPath().projection(projection);

            const countryTints = {
                "Nederland": '#e0a56f',
                "België": '#d08a6c',
                "Luxemburg": '#c46f53',
                "Duitsland": '#c88060',
                "Frankrijk": '#d89b75',
                "Verenigd Koninkrijk": '#b96447',
                "Ierland": '#cca078',
                "Spanje": '#d47a55',
                "Portugal": '#e29268',
                "Italië": '#c97a5f',
                "Zwitserland": '#cc6b4a',
                "Oostenrijk": '#b86b53',
                "Polen": '#b85a45',
                "Tsjechië": '#cb7b58',
                "Slowakije": '#d28b6a',
                "Hongarije": '#bf6e52',
                "Noorwegen": '#a84f3f',
                "Zweden": '#be6045',
                "Finland": '#ce7a5e',
                "Denemarken": '#d59470',
                "IJsland": '#bb735a',
                "Estland": '#c97f62',
                "Letland": '#ba6f54',
                "Litouwen": '#d68d6e',
                "Wit-Rusland": '#c4755a',
                "Oekraïne": '#d88f6c',
                "Moldavië": '#ca7c5d',
                "Roemenië": '#c16a4e',
                "Bulgarije": '#cf7d5c',
                "Griekenland": '#db8a67',
                "Albanië": '#c66f50',
                "Noord-Macedonië": '#d38563',
                "Servië": '#be684c',
                "Montenegro": '#c97858',
                "Bosnië en Herzegovina": '#d78e6d',
                "Kroatië": '#c26d4f',
                "Slovenië": '#cf7e5e',
                "Kosovo": '#c77353',
                "Rusland": '#c47055'
            };

            const isCurrent = (name, type) => {
                if (!currentQuestion) return false;
                if (type && currentQuestion.type && currentQuestion.type !== type) {
                    if (!(type === 'sea' && currentQuestion.type === 'strait') && !(type === 'strait' && currentQuestion.type === 'sea')) {
                        return false;
                    }
                }
                const normName = normalizeAnswer(name);
                if (normName === normalizeAnswer(currentQuestion.name)) return true;
                if (currentQuestion.aliases && currentQuestion.aliases.some(a => normName === normalizeAnswer(a))) return true;
                return false;
            };

            const attachClickHandler = (element, name) => {
                element.addEventListener('click', () => {
                    if (!gameStarted) return;
                    const answerInput = document.getElementById('answer-input');
                    if (answerInput && !answerInput.disabled) {
                        answerInput.value = name;
                        checkAnswer();
                    }
                });
            };

            // 1. Render water bodies FIRST (under the landmasses)
            const waterbodies = geojson.features.filter(f => f.properties && ['sea', 'strait', 'lake', 'waterbody'].includes(f.properties.type));
            waterbodies.forEach(feat => {
                const name = feat.properties.name;
                const d = pathGen(feat);
                if (!d) return;

                const waterPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
                waterPath.setAttribute('d', d);
                waterPath.setAttribute('class', 'map-waterbody map-waterbody-level7');
                waterPath.setAttribute('fill', 'url(#waterGradient)');
                waterPath.setAttribute('opacity', '0.65');
                waterPath.setAttribute('stroke', '#176fb0');
                waterPath.setAttribute('stroke-width', '1');
                waterPath.setAttribute('data-region', name);
                attachClickHandler(waterPath, name);

                if (isCurrent(name, feat.properties.type)) {
                    waterPath.classList.add('highlighted');
                    waterPath.setAttribute('opacity', '0.95');
                }

                mapSvg.appendChild(waterPath);
            });

            // 2. Render countries
            const countries = geojson.features.filter(f => f.properties && f.properties.type === 'country');
            countries.forEach(feat => {
                const name = feat.properties.name || feat.properties.NAME || 'Unknown';
                const d = pathGen(feat);
                if (!d) return;

                const tint = countryTints[name] || '#d09a74';
                const group = document.createElementNS('http://www.w3.org/2000/svg', 'g');

                const base = document.createElementNS('http://www.w3.org/2000/svg', 'path');
                base.setAttribute('d', d);
                base.setAttribute('fill', tint);
                base.setAttribute('class', 'map-region');
                base.setAttribute('data-region', name);
                attachClickHandler(base, name);
                group.appendChild(base);

                const inner = document.createElementNS('http://www.w3.org/2000/svg', 'path');
                inner.setAttribute('d', d);
                inner.setAttribute('fill', 'none');
                inner.setAttribute('stroke', '#fff');
                inner.setAttribute('stroke-width', '0.7');
                inner.setAttribute('pointer-events', 'none');
                group.appendChild(inner);

                if (isCurrent(name, 'country')) {
                    base.classList.add('highlighted');
                    inner.setAttribute('stroke', '#222');
                    inner.setAttribute('stroke-width', '1.2');
                }

                mapSvg.appendChild(group);
            });

            // 3. Render mountains
            const mountains = geojson.features.filter(f => f.properties && ['mountain', 'mountains'].includes(f.properties.type));
            mountains.forEach(feat => {
                const name = feat.properties.name;
                const d = pathGen(feat);
                if (!d) return;

                const mountainPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
                mountainPath.setAttribute('d', d);
                mountainPath.setAttribute('class', 'map-mountain');
                mountainPath.setAttribute('fill', 'rgba(139, 105, 20, 0.45)');
                mountainPath.setAttribute('stroke', '#5a4209');
                mountainPath.setAttribute('stroke-width', '2');
                mountainPath.setAttribute('data-region', name);
                attachClickHandler(mountainPath, name);

                if (isCurrent(name, 'mountain')) {
                    mountainPath.classList.add('highlighted');
                }

                mapSvg.appendChild(mountainPath);
            });

            // 4. Render rivers
            const rivers = geojson.features.filter(f => f.properties && ['river', 'canal', 'waterway'].includes(f.properties.type));
            rivers.forEach(feat => {
                const name = feat.properties.name;
                const d = pathGen(feat);
                if (!d) return;

                const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
                path.setAttribute('d', d);
                path.setAttribute('class', 'map-waterway');
                path.setAttribute('fill', 'none');
                path.setAttribute('stroke', 'url(#waterGradient)');
                path.setAttribute('stroke-width', '4');
                path.setAttribute('filter', 'url(#waterGlow)');
                path.setAttribute('stroke-linecap', 'round');
                path.setAttribute('stroke-linejoin', 'round');
                path.setAttribute('data-region', name);
                attachClickHandler(path, name);

                if (isCurrent(name, 'river')) {
                    path.classList.add('highlighted');
                }

                mapSvg.appendChild(path);
            });

            // 5. Render cities
            const cities = geojson.features.filter(f => f.properties && f.properties.type === 'city');
            cities.forEach(feat => {
                const name = feat.properties.name;
                const coords = projection(feat.geometry.coordinates);
                if (!coords) return;

                const [cx, cy] = coords;

                const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
                circle.setAttribute('cx', cx);
                circle.setAttribute('cy', cy);
                circle.setAttribute('r', '5');
                circle.setAttribute('class', 'city-marker');
                circle.setAttribute('data-region', name);
                attachClickHandler(circle, name);

                const label = document.createElementNS('http://www.w3.org/2000/svg', 'text');
                label.setAttribute('x', cx);
                label.setAttribute('y', cy - 8);
                label.setAttribute('text-anchor', 'middle');
                label.setAttribute('class', 'city-label');
                label.textContent = '???';

                if (isCurrent(name, 'city')) {
                    circle.classList.add('highlighted');
                    circle.setAttribute('r', '9');
                    label.classList.add('highlighted');
                }

                mapSvg.appendChild(circle);
                mapSvg.appendChild(label);
            });

        } catch (e) {
            console.error('Error rendering Europe:', e);
            renderEuropeFallback();
        }
    }

    // Fallback renderer for Europe when d3 is unavailable or fetch fails
    async function renderEuropeFallback() {
        const projectFallbackCoord = ([lon, lat]) => {
            const radLon = (lon * Math.PI) / 180;
            const radLat = Math.max(Math.min((lat * Math.PI) / 180, 1.55), -1.55);
            const x = radLon;
            const y = -Math.log(Math.tan(Math.PI / 4 + radLat / 2));
            const k = 484.33;
            const tx = 130.13;
            const ty = 875.80;
            return [x * k + tx, y * k + ty];
        };

        const isCurrent = (name, type) => {
            if (!currentQuestion) return false;
            if (type && currentQuestion.type && currentQuestion.type !== type) {
                if (!(type === 'sea' && currentQuestion.type === 'strait') && !(type === 'strait' && currentQuestion.type === 'sea')) {
                    return false;
                }
            }
            const normName = normalizeAnswer(name);
            if (normName === normalizeAnswer(currentQuestion.name)) return true;
            if (currentQuestion.aliases && currentQuestion.aliases.some(a => normName === normalizeAnswer(a))) return true;
            return false;
        };

        const attachClickHandler = (element, name) => {
            element.addEventListener('click', () => {
                if (!gameStarted) return;
                const answerInput = document.getElementById('answer-input');
                if (answerInput && !answerInput.disabled) {
                    answerInput.value = name;
                    checkAnswer();
                }
            });
        };

        try {
            let geojson = null;
            try {
                const resp = await fetch('assets/europe.geojson');
                if (resp.ok) {
                    geojson = await resp.json();
                }
            } catch (err) {}

            if (!geojson && typeof EMBEDDED_EUROPE !== 'undefined') {
                geojson = EMBEDDED_EUROPE;
            }

            if (!geojson) return;

            const countryTints = {
                "Nederland": '#e0a56f',
                "België": '#d08a6c',
                "Luxemburg": '#c46f53',
                "Duitsland": '#c88060',
                "Frankrijk": '#d89b75',
                "Verenigd Koninkrijk": '#b96447',
                "Ierland": '#cca078',
                "Spanje": '#d47a55',
                "Portugal": '#e29268',
                "Italië": '#c97a5f',
                "Zwitserland": '#cc6b4a',
                "Oostenrijk": '#b86b53',
                "Polen": '#b85a45',
                "Tsjechië": '#cb7b58',
                "Slowakije": '#d28b6a',
                "Hongarije": '#bf6e52',
                "Noorwegen": '#a84f3f',
                "Zweden": '#be6045',
                "Finland": '#ce7a5e',
                "Denemarken": '#d59470',
                "IJsland": '#bb735a',
                "Estland": '#c97f62',
                "Letland": '#ba6f54',
                "Litouwen": '#d68d6e',
                "Wit-Rusland": '#c4755a',
                "Oekraïne": '#d88f6c',
                "Moldavië": '#ca7c5d',
                "Roemenië": '#c16a4e',
                "Bulgarije": '#cf7d5c',
                "Griekenland": '#db8a67',
                "Albanië": '#c66f50',
                "Noord-Macedonië": '#d38563',
                "Servië": '#be684c',
                "Montenegro": '#c97858',
                "Bosnië en Herzegovina": '#d78e6d',
                "Kroatië": '#c26d4f',
                "Slovenië": '#cf7e5e',
                "Kosovo": '#c77353',
                "Rusland": '#c47055'
            };

            const buildFallbackPath = (geom) => {
                if (!geom) return '';
                if (geom.type === 'Polygon') {
                    return geom.coordinates.map(ring => {
                        return ring.map((pt, i) => {
                            const [x, y] = projectFallbackCoord(pt);
                            return (i === 0 ? 'M ' : 'L ') + x + ' ' + y;
                        }).join(' ') + ' Z';
                    }).join(' ');
                } else if (geom.type === 'MultiPolygon') {
                    return geom.coordinates.map(poly => {
                        return poly.map(ring => {
                            return ring.map((pt, i) => {
                                const [x, y] = projectFallbackCoord(pt);
                                return (i === 0 ? 'M ' : 'L ') + x + ' ' + y;
                            }).join(' ') + ' Z';
                        }).join(' ');
                    }).join(' ');
                } else if (geom.type === 'LineString') {
                    return geom.coordinates.map((pt, i) => {
                        const [x, y] = projectFallbackCoord(pt);
                        return (i === 0 ? 'M ' : 'L ') + x + ' ' + y;
                    }).join(' ');
                }
                return '';
            };

            // 1. Waterbodies FIRST
            const waterbodies = geojson.features.filter(f => f.properties && ['sea', 'strait', 'lake', 'waterbody'].includes(f.properties.type));
            waterbodies.forEach(feat => {
                const name = feat.properties.name;
                const d = buildFallbackPath(feat.geometry);
                if (!d) return;

                const waterPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
                waterPath.setAttribute('d', d);
                waterPath.setAttribute('class', 'map-waterbody map-waterbody-level7');
                waterPath.setAttribute('fill', 'url(#waterGradient)');
                waterPath.setAttribute('opacity', '0.65');
                waterPath.setAttribute('stroke', '#176fb0');
                waterPath.setAttribute('stroke-width', '1');
                waterPath.setAttribute('data-region', name);
                attachClickHandler(waterPath, name);

                if (isCurrent(name, feat.properties.type)) {
                    waterPath.classList.add('highlighted');
                    waterPath.setAttribute('opacity', '0.95');
                }

                mapSvg.appendChild(waterPath);
            });

            // 2. Countries
            const countries = geojson.features.filter(f => f.properties && f.properties.type === 'country');
            countries.forEach(feat => {
                const name = feat.properties.name || feat.properties.NAME || 'Unknown';
                const d = buildFallbackPath(feat.geometry);
                if (!d) return;

                const tint = countryTints[name] || '#d09a74';
                const group = document.createElementNS('http://www.w3.org/2000/svg', 'g');

                const base = document.createElementNS('http://www.w3.org/2000/svg', 'path');
                base.setAttribute('d', d);
                base.setAttribute('fill', tint);
                base.setAttribute('class', 'map-region');
                base.setAttribute('data-region', name);
                attachClickHandler(base, name);
                group.appendChild(base);

                const inner = document.createElementNS('http://www.w3.org/2000/svg', 'path');
                inner.setAttribute('d', d);
                inner.setAttribute('fill', 'none');
                inner.setAttribute('stroke', '#fff');
                inner.setAttribute('stroke-width', '0.7');
                inner.setAttribute('pointer-events', 'none');
                group.appendChild(inner);

                if (isCurrent(name, 'country')) {
                    base.classList.add('highlighted');
                    inner.setAttribute('stroke', '#222');
                }

                mapSvg.appendChild(group);
            });

            // 3. Mountains
            const mountains = geojson.features.filter(f => f.properties && ['mountain', 'mountains'].includes(f.properties.type));
            mountains.forEach(feat => {
                const name = feat.properties.name;
                const d = buildFallbackPath(feat.geometry);
                if (!d) return;

                const mountainPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
                mountainPath.setAttribute('d', d);
                mountainPath.setAttribute('class', 'map-mountain');
                mountainPath.setAttribute('fill', 'rgba(139, 105, 20, 0.45)');
                mountainPath.setAttribute('stroke', '#5a4209');
                mountainPath.setAttribute('stroke-width', '2');
                mountainPath.setAttribute('data-region', name);
                attachClickHandler(mountainPath, name);

                if (isCurrent(name, 'mountain')) {
                    mountainPath.classList.add('highlighted');
                }

                mapSvg.appendChild(mountainPath);
            });

            // 4. Rivers
            const rivers = geojson.features.filter(f => f.properties && ['river', 'canal', 'waterway'].includes(f.properties.type));
            rivers.forEach(feat => {
                const name = feat.properties.name;
                const d = buildFallbackPath(feat.geometry);
                if (!d) return;

                const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
                path.setAttribute('d', d);
                path.setAttribute('class', 'map-waterway');
                path.setAttribute('fill', 'none');
                path.setAttribute('stroke', 'url(#waterGradient)');
                path.setAttribute('stroke-width', '4');
                path.setAttribute('filter', 'url(#waterGlow)');
                path.setAttribute('stroke-linecap', 'round');
                path.setAttribute('stroke-linejoin', 'round');
                path.setAttribute('data-region', name);
                attachClickHandler(path, name);

                if (isCurrent(name, 'river')) {
                    path.classList.add('highlighted');
                }

                mapSvg.appendChild(path);
            });

            // 5. Cities
            const cities = geojson.features.filter(f => f.properties && f.properties.type === 'city');
            cities.forEach(feat => {
                const name = feat.properties.name;
                const [cx, cy] = projectFallbackCoord(feat.geometry.coordinates);

                const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
                circle.setAttribute('cx', cx);
                circle.setAttribute('cy', cy);
                circle.setAttribute('r', '5');
                circle.setAttribute('class', 'city-marker');
                circle.setAttribute('data-region', name);
                attachClickHandler(circle, name);

                const label = document.createElementNS('http://www.w3.org/2000/svg', 'text');
                label.setAttribute('x', cx);
                label.setAttribute('y', cy - 8);
                label.setAttribute('text-anchor', 'middle');
                label.setAttribute('class', 'city-label');
                label.textContent = '???';

                if (isCurrent(name, 'city')) {
                    circle.classList.add('highlighted');
                    circle.setAttribute('r', '9');
                    label.classList.add('highlighted');
                }

                mapSvg.appendChild(circle);
                mapSvg.appendChild(label);
            });

        } catch (e) {
            console.error('Error rendering Europe fallback:', e);
        }
    }

        function renderGeoJSON(geojson) {
        try {
            console.log('renderGeoJSON: Starting render with', geojson.features.length, 'features');
            const width = 700, height = 600;
            
            // Use fitSize for automatic scaling
            const projection = d3.geoMercator().fitSize([width, height], geojson);
            
            console.log('Projection configured - scale:', projection.scale(), 'translate:', projection.translate());
            const pathGen = d3.geoPath().projection(projection);

            geojson.features.forEach(feat => {
                // Some GeoJSONs use different property keys for the display name. Try common variants.
                let name = (feat.properties && (feat.properties.NAME || feat.properties.name || feat.properties.name_en || feat.properties.NAME_1)) || feat.id || 'Unknown';
                // Map known aliases (e.g., Frisian names) to the canonical Dutch province names
                if (PROVINCE_ALIASES[name]) {
                    name = PROVINCE_ALIASES[name];
                } else {
                    // try normalized key
                    try {
                        const simple = name.normalize('NFD').replace(/[-\u0300-\u036f]/g, '');
                        if (PROVINCE_ALIASES[simple]) name = PROVINCE_ALIASES[simple];
                    } catch (e) {}
                }
                const d = pathGen(feat);

                if (!d) {
                    console.warn('No path generated for feature:', name);
                    return;
                }
                
                console.log('Generated path for', name, '- path length:', d.length, '- starts with:', d.substring(0, 50));

                if (currentLevel === 1) {
                    // provinces: create group similar to previous logic
                    const tint = tintMap[name] || '#d09a74';
                    const group = document.createElementNS('http://www.w3.org/2000/svg', 'g');
                    const base = document.createElementNS('http://www.w3.org/2000/svg', 'path');
                    base.setAttribute('d', d);
                    base.setAttribute('fill', tint);
                    base.setAttribute('class', 'map-region');
                    base.setAttribute('data-region', name);
                    group.appendChild(base);
                    // borders
                    const inner = document.createElementNS('http://www.w3.org/2000/svg', 'path');
                    inner.setAttribute('d', d);
                    inner.setAttribute('fill', 'none');
                    inner.setAttribute('stroke', '#fff');
                    inner.setAttribute('stroke-width', '0.9');
                    inner.setAttribute('pointer-events', 'none');
                    group.appendChild(inner);
                    // If this is the currently marked province (asking for province), highlight it
                    try {
                        const askingForProvince = currentLevel === 1 && askedQuestions[currentQuestionIndex] === 'province';
                        if (askingForProvince && currentQuestion && normalizeAnswer(name) === normalizeAnswer(currentQuestion.name)) {
                            // add highlighted class so CSS can render it black
                            base.classList.add('highlighted');
                            // make the inner border more visible on dark fill
                            inner.setAttribute('stroke', '#222');
                            inner.setAttribute('stroke-width', '1.2');
                        }
                    } catch (e) {
                        // ignore
                    }
                    mapSvg.appendChild(group);
                } else {
                    // waterways: simple stroke
                    const w = document.createElementNS('http://www.w3.org/2000/svg', 'path');
                    w.setAttribute('d', d);
                    w.setAttribute('class', 'map-waterway');
                    w.setAttribute('stroke', 'url(#waterGradient)');
                    w.setAttribute('stroke-width', '6');
                    w.setAttribute('fill', 'none');
                    mapSvg.appendChild(w);
                }
            });
            
            console.log('renderGeoJSON: Successfully rendered', geojson.features.length, 'provinces');

        } catch (err) {
            // fallback below
            console.error('renderGeoJSON error:', err);
            renderFallback(paths, tintMap, mapSvg, currentLevel, currentQuestion);
        }
    }
    // --- end geojson attempt ---

    function renderFallback(paths, tintMap, mapSvg, currentLevel, currentQuestion) {
        Object.keys(paths).forEach(regionName => {
            const pathData = paths[regionName];
            const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
            
            path.setAttribute('d', pathData);
            path.setAttribute('data-region', regionName);
            
            // Different styling for waterways vs provinces
            if (currentLevel === 2) {
                // Waterways: drawn as lines with gradient stroke and glow
                path.setAttribute('class', 'map-waterway');
                path.setAttribute('fill', 'none');
                path.setAttribute('stroke', 'url(#waterGradient)');
                path.setAttribute('stroke-width', '8');
                path.setAttribute('filter', 'url(#waterGlow)');
                path.setAttribute('stroke-linecap', 'round');
                path.setAttribute('stroke-linejoin', 'round');
                // Append waterways to the SVG
                mapSvg.appendChild(path);
            } else {
                // Provinces: use a group with a patterned base + subtle color tint overlay
                const group = document.createElementNS('http://www.w3.org/2000/svg', 'g');

                // determine tint first
                const tint = tintMap[regionName] || '#d09a74';

                const base = document.createElementNS('http://www.w3.org/2000/svg', 'path');
                base.setAttribute('d', pathData);
                base.setAttribute('class', 'map-region');
                // Use a solid tint fill for clean map appearance
                base.setAttribute('fill', tint);
                base.setAttribute('stroke', 'none');
                base.setAttribute('stroke-width', '0');

                const overlay = document.createElementNS('http://www.w3.org/2000/svg', 'path');
                overlay.setAttribute('d', pathData);
                overlay.setAttribute('class', 'map-region-overlay');
                overlay.setAttribute('fill', tint);
                overlay.setAttribute('opacity', '0.06');

                // Inner white border for province separations (like administrative borders)
                const innerBorder = document.createElementNS('http://www.w3.org/2000/svg', 'path');
                innerBorder.setAttribute('d', pathData);
                innerBorder.setAttribute('fill', 'none');
                innerBorder.setAttribute('stroke', '#ffffff');
                innerBorder.setAttribute('stroke-width', '1');
                innerBorder.setAttribute('stroke-linejoin', 'round');
                innerBorder.setAttribute('pointer-events', 'none');

                // Outer subtle outline to define province edges
                const outerBorder = document.createElementNS('http://www.w3.org/2000/svg', 'path');
                outerBorder.setAttribute('d', pathData);
                outerBorder.setAttribute('fill', 'none');
                outerBorder.setAttribute('stroke', '#8a6a57');
                outerBorder.setAttribute('stroke-width', '1.2');
                outerBorder.setAttribute('stroke-linejoin', 'round');
                outerBorder.setAttribute('pointer-events', 'none');

                group.appendChild(base);
                group.appendChild(overlay);
                group.appendChild(innerBorder);
                group.appendChild(outerBorder);

                // For interactivity, attach data-region to the base path
                base.setAttribute('data-region', regionName);

                // Append the group instead of the single path
                mapSvg.appendChild(group);
                
                // Add a centered label for the province (try-catch in case bbox isn't ready)
                try {
                    const bbox = base.getBBox();
                    const cx = bbox.x + bbox.width / 2;
                    const cy = bbox.y + bbox.height / 2;
                    const label = document.createElementNS('http://www.w3.org/2000/svg', 'text');
                    label.setAttribute('x', cx);
                    label.setAttribute('y', cy);
                    label.setAttribute('text-anchor', 'middle');
                    label.setAttribute('class', 'province-label');
                    label.textContent = regionName.replace('Noord-', 'N. ').replace('Zuid-', 'Z. ');
                    // If this is the currently marked province and asking for province, mark it highlighted
                    try {
                        const askingForProvince = currentLevel === 1 && askedQuestions[currentQuestionIndex] === 'province';
                        if (askingForProvince && currentQuestion && normalizeAnswer(regionName) === normalizeAnswer(currentQuestion.name)) {
                            base.classList.add('highlighted');
                            label.classList.add('highlighted');
                        }
                    } catch (e) {}

                    mapSvg.appendChild(label);
                } catch (err) {
                    // if getBBox fails (rare), skip label
                }
            }

        });
        // Ensure question text / highlight state is updated after fallback rendering
        try { setQuestionText(); } catch (e) { /* ignore */ }
    }

    // helper to set the question text (used by both geojson and fallback branches)
    function setQuestionText() {
        const questionElement = document.getElementById('question');
        if (currentLevel === 1) {
            const askingForProvince = askedQuestions[currentQuestionIndex] === 'province';
            if (askingForProvince) {
                questionElement.textContent = 'Wat is de naam van de gemarkeerde provincie?';
            } else {
                questionElement.textContent = `Wat is de hoofdstad van ${currentQuestion.name}?`;
                // Don't highlight when asking for capital
                document.querySelectorAll('.map-region.highlighted').forEach(el => {
                    el.classList.remove('highlighted');
                });
            }
        } else if (currentLevel === 2) {
            questionElement.textContent = 'Wat is de naam van het gemarkeerde water?';
        } else if (currentLevel === 3) {
            questionElement.textContent = 'Wat is de naam van de gemarkeerde stad?';
        } else if (currentLevel === 4) {
            questionElement.textContent = 'Wat is de naam van het gemarkeerde element?';
        } else if (currentLevel === 5) {
            questionElement.textContent = 'Wat is de naam van het gemarkeerde element?';
        } else if (currentLevel === 6) {
            questionElement.textContent = 'Wat is de naam van het gemarkeerde element?';
        } else if (currentLevel === 7) {
            if (currentQuestion) {
                if (currentQuestion.type === 'country') {
                    questionElement.textContent = 'Wat is de naam van het gemarkeerde land?';
                } else if (currentQuestion.type === 'city') {
                    questionElement.textContent = 'Wat is de naam van de gemarkeerde stad?';
                } else if (currentQuestion.type === 'river') {
                    questionElement.textContent = 'Wat is de naam van de gemarkeerde rivier?';
                } else if (currentQuestion.type === 'mountain') {
                    questionElement.textContent = 'Wat is de naam van het gemarkeerde gebergte?';
                } else if (currentQuestion.type === 'sea' || currentQuestion.type === 'strait') {
                    questionElement.textContent = 'Wat is de naam van het gemarkeerde water?';
                } else {
                    questionElement.textContent = 'Wat is de naam van het gemarkeerde element?';
                }
            } else {
                questionElement.textContent = 'Wat is de naam van het gemarkeerde element?';
            }
        }
    }
    
}

// Handle Enter key in input field
document.addEventListener('DOMContentLoaded', function() {
    const answerInput = document.getElementById('answer-input');
    answerInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter' && gameStarted && !document.getElementById('submit-btn').disabled) {
            checkAnswer();
        }
    });
    
    // Initialize the game
    init();
});

// Export functions for testing (if running in Node.js environment)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        normalizeAnswer,
        level1Data,
        level2Data,
        level5Data,
        level6Data,
        level7Data,
        // Export functions for testing
        updateStats,
        updateTimerDisplay
    };
}
