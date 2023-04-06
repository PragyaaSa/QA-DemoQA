class LoginPage_PO {
    typeInvalidUserName(user) {
      cy.get("#userName").type(user);
      return this;
    }
  
    typeInvalidPassword(pass) {
      cy.get("#password").type(pass);
      return this;
    }
  
    clearUserName() {
      cy.get("#userName").clear();
      return this;
    }
  
    clearPassword() {
      cy.get("#password").clear();
      return this;
    }
  
    typeUserName() {
      cy.get("#userName").type(Cypress.env("userName"));
      return this;
    }
  
    typePassword() {
      cy.get("#password").type(Cypress.env("password"));
      return this;
    }
  
    clickOnLoginButton() {
      cy.get("#login").click();
      return this;
    }
  
    errorClassValidationCheck() {
      cy.get('[id="name"]')
        .contains("Invalid username or password!")
        .should("exist");
      return this;
    }
  
    errorClassValidation() {
      cy.get(".is-invalid").should("exist");
      return this;
    }
  }
  export default LoginPage_PO;
  