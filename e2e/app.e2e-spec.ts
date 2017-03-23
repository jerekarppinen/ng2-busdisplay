import { Ng2BusdisplayPage } from './app.po';

describe('ng2-busdisplay App', () => {
  let page: Ng2BusdisplayPage;

  beforeEach(() => {
    page = new Ng2BusdisplayPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
