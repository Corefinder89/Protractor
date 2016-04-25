var HtmlReporter = require('protractor-jasmine2-screenshot-reporter');
var reporter = new HtmlReporter({
	baseDirectory: 'Screenshots'
});

exports.config={
	framework:'jasmine2',

	seleniumAddress:'http://localhost:4444/wd/hub',

	specs:['Specification.js'],

	capabilities:{
		browserName: 'chrome'
	},

	jasmineNodeOpts: {
		defaultTimeoutInterval: 60000
	},

	beforeLaunch: function (){
    	return new Promise(function(resolve){
        	reporter.beforeLaunch(resolve);
    	});
	},

	onPrepare: function(){
		jasmine.getEnv().addReporter(reporter);
	},

	afterLaunch: function(exitcode){
		return new Promise(function(resolve){
			reporter.afterLaunch(resolve.bind(this, exitcode));
		});
	},
}