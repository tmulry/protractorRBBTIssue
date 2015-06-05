exports.config = {
    directConnect: true,
    specs: ['testCases/**.js'],
    allScriptsTimeout: 10000,
    restartBrowserBetweenTests: true,
    capabilities: {'browserName': 'chrome'},
    baseUrl: 'http://angularjs.org',

};