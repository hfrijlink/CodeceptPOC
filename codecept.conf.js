exports.config = {
  tests: './tests/*_test.js',
  output: './output',
  helpers: {
    WebDriver: {
      url: 'https://worth.systems',
      browser: 'chrome'
    }
  },
  include: {
    I: './steps.js'
  },
  bootstrap: null,
  mocha: {},
  name: 'blogTest'
}