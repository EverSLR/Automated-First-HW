class LandingPage {
    get tabBar() {
        return browser.elements('.profile-tabs > li');
    }

    get bookings() {
        return this.tabBar.value[0];
    }

    get profile() {
        return this.tabBar.value[1];
    }

    get whishList() {
        return this.tabBar.value[2];
    }

    get newsLetter() {
        return this.tabBar.value[3];
    }

    get hotels() {
        return browser.elements('#bookings > .row')
    }

    scrollToHotel(hotelDestiny) { //Rendezvous Hotels
        console.log(this.hotels.value[0].value.ELEMENT)
    }

}

export default new LandingPage();