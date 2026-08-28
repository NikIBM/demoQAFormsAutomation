import { Page, Locator } from '@playwright/test';

export class HomePage {
    private page: Page;
    private elements: Locator;

    constructor(page: Page) {
        this.page = page;
        this.elements = page.locator("//div[@class='header-text' and normalize-space()='Elements']/parent::div");
    }

    async clickElements(): Promise<void> {
    await this.elements.click();
    }
}