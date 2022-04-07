import SpecHelper from '../helper/spec-helper';
import MainPage from '../page/main_page';
import AddRemoveElementsPage from '../page/basic_elements/add_remove_elements_page';
import DropdownPage from '../page/basic_elements/dropdown_page';
import StatusCodesPage from '../page/basic_elements/status_codes_page';

describe ('Basic elements tests', () => {
    describe ('when Main page loaded', () => {
        before(async () => {
            await SpecHelper.open();
        });

        it('heading and example list should have correct text', async () => {
            await expect(await MainPage.heading).toHaveText('Welcome to the-internet');
            await expect(await MainPage.exampleListTitle).toHaveText('Available Examples');
        })
    });

    describe ('when Add/Remove Elements page loaded', () => {
        before(async () => {
            await SpecHelper.open();
            await MainPage.addRemoveElementsLink.click();
        });

        it('heading and Add Element button should have correct text, ' +
            'Add Element button should be visible, ' +
            'Delete Element button should not exist', async () => {
            await expect(await AddRemoveElementsPage.heading).toHaveText('Add/Remove Elements');
            await expect(await AddRemoveElementsPage.addElementButton).toBeEnabled();
            await expect(await AddRemoveElementsPage.addElementButton).toHaveText('Add Element')
            await expect(await AddRemoveElementsPage.deleteElementButton).not.toBePresent();
        });

        describe ('when Add Element button clicked', () => {
            before(async () => {
                await AddRemoveElementsPage.addElementButton.click();
            });

            after(async () => {
                await AddRemoveElementsPage.deleteElementButton.click();
            });

            it('Delete button should exist and should have correct text', async () => {
                await expect(await AddRemoveElementsPage.deleteElementButton).toBeEnabled();
                await expect(await AddRemoveElementsPage.deleteElementButton).toHaveText('Delete');
            })
        });

        describe ('when Delete Element button clicked', () => {
            before(async () => {
                await AddRemoveElementsPage.addElementButton.click();
                await AddRemoveElementsPage.deleteElementButton.click();
            });

            it('Delete button should not exist', async () => {
                await expect(await AddRemoveElementsPage.deleteElementButton).not.toBePresent();
            })
        });
    });

    describe('when Dropdown page loaded', () => {
        before(async () => {
            await SpecHelper.open();
            await MainPage.dropdownLink.click();
        });

        it('heading should have correct text and dropdown list should have text for blank list', async () => {
            await expect(await DropdownPage.heading).toHaveText('Dropdown List');
            await expect(await DropdownPage.dropdownListSelectedOption).toHaveText('Please select an option');
        });

        ["1", "2"].forEach((order) => {
            describe(`when option ${order} selected`, () => {
                it(`dropdown list should have text for option ${order} selected`, async () => {
                    await DropdownPage.selectDropdownOptionByOrder(order);
                    await expect(await DropdownPage.dropdownListSelectedOption).toHaveText(`Option ${order}`);
                });
            });
        });
    });

    describe('when Status Code page loaded', () => {
        before(async () => {
            await SpecHelper.open();
            await MainPage.statusCodesLink.click();
        });

        it('heading should have correct text', async () => {
            await expect(await DropdownPage.heading).toHaveText('Status Codes');
        });

        ["200", "301", "404", "500"].forEach((code) => {
            describe(`when ${code} status code link clicked`, () => {
                it(`page content should have ${code} status code`, async () => {
                    await StatusCodesPage.clickCodeLink(code);
                    await expect(await StatusCodesPage.pageContentText)
                        .toHaveTextContaining(`This page returned a ${code} status code`);
                    await StatusCodesPage.statusCodeListLink.click();
                });
            });
        });
    });
});
