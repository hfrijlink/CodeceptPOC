exports.config = {
  tests: './tests/*_test.js',
  output: './output',
  helpers: {
    WebDriver: {
      url: 'https://worth.systems',
      browser: 'Firefox',
      host: 'hub-cloud.browserstack.com',
      user: 'BROWSER_STACK_USER',
      key: 'BROWSER_STACK_KEY',
      desiredCapabilities: {
        project: 'CodeceptPOC',
        os : 'Windows',
        os_version : '7',
        'browserName' : 'Firefox',
        'browser_version' : '65.0',
        'browserstack.local' : 'false',
        'browserstack.selenium_version' : '3.14.0',
        'browserstack.geckodriver' : '0.23.0',
      },
      restart: true,
      timeouts: {
        script: 60000,
        'page load': 10000
      }
      },
    },
  include: {
    I: './steps.js'
  },
  bootstrap: null,
  mocha: {},
  name: 'blogTest'
}
