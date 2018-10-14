export class Page {
    constructor () {
        this.url = 'https://phptravels.net/';
        this.max = false;
    }

    open(path, max) {
        if (max) {
            browser.windowHandleMaximize('{' + browser.windowHandle().value + '}');
        }; 
        browser.url(this.url + path);
    }
}