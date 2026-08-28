import { Page, Locator } from '@playwright/test';
import { test, expect } from '@playwright/test';

export class TextBoxPage {
    private page: Page;
    private textboxMenuItem: Locator;
    private nameInput: Locator;
    private emailInput: Locator;
    private addressInput: Locator;
    private permAddressInput: Locator;
    private submitButton: Locator;
    private outputName: Locator;
    private outputEmail: Locator;
    private outputCurrentAddress: Locator;
    private outputPermanentAddress: Locator;

    constructor(page: Page) {
        this.page = page;
        this.textboxMenuItem = page.locator("//span[text()='Text Box']/ancestor::li");
        this.nameInput = page.locator("//input[@id='userName']");
        this.emailInput = page.locator("//input[@id='userEmail']");
        this.addressInput = page.locator("//textarea[@id='currentAddress']");
        this.permAddressInput = page.locator("//textarea[@id='permanentAddress']");
        this.submitButton = page.locator("//button[@id='submit']");
        this.outputName = page.locator("//p[@id='name']");
        this.outputEmail = page.locator("//p[@id='email']");
        this.outputCurrentAddress = page.locator("//p[@id='currentAddress']");
        this.outputPermanentAddress = page.locator("//p[@id='permanentAddress']");
    }

    async clickTextBoxMenu() {
        await this.textboxMenuItem.click();
    }

    async enterName(name: string): Promise<void> {
        await this.nameInput.fill(name);
    }

    async enterEmail(email: string): Promise<void> {
        await this.emailInput.fill(email);
    }

    async enterAddress(address: string): Promise<void> {
        await this.addressInput.fill(address);
    }

    async enterPermanentAddress(permanentAddress: string): Promise<void> {
        await this.permAddressInput.fill(permanentAddress);
    }

    async clickSubmit(): Promise<void> {
        await this.submitButton.click();
    }

    async fillTextBoxForm(
        name: string,
        email: string,
        address: string,
        permanentAddress: string
    ): Promise<void> {
        await this.enterName(name);
        await this.enterEmail(email);
        await this.enterAddress(address);
        await this.enterPermanentAddress(permanentAddress);
    }


    async verifySubmittedData(
        name: string,
        email: string,
        address: string,
        permanentAddress: string
    ) {
        await expect(this.outputName).toContainText(name);
        await expect(this.outputEmail).toContainText(email);
        await expect(this.outputCurrentAddress).toContainText(address);
        await expect(this.outputPermanentAddress).toContainText(permanentAddress);
}

}