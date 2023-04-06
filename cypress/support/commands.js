// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add("preserveCookies", () => {
    Cypress.Cookies.preserveOnce("token", "expires", "userName", "userID");
  })

  Cypress.Commands.add('successfulLogin', () => { 
    cy.get("#userName").type(Cypress.env("userName"));
    cy.get("#password").type(Cypress.env("password"));
    cy.get("#login").click();
   })

   Cypress.Commands.add('validateSuccessfulLogin', () => { 
    cy.url().should("include", "/profile");
   })