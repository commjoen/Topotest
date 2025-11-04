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
        return scores ? JSON.parse(scores) : { level1: 0, level2: 0 };
    } catch (e) {
        return { level1: 0, level2: 0 };
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
    "Groningen": "M 647.7,62.4 L 648.5,68.4 L 647.7,72.5 L 644.2,78.2 L 642.9,82.2 L 646.2,85.0 L 648.5,105.9 L 631.2,134.1 L 626.2,139.1 L 625.8,137.3 L 622.3,133.7 L 617.4,132.3 L 617.7,122.2 L 575.0,83.8 L 559.3,86.4 L 559.5,85.1 L 557.3,82.5 L 556.1,80.6 L 551.6,77.1 L 551.1,75.1 L 546.0,71.7 L 543.3,68.8 L 537.5,67.7 L 530.6,68.7 L 523.8,74.4 L 520.7,77.9 L 516.7,86.2 L 505.4,86.3 L 498.3,85.0 L 489.2,74.5 L 492.7,68.3 L 496.5,65.6 L 497.3,63.5 L 494.9,61.3 L 496.5,60.4 L 497.5,59.1 L 497.9,58.0 L 498.5,56.6 L 500.4,54.7 L 500.9,50.6 L 503.2,50.3 Z",
    "Friesland": "M 503.2,50.3 L 501.9,50.0 L 500.6,52.7 L 500.7,54.7 L 498.7,55.6 L 497.6,56.8 L 497.9,58.0 L 497.6,58.7 L 495.5,59.7 L 495.1,60.7 L 494.9,61.2 L 496.6,62.9 L 497.3,64.4 L 496.5,65.6 L 494.2,68.0 L 492.6,69.3 L 489.9,73.7 L 488.9,80.6 L 498.3,85.0 L 504.0,85.4 L 506.6,87.7 L 508.8,91.3 L 517.6,100.6 L 522.3,120.5 L 508.5,122.1 L 500.0,122.3 L 497.7,124.3 L 487.5,131.9 L 475.5,138.2 L 471.5,138.9 L 471.3,141.5 L 465.9,142.2 L 461.6,143.4 L 460.0,142.4 L 458.0,138.3 L 455.7,138.9 L 455.3,140.1 L 450.9,140.0 L 450.3,140.6 L 450.3,141.3 L 449.1,142.8 L 446.9,144.3 L 444.1,145.9 L 442.0,146.1 L 440.6,145.8 L 439.8,145.6 L 437.9,145.2 L 437.2,145.0 L 435.2,144.1 L 429.9,145.9 L 423.6,138.9 L 420.6,140.1 L 417.6,139.8 L 416.7,139.5 L 410.1,140.5 L 334.2,107.1 L 281.2,65.1 L 294.9,56.2 Z",
    "Drenthe": "M 525.4,110.2 L 514.8,90.2 L 520.5,77.1 L 530.6,68.7 L 543.3,68.8 L 548.4,76.3 L 552.1,78.7 L 557.3,82.5 L 559.6,86.0 L 575.9,84.4 L 617.4,132.3 L 625.3,136.5 L 629.4,139.1 L 617.1,178.8 L 608.9,177.8 L 602.8,178.2 L 596.8,176.1 L 587.4,176.6 L 581.1,175.9 L 575.7,177.1 L 569.4,177.8 L 546.7,173.1 L 537.4,182.3 L 531.8,183.0 L 528.1,180.4 L 525.3,182.2 L 522.7,182.5 L 519.7,182.7 L 518.6,179.7 L 516.2,177.0 L 513.0,174.9 L 510.6,172.3 L 505.8,172.8 L 502.7,172.4 L 499.4,170.5 L 495.6,169.4 L 492.0,170.4 L 490.5,169.8 L 487.2,170.4 L 480.5,156.5 L 487.9,153.1 L 488.4,143.7 L 481.8,137.3 L 499.6,123.1 L 522.3,120.5 Z",
    "Overijssel": "M 478.9,217.4 L 465.6,204.7 L 444.8,202.4 L 447.6,182.2 L 462.0,175.3 L 456.3,168.2 L 446.8,154.3 L 434.1,143.4 L 440.6,145.8 L 450.8,141.1 L 460.0,142.4 L 475.5,138.2 L 491.8,149.3 L 486.9,168.1 L 491.5,171.0 L 497.7,170.5 L 503.9,173.3 L 512.0,173.7 L 517.7,178.3 L 520.9,183.6 L 527.4,181.2 L 534.1,181.1 L 570.6,176.4 L 572.1,188.3 L 570.1,201.6 L 609.3,216.8 L 624.2,225.5 L 622.4,242.1 L 621.7,253.7 L 607.7,268.5 L 568.9,279.8 L 565.2,272.0 L 555.8,272.0 L 534.0,266.2 L 521.8,256.4 L 511.9,259.4 L 500.4,259.4 L 489.4,258.1 L 484.7,259.3 L 482.0,252.8 L 475.1,242.7 L 473.8,237.5 L 480.1,229.7 L 479.5,221.5 Z",
    "Flevoland": "M 405.7,146.1 L 416.6,139.9 L 416.8,139.9 L 418.2,139.1 L 420.0,138.0 L 428.6,142.8 L 429.9,145.9 L 432.4,147.7 L 434.4,149.7 L 439.1,149.7 L 443.7,151.9 L 446.8,154.3 L 450.2,156.4 L 454.6,164.0 L 455.2,165.6 L 456.7,166.7 L 456.3,168.2 L 452.0,171.2 L 452.2,172.4 L 453.2,172.1 L 459.7,174.8 L 463.2,175.9 L 463.7,178.6 L 455.3,181.1 L 451.8,183.1 L 448.4,182.5 L 437.7,184.0 L 428.1,184.5 L 432.1,189.8 L 439.9,195.7 L 441.4,202.0 L 439.3,206.6 L 437.8,211.2 L 436.3,210.9 L 434.9,215.6 L 433.2,218.1 L 422.2,225.7 L 420.7,225.2 L 418.6,227.7 L 416.0,228.9 L 408.9,232.2 L 403.0,232.8 L 401.7,232.6 L 399.0,233.0 L 390.7,250.4 L 381.9,252.2 L 380.1,252.6 L 370.7,255.0 L 352.1,241.8 L 332.2,241.4 L 321.2,231.2 L 330.0,222.3 L 405.7,146.1 Z",
    "Gelderland": "M 401.8,305.2 L 394.9,290.8 L 390.4,284.0 L 386.3,289.7 L 385.4,281.3 L 383.2,273.0 L 371.0,255.0 L 412.8,229.6 L 437.8,211.2 L 464.0,204.5 L 479.1,223.9 L 474.0,234.7 L 476.0,245.1 L 483.9,257.2 L 493.0,258.9 L 507.7,259.7 L 525.9,257.4 L 554.4,270.8 L 565.2,274.2 L 568.8,290.8 L 589.6,309.6 L 569.7,322.5 L 546.7,326.5 L 531.2,330.6 L 521.3,330.8 L 511.1,333.3 L 491.3,325.4 L 485.0,330.4 L 466.6,334.6 L 456.4,342.1 L 460.6,350.1 L 441.3,351.8 L 400.9,338.1 L 375.2,341.4 L 348.1,356.3 L 327.0,347.7 L 308.8,332.7 L 327.0,325.2 L 350.4,310.9 L 391.5,310.4 L 403.0,306.0 Z",
    "Utrecht": "M 292.5,272.3 L 278.9,264.5 L 284.3,257.8 L 288.9,254.6 L 294.2,254.3 L 297.8,250.5 L 303.8,248.8 L 311.2,244.3 L 317.1,247.7 L 316.8,248.6 L 313.1,252.1 L 316.0,256.2 L 314.6,259.9 L 314.6,264.3 L 315.5,268.0 L 349.7,248.6 L 375.6,263.6 L 381.3,272.0 L 385.1,276.3 L 386.4,280.5 L 384.3,281.6 L 379.3,288.3 L 386.3,289.0 L 389.6,287.4 L 390.4,284.0 L 393.3,285.1 L 394.6,290.1 L 398.8,297.9 L 399.5,302.7 L 404.7,309.9 L 403.4,314.1 L 383.4,307.3 L 363.2,310.0 L 348.4,309.9 L 336.6,310.5 L 318.9,311.1 L 312.1,309.9 L 299.0,311.8 L 283.8,306.8 L 278.9,301.3 L 285.8,292.6 L 283.5,289.4 L 278.8,279.5 L 284.1,276.4 L 292.5,272.3 Z",
    "Noord-Holland": "M 245.2,199.0 L 250.4,169.8 L 256.4,147.3 L 249.8,115.0 L 265.5,90.0 L 334.2,107.1 L 321.2,231.2 L 353.0,242.1 L 349.7,248.6 L 338.5,269.1 L 314.0,267.9 L 312.5,264.4 L 314.1,262.8 L 314.7,261.5 L 315.5,259.1 L 316.0,256.2 L 314.5,254.4 L 313.3,251.4 L 315.5,249.4 L 318.6,248.0 L 318.1,247.2 L 313.7,247.3 L 311.2,244.3 L 306.5,247.0 L 303.2,249.0 L 298.9,248.8 L 297.5,251.6 L 295.4,254.4 L 291.7,254.7 L 288.9,254.6 L 286.2,257.1 L 283.0,258.7 L 275.5,259.1 L 269.8,261.8 L 263.8,258.1 L 258.6,258.7 L 248.0,261.9 L 240.2,259.5 L 242.9,251.3 L 247.3,241.6 L 243.7,242.0 L 235.9,225.5 L 236.2,214.9 L 238.1,210.3 L 243.7,204.6 Z",
    "Zuid-Holland": "M 242.2,243.2 L 245.9,241.5 L 242.9,251.3 L 241.2,261.0 L 252.8,261.5 L 262.6,258.4 L 269.8,261.8 L 277.5,260.1 L 281.8,265.5 L 289.7,273.4 L 284.6,276.2 L 280.0,276.8 L 277.2,280.0 L 283.5,289.4 L 288.8,291.7 L 280.2,297.4 L 280.8,301.3 L 281.1,304.1 L 290.3,316.3 L 301.2,311.3 L 309.5,308.4 L 315.6,308.5 L 318.0,311.9 L 331.9,317.2 L 327.3,324.0 L 322.5,326.3 L 317.2,329.3 L 315.7,331.8 L 308.8,332.7 L 307.1,339.3 L 287.5,342.9 L 274.4,344.8 L 265.7,354.5 L 246.1,362.5 L 216.2,364.4 L 206.8,372.2 L 174.8,365.9 L 161.6,361.0 L 149.7,348.9 L 136.9,353.7 L 148.8,333.6 L 172.8,303.2 L 193.2,282.3 L 220.3,253.3 Z",
    "Zeeland": "M 77.2,388.0 L 129.3,350.2 L 141.4,350.4 L 152.0,350.6 L 161.6,361.0 L 172.8,365.7 L 193.1,373.5 L 185.3,380.9 L 191.9,391.9 L 198.2,417.2 L 197.1,424.5 L 198.4,426.9 L 193.0,431.2 L 165.4,452.7 L 159.1,452.6 L 154.8,454.4 L 150.5,456.8 L 145.1,457.5 L 143.1,458.6 L 140.6,461.2 L 139.1,458.8 L 133.3,458.9 L 126.2,458.9 L 123.7,458.4 L 123.1,450.0 L 118.5,447.9 L 112.9,447.4 L 106.6,445.7 L 101.0,444.2 L 93.3,441.0 L 92.2,443.4 L 91.1,444.2 L 88.3,443.6 L 84.6,445.1 L 71.5,453.4 L 66.8,450.2 L 64.6,449.2 L 60.4,446.3 L 59.5,443.4 L 61.8,435.1 L 58.4,427.5 L 72.1,379.6 Z",
    "Noord-Brabant": "M 340.6,355.0 L 354.1,355.9 L 370.7,339.2 L 382.8,338.1 L 394.2,338.1 L 414.7,345.5 L 439.0,351.5 L 455.3,361.3 L 465.8,379.7 L 468.4,391.3 L 447.8,392.2 L 411.9,438.9 L 394.0,452.8 L 383.0,441.8 L 372.9,449.3 L 343.6,448.1 L 327.3,430.9 L 315.0,405.0 L 309.9,412.1 L 295.8,423.1 L 295.2,420.7 L 293.7,419.3 L 288.7,420.4 L 277.2,420.1 L 273.8,416.9 L 281.7,417.7 L 282.0,412.6 L 280.8,403.5 L 272.3,402.0 L 265.5,408.2 L 256.4,417.2 L 239.9,407.7 L 214.0,413.0 L 216.0,416.0 L 221.0,427.8 L 198.4,426.9 L 198.2,417.2 L 185.3,380.9 L 211.8,370.1 L 239.0,364.1 L 270.0,350.6 L 295.4,338.3 L 316.8,344.1 L 330.1,348.8 L 336.6,354.7 Z",
    "Limburg": "M 449.8,359.6 L 448.5,350.8 L 458.0,355.4 L 467.0,364.6 L 475.6,371.0 L 476.5,378.4 L 494.7,404.2 L 494.9,424.2 L 485.6,440.4 L 477.4,467.4 L 482.7,472.3 L 474.9,476.5 L 464.3,482.9 L 457.4,491.7 L 445.6,490.4 L 445.7,504.8 L 464.4,508.3 L 473.1,516.0 L 475.6,526.0 L 464.6,533.6 L 458.2,540.6 L 459.5,549.5 L 448.2,549.2 L 438.4,547.0 L 426.2,543.7 L 416.1,549.0 L 414.8,541.0 L 409.5,535.5 L 407.2,528.9 L 413.5,522.8 L 422.8,513.0 L 421.9,505.1 L 428.5,488.6 L 432.7,481.9 L 437.8,475.0 L 431.3,469.8 L 427.6,468.6 L 422.3,464.2 L 412.6,464.9 L 403.7,455.7 L 447.8,392.2 L 469.5,391.0 L 456.6,367.6 Z"
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
    "IJsselmeer": "M 287.2,150.0 L 323.1,107.1 L 376.9,64.3 L 466.7,53.6 L 520.5,75.0 L 484.6,117.9 L 412.8,139.3 L 341.0,154.3 L 287.2,150.0 Z",
    "Markermeer": "M 305.1,246.4 L 332.1,225.0 L 376.9,203.6 L 412.8,214.3 L 376.9,235.7 L 323.1,246.4 L 305.1,246.4 Z",
    "Waddenzee": "M 35.9,107.1 L 161.5,64.3 L 341.0,21.4 L 556.4,21.4 L 664.1,64.3 L 628.2,107.1 L 484.6,117.9 L 215.4,117.9 L 35.9,107.1 Z",
    "Oosterschelde": "M 89.7,407.1 L 143.6,396.4 L 179.5,385.7 L 215.4,385.7 L 233.3,396.4 L 197.4,407.1 L 89.7,407.1 Z",
    "Westerschelde": "M 35.9,492.9 L 107.7,471.4 L 161.5,450.0 L 215.4,439.3 L 233.3,450.0 L 143.6,482.1 L 35.9,492.9 Z",
    "Lek": "M 320,308 L 350,309 L 380,310 L 410,311 L 440,312 L 440,324 L 410,323 L 380,322 L 350,321 L 320,320 Z",
    "Noordzeekanaal": "M 170,215 L 220,217 L 270,219 L 320,220 L 320,232 L 270,230 L 220,228 L 170,226 Z"
};

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

// Select level
function selectLevel(level) {
    currentLevel = level;
    
    // Update button states
    document.getElementById('level1-btn').classList.toggle('active', level === 1);
    document.getElementById('level2-btn').classList.toggle('active', level === 2);
    
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
    currentData = level === 1 ? level1Data : level2Data;
    
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
    } else {
        // Level 2: waterways
        isCorrect = normalizeAnswer(userAnswer) === normalizeAnswer(currentQuestion.name);
        if (isCorrect) {
            feedback.textContent = `Correct! Het is de ${currentQuestion.name}.`;
        } else {
            feedback.textContent = `Helaas, het juiste antwoord is de ${currentQuestion.name}.`;
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
        .replace(/'/g, '')
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

    // Render helper for GeoJSON via D3
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
        } else {
            questionElement.textContent = 'Wat is de naam van het gemarkeerde water?';
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
        // Export functions for testing
        updateStats,
        updateTimerDisplay
    };
}
