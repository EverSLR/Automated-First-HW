export class Page {
    constructor () {
        this.url = 'https://phptravels.net/';
    }

    open(path) {
        browser.url(this.url + path);
    }
}