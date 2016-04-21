//Functionality-1: Check whether proper URL redirection is taking place
describe('Check URL of the page', function() {
	browser.ignoreSynchronization = true;
	it('Should redirect to the proper URL',function(){
		console.log('executed -- check url redirection');
		 browser.get('https://aries-dev.herokuapp.com/');
		 expect(browser.getCurrentUrl()).toEqual('https://aries-dev.herokuapp.com/index.html#/');
	});
});

//Functionality-2: Check whether the title of the page is appearing correct or not
describe('Check the title of the page', function(){
	it('Should have a title', function () {
       browser.ignoreSynchronization = true;
       console.log('executed -- checked title of the page');
       browser.get('https://aries-dev.herokuapp.com/index.html#/');
  	   expect(browser.getTitle()).toEqual('WellKept');
  });
});

//Functionality-3: Check whether the SignIn link is present or not
describe('Check for SignIn link', function(){
	it('Should have the SignIn href attribute', function(){
		browser.ignoreSynchronization = true;
		console.log('executed -- checked attribute sign in');
		browser.get('https://aries-dev.herokuapp.com/index.html#/');
		var sign_in = element(by.css('[ng-click="onSignIn()"]'))
		expect(sign_in.isPresent()).toBeFalsy();
	});
});

//Functionality-4: Check whether the MyBooking link is present or not
describe('Check for MyBookings link', function(){
	it('Should have the MyBooking href attribute', function(){
		browser.ignoreSynchronization = true;
		console.log('executed -- checked attribute mybooking');
		browser.get('https://aries-dev.herokuapp.com/index.html#/');
		var mybooking = element(by.xpath("//a[contains(text(),'MY BOOKINGS')]"));
		expect(mybooking.isPresent()).toBeFalsy();
	});
});
