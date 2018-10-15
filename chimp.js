module.exports = {
    watch: false,
    watchTags: '@watch,@focus',
    path: './features',
    format: 'pretty',
    tags: ['~@ignore','~@pending','~@login','~@searchCar'],
    webdriverio: {
        waitforTimeout: 20000
    }
}

//~@<tag> to not execute tag