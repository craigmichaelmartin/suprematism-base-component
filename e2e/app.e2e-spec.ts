import { SuprematismRepoNamePage } from './app.po';

describe('suprematism-repo-name App', function() {
  let page: SuprematismRepoNamePage;

  beforeEach(() => {
    page = new SuprematismRepoNamePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
