module.exports = {
  moduleFileExtensions: ['js', 'jsx'],
  moduleNameMapper: {
    Articles: '<rootDir>/app/components/Articles.jsx',
    HeadlineItem: '<rootDir>/app/components/HeadlineItem.jsx',
    HeadlineList: '<rootDir>/app/components/HeadlineList.jsx',
    HeadlineSearch: '<rootDir>/app/components/HeadlineSearch.jsx',
    Login: '<rootDir>/app/components/Login.jsx',
    Main: '<rootDir>/app/components/Main.jsx',
    Nav: '<rootDir>/app/components/Nav.jsx',
    NewsHome: '<rootDir>/app/components/NewsHome.jsx',
    NotFoundPage: '<rootDir>/app/components/NotFoundPage.jsx'
  },
  globals: {
    window: true,
    document: true,
  },
  collectCoverage: true,
  coverageDirectory: '<rootDir>',
  coverageReporters: ['lcov'],
  collectCoverageFrom: [
    '**/app/action/**', '**/app/store/**', '**/app/components/**',
    '!**/node_modules/**', '!**/lcov-report/**'
  ],
};
