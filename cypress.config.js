const { defineConfig } = require("cypress");
//const { fake } = require('faker');
//const faker = require("faker");

module.exports = defineConfig({
  viewportWidth: 1080,
  viewportHeight: 720,
  e2e: {
    //baseUrl: 'https://trmis.inneed.cloud',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});