import homePage from '../page_objects/home.page';
import carsPage from '../page_objects/cars.page';

module.exports = function() {

    this.Given(/^a client is on Home$/, function () {
        homePage.open(true);
        homePage.carRef.waitForVisible();
        });

    this.When(/^select Cars I will be able to customize my search$/, function () {
        // homePage.carRef.click();
        homePage.carRef.click();
        homePage.pickupLocRef.waitForVisible();
        });

    this.When(/^i fill the requiered fields to search$/, function () {
        // Write code here that turns the phrase above into concrete actions
        homePage.pickupLocRef.selectByVisibleText('Manchester');
        homePage.selPickupDate();
        homePage.selDropoffDate();
        homePage.selPickupTime();
        homePage.selDropoffTime();
        homePage.submit();
        browser.pause(5000);
        });

    this.Then(/^i will be redirected to Cars Page$/, function () {
        // Write code here that turns the phrase above into concrete actions
        carsPage.carsContainer.isVisible();
        //Find if cars or message present and matching with search
        carsPage.carsFound();
        });

    this.Then(/^Cars displayed must match with city selected$/, function () {
        // Write code here that turns the phrase above into concrete actions
        carsPage.cityToMatch = 'Manchester'
        carsPage.matchList();
        console.log(carsPage.matchCities);
        expect(carsPage.matchCities).toEqual(true);
        });

}