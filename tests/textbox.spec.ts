import { test,expect } from '@playwright/test';
import { HomePage } from '../pages/Home.page';
import { TextBoxPage } from '../pages/textbox.page';
import { CsvUtil } from '../utilities/csvutil';

test.describe('Text Box Tests', () => {

    test(
        'Verify Textbox form submission with valid inputs',
        {
            tag: ['@smoke', '@regression']
        },
        async ({ page }) => {
            const homePage = new HomePage(page);
            const textBoxPage = new TextBoxPage(page);

            const testData = await CsvUtil.getRowData(
            './test_data/TextBoxData.csv',
            'TC001'
            );

            await page.goto('/forms');
            
            await homePage.clickElements();

            await textBoxPage.clickTextBoxMenu();

            await textBoxPage.fillTextBoxForm(
                testData.Name,
                testData.Email,
                testData.Address,
                testData.PermanentAddress
            );
            await textBoxPage.clickSubmit();

            await textBoxPage.verifySubmittedData(
                testData.Name,
                testData.Email,
                testData.Address,
                testData.PermanentAddress
            );
        }
    );

});