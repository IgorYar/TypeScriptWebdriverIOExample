class MainPage  {
    get heading () { return $('.heading') }
    get exampleListTitle () { return $('h2') }
    get addRemoveElementsLink () { return $('[href="/add_remove_elements/"]') }
    get dropdownLink () { return $('[href="/dropdown"]') }
    get statusCodesLink () { return $('[href="/status_codes"]') }
    get formAuthenticationLink () { return $('[href="/login"]') }
    get horizontalSliderLink () { return $('[href="/horizontal_slider"]') }
}

export default new MainPage()
