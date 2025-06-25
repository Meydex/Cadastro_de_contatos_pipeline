const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
   reporter: "mochawesome",
  reporterOptions: {
    reportDir: "reports/cypress",
    overwrite: false,
    html: false,
    json: true
  }
});
