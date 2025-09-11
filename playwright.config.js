/**
 * @type {import('@playwright/test').PlaywrightTestConfig}
 */
const config = {
    projects: [
        {
            name: 'chromium',
            use: { browserName: 'chromium' },
        },
    ],
    testDir: './tests',
    timeout: 30000,
    retries: 1,
    reporter: [['list']],
};

module.exports = config;
