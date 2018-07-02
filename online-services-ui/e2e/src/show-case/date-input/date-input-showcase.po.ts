import { browser, by, element } from 'protractor';

export class DateInputShowcasePage {
  private fromDatePicker = element(by.id('#fromDatePicker'));
  private toDatePicker = element(by.id('#toDatePicker'));

  navigateTo = () => browser.get('/show-case/date-input');

  enterFromDate = async (text) => element(by.id('fromDateInput')).sendKeys(text);

  enterToDate = async (text) => element(by.id('toDateInput')).sendKeys(text);

  pickToDate  = async () =>{ this.toDatePicker.click()};

  pickFromDate  = async () =>{ this.fromDatePicker.click()};

  getFromDateLabel = () => element(by.id('fromDateLabel'));

  getToDateLabel = () => element(by.id('toDateLabel'));

  getFromDateError = () => element(by.id('fromDateError'));

  getToDateError = () => element(by.id('toDateError'));

}

