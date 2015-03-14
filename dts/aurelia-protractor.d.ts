/// <reference path="./protractor.d.ts" />
/// <reference path="./selenium-webdriver.d.ts" />

interface AureliaProtractorPlugins extends protractor.IBrowser {
  loadAndWaitForAureliaPage(url: string): protractor.Protractor;
  waitForHttpDone<T>(): Promise<T>;
}

interface AureliaSeleniumPlugins extends webdriver.ILocatorStrategy {
  valueBind(bindTarget: string): webdriver.Locator;
}
