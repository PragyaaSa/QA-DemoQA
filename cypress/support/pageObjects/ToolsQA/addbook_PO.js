class AddBook_PO {
    goToBookStore() {
      cy.get("#gotoStore").click();
      return this;
    }
  
    selectRandomBook() {
      cy.get(".ReactTable")
        .find(".action-buttons")
        .then(($buttons) => {
          const randomIndex = Math.floor(Math.random() * $buttons.length);
          cy.wrap($buttons[randomIndex]).click();
        });
      return this;
    }
  
    addBookToCollection() {
      cy.get('[id="addNewRecordButton"]')
        .contains("Add To Your Collection")
        .click({ force: true })
        .get('[id="item-3"]')
        .contains("Profile")
        .click();
    }
  
    storeBookData() {
      return cy.get(".mr-2").then(($books) => {
        const bookTitles = $books.map((i, el) => Cypress.$(el).text()).get();
        const randomIndex = Math.floor(Math.random() * bookTitles.length);
        const randomBookTitle = bookTitles[randomIndex];
        cy.wrap($books[randomIndex]).then(() => {
          return randomBookTitle;
        });
      });
    }
  
    verifyAddedBook() {
      this.storeBookData().then((randomBookTitle) => {
        cy.get(".mr-2").should("contain", randomBookTitle);
      });
      return this;
    }
  
    searchForBook() {
      this.storeBookData().then((randomBookTitle) => {
        cy.get(".input-group").type(randomBookTitle).get(".mr-2").should("exist");
        cy.get(".input-group").clear();
      });
      return this;
    }
  }
  
  export default AddBook_PO;