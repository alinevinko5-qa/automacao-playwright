import { expect as baseExpect, test as base } from '@playwright/test';
import { WikipediaPage } from '../pages/WikipediaPage';
import { WikipediaSearchPage } from '../pages/WikipediaSearchPage';

export type WikipediaFixtures = {
  wikipediaPage: WikipediaPage;
  wikipediaSearchPage: WikipediaSearchPage;
};

export const test = base.extend<WikipediaFixtures>({
  wikipediaPage: async ({ page }, use) => {
    await use(new WikipediaPage(page));
  },
  wikipediaSearchPage: async ({ page }, use) => {
    await use(new WikipediaSearchPage(page));
  }
});

export const expect = baseExpect;
