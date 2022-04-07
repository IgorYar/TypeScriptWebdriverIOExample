class StatusCodesPage {
    get pageContentText () { return $('p') }
    get statusCodeListLink () { return $('[href="/status_codes"]') }

    get code200 () { return $('[href="status_codes/200"]') }
    get code301 () { return $('[href="status_codes/301"]') }
    get code404 () { return $('[href="status_codes/404"]') }
    get code500 () { return $('[href="status_codes/500"]') }

    async clickCodeLink(code) {
        switch (code) {
            case '200': await this.code200.click();
                break;
            case '301': await this.code301.click();
                break;
            case '404': await this.code404.click();
                break;
            case '500': await this.code500.click();
                break;
        }
    }
}

export default new StatusCodesPage()
