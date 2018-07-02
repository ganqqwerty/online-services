import { DateInputShowcasePage } from './date-input-showcase.po';

describe('date-input showcase page', () => {
  const DATE = new Date(1981,6,17).toDateString();

  let page: DateInputShowcasePage;

  beforeEach(() => {
    page = new DateInputShowcasePage();
    page.navigateTo();
  });

  it('should display "From" date if input of "From" field is a valid date', () => {
    page.enterFromDate(DATE);

    expect(page.getFromDateLabel().getText()).toEqual(DATE);
  });

  it('should display "To" date if input of "To" field is a valid date', () => {
    page.enterToDate(DATE);

    expect(page.getToDateLabel().getText()).toEqual(DATE);
  });

  it('should display any error if input of "From" field is NOT a valid date', () => {
    page.enterFromDate('i bum cyck cyck');

    expect(page.getFromDateLabel().getText()).toBe('');
  });

  it('should display any error if input of "To" field is NOT a valid date', () => {
    page.enterToDate('i tra la la');

    expect(page.getToDateLabel().getText()).toBe('');
  });
});
