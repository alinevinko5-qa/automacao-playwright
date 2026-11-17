import { expect, Page } from '@playwright/test';

const escapeRegExp = (value: string): string => value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

export class WikipediaPage {
  constructor(public readonly page: Page) {}

  async openArticle(articleName: string): Promise<void> {
    await this.page.goto(`/wiki/${encodeURIComponent(articleName)}`);
  }

  async expectArticleLoaded(articleName: string): Promise<void> {
    const safeName = articleName.trim();
    const escapedName = escapeRegExp(safeName);

    await expect(this.page).toHaveURL(new RegExp(`/wiki/${escapedName}`, 'i'));
    await expect(this.page).toHaveTitle(new RegExp(escapedName, 'i'));
    await expect(this.page.locator('h1')).toContainText(safeName);
  }
}
