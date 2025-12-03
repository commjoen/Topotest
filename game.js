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
        return scores ? JSON.parse(scores) : { level1: 0, level2: 0, level3: 0 };
    } catch (e) {
        return { level1: 0, level2: 0, level3: 0 };
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
    document.getElementById('level3-btn').classList.toggle('active', level === 3);
    
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
    currentData = level === 1 ? level1Data : (level === 2 ? level2Data : level3Data);
    
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
    } else if (currentLevel === 3) {
        // Level 3: cities
        isCorrect = normalizeAnswer(userAnswer) === normalizeAnswer(currentQuestion.name);
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

    // If drawing cities (level 3), render cities as points on the northern provinces map
    if (currentLevel === 3) {
        renderNorthernCities();
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
        } else if (currentLevel === 2) {
            questionElement.textContent = 'Wat is de naam van het gemarkeerde water?';
        } else if (currentLevel === 3) {
            questionElement.textContent = 'Wat is de naam van de gemarkeerde stad?';
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
