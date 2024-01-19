describe('Login Functionality', () => {
    it('Should log in with valid credentials', () => {
      // Visit the login page
      cy.visit('https://demoblaze.com/index.html');
      cy.get('#login2').click();
      cy.get('#loginusername').type("uzair12");
      cy.get('#loginpassword').type("test123")
      cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click();
    })
      it('Contact us', () => {
        cy.visit('https://demoblaze.com/index.html');
        cy.get(':nth-child(2) > .nav-link').click();
      cy.get('#recipient-email').type("uzairtest@gmail.com");
      cy.get('#recipient-name').type("Uzair");
      cy.get('#recipient-name').type("contact us");
      cy.get('#exampleModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
      });
  });
