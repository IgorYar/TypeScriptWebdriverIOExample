import allureReporter from '@wdio/allure-reporter';

const defaultOptions = [
    '--no-sandbox',
    '--disable-dev-shm-usage',
    '--disable-extensions',
    '--incognito'
];

export const config = {
    specs: [
        './tests/spec/*_spec.ts'
    ],
    runner: 'local',
    host: 'localhost',
    port: 4444,
    path: '/wd/hub',
    maxInstances: 1,
    capabilities: [{
        browserName: 'chrome',
        'goog:chromeOptions': {
            args: defaultOptions
        }
    }],
    // Level of logging verbosity: trace | debug | info | warn | error | silent
    logLevel: 'warn',
    baseUrl: 'http://the-internet.herokuapp.com/',
    waitforTimeout: 10000,
    connectionRetryTimeout: 60000,
    connectionRetryCount: 3,
    services: ['chromedriver'],
    specFileRetries: 0,
    specFileRetriesDelay: 0,
    specFileRetriesDeferred: false,
    framework: 'mocha',
    mochaOpts: {
        ui: 'bdd',
        timeout: 3000000
    },
    reporters: [
        'spec',
        ['allure', {
            outputDir: 'build/allure-results',
            disableMochaHooks: true,
            disableWebdriverStepsReporting: true,
            disableWebdriverScreenshotsReporting: false,
            addConsoleLogs: true
        }]
    ],
    beforeSuite: async () => {
        await browser.maximizeWindow();
    },
    afterTest: async (test, context, { error }) => {
        if (error) {
            await browser.takeScreenshot();
            const currentUrl = await browser.getUrl();
            allureReporter.addArgument('URL page with error', currentUrl);
        }
    }
};
