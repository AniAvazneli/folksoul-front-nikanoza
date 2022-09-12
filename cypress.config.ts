import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      require('@cypress/code-coverage/task')(on, config);
      return config;
    },
    baseUrl: 'http://localhost:3000',
    viewportHeight: 1080,
    viewportWidth: 1920,
    waitForAnimations: false,
  },
});
