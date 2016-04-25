describe('Verify Home Page elements',function(){

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

  //End execution
});