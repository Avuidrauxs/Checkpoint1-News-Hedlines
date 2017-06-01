module.exports = {
  moduleFileExtensions: ['js', 'jsx'],
  moduleNameMapper: {

    HeadlineItem: '<rootDir>/app/components/HeadlineItem.jsx',
    HeadlineList: '<rootDir>/app/components/HeadlineList.jsx',
    HeadlineSearch: '<rootDir>/app/components/HeadlineSearch.jsx',
    Login: '<rootDir>/app/components/Login.jsx',
    Main: '<rootDir>/app/components/Main.jsx',
    Nav: '<rootDir>/app/components/Nav.jsx',
    NewsHome: '<rootDir>/app/components/NewsHome.jsx',
    NotFoundPage: '<rootDir>/app/components/NotFoundPage.jsx',
    '\\.(jpg|jpeg|png|svg)$': '<rootDir>/app/tests/__mock__/jqueryMock.js',
    '\\.(css|scss)$': 'identity-obj-proxy'
  },
  globals: {
    window: true,
    document: true,
  },
  setupFiles: ['<rootDir>/app/tests/__mock__/jqueryMock.js',
    '<rootDir>/app/tests/__mock__/localStorageMock.js'],
  collectCoverage: true,
  coverageDirectory: '<rootDir>/coverage',
  coverageReporters: ['lcov'],
  collectCoverageFrom: [
    '**/app/action/**', '**/app/store/**', '**/app/components/**',
    '!**/node_modules/**', '!**/lcov-report/**'
  ],
};
