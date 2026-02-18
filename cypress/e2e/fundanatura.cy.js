Cypress.on('uncaught:exception', (err, runnable) => {
  return false
})

import suites from "./flujos/suites";

suites.headerSuites();
suites.homeSuites();
suites.footerSuites();