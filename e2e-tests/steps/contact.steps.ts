import {Then, When} from 'cucumber';
import {Contact} from '../components/Contact'

const contact = new Contact();
const chai = require('chai');
const expect = chai.expect;

let {setDefaultTimeout} = require('cucumber');
setDefaultTimeout(60 * 1000);

When(/^User fill required information in the form: "([^"]*)", "([^"]*)", "([^"]*)", "([^"]*)"$/, function (firstName, lastName, company, email) {
    return contact.fillInRequiredInformation(firstName, lastName, company, email);
});

When(/^User fill not required information in the form "([^"]*)"$/, function (phone) {
    return contact.fillInNotRequiredInformation(phone);
});

When('User click on submit button', function () {
    return contact.clickOnSubmitButton();
});

Then('Message is not sent, above the form is displayed error', function () {
    return contact.getSubmitionProblemError()
        .then((errorText) => expect(errorText).to.equal('There was a problem with your submission.'))
});

Then('Message is not sent, below the message field is displayed error', function () {
    return contact.getRequierFieldError()
        .then((errorText) => expect(errorText).to.equal('This field is required. Please enter a value.'))
});