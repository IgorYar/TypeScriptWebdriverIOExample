import SpecHelper from '../helper/spec-helper';
import MainPage from '../page/main_page';
import HorizontalSliderPage from '../page/slider/horizontal_slider_page';

describe ('Horizontal slider tests', () => {
    before(async () => {
        await SpecHelper.open();
        await MainPage.horizontalSliderLink.click();
    });

    describe('when Horizontal slider page loaded', () => {
        it('heading should have correct text', async () => {
            await expect(await HorizontalSliderPage.heading).toHaveText('Horizontal Slider');
        })
    });

    describe('when move slider', () => {
        const RIGHT_STEPS_NUMBER = 5;
        const LEFT_STEPS_NUMBER = 2;
        const STEP_MULTIPLIER = 0.5;
        const RIGHT_DIRECTION = HorizontalSliderPage.move_direction.right;
        const LEFT_DIRECTION = HorizontalSliderPage.move_direction.left;

        describe('to the right', () => {
            it('the range should have correct value', async () => {
                await HorizontalSliderPage.setSliderZeroPoint();
                await HorizontalSliderPage.moveSlider(RIGHT_DIRECTION, RIGHT_STEPS_NUMBER);
                await expect(await HorizontalSliderPage.range).toHaveText(`${RIGHT_STEPS_NUMBER/2.0}`);
            })
        });

        describe('to the right and then to the left', () => {
            it('the range should have correct value', async () => {
                await HorizontalSliderPage.moveSlider(LEFT_DIRECTION, LEFT_STEPS_NUMBER);
                await expect(await HorizontalSliderPage.range)
                    .toHaveText(`${RIGHT_STEPS_NUMBER*STEP_MULTIPLIER - LEFT_STEPS_NUMBER*STEP_MULTIPLIER}`);
            })
        });
    });
});
