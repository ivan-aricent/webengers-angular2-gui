import { Angular2LoginPage } from './app.po';

describe('angular2-login App', function() {
  let page: Angular2LoginPage;

  beforeEach(() => {
    page = new Angular2LoginPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
