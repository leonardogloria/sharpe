import { browser, element, by } from 'protractor';

<<<<<<< HEAD
export class PesquisaSatisfacaoPage {
=======
export class PesquisaSatisfacaoDashboardPage {
>>>>>>> 88a8a9259181bc01636c17edc0c625f7fdd88648
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }
}
