class AddRemoveElementsPage {
    get heading () { return $('h3') }
    get addElementButton () { return $('[onclick="addElement()"]') }
    get deleteElementButton () { return $('[onclick="deleteElement()"]') }
}

export default new AddRemoveElementsPage()
