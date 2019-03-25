import {Given, When} from 'cucumber'
import {Home} from '../components/Home'

const home = new Home();
let {setDefaultTimeout} = require('cucumber');
setDefaultTimeout(60 * 1000);

Given('User navigate to home page', function () {
    return home.navigateTo();
});

When('User click on contact button from top menu', function () {
    return home.clickOnContactFromTopMenu();
});
