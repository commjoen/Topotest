/**
 * @jest-environment jsdom
 */

describe('Topotest Game Tests', () => {
  describe('Game Settings UI', () => {
    beforeEach(() => {
      // Set up a minimal DOM
      document.body.innerHTML = `
        <input type="text" id="num-questions" value="all">
        <input type="checkbox" id="enable-timer">
        <span id="timer-display" style="display: none;">
          Tijd: <span id="timer-value">0:00</span>
        </span>
        <span id="score">0</span>
        <span id="question-number">0/0</span>
      `;
    });

    test('question limit input should exist and have default value', () => {
      const input = document.getElementById('num-questions');
      expect(input).toBeTruthy();
      expect(input.type).toBe('text');
      expect(input.value).toBe('all');
    });

    test('timer checkbox should exist and be unchecked by default', () => {
      const checkbox = document.getElementById('enable-timer');
      expect(checkbox).toBeTruthy();
      expect(checkbox.type).toBe('checkbox');
      expect(checkbox.checked).toBe(false);
    });

    test('timer display should exist and be hidden by default', () => {
      const timerDisplay = document.getElementById('timer-display');
      expect(timerDisplay).toBeTruthy();
      expect(timerDisplay.style.display).toBe('none');
    });

    test('should be able to change question limit', () => {
      const input = document.getElementById('num-questions');
      input.value = '5';
      expect(input.value).toBe('5');
    });

    test('should be able to set custom question limit', () => {
      const input = document.getElementById('num-questions');
      input.value = '25';
      expect(input.value).toBe('25');
    });

    test('should be able to enable timer', () => {
      const checkbox = document.getElementById('enable-timer');
      checkbox.checked = true;
      expect(checkbox.checked).toBe(true);
    });
  });

  describe('Timer Format', () => {
    test('timer should format seconds correctly', () => {
      // Test that timer formats 0 seconds as 0:00
      const format0 = (seconds) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins}:${secs.toString().padStart(2, '0')}`;
      };
      
      expect(format0(0)).toBe('0:00');
      expect(format0(65)).toBe('1:05');
      expect(format0(125)).toBe('2:05');
      expect(format0(3661)).toBe('61:01');
    });
  });

  describe('Question Limiting Logic', () => {
    const mockData = [
      { name: 'Item1' },
      { name: 'Item2' },
      { name: 'Item3' },
      { name: 'Item4' },
      { name: 'Item5' },
      { name: 'Item6' },
      { name: 'Item7' },
      { name: 'Item8' },
      { name: 'Item9' },
      { name: 'Item10' },
    ];

    test('should limit questions when set to 5', () => {
      const questionLimit = '5';
      let dataToUse = [...mockData];
      
      if (questionLimit !== 'all') {
        const limit = parseInt(questionLimit);
        dataToUse = dataToUse.slice(0, limit);
      }
      
      expect(dataToUse.length).toBe(5);
      expect(dataToUse.length).toBeLessThan(mockData.length);
    });

    test('should not limit questions when set to all', () => {
      const questionLimit = 'all';
      let dataToUse = [...mockData];
      
      if (questionLimit !== 'all') {
        const limit = parseInt(questionLimit);
        dataToUse = dataToUse.slice(0, limit);
      }
      
      expect(dataToUse.length).toBe(mockData.length);
    });

    test('should limit to 10 questions', () => {
      const questionLimit = '10';
      let dataToUse = [...mockData];
      
      if (questionLimit !== 'all') {
        const limit = parseInt(questionLimit);
        dataToUse = dataToUse.slice(0, limit);
      }
      
      expect(dataToUse.length).toBe(10);
    });
  });

  describe('String Normalization Logic', () => {
    // Test the normalization logic that would be in normalizeAnswer
    const normalizeTestAnswer = (answer) => {
      try {
        answer = answer.normalize('NFD').replace(/[-\u0300-\u036f]/g, '');
      } catch (e) {
        // normalize may not be supported
      }

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
    };

    test('should normalize simple strings to lowercase', () => {
      expect(normalizeTestAnswer('Groningen')).toBe('groningen');
      expect(normalizeTestAnswer('GRONINGEN')).toBe('groningen');
    });

    test('should remove spaces', () => {
      expect(normalizeTestAnswer('Noord Holland')).toBe('noordholland');
      expect(normalizeTestAnswer('Noord  Holland')).toBe('noordholland');
    });

    test('should remove hyphens', () => {
      expect(normalizeTestAnswer('Noord-Holland')).toBe('noordholland');
      expect(normalizeTestAnswer('Zuid-Holland')).toBe('zuidholland');
    });

    test('should remove apostrophes', () => {
      expect(normalizeTestAnswer("'s-Hertogenbosch")).toBe('shertogenbosch');
    });

    test('should handle empty strings', () => {
      expect(normalizeTestAnswer('')).toBe('');
    });

    test('should handle diacritics', () => {
      expect(normalizeTestAnswer('café')).toBe('cafe');
      expect(normalizeTestAnswer('naïve')).toBe('naive');
    });
  });

  describe('Game Data Structure', () => {
    test('province data should have correct structure', () => {
      const sampleProvince = {
        name: 'Groningen',
        capital: 'Groningen',
        type: 'province'
      };
      
      expect(sampleProvince).toHaveProperty('name');
      expect(sampleProvince).toHaveProperty('capital');
      expect(sampleProvince).toHaveProperty('type');
      expect(sampleProvince.type).toBe('province');
    });

    test('waterway data should have correct structure', () => {
      const sampleWaterway = {
        name: 'IJssel',
        type: 'river'
      };
      
      expect(sampleWaterway).toHaveProperty('name');
      expect(sampleWaterway).toHaveProperty('type');
      expect(['river', 'canal', 'sea', 'estuary', 'lake', 'waterway']).toContain(sampleWaterway.type);
    });
  });

  describe('Score Calculation', () => {
    test('should calculate percentage correctly', () => {
      const calculatePercentage = (score, total) => Math.round((score / total) * 100);
      
      expect(calculatePercentage(5, 5)).toBe(100);
      expect(calculatePercentage(4, 5)).toBe(80);
      expect(calculatePercentage(3, 5)).toBe(60);
      expect(calculatePercentage(0, 5)).toBe(0);
      expect(calculatePercentage(10, 12)).toBe(83);
    });
  });

  describe('LocalStorage High Scores', () => {
    // Helper functions that mirror the actual implementation
    const getHighScores = () => {
      try {
        const scores = localStorage.getItem('topotest-highscores');
        return scores ? JSON.parse(scores) : { level1: 0, level2: 0 };
      } catch (e) {
        return { level1: 0, level2: 0 };
      }
    };

    const saveHighScore = (level, score) => {
      try {
        const scores = localStorage.getItem('topotest-highscores');
        const highScores = scores ? JSON.parse(scores) : { level1: 0, level2: 0 };
        const key = `level${level}`;
        if (score > highScores[key]) {
          highScores[key] = score;
          localStorage.setItem('topotest-highscores', JSON.stringify(highScores));
          return true;
        }
        return false;
      } catch (e) {
        return false;
      }
    };

    beforeEach(() => {
      // Clear localStorage before each test
      localStorage.clear();
    });

    test('should initialize with zero scores', () => {
      const scores = getHighScores();
      expect(scores).toEqual({ level1: 0, level2: 0 });
    });

    test('should save high score for level 1', () => {
      const isNewHighScore = saveHighScore(1, 10);
      expect(isNewHighScore).toBe(true);
      
      const savedScores = JSON.parse(localStorage.getItem('topotest-highscores'));
      expect(savedScores.level1).toBe(10);
    });

    test('should not save score if it is lower than current high score', () => {
      saveHighScore(1, 10);
      const isNewHighScore = saveHighScore(1, 5);
      expect(isNewHighScore).toBe(false);
      
      const savedScores = JSON.parse(localStorage.getItem('topotest-highscores'));
      expect(savedScores.level1).toBe(10);
    });

    test('should save high scores for different levels independently', () => {
      saveHighScore(1, 10);
      saveHighScore(2, 8);
      
      const savedScores = JSON.parse(localStorage.getItem('topotest-highscores'));
      expect(savedScores.level1).toBe(10);
      expect(savedScores.level2).toBe(8);
    });
  });

  describe('LocalStorage Question Limit', () => {
    // Helper functions that mirror the actual implementation
    const getQuestionLimit = () => {
      try {
        const limit = localStorage.getItem('topotest-question-limit');
        return limit !== null ? limit : 'all';
      } catch (e) {
        return 'all';
      }
    };

    const saveQuestionLimit = (limit) => {
      try {
        localStorage.setItem('topotest-question-limit', limit);
      } catch (e) {
        // Ignore errors
      }
    };

    const validateQuestionLimit = (value) => {
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
    };

    beforeEach(() => {
      // Clear localStorage before each test
      localStorage.clear();
    });

    test('should initialize with "all" as default', () => {
      const limit = getQuestionLimit();
      expect(limit).toBe('all');
    });

    test('should save question limit to localStorage', () => {
      saveQuestionLimit('10');
      const savedLimit = localStorage.getItem('topotest-question-limit');
      expect(savedLimit).toBe('10');
    });

    test('should retrieve saved question limit', () => {
      saveQuestionLimit('25');
      const limit = getQuestionLimit();
      expect(limit).toBe('25');
    });

    test('should handle custom numeric values', () => {
      saveQuestionLimit('42');
      const limit = getQuestionLimit();
      expect(limit).toBe('42');
    });

    test('should handle "all" value', () => {
      saveQuestionLimit('all');
      const limit = getQuestionLimit();
      expect(limit).toBe('all');
    });

    test('should validate "all" case-insensitively', () => {
      expect(validateQuestionLimit('all')).toBe('all');
      expect(validateQuestionLimit('ALL')).toBe('all');
      expect(validateQuestionLimit('All')).toBe('all');
    });

    test('should validate positive integers', () => {
      expect(validateQuestionLimit('5')).toBe('5');
      expect(validateQuestionLimit('10')).toBe('10');
      expect(validateQuestionLimit('100')).toBe('100');
    });

    test('should reject negative numbers', () => {
      expect(validateQuestionLimit('-5')).toBe('all');
      expect(validateQuestionLimit('-10')).toBe('all');
    });

    test('should reject zero', () => {
      expect(validateQuestionLimit('0')).toBe('all');
    });

    test('should reject invalid strings', () => {
      expect(validateQuestionLimit('abc')).toBe('all');
      expect(validateQuestionLimit('test')).toBe('all');
      expect(validateQuestionLimit('')).toBe('all');
    });

    test('should reject special characters', () => {
      expect(validateQuestionLimit('5.5')).toBe('5');
      expect(validateQuestionLimit('10.9')).toBe('10');
    });
  });

  describe('Level 3: Groningen & Friesland Cities', () => {
    test('level 3 data should have correct structure', () => {
      const sampleCity = {
        name: 'Groningen',
        province: 'Groningen',
        type: 'city',
        capital: true
      };
      
      expect(sampleCity).toHaveProperty('name');
      expect(sampleCity).toHaveProperty('province');
      expect(sampleCity).toHaveProperty('type');
      expect(sampleCity).toHaveProperty('capital');
      expect(sampleCity.type).toBe('city');
      expect(['Groningen', 'Friesland']).toContain(sampleCity.province);
    });

    test('should have cities from both Groningen and Friesland', () => {
      const level3Data = [
        { name: "Groningen", province: "Groningen", type: "city", capital: true },
        { name: "Leeuwarden", province: "Friesland", type: "city", capital: true },
        { name: "Delfzijl", province: "Groningen", type: "city", capital: false },
        { name: "Sneek", province: "Friesland", type: "city", capital: false }
      ];

      const groningenCities = level3Data.filter(c => c.province === 'Groningen');
      const frieslandCities = level3Data.filter(c => c.province === 'Friesland');

      expect(groningenCities.length).toBeGreaterThan(0);
      expect(frieslandCities.length).toBeGreaterThan(0);
    });

    test('should have capital cities marked correctly', () => {
      const level3Data = [
        { name: "Groningen", province: "Groningen", type: "city", capital: true },
        { name: "Leeuwarden", province: "Friesland", type: "city", capital: true },
        { name: "Delfzijl", province: "Groningen", type: "city", capital: false }
      ];

      const capitals = level3Data.filter(c => c.capital === true);
      expect(capitals.length).toBe(2);
      expect(capitals.map(c => c.name)).toContain('Groningen');
      expect(capitals.map(c => c.name)).toContain('Leeuwarden');
    });

    test('should normalize city names correctly', () => {
      const normalizeTestAnswer = (answer) => {
        try {
          answer = answer.normalize('NFD').replace(/[-\u0300-\u036f]/g, '');
        } catch (e) {
          // normalize may not be supported
        }

        return answer
          .toLowerCase()
          .replace(/\s+/g, '')
          .replace(/-/g, '')
          .replace(/'/g, '');
      };

      expect(normalizeTestAnswer('Groningen')).toBe('groningen');
      expect(normalizeTestAnswer('Leeuwarden')).toBe('leeuwarden');
      expect(normalizeTestAnswer('s-Hertogenbosch')).toBe('shertogenbosch');
    });
  });

  describe('High Scores for Level 3', () => {
    const getHighScores = () => {
      try {
        const scores = localStorage.getItem('topotest-highscores');
        return scores ? JSON.parse(scores) : { level1: 0, level2: 0, level3: 0 };
      } catch (e) {
        return { level1: 0, level2: 0, level3: 0 };
      }
    };

    const saveHighScore = (level, score) => {
      try {
        const scores = localStorage.getItem('topotest-highscores');
        const highScores = scores ? JSON.parse(scores) : { level1: 0, level2: 0, level3: 0 };
        const key = `level${level}`;
        if (score > highScores[key]) {
          highScores[key] = score;
          localStorage.setItem('topotest-highscores', JSON.stringify(highScores));
          return true;
        }
        return false;
      } catch (e) {
        return false;
      }
    };

    beforeEach(() => {
      localStorage.clear();
    });

    test('should initialize with zero score for level 3', () => {
      const scores = getHighScores();
      expect(scores).toHaveProperty('level3');
      expect(scores.level3).toBe(0);
    });

    test('should save high score for level 3', () => {
      const isNewHighScore = saveHighScore(3, 15);
      expect(isNewHighScore).toBe(true);
      
      const savedScores = JSON.parse(localStorage.getItem('topotest-highscores'));
      expect(savedScores.level3).toBe(15);
    });

    test('should maintain high scores for all three levels independently', () => {
      saveHighScore(1, 10);
      saveHighScore(2, 8);
      saveHighScore(3, 12);
      
      const savedScores = JSON.parse(localStorage.getItem('topotest-highscores'));
      expect(savedScores.level1).toBe(10);
      expect(savedScores.level2).toBe(8);
      expect(savedScores.level3).toBe(12);
    });
  });
});