class HorizontalSliderPage {
    get heading () { return $('h3') }
    get slider () { return $('[type="range"]') }
    get range () { return  $('#range') }

    move_direction = {
        right: 'right',
        left: 'left'
    };

    async loopedKeyPress(step, key) {
        for (let i = 0; i < step; i++) {
            await browser.pause(200);
            await browser.keys(key);
        }
    }

    async moveSlider(direction, step) {
        switch (direction) {
            case this.move_direction.right: await this.loopedKeyPress(step,'ArrowRight');
                break;
            case this.move_direction.left: await this.loopedKeyPress(step,'ArrowLeft');
                break;
        }
    }

    async setSliderZeroPoint() {
        await this.slider.click();
        return this.moveSlider(this.move_direction.left, 5)
    }
}

export default new HorizontalSliderPage()