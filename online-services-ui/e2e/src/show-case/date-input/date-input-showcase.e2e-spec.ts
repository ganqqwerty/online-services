import { DateInputShowcasePage } from './date-input-showcase.po';

describe('date-input showcase page', () => {
  const DATE = new Date(1981, 6, 17).toDateString();

  let page: DateInputShowcasePage;

  beforeEach(() => {
    page = new DateInputShowcasePage();
    page.navigateTo();
  });

  it('should display "From" date if input of "From" field is a valid date', () => {
    page.enterDate(DATE);

    expect(page.getDateLabel()
      .getText())
      .toEqual(DATE);
  });

  it('should display any error if input of "From" field is NOT a valid date', () => {
    page.enterDate('i bum cyck cyck');

    expect(page.getDateLabel()
      .getText())
      .toBe('');
  });
});
