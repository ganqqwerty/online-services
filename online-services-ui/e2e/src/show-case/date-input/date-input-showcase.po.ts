import { browser, by, element } from 'protractor';

export class DateInputShowcasePage {

  navigateTo = () => browser.get('/show-case/date-input');

  enterDate = async (text) => element(by.id('dateInput')).sendKeys(text);

  getDateLabel = () => element(by.id('dateLabel'));

}

