import { test } from '../fixtures/base';

test.describe('Wikipedia', () => {
  test('deve abrir o artigo da Playwright', async ({ wikipediaPage }) => {
    await wikipediaPage.openArticle('Playwright');
    await wikipediaPage.expectArticleLoaded('Playwright');
  });
});