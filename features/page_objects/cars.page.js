import {Page} from './page';

class HomePage extends Page {

    city = '';

    matchCities = false;

    rating = 1;

    airport = false;

    //Setters
    set cityToMatch(destiny) {
        this.city = destiny;
    }

    //Getters
    get filterBtnRef() {
        return browser.element('#searchform');
    }

    get carList() {
        let response;
        if(browser.isExisting('.itemscontainer tr')) {
            response = browser.elements('itemscontainer td');
        } else {
            response = "No Cars Found";
            throw "No cars :c";

        }
        return response;
    }

    get carsContainer() {
        return browser.element('.itemscontainer')
    }

    get starsRef () {
        return browser.elements('.rating label');
    }

    get typeRef() {
        return browser.elements('#collapse3 label');
    }

    get airportRef() {
        return browser.element('select[name="pickup"]');
    }

    get airOptionsRef() {
        return browser.getText('select[name="pickup"] option');
    }

    //Methods
    carsFound(){
        let cars = this.carList;
        if (cars !== "No Cars Found") {
            console.log('No cars found');
        }
    }

    matchList() {
        let arrayCities = [];
        let text = browser.getText('a[class~="ellipsisFIX"]');
        if(typeof text === 'string'){
            arrayCities.push(text);
        } else {
            arrayCities = text;
        }
        this.matchCities = true;
        arrayCities.forEach(element => {
            if(element !== this.city) {
                this.matchCities = false;
            }
        });
    }

    changeRating() {
        this.rating = Math.floor(Math.random() * (this.starsRef.value.length -1 ) + 1);
        console.log(`Rating: ${this.rating} Lenght => ${this.starsRef.value.length}`);
        this.starsRef.value[this.rating].click();
    }

    changeType() {
        this.size = Math.floor(Math.random() * (this.typeRef.value.length -1 ) + 1);
        console.log(`Type Car: ${this.size} Lenght => ${this.typeRef.value.length}`);
        this.typeRef.value[this.size].click();

    }

    changeAirportOption() {
        let rand = Math.floor(Math.random() * (this.airOptionsRef.length - 1) + 1);
        console.log(`Airport: ${rand} > 1 for Yes, 2 for No Lenght => ${this.airOptionsRef.length}`);
        this.airportRef.selectByVisibleText(this.airOptionsRef[rand]);
    }

    changePriceRange(fromPrice, toPrice) { 
        browser.moveToObject('#collapse2 .slider-track div:nth-child(2)');
        browser.buttonDown();
        browser.moveTo(null, fromPrice, 0);
        browser.buttonUp();

        browser.moveToObject('#collapse2 .slider-track div:nth-child(3)');
        browser.buttonDown();
        browser.moveTo(null, toPrice, 0);
        browser.buttonUp();
 
    }

    open(max = false){
        super.open("cars", max);
    }

    applyFilter() {
        this.filterBtnRef.click();
    }
}

export default new HomePage();