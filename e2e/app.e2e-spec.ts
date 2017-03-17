import { WebAppExercisePage } from './app.po';

describe('web-app-exercise App', () => {
  let page: WebAppExercisePage;

  beforeEach(() => {
    page = new WebAppExercisePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
