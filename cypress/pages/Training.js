
    var randomString = Math.random().toString(36).substring(7);
    var randomname = `${randomString}`;
 

class  Training {
    
    Opentraining(){
        cy.get('.bx--side-nav__submenu').eq(0).click();
        cy.contains('Training Courses').click();
    }
    CheckSerach(){
    
        //const randomSuffix = Math.floor(Math.random() * 90000000) + 10000000; // Generates 8-digit random number
        //const randomPhoneNumber = `016${randomSuffix}`;

        cy.get('[role="search"]').should('be.visible').should('exist').click();
        cy.get('.bx--search-input').should('be.visible').should('exist').type('PPT');
        cy.contains('PPT').click();
    }
    AddCourse(){
        cy.contains('PPT').click();
        cy.contains('Add Course').click()
        cy.get('[name="title"]').should('be.visible').should('exist').clear().type('Test1');
        cy.get('[name="description"]').should('be.visible').should('exist').clear().type('Test1');
        cy.xpath("//button[normalize-space()='Create']").should('be.visible').should('exist').click();
    }
    Updatecourse(){
        cy.contains('PPT').click();
        cy.wait(1000)
        cy.get('.bx--overflow-menu').eq(0).click();
        cy.wait(2000)
        cy.on('window:alert',(txt)=>{
            //Assertion
            expect(txt).to.contains('Edit');
            })
        //cy.xpath("//ul/li[text()='Edit']").eq(2).click();

    }

 }
 export default Training;

