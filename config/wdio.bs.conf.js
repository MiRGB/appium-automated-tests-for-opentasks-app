import 'dotenv/config';

import allure from 'allure-commandline';

export const config = {
    user: process.env.BROWSERSTACK_USER,
    key: process.env.BROWSERSTACK_KEY,

    specs: [
        './../test/specs/android/*.js'
    ],

    capabilities: [{
        platformName: 'Android',
        'appium:deviceName': 'Google Pixel 8',
        'appium:platformVersion': '14.0',
        'appium:automationName': 'UiAutomator2',
        'appium:app': 'bs://da5fd7ef99289abca6515026cc10bbcb08cd4a2d',
        'appium:autoGrantPermissions': true
    }],

    maxInstances: 1,
    logLevel: 'info',
    bail: 0,
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    framework: 'mocha',
    reporters: ['spec', ['allure', {
        outputDir: 'allure-results',
        disableWebdriverStepsReporting: false,
        disableWebdriverScreenshotsReporting: false,
    }]],

    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    },

    services: ['browserstack'],

    onComplete: function() {
        const reportError = new Error('Could not generate Allure report')
        const generation = allure(['generate', 'allure-results', '--clean'])
        return new Promise((resolve, reject) => {
            const generationTimeout = setTimeout(
                () => reject(reportError),
                15000)

            generation.on('exit', function(exitCode) {
                clearTimeout(generationTimeout)

                if (exitCode !== 0) {
                    return reject(reportError)
                }

                console.log('Allure report successfully generated')
                resolve()
            })
        })
    },

    // afterTest: async function(test, context, { error, result, duration, passed, retries }) {
    //     if (error) {
    //         await driver.takeScreenshot();
    //     }
    // },

};
