/// <reference path="../steps.d.ts" />

Feature('Showing off Codecept');

Scenario('test something', (I) => {
  // empty because target url is already in cocecept.config.js
  I.amOnPage('/');
  
  // our custom step!!!
  I.clickCookieButton();

  // by text
  I.click('Join Us');

  // tell Codecept to wait for max. 10 second. Default is 1 second
  I.waitForText('THE ICING ON THE CAKE', 10);

  // check url
  I.seeInCurrentUrl('/join-us');

  // specify context
  I.see('READING, UK', 'h2.block-header__title');
});
