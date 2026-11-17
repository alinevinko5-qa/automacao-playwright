import { expect, Page } from '@playwright/test';

export class WikipediaSearchPage {
  constructor(public readonly page: Page) {}

  async openSearchPage(term: string): Promise<void> {
    await this.page.goto(`/wiki/Special:Search?search=${encodeURIComponent(term)}`);
  }

  async expectSearchResults(term: string): Promise<void> {
    await expect(this.page).toHaveURL(new RegExp(`/wiki/(Playwright|Special:Search.*${encodeURIComponent(term)})`, 'i'));
    await expect(this.page.locator('body')).toContainText(term);
  }
}
