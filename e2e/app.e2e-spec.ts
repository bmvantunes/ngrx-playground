import { WorkingDemoPage } from './app.po';

describe('working-demo App', () => {
  let page: WorkingDemoPage;

  beforeEach(() => {
    page = new WorkingDemoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
