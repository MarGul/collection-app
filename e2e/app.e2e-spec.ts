import { CollectionApp2Page } from './app.po';

describe('collection-app2 App', function() {
  let page: CollectionApp2Page;

  beforeEach(() => {
    page = new CollectionApp2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
