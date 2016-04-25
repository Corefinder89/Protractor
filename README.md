# Protractor
Protractor is an end to end testing framework for AngularJS applications. Protractor runs tests against the applications <br>
running in a real browser, interacting with it as a user would.<br>
<br>
#Setup
1. Use npm to install Protractor globally with:<br>
`npm install -g protractor`<br>
2. This will install two command line tools `protractor` and `webdriver-manager`. Try running `protractor --version` to <br>
make sure that protractor is working.<br>
3. The `webdriver-manager` is a helper tool to easily get an instance of a Selenium-Server running. Use it to download necessary binaries with:<br>
`webdriver-manager update`<br>
4. Now start up the server with<br>
`webdriver-manager start`<br>
This will start up a Selenium Server and will output a bunch of info logs. Your Protractor test will send requests to this server to control a local browser. You can see information about the status of the server at http://localhost:4444/wd/hub.
