import { MamPage } from './app.po';

describe('mam App', () => {
  let page: MamPage;

  beforeEach(() => {
    page = new MamPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
