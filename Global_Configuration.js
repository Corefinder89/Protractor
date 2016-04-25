var HtmlReporter = require('protractor-jasmine2-screenshot-reporter');

var reporter = new HtmlReporter({
	baseDirectory: 'Screenshots'
});

exports.config={
	//Test runner is Jasmine
	framework:'jasmine2',

	//Specify selenium server configurations
	seleniumAddress:'http://localhost:4444/wd/hub',
	
	//This would directly instantiate the default browser in the system without the need for webdriver
	//directConnect: true,

	//Run multiple suites under specs
	specs:[
		'/Users/soumyajit/Documents/ProtractorSampleScript/ProtractorTestSuites/HomePage/*_Specification.js',
		'/Users/soumyajit/Documents/ProtractorSampleScript/ProtractorTestSuites/BusinessClean/*_Specification.js' 
	],

	//Run test on a single browser
	capabilities:{
		browserName: 'chrome'
	},

	//Run parallel tests on multiple browsers
	// multiCapabilities: [
	// 	{'browserName' : 'chrome'},
	// 	{'browserName' : 'firefox'},
	// ],

	//Provide jasmine configurations for default test run time and actual stack trace
	jasmineNodeOpts: {
		defaultTimeoutInterval: 60000,
		includeStackTrace: true
	},

	//Before launch function to run initial configurations before start running the test
	beforeLaunch: function (){
    	return new Promise(function(resolve){
        	reporter.beforeLaunch(resolve);
    	});
	},

	//When running the test
	onPrepare: function(){
		jasmine.getEnv().addReporter(reporter);
	},

	//After running the test
	afterLaunch: function(exitcode){
		return new Promise(function(resolve){
			reporter.afterLaunch(resolve.bind(this, exitcode));
		});
	},
}