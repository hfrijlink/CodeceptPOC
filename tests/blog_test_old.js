Feature('Homepage');

Scenario('Showing off Codecept', (I) => {
  // empty because target url is already in cocecept.config.js
  I.amOnPage('/');
  
  // xpath
  I.waitForElement('//div[@id="cookiebanner"]');

  // wait
  I.wait(0.5);

  // css selector
  I.click('#CybotCookiebotDialogBodyButtonAccept');

  // strict locator
  I.waitForInvisible({ css: '#cookiebanner'});

  // by text
  I.click('Contact Us');

  // tell Codecept to wait for max. 10 second. Default is 1 second
  I.waitForText('THE DOOR IS ALWAYS OPEN', 10);

  // check url
  I.seeInCurrentUrl('/contact-us');

  // specify context
  I.see('READING UK', 'h2.block-header__title');
});
