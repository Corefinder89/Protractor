exports.config={
	framework:'jasmine',
	seleniumAddress:'http://localhost:4444/wd/hub',
	specs:['Specification.js'],
	capabilities:{
		browserName: 'chrome'
	}
}