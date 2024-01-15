class  Userlogin {

   loginwithemptydcred(){
      cy.get('[name="username"]').should('be.visible').should('exist').type(" ");
     
      cy.get('[name="password"]').should('be.visible').should('exist').type(" ");
      
      cy.get('.bx--btn-set > .bx--btn').should('be.visible').should('exist').click();
   }
     
   loginwithinvalidcred() {
      cy.get('[name="username"]').should('be.visible').should('exist').type("admin");
      
      cy.get('[name="password"]').should('be.visible').should('exist').type("123456");
      cy.get('.bx--btn-set > .bx--btn').should('be.visible').should('exist').click();
   }   
     loginwithusercred(){

      cy.get('[name="username"]').should('exist').type("superadmin")
      cy.wait(500)
      cy.get('[name="password"]').should('exist').type("TrMISsuperAdmin@Ntp@")
     cy.wait(500)
      cy.get('.bx--btn-set > .bx--btn').should('exist').click()
      
     }  
 }
 export default Userlogin;
 