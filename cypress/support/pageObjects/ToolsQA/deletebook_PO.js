class DeleteBook_PO {
    deleteBook() {
      
      cy.get('[id="item-3"]').contains("Profile").click();
      
      const bookTitles = [];
      
      cy.get(".mr-2")
        .each(($book) => {
          bookTitles.push($book.text());
        })
        .then(() => {
          
          const randomIndex = Math.floor(Math.random() * bookTitles.length);
          const randomBookTitle = bookTitles[randomIndex];
  
          cy.get(".rt-tbody")
            .eq(randomIndex)
            .find("#delete-record-undefined")
            .click()
            .get("#closeSmallModal-ok")
            .click()
            .get(".rt-tbody")
            .should("not.contain", randomBookTitle);
        });
      return this;
  
    }
  }
  export default DeleteBook_PO;