import { PipeDemoPage } from './app.po';

describe('pipe-demo App', () => {
  let page: PipeDemoPage;

  beforeEach(() => {
    page = new PipeDemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
