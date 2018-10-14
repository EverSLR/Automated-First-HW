import loginPage from '../page_objects/login.page';
import landingPage from '../page_objects/landing.page';

module.exports = function() {

    this.Given(/^a client is on the login$/, function () {
        loginPage.open(true); //true para maximizar
        loginPage.email.waitForVisible();
      });

    this.When(/^the right credentials are submitted$/, function () {
        loginPage.email.setValue("user@phptravels.com");
        loginPage.password.setValue("demouser");
        loginPage.form.click();
        browser.pause(5000);
      });

    this.Then(/^the login attempt succeeded$/, function () {
        landingPage.tabBar.waitForExist();
        expect(landingPage.tabBar.isVisible()).not.toContain(false);
        browser.pause(5000);
        landingPage.scrollToHotel();
    });


}