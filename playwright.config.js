// @ts-nocheck
import { chromium, defineConfig, devices } from '@playwright/test';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// import dotenv from 'dotenv';
// import path from 'path';
// dotenv.config({ path: path.resolve(__dirname, '.env') });

/**
 * @see https://playwright.dev/docs/test-configuration
 */
export default defineConfig({
  testDir: './tests',//run the folder 
  timeout : 30000,
  expect: {
    timeout:5000,

  },

  reporter: 'html',
  use:{

    browserName : 'chromium',
    headless : false,
    slowMo: 5000,
    screenshot: 'on',
    trace: 'on',
    video: "retain-on-failure",
    



  },
  
  /* Configure projects for major browsers */

});

