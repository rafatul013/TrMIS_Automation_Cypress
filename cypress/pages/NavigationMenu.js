class  NavigationMenu {
    Checknammenuvisable () {
        cy.contains('Home').should('be.visible');
        cy.contains('Training').should('exist');
        cy.contains('Event').should('exist');
        cy.contains('Resource Library').should('exist');
        cy.contains('Map').should('exist');
        cy.contains('Gallery').should('exist');
        cy.contains('Notice Board').should('exist');
        cy.contains('Contact').should('exist');
     }
     Checkhomebutton(){
        cy.contains('Home').should('be.visible').click();
     }
     Checktrainingbutton(){
        cy.contains('Training').should('be.visible').click();
     }
     Checkeventbutton(){
        cy.contains('Event').should('be.visible').click();
     }
     Checkresourcelibrarybutton(){
        cy.contains('Resource Library').should('be.visible').click();
     }
     Checkmapbutton(){
        cy.contains('Map').should('be.visible').click();
     }
     Checkgallerybutton(){
        cy.contains('Gallery').should('be.visible').click();
     }
     Checknoticeboardbutton(){
        cy.contains('Notice Board').should('be.visible').click();
     }
     Checkcontactbutton(){
        cy.contains('Contact').should('be.visible').click();
     }
     

     

 }
 export default NavigationMenu;

