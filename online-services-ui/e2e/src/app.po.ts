import { browser } from 'protractor';

export class AppPage {
  navigateTo = () => browser.get('/');

  getCurrentUrl = () => browser.getCurrentUrl();
}
