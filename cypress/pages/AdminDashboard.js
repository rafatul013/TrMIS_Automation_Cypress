class  AdminDashboard {

    Selectyear(){
        //Select Year
        cy.get('.bx--list-box__selection').click();
        cy.wait(500)
        // cy.get('[placeholder="Choose Year"]').type('2023')
        // cy.wait(500)
        
        cy.get('.bx--list-box__menu-icon').
        eq(0).
        click();
        cy.wait(1000)
        cy.get('.bx--list-box__menu-item__option').
        eq(1).
        click();
        cy.wait(1000)
    }
    SelectFromMonth(){
        cy.get('.bx--list-box__menu-icon').eq(1).click();
        cy.wait(1000)
        cy.get('.bx--list-box__menu-item__option').eq(1).click();
        cy.wait(1000)
    }
    SelectTmMonth(){
        // //SelectMonth
        // cy.get('[placeholder="Choose Month"]').clear().type('March');
        // cy.wait(1000)
        cy.get('.bx--list-box__menu-icon').
        eq(2).
        click();
        cy.wait(1000)
        cy.get('.bx--list-box__menu-item__option').
        eq(5).
        click();

      }  
  }
  export default AdminDashboard;
  