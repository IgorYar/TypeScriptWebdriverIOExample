import SpecHelper from '../helper/spec-helper';
import MainPage from '../page/main_page';
import LoginPage from '../page/login/login_page';

describe ('Login tests', () => {
    const INVALID_VALUE = 'qwerty';

    before(async () => {
        await SpecHelper.open();
        await MainPage.formAuthenticationLink.click();
    });

    describe ('when Login page loaded', () => {
        it('heading should have correct text', async () => {
            await expect(await LoginPage.heading).toHaveText('Login Page');
        })
    });

    describe ('when invalid username', () => {
        before(async () => {
            await LoginPage.login(INVALID_VALUE, LoginPage.valid_password());
        });

        it('heading should have correct text', async () => {
            await expect(await LoginPage.flashMessageBar).toHaveTextContaining('Your username is invalid!');
        })
    });

    describe ('when invalid password', () => {
        before(async () => {
            await LoginPage.login(await LoginPage.valid_username(), INVALID_VALUE);
        });

        it('heading should have correct text', async () => {
            await expect(await LoginPage.flashMessageBar).toHaveTextContaining('Your password is invalid!');
        })
    });

    describe ('when valid login data', () => {
        before(async () => {
            await LoginPage.login(await LoginPage.valid_username(), await LoginPage.valid_password());
        });

        it('success login message should appear, heading and logout button should have correct text', async () => {
            await expect(await LoginPage.flashMessageBar).toHaveTextContaining('You logged into a secure area!');
            await expect(await LoginPage.heading).toHaveText('Secure Area');
            await expect(await LoginPage.logoutButton).toHaveText('Logout');
        });

        it('after logout heading should have correct text', async () => {
            await LoginPage.logoutButton.click();
            await expect(await LoginPage.heading).toHaveTextContaining('Login Page');
        })
    });
});
