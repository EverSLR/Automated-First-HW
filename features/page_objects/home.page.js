import {Page} from './page';

class HomePage extends Page {

    get carRef() {
        return browser.element('#body-section > section > div.cell > div > div > div.col-md-12 > ul > li:nth-child(4) > a');
    }

    get pickupLocRef() {
        return browser.element('#carlocations');
    }

    get pickupDateRef() {
        return browser.element('#departcar');
    }

    get dropoffDateRef() {
        return browser.element('#returncar')
    }

    get calendarRef() {
        return browser.elements('.dropdown-menu + div[style^="display: block;"] div table tbody tr + tr td:not([class="day disabled"]):not([class$="new"])');
    }

    get pickupTimeRef() {
        return 'select[name="pickupTime"]';
    }

    get dropoffTimeRef() {
        return 'select[name="dropoffTime"]';
    }

    get form() {
        return browser.element('#CARS form div button[type="submit"]');
    }

    selPickupDate(date = 0) {
        this.pickupDateRef.setValue('');
        this.calendarRef.value[date].click();
    }

    selDropoffDate(date = 1) {
        this.dropoffDateRef.setValue('');
        this.calendarRef.value[Math.floor((Math.random() * (this.calendarRef.value.length)) + 1)].click();
    }

    selPickupTime() {
        let arrayHours = browser.getText('select[name="pickupTime"] option');
        let hourRand = arrayHours[Math.floor((Math.random() * (arrayHours.length)) + 1)];
        browser.selectByVisibleText('select[name="pickupTime"]',hourRand.replace(/ /g, ''));
    }

    selDropoffTime() {
        let arrayHours = browser.getText('select[name="dropoffTime"] option');
        let hourRand = arrayHours[Math.floor((Math.random() * (arrayHours.length)) + 1)];
        browser.selectByVisibleText('select[name="dropoffTime"]',hourRand.replace(/ /g, ''));
    }

    open(max = false){
        super.open("", max);
    }

    submit() {
        this.form.click();
    }
}

export default new HomePage();