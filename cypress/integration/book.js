/// <reference types ="Cypress" />

import AddBook_PO from "../../support/pageObjects/ToolsQA/addbook_PO";
import DeleteBook_PO from "../../support/pageObjects/ToolsQA/deletebook_PO";

const addBook_PO = new AddBook_PO();
const deleteBook_PO = new DeleteBook_PO();

describe("Adding and deleting books", () => {
  before(() => {
    cy.visit(Cypress.env("baseURL"));
    cy.successfulLogin();
    cy.validateSuccessfulLogin();
  });

  beforeEach(function () {
    cy.preserveCookies();
    cy.wait(2000);
  });

  it("Should add the book", () => {
    addBook_PO.goToBookStore().selectRandomBook().addBookToCollection();
    addBook_PO.verifyAddedBook().searchForBook();
  });

  it("Should delete the book", () => {
    deleteBook_PO.deleteBook();
  });
});