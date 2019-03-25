import {browser, by, element, protractor} from 'protractor';
import {Actions} from '../support/Actions'

const actions = new Actions();

export class Contact {

    public iframe = element(by.className('wufoo-form-container'));
    public until = protractor.ExpectedConditions;

    public firstNameInputField = browser.element(by.id('Field2'));
    public lastNameInputField = browser.element(by.id('Field3'));
    public comapnyInputField = browser.element(by.id('Field12'));
    public emailInputField = browser.element(by.id('Field5'));
    public phoneInputField = browser.element(by.id('Field30'));

    public submitButton = browser.element(by.id('saveForm'));

    public submitionProblemError = browser.element(by.id('errorMsgLbl'));
    public requierFieldError = browser.element(by.xpath('//*[@id="fo1li10"]/p'));


    public fillInRequiredInformation(firstName: string, lastName: string, comapny: string, email: string) {
        return actions.waitForIframeToLoad()
            .then(() => browser.switchTo().frame(this.iframe.getWebElement()))
            .then(() => actions.sendKeys(this.firstNameInputField, firstName))
            .then(() => actions.sendKeys(this.lastNameInputField, lastName))
            .then(() => actions.sendKeys(this.comapnyInputField, comapny))
            .then(() => actions.sendKeys(this.emailInputField, email))
            .then(() => browser.switchTo().defaultContent())
    }

    public fillInNotRequiredInformation(phone: string) {
        return actions.waitForIframeToLoad()
            .then(() => browser.switchTo().frame(this.iframe.getWebElement()))
            .then(() => actions.sendKeys(this.phoneInputField, phone))
            .then(() => browser.switchTo().defaultContent())
    }

    public clickOnSubmitButton() {
        return actions.waitForIframeToLoad()
            .then(() => browser.switchTo().frame(this.iframe.getWebElement()))
            .then(() => this.submitButton.click())
            .then(() => browser.switchTo().defaultContent())
    }

    public getSubmitionProblemError() {
        return actions.waitForIframeToLoad()
            .then(() => browser.switchTo().frame(this.iframe.getWebElement()))
            .then(() => this.submitionProblemError.getText())
    }

    public getRequierFieldError() {
        return actions.waitForIframeToLoad()
            .then(() => this.requierFieldError.getText())
    }
}