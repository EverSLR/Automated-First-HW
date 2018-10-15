import carsPage from '../page_objects/cars.page';

module.exports = function() {

    this.Given(/^a client is on Cars$/, function () {
        // Write code here that turns the phrase above into concrete actions
        carsPage.open('cars');
        carsPage.carsContainer.waitForVisible();
        });

    this.When(/^user modify filter fields$/, function () {
        // Write code here that turns the phrase above into concrete actions
        carsPage.changeRating();
        carsPage.changeType();
        carsPage.changeAirportOption();
        carsPage.changePriceRange(30, -40);
        carsPage.applyFilter();
        });

    this.Then(/^cars appearing in the front must match filter fields$/, function () {
        // Write code here that turns the phrase above into concrete actions
        carsPage.carsContainer.isVisible();
        browser.pause(2000);
        });
}