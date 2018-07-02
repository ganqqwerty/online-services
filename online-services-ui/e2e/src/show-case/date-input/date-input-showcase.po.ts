import { browser, by, element } from 'protractor';

export class DateInputShowcasePage {

  navigateTo = () => browser.get('/show-case/date-input');

  enterFromDate = async (text) => element(by.id('fromDateInput')).sendKeys(text);

  enterToDate = async (text) => element(by.id('toDateInput')).sendKeys(text);

  getFromDateLabel = () => element(by.id('fromDateLabel'));

  getToDateLabel = () => element(by.id('toDateLabel'));
}

