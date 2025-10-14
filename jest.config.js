module.exports = {
  testEnvironment: 'jsdom',
  testMatch: ['**/__tests__/**/*.test.js', '**/?(*.)+(spec|test).js'],
  collectCoverageFrom: [
    'game.js',
    '!node_modules/**'
  ],
  coveragePathIgnorePatterns: [
    '/node_modules/'
  ]
};
