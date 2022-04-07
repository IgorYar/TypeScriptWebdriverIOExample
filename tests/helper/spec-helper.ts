import allureReporter from '@wdio/allure-reporter';
import { config } from "../../wdio.conf";

export class SpecHelper {
    async open(url = "") {
        const urlObj = new URL(url, config.baseUrl);
        allureReporter.addStep(`Open URL: ${urlObj.href}`);
        await browser.url(urlObj.href);
    }
}

export default new SpecHelper()
