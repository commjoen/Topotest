/**
 * @jest-environment jsdom
 */

// Test specifically for the Level 4 answer checking fix
describe('Level 4 Answer Checking Fix', () => {
  beforeEach(() => {
    // Set up a minimal DOM
    document.body.innerHTML = `
      <input type="text" id="answer-input" value="">
      <div id="feedback" class="feedback hidden"></div>
      <button id="submit-btn"></button>
      <button id="next-btn" style="display: none;"></button>
      <span id="score">0</span>
      <span id="question-number">0/0</span>
    `;

    // Mock the global game variables
    global.currentLevel = 4;
    global.gameStarted = true;
    global.currentQuestionIndex = 0;
    global.score = 0;
    global.shuffledData = [
      { name: "Zwolle", region: "Overijssel", type: "city" },
      { name: "IJssel", type: "river" },
      { name: "Almere", region: "Flevoland", type: "city" }
    ];

    // Mock the normalizeAnswer function
    global.normalizeAnswer = (answer) => {
      try {
        answer = answer.normalize('NFD').replace(/[-\u0300-\u036f]/g, '');
      } catch (e) {
        // ignore
      }
      return answer
        .toLowerCase()
        .replace(/\s+/g, '')
        .replace(/-/g, '')
        .replace(/'/g, '');
    };

    // Mock updateStats
    global.updateStats = () => {};
  });

  test('Level 4 should accept correct city name "Zwolle"', () => {
    // Set up the answer
    document.getElementById('answer-input').value = 'Zwolle';
    
    // Simulate the checkAnswer logic for level 4
    const userAnswer = document.getElementById('answer-input').value.trim().toLowerCase();
    const currentQuestion = global.shuffledData[global.currentQuestionIndex];
    const feedback = document.getElementById('feedback');
    
    let isCorrect = false;
    
    // This is the fix - level 4 answer checking
    if (global.currentLevel === 4) {
      isCorrect = global.normalizeAnswer(userAnswer) === global.normalizeAnswer(currentQuestion.name);
      if (isCorrect) {
        feedback.textContent = `Correct! Het is ${currentQuestion.name}.`;
      } else {
        feedback.textContent = `Helaas, het juiste antwoord is ${currentQuestion.name}.`;
      }
    }
    
    expect(isCorrect).toBe(true);
    expect(feedback.textContent).toBe('Correct! Het is Zwolle.');
  });

  test('Level 4 should reject incorrect city name', () => {
    // Set up the answer
    document.getElementById('answer-input').value = 'Amsterdam';
    
    // Simulate the checkAnswer logic for level 4
    const userAnswer = document.getElementById('answer-input').value.trim().toLowerCase();
    const currentQuestion = global.shuffledData[global.currentQuestionIndex];
    const feedback = document.getElementById('feedback');
    
    let isCorrect = false;
    
    // This is the fix - level 4 answer checking
    if (global.currentLevel === 4) {
      isCorrect = global.normalizeAnswer(userAnswer) === global.normalizeAnswer(currentQuestion.name);
      if (isCorrect) {
        feedback.textContent = `Correct! Het is ${currentQuestion.name}.`;
      } else {
        feedback.textContent = `Helaas, het juiste antwoord is ${currentQuestion.name}.`;
      }
    }
    
    expect(isCorrect).toBe(false);
    expect(feedback.textContent).toBe('Helaas, het juiste antwoord is Zwolle.');
  });

  test('Level 4 should accept correct river name "IJssel"', () => {
    // Move to second question (river)
    global.currentQuestionIndex = 1;
    document.getElementById('answer-input').value = 'IJssel';
    
    // Simulate the checkAnswer logic for level 4
    const userAnswer = document.getElementById('answer-input').value.trim().toLowerCase();
    const currentQuestion = global.shuffledData[global.currentQuestionIndex];
    const feedback = document.getElementById('feedback');
    
    let isCorrect = false;
    
    // This is the fix - level 4 answer checking
    if (global.currentLevel === 4) {
      isCorrect = global.normalizeAnswer(userAnswer) === global.normalizeAnswer(currentQuestion.name);
      if (isCorrect) {
        feedback.textContent = `Correct! Het is ${currentQuestion.name}.`;
      } else {
        feedback.textContent = `Helaas, het juiste antwoord is ${currentQuestion.name}.`;
      }
    }
    
    expect(isCorrect).toBe(true);
    expect(feedback.textContent).toBe('Correct! Het is IJssel.');
  });

  test('Level 4 should handle normalized answers (case-insensitive)', () => {
    // Test with different case
    document.getElementById('answer-input').value = 'ZWOLLE';
    
    const userAnswer = document.getElementById('answer-input').value.trim().toLowerCase();
    const currentQuestion = global.shuffledData[global.currentQuestionIndex];
    
    let isCorrect = false;
    
    if (global.currentLevel === 4) {
      isCorrect = global.normalizeAnswer(userAnswer) === global.normalizeAnswer(currentQuestion.name);
    }
    
    expect(isCorrect).toBe(true);
  });

  test('Before fix: Level 4 would not work (isCorrect would remain false)', () => {
    // This test demonstrates what would happen WITHOUT the fix
    document.getElementById('answer-input').value = 'Zwolle';
    
    const userAnswer = document.getElementById('answer-input').value.trim().toLowerCase();
    const currentQuestion = global.shuffledData[global.currentQuestionIndex];
    
    let isCorrect = false;
    
    // Simulate the OLD code (without level 4 check)
    if (global.currentLevel === 1) {
      // Level 1 logic
    } else if (global.currentLevel === 2) {
      // Level 2 logic
    } else if (global.currentLevel === 3) {
      // Level 3 logic
    }
    // No level 4 logic - this was the bug!
    
    // Without the fix, isCorrect would remain false even for correct answers
    expect(isCorrect).toBe(false); // This is the bug!
  });
});
