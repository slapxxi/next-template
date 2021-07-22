import { devices, PlaywrightTestConfig } from '@playwright/test';

let config: PlaywrightTestConfig = {
  use: {
    baseURL: 'http://localhost:3000',
    viewport: { width: 1920, height: 1080 },
    ignoreHTTPSErrors: true,
    screenshot: 'on',
    video: 'on-first-retry',
  },
  projects: [
    {
      name: 'Desktop',
      use: {
        browserName: 'chromium',
        ...devices['Desktop Chrome HiDPI'],
      },
    },
    {
      name: 'Pixel 4',
      use: {
        browserName: 'chromium',
        ...devices['Pixel 4'],
      },
    },
    {
      name: 'iPhone 11',
      use: {
        browserName: 'webkit',
        ...devices['iPhone 11'],
      },
    },
  ],
  testDir: 'specs',
};

export default config;
