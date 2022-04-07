class LoginPage {
    get heading () { return $('h2') }
    get username () { return $('[name="username"]') }
    get password () { return $('[name="password"]') }
    get loginButton () { return $('.radius') }
    get logoutButton () { return $('[href="/logout"]') }
    get flashMessageBar () { return $('.flash') }
    get loginDataList () { return $$('em') }

    async valid_username() {
        return this.loginDataList[0].getText();
    }

    async valid_password() {
        return this.loginDataList[1].getText();
    }

    async login(username, password) {
        await this.username.setValue(username);
        await this.password.setValue(password);
        return this.loginButton.click();
    }
}

export default new LoginPage()