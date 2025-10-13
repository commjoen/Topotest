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
    { name: "Noord-Brabant", capital: "Den Bosch", type: "province" },
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
    { name: "Lek", type: "river" }
];

// Game state
let currentLevel = 1;
let currentQuestionIndex = 0;
let score = 0;
let gameStarted = false;
let currentData = [];
let shuffledData = [];
let askedQuestions = [];

// SVG map paths for provinces (geographical shapes)
const provincePaths = {
    "Groningen": "M 520,20 L 580,15 L 620,25 L 640,45 L 650,70 L 645,95 L 630,110 L 610,115 L 590,110 L 570,95 L 550,75 L 535,55 L 525,35 Z",
    "Friesland": "M 340,30 L 380,25 L 420,28 L 460,35 L 495,50 L 515,70 L 520,90 L 510,105 L 495,110 L 475,105 L 445,95 L 410,85 L 380,75 L 355,65 L 340,50 Z",
    "Drenthe": "M 520,95 L 565,100 L 590,115 L 600,135 L 595,160 L 575,170 L 550,165 L 530,155 L 520,140 L 515,120 Z",
    "Overijssel": "M 480,110 L 520,115 L 545,125 L 560,145 L 565,170 L 560,195 L 545,215 L 525,225 L 500,225 L 480,215 L 465,195 L 460,170 L 465,145 L 475,125 Z",
    "Flevoland": "M 360,145 L 390,140 L 415,145 L 430,160 L 435,180 L 430,200 L 415,210 L 390,210 L 370,200 L 360,180 Z",
    "Gelderland": "M 475,220 L 520,225 L 555,235 L 580,255 L 595,285 L 600,320 L 590,355 L 570,375 L 545,385 L 515,390 L 485,385 L 460,370 L 445,350 L 435,325 L 430,295 L 440,265 L 455,240 Z",
    "Utrecht": "M 345,230 L 375,225 L 405,230 L 425,245 L 435,265 L 435,285 L 425,300 L 405,310 L 375,310 L 350,300 L 340,280 L 340,255 Z",
    "Noord-Holland": "M 230,85 L 265,80 L 295,85 L 320,100 L 335,125 L 340,150 L 335,180 L 320,205 L 295,220 L 265,225 L 235,215 L 215,195 L 205,170 L 200,140 L 210,110 Z",
    "Zuid-Holland": "M 195,230 L 230,225 L 265,230 L 290,245 L 305,265 L 310,285 L 305,305 L 285,320 L 255,325 L 225,320 L 200,305 L 185,285 L 180,260 L 185,240 Z",
    "Zeeland": "M 85,355 L 120,350 L 155,355 L 185,365 L 210,380 L 225,395 L 220,410 L 200,420 L 170,422 L 140,418 L 110,410 L 85,395 L 75,375 Z",
    "Noord-Brabant": "M 230,330 L 280,325 L 330,330 L 370,340 L 410,355 L 445,370 L 470,385 L 475,405 L 465,420 L 440,430 L 400,435 L 355,435 L 310,430 L 270,420 L 240,405 L 220,385 L 215,365 L 220,345 Z",
    "Limburg": "M 475,395 L 495,390 L 515,395 L 530,410 L 540,435 L 545,465 L 545,495 L 540,525 L 530,550 L 515,565 L 495,570 L 480,565 L 465,550 L 455,525 L 450,495 L 450,465 L 455,435 L 465,410 Z"
};

// Label positions for provinces (center of each province)
const provinceLabelPositions = {
    "Groningen": { x: 585, y: 65 },
    "Friesland": { x: 425, y: 70 },
    "Drenthe": { x: 560, y: 135 },
    "Overijssel": { x: 505, y: 165 },
    "Flevoland": { x: 395, y: 175 },
    "Gelderland": { x: 515, y: 305 },
    "Utrecht": { x: 385, y: 268 },
    "Noord-Holland": { x: 270, y: 155 },
    "Zuid-Holland": { x: 245, y: 275 },
    "Zeeland": { x: 150, y: 385 },
    "Noord-Brabant": { x: 345, y: 380 },
    "Limburg": { x: 495, y: 480 }
};

// SVG map paths for waterways (geographical shapes)
const waterwayPaths = {
    "IJssel": "M 505,180 L 510,200 L 515,220 L 520,245 L 525,270 L 530,295 L 532,315",
    "Maas": "M 470,380 L 475,405 L 480,430 L 485,455 L 490,480 L 493,505 L 495,530 L 497,555",
    "Waal": "M 405,305 L 430,310 L 455,315 L 480,318 L 505,320 L 530,322",
    "Neder-Rijn": "M 375,295 L 395,297 L 415,299 L 435,300 L 455,301",
    "Amsterdam-Rijnkanaal": "M 340,200 L 350,215 L 360,230 L 370,245 L 380,260 L 388,275",
    "Waddenzee": "M 250,40 L 350,35 L 450,40 L 550,45 L 630,55 L 630,75 L 550,70 L 450,65 L 350,60 L 250,55 Z",
    "Oosterschelde": "M 155,365 L 180,368 L 205,370 L 225,371",
    "Westerschelde": "M 85,395 L 110,397 L 135,399 L 160,400 L 185,401",
    "IJsselmeer": "M 320,130 L 345,128 L 365,130 L 380,135 L 390,145 L 395,160 L 390,175 L 380,185 L 365,190 L 345,192 L 325,190 L 310,180 L 305,165 L 310,148 Z",
    "Markermeer": "M 360,160 L 375,158 L 390,160 L 400,165 L 405,175 L 400,185 L 390,190 L 375,192 L 360,190 L 352,182 L 350,172 Z",
    "Nieuwe Waterweg": "M 185,290 L 210,292 L 235,294 L 260,295",
    "Lek": "M 305,305 L 330,307 L 355,309 L 380,310 L 405,311"
};

// Label positions for waterways
const waterwayLabelPositions = {
    "IJssel": { x: 520, y: 245 },
    "Maas": { x: 490, y: 465 },
    "Waal": { x: 465, y: 318 },
    "Neder-Rijn": { x: 415, y: 298 },
    "Amsterdam-Rijnkanaal": { x: 365, y: 235 },
    "Waddenzee": { x: 440, y: 58 },
    "Oosterschelde": { x: 190, y: 370 },
    "Westerschelde": { x: 135, y: 398 },
    "IJsselmeer": { x: 355, y: 160 },
    "Markermeer": { x: 380, y: 175 },
    "Nieuwe Waterweg": { x: 225, y: 293 },
    "Lek": { x: 355, y: 308 }
};

// Initialize the game
function init() {
    selectLevel(1);
    updateStats();
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
    drawMap();
}

// Start the game
function startGame() {
    gameStarted = true;
    currentQuestionIndex = 0;
    score = 0;
    askedQuestions = [];
    
    // Shuffle the data
    shuffledData = [...currentData].sort(() => Math.random() - 0.5);
    
    document.getElementById('start-btn').style.display = 'none';
    document.getElementById('submit-btn').disabled = false;
    document.getElementById('answer-input').disabled = false;
    
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
    return answer
        .toLowerCase()
        .replace(/\s+/g, '')
        .replace(/-/g, '')
        .replace(/'/g, '')
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
    const totalQuestions = shuffledData.length;
    const percentage = Math.round((score / totalQuestions) * 100);
    
    const feedback = document.getElementById('feedback');
    feedback.className = 'feedback';
    feedback.style.background = '#e7f3ff';
    feedback.style.color = '#004085';
    feedback.style.border = '2px solid #b8daff';
    
    let message = `Spel afgelopen! Je score: ${score}/${totalQuestions} (${percentage}%)`;
    
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
    const total = gameStarted ? shuffledData.length : currentData.length;
    document.getElementById('question-number').textContent = `${currentQuestionIndex}/${total}`;
}

// Draw the map
function drawMap() {
    const mapSvg = document.getElementById('map');
    mapSvg.innerHTML = '';
    
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
    const labelPositions = currentLevel === 1 ? provinceLabelPositions : waterwayLabelPositions;
    const currentQuestion = shuffledData[currentQuestionIndex];
    
    // For level 1, randomly decide whether to ask for province or capital
    if (currentLevel === 1 && askedQuestions.length === currentQuestionIndex) {
        askedQuestions.push(Math.random() < 0.5 ? 'province' : 'capital');
    }
    
    // Draw all regions
    Object.keys(paths).forEach(regionName => {
        const pathData = paths[regionName];
        const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        
        path.setAttribute('d', pathData);
        path.setAttribute('data-region', regionName);
        
        // Different styling for waterways vs provinces
        if (currentLevel === 2) {
            // Waterways: drawn as lines
            path.setAttribute('class', 'map-waterway');
            path.setAttribute('fill', 'none');
            path.setAttribute('stroke', '#4A90E2');
            path.setAttribute('stroke-width', '8');
        } else {
            // Provinces: drawn as filled shapes
            path.setAttribute('class', 'map-region');
        }
        
        // Highlight the current question
        if (currentLevel === 1) {
            const askingForProvince = askedQuestions[currentQuestionIndex] === 'province';
            if (regionName === currentQuestion.name) {
                path.classList.add('highlighted');
            }
        } else {
            if (regionName === currentQuestion.name) {
                path.classList.add('highlighted');
            }
        }
        
        mapSvg.appendChild(path);
    });
    
    // Update question text
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
