<<<<<<< HEAD
import { PesquisaSatisfacaoPage } from './app.po';

describe('pesquisa-satisfacao App', () => {
  let page: PesquisaSatisfacaoPage;

  beforeEach(() => {
    page = new PesquisaSatisfacaoPage();
=======
import { PesquisaSatisfacaoDashboardPage } from './app.po';

describe('pesquisa-satisfacao-dashboard App', () => {
  let page: PesquisaSatisfacaoDashboardPage;

  beforeEach(() => {
    page = new PesquisaSatisfacaoDashboardPage();
>>>>>>> 88a8a9259181bc01636c17edc0c625f7fdd88648
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
