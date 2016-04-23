describe('Home Page',function(){

  browser.ignoreSynchronization = true;
  browser.get('https://aries-dev.herokuapp.com/');
  
  beforeEach(function(){
     browser.sleep(5000);
  })

  //Functionality-1: Check whether the URL redirection is proper or not
  it('Should redirect to the proper URL',function(){
    console.log('executed -- check url redirection');
    expect(browser.getCurrentUrl()).toEqual('https://aries-dev.herokuapp.com/index.html#/');
  });

  //Functionality-2: Check whether the title of the page is appearing correct or not
   it('Should have a title', function () {
       console.log('executed -- checked title of the page');
       expect(browser.getTitle()).toEqual('WellKept');
  });

  //Functionality-3: Check whether the SignIn link is present or not
  it('Should have the SignIn href attribute', function(){
    console.log('executed -- checked attribute sign in');
    var sign_in = element(by.css('[ng-click="onSignIn()"]'))
    expect(sign_in.isPresent()).toBe(true);
  });

  //Functionality-4: Check whether the MyBooking link is present or not
  it('Should have the MyBooking href attribute', function(){
    console.log('executed -- checked attribute mybookings');
    var mybooking = element(by.xpath("//a[contains(text(),'MY BOOKINGS')]"));
    expect(mybooking.isPresent()).toBe(true);
  });

  //Functionality-5: Check whether the Help link is present or not
  it('Should have the Help href attribute', function(){
    console.log('executed -- checked attribute help');
    var help = element(by.xpath("//a[contains(text(),'HELP')]"));
    expect(help.isPresent()).toBe(true);
  });

  //Functionality-6: Validate Login
  it('Should Login the user', function(){
    console.log('executed -- Click on Sign In attribute');
    var locator_signin = element(by.css('[ng-click="onSignIn()"]'));
    browser.sleep(5000);
    locator_signin.click();
    browser.sleep(5000);
    element(by.model('login.userName')).sendKeys('testautomation@mailinator.com');
    console.log("executed -- Entered the username");
    element(by.model('login.password')).sendKeys('123456');
    console.log("executed -- Entered the password");
    var locator_login = element(by.css('[ng-click="onLoginFn(); loginForm.submitted=true;"]'));
    browser.sleep(5000);
    locator_login.click();
    console.log("executed -- Clicked on login");
    browser.sleep(5000);
    var expect_email = element(by.xpath("//a[contains(text(),'Soumyajit Basu')]"));
    browser.sleep(5000);
    expect(expect_email.isPresent()).toBe(true);
  });  

  //Functionality-7: Validate MyProfile
  // it('Should redirect to the user profile page', function(){
  //   console.log('executed -- Click on MyProfile');
  //   var myprof = element(by.css('a[href="#/profile"]'))
  //   browser.sleep(5000);
  //   myprof.click();
  //   browser.sleep(5000);
  //   var prof = element(by.css('h1')).getText()
  //   expect(prof).toEqual('profile.');
  // });

  //Functionality-8: Make a business clean order
  it('Business clean order', function(){
    console.log('executed -- Click on Business Clean');
    var locator_businessclean = element(by.css('[ng-click="onBusinessCleanSelect()"]'));
    browser.sleep(5000);
    locator_businessclean.click();
    browser.sleep(5000);
    console.log('executed -- Insert zip code');
    var locator_zipcode1 = element(by.model('zipcode'));
    locator_zipcode1.sendKeys('30004');
    browser.sleep(2000);
    console.log('executed -- Insert description');
    var locator_description = element(by.model('businessCleaningDescription'));
    locator_description.sendKeys('2 bedroom, hall and kitchen');
    browser.sleep(2000);
    console.log('executed -- Insert from time')
    var locator_fromtime = element(by.model('fromTime'));
    locator_fromtime.sendKeys('24/04/2016');
    browser.sleep(2000);
    console.log('executed -- Insert first name');
    var locator_firstname = element(by.model('userDetails.firstName'));
    locator_firstname.sendKeys('Soumyajit');
    browser.sleep(2000);
    console.log('executed -- Insert last name');
    var locator_lastname = element(by.model('userDetails.lastName'));
    locator_lastname.sendKeys('Basu');
    browser.sleep(2000);
    console.log('executed -- Insert email');
    var locator_email = element(by.model('userDetails.email'));
    locator_email.sendKeys('soumyajit.basu62@gmail.com');
    browser.sleep(2000);
    console.log('executed -- Insert mobile number');
    var locator_mobile = element(by.model('userDetails.phone'));
    locator_mobile.sendKeys('8390674410');
    console.log('executed -- Insert street address');
    var locator_streetaddress = element(by.model('userDetails.streetAddress'));
    locator_streetaddress.sendKeys('Evoma Business Center, Whitefield');
    browser.sleep(2000);
    console.log('executed -- Insert Appartment');
    var locator_appartment = element(by.model('userDetails.apartment'));
    locator_appartment.sendKeys('McKinsey & Company');
    browser.sleep(2000);
    console.log('executed -- Insert city');
    var locator_city = element(by.model('userDetails.city'));
    locator_city.sendKeys('Bengaluru');
    browser.sleep(2000);
    console.log('executed -- Insert state');
    var locator_state = element(by.model('userDetails.state'));
    locator_state.sendKeys('Karnataka');
    browser.sleep(2000);
    console.log('executed -- Insert zip code');
    locator_zipcode2 = element(by.model('userDetails.zipCode'));
    locator_zipcode2.sendKeys('30004');
    browser.sleep(2000);
    var locator_submitbusinessclean = element(by.css('[ng-click = "submitBusinessCleanOrder()"]'));
    locator_submitbusinessclean.click();
    browser.sleep(5000);
    var locator_dashboard = element(by.css('[ng-click="gotoDashboard()"]'));
    locator_dashboard.click();
    browser.sleep(5000);
    var locator_cancel = element(by.css('[ng-click="onCancelBooking({order: order})"]'));
    locator_cancel.click();
    browser.sleep(5000);
    var locator_cancelbooking = element(by.css('[ng-click="$close({reason: reason, isCancelSeries: isCancelSeries})"]'));
    locator_cancelbooking.click();
  });

  //End execution
});