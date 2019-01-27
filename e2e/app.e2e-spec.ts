import { AngularAPMPage } from './app.po';

describe('angular-apm App', () => {
  let page: AngularAPMPage;

  beforeEach(() => {
    page = new AngularAPMPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
