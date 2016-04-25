//Functionality-8: Make a business clean order
describe('Business Clean',function(){
  browser.ignoreSynchronization = true;
  browser.get('https://aries-dev.herokuapp.com/');
  
  beforeEach(function(){
     browser.sleep(5000);
  })

  it('Should click on button business clean', function(){
    console.log('executed -- Click on Business Clean');
    var locator_businessclean = element(by.css('[ng-click="onBusinessCleanSelect()"]'));
    browser.sleep(2000);
    locator_businessclean.click();
  });

  it('Should insert zip code', function(){
    console.log('executed -- Insert zip code');
    var locator_zipcode1 = element(by.model('zipcode'));
    browser.sleep(2000);
    locator_zipcode1.sendKeys('30004');
  });

  it('Should insert description', function(){
    console.log('executed -- Insert description');
    var locator_description = element(by.model('businessCleaningDescription'));
    browser.sleep(2000);
    locator_description.sendKeys('2 bedroom, hall and kitchen');
  });

  it('Should insert from time', function(){
    console.log('executed -- Insert from time')
    var locator_fromtime = element(by.model('fromTime'));
    browser.sleep(2000);
    locator_fromtime.sendKeys('25/04/2016');
  });

  it('Should insert personal information', function(){
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
  });

  it('Should enter service address', function(){
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
  });

  it('Goto Dashboard', function(){
    var locator_submitbusinessclean = element(by.css('[ng-click = "submitBusinessCleanOrder()"]'));
    locator_submitbusinessclean.click();
    browser.sleep(5000);
    var locator_dashboard = element(by.css('[ng-click="gotoDashboard()"]'));
    locator_dashboard.click();
  });

  it('Should cancel the order', function(){
    var locator_cancel = element(by.css('[ng-click="onCancelBooking({order: order})"]'));
    locator_cancel.click();
    browser.sleep(2000);
    var locator_cancelbooking = element(by.css('[ng-click="$close({reason: reason, isCancelSeries: isCancelSeries})"]'));
    locator_cancelbooking.click();
  });

  //Finish execution
});  