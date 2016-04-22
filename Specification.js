describe('Home Page',function(){

  beforeEach(function(){
     browser.ignoreSynchronization = true;
     browser.get('https://aries-dev.herokuapp.com/');
     browser.sleep(5000);
  })

  //Functionality-1: Check whether the URL redirection is proper or not
  it('Should redirect to the proper URL',function(){
    console.log('executed -- check url redirection');
    expect(browser.getCurrentUrl()).toEqual('https://aries-dev.herokuapp.com/index.html#/');
    browser.sleep(5000);
  });

  //Functionality-2: Check whether the title of the page is appearing correct or not
   it('Should have a title', function () {
       browser.ignoreSynchronization = true;
       console.log('executed -- checked title of the page');
       expect(browser.getTitle()).toEqual('WellKept');
       browser.sleep(5000);
  });

  //Functionality-3: Check whether the SignIn link is present or not
  it('Should have the SignIn href attribute', function(){
    browser.ignoreSynchronization = true;
    console.log('executed -- checked attribute sign in');
    var sign_in = element(by.css('[ng-click="onSignIn()"]'))
    expect(sign_in.isPresent()).toBe(true);
    browser.sleep(5000);
  });

  //Functionality-4: Check whether the MyBooking link is present or not
  it('Should have the MyBooking href attribute', function(){
    browser.ignoreSynchronization = true;
    console.log('executed -- checked attribute mybookings');
    var mybooking = element(by.xpath("//a[contains(text(),'MY BOOKINGS')]"));
    expect(mybooking.isPresent()).toBe(true);
    browser.sleep(5000);
  });

  //Functionality-5: Check whether the Help link is present or not
  it('Should have the Help href attribute', function(){
    browser.ignoreSynchronization = true;
    console.log('executed -- checked attribute help');
    var help = element(by.xpath("//a[contains(text(),'HELP')]"));
    expect(help.isPresent()).toBe(true);
    browser.sleep(5000);
  });

  //Functionality-6: Login
  it('Should Login the user', function(){
    browser.ignoreSynchronization = true;
    console.log('executed -- Sign in the user');
    var locator_signin = element(by.css('[ng-click="onSignIn()"]'));
    browser.sleep(5000);
    locator_signin.click();
    browser.sleep(5000);
  });  

  //End execution
});