class LogOut_PO {
    clickLogoutButton() {
      
      cy.get('[id="submit"]').contains("Log out").click();
      return this;
  
    }
  }
  export default LogOut_PO;