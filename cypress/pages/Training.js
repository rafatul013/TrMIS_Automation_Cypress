class  Training {
   
    Opentraining(){
        cy.get('.bx--side-nav__submenu').eq(0).click();
        cy.contains('Training Courses').click();
        cy.get('[role="search"]').should('be.visible').should('exist').click();
        cy.get('.bx--search-input').should('be.visible').should('exist').type('PPM');
        cy.contains('PPM').click();

        
    }

 }
 export default Training;

