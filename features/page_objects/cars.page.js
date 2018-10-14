import {Page} from './page';

class HomePage extends Page {

    city = '';

    matchCities = false;

    set cityToMatch(destiny) {
        this.city = destiny;
    }

    get form() {
        return browser.element('.filter');
    }

    get filterBtnRef() {
        return browser.element('#searchform');
    }

    get carList() {
        let response;
        if(browser.isExisting('.itemscontainer tr')) {
            response = browser.elements('itemscontainer td');
        } else {
            response = "No Cars Found";

        }
        return response;
    }

    get carsContainer() {
        return browser.element('.itemscontainer')
    }

    carsFound(){
        let cars = this.carList;
        if (cars !== "No Cars Found") {
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

    open(max = false){
        super.open("cars", max);
    }

    applyFilter() {
        this.filterBtnRef.click();
    }

    submit() {
        this.form.click();
    }


}

export default new HomePage();