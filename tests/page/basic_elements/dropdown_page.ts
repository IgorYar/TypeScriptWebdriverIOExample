class DropdownPage {
    get heading () { return $('h3') }
    get dropdownList () { return $('#dropdown') }
    get dropdownListSelectedOption () { return this.dropdownList.$('option[selected="selected"]') }

    async selectDropdownOptionByOrder(order) {
        await this.dropdownList.click();
        const options = this.dropdownList.$$('option');
        await options[order].click();
    }
}

export default new DropdownPage()