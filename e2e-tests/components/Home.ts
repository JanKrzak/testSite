import {browser, by, protractor} from 'protractor';

export class Home {

    topMenuContactButton = browser.element(by.xpath('//a[contains(@href, "/contact-us")]'));

    public until = protractor.ExpectedConditions;

    public navigateTo() {
        return browser.get(browser.baseUrl);
    }

    public clickOnContactFromTopMenu() {
        return browser.wait(this.until.elementToBeClickable(this.topMenuContactButton), 10000, 'Element taking too long to appear in the DOM')
            .then(() => this.topMenuContactButton.click());
    }


}