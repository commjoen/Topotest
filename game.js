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

// SVG map coordinates for provinces (simplified positions)
const provincePositions = {
    "Groningen": { x: 600, y: 100, width: 150, height: 120 },
    "Friesland": { x: 400, y: 80, width: 180, height: 100 },
    "Drenthe": { x: 550, y: 220, width: 130, height: 100 },
    "Overijssel": { x: 500, y: 320, width: 150, height: 120 },
    "Flevoland": { x: 400, y: 280, width: 80, height: 100 },
    "Gelderland": { x: 500, y: 450, width: 180, height: 180 },
    "Utrecht": { x: 350, y: 400, width: 100, height: 80 },
    "Noord-Holland": { x: 250, y: 200, width: 130, height: 180 },
    "Zuid-Holland": { x: 200, y: 400, width: 130, height: 120 },
    "Zeeland": { x: 150, y: 550, width: 150, height: 100 },
    "Noord-Brabant": { x: 300, y: 600, width: 250, height: 120 },
    "Limburg": { x: 500, y: 700, width: 100, height: 200 }
};

// SVG map coordinates for waterways (simplified paths)
const waterwayPositions = {
    "IJssel": { x: 520, y: 300, width: 40, height: 150 },
    "Maas": { x: 450, y: 650, width: 50, height: 200 },
    "Waal": { x: 400, y: 520, width: 150, height: 40 },
    "Neder-Rijn": { x: 380, y: 480, width: 120, height: 30 },
    "Amsterdam-Rijnkanaal": { x: 350, y: 350, width: 100, height: 80 },
    "Waddenzee": { x: 350, y: 50, width: 300, height: 60 },
    "Oosterschelde": { x: 180, y: 580, width: 100, height: 30 },
    "Westerschelde": { x: 100, y: 620, width: 150, height: 30 },
    "IJsselmeer": { x: 320, y: 220, width: 80, height: 100 },
    "Markermeer": { x: 370, y: 260, width: 50, height: 60 },
    "Nieuwe Waterweg": { x: 180, y: 450, width: 80, height: 20 },
    "Lek": { x: 320, y: 470, width: 100, height: 25 }
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
        text.setAttribute('x', '400');
        text.setAttribute('y', '500');
        text.setAttribute('text-anchor', 'middle');
        text.setAttribute('font-size', '24');
        text.setAttribute('fill', '#666');
        text.textContent = 'Klik op "Start Spel" om te beginnen!';
        mapSvg.appendChild(text);
        return;
    }
    
    if (currentQuestionIndex >= shuffledData.length) return;
    
    const positions = currentLevel === 1 ? provincePositions : waterwayPositions;
    const currentQuestion = shuffledData[currentQuestionIndex];
    
    // For level 1, randomly decide whether to ask for province or capital
    if (currentLevel === 1 && askedQuestions.length === currentQuestionIndex) {
        askedQuestions.push(Math.random() < 0.5 ? 'province' : 'capital');
    }
    
    // Draw all regions
    Object.keys(positions).forEach(regionName => {
        const pos = positions[regionName];
        const rect = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
        
        rect.setAttribute('x', pos.x);
        rect.setAttribute('y', pos.y);
        rect.setAttribute('width', pos.width);
        rect.setAttribute('height', pos.height);
        rect.setAttribute('class', 'map-region');
        
        // Highlight the current question
        if (currentLevel === 1) {
            const askingForProvince = askedQuestions[currentQuestionIndex] === 'province';
            if (regionName === currentQuestion.name) {
                rect.classList.add('highlighted');
            }
        } else {
            if (regionName === currentQuestion.name) {
                rect.classList.add('highlighted');
            }
        }
        
        mapSvg.appendChild(rect);
        
        // Add label for non-highlighted regions
        if (!rect.classList.contains('highlighted')) {
            const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
            text.setAttribute('x', pos.x + pos.width / 2);
            text.setAttribute('y', pos.y + pos.height / 2);
            text.setAttribute('text-anchor', 'middle');
            text.setAttribute('dominant-baseline', 'middle');
            text.setAttribute('font-size', '12');
            text.setAttribute('fill', '#2c3e50');
            text.setAttribute('pointer-events', 'none');
            text.textContent = regionName;
            mapSvg.appendChild(text);
        }
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
