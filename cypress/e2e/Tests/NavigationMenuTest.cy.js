import BaseUrl from "../../pages/BaseUrl";
import NavigationMenu from "../../pages/NavigationMenu";

describe("Check Navigation mneu ",()=>{
    const visitpage=new BaseUrl();
    const navigationmenu=new NavigationMenu();
    beforeEach(()=>{
        visitpage.visitpage();
        // cy.reload(false);
    })

    it('All navigation button should be present', ()=>{
        navigationmenu.Checknammenuvisable();
        cy.wait(1000)
     })
     it('Check the home button active and working',()=>{
        navigationmenu.Checkhomebutton();
        cy.wait(1000)
     })
     it('Check the Training button active and working',()=>{
        navigationmenu.Checktrainingbutton();
        cy.wait(1000)
     })
     it('Check the Event button active and working',()=>{
        navigationmenu.Checkeventbutton();
        cy.wait(1000)
     })
     it('Check the Resource Library button active and working',()=>{
        navigationmenu.Checkresourcelibrarybutton();
        cy.wait(1000)
     })
     it('Check the Map button active and working',()=>{
        navigationmenu.Checkmapbutton();
        cy.wait(1000)
     })
     it('Check the Gallery button active and working',()=>{
        navigationmenu.Checkgallerybutton();
        cy.wait(1000)
     })
     it('Check the Notice Board button active and working',()=>{
        navigationmenu.Checknoticeboardbutton();
        cy.wait(1000)
     })
     it('Check the Contact button active and working',()=>{
        navigationmenu.Checkcontactbutton();
        cy.wait(1000)
     })
})