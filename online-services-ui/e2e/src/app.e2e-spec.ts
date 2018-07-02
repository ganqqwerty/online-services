import { AppPage } from './app.po';

describe('workspace-project App', () => {
  let page: AppPage;
  const DEFAULT_URL = '/show-case/text-input';

  beforeEach(() => {
    page = new AppPage();
  });

  it('should redirect to default page', () => {
    page.navigateTo();

    expect(page.getCurrentUrl()).toContain(DEFAULT_URL);
  });
});
