import {browser, ElementFinder} from 'protractor';

export class Actions {

    public sendKeys(element: ElementFinder, text: string) {
        return element.click()
            .then(() => element.clear())
            .then(() => element.sendKeys(text));
    }

    public waitForIframeToLoad() {
        return browser.sleep(6000);
    }
}