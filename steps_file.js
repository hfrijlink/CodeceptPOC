
// in this file you can append custom step methods to 'I' object

const defaultWait = 5;

module.exports = function() {
  return actor({

    // you could declare a webelement here if you're gonna use it multiple times
    cookiebanner: '#cookiebanner[style="display: block; bottom: 0px;"]',
    cookieBtnAccept: '#CybotCookiebotDialogBodyButtonAccept',

    // Define custom steps here, use 'this' to access default methods of I.
    // It is recommended to place a general 'login' function here.

    clickCookieButton() {
      this.waitForElement(this.cookiebanner, defaultWait);
      this.click(this.cookieBtnAccept);
      this.waitForInvisible(this.cookiebanner, defaultWait);
    }

  });
}