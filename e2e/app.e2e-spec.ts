import { FrontendTestPage } from './app.po';

describe('frontend-test App', () => {
  let page: FrontendTestPage;

  beforeEach(() => {
    page = new FrontendTestPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
