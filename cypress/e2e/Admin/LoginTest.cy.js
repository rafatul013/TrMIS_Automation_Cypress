import BaseUrl from "../../pages/BaseUrl";
import Userlogin from "../../pages/Userlogin";

describe("Check Navigation mneu ",()=>{
    const visitpage=new BaseUrl();
    const userlogin=new Userlogin();
   
    beforeEach(()=>{
        visitpage.visitadmindashboard();
        cy.wait(1000) 
        
    })

    it('Check that user login with empty credential', ()=>{
        
        userlogin.loginwithemptydcred();

        
     })
     it('Check that user login with invalid credential',()=>{
        userlogin.loginwithinvalidcred();
        
     })
     it('Check that user login with valid credential',()=>{
      userlogin.loginwithusercred();
      
   })
})