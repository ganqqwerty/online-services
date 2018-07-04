import { AppPage } from './app.po';

describe('workspace-project App', () => {
  let page: AppPage;
  beforeEach(() => {
    page = new AppPage();
  });

  it('should redirect to default page', () => {
    page.navigateTo();

    expect(page.getCurrentUrl()).toContain(DEFAULT_URL);
  });
});
