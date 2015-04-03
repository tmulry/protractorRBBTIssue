exports.config = {
    directConnect: true,
    specs: ['testCases/**.js'],
    allScriptsTimeout: 10000,
    restartBrowserBetweenTests: true,
    capabilities: {'browserName': 'chrome'},
    baseUrl: 'http://angularjs.org',
    jasmineNodeOpts: {showColors: true,isVerbose: true,includeStackTrace: true},onPrepare: function() {require('jasmine-reporters');jasmine.getEnv().addReporter(new jasmine.JUnitXmlReporter('./xmloutput', true, true));
    }
};