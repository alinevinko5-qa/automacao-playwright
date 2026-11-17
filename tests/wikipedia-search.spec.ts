import { test } from '../fixtures/base';

test.describe('Wikipedia search', () => {
  test('deve abrir a página de busca do artigo Playwright', async ({ wikipediaSearchPage }) => {
    await wikipediaSearchPage.openSearchPage('Playwright');
    await wikipediaSearchPage.expectSearchResults('Playwright');
  });
});
