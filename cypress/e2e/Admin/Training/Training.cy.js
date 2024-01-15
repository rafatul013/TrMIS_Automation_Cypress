import BaseUrl from "../../../pages/BaseUrl";
import Userlogin from "../../../pages/Userlogin";
import UserLogout from "../../../pages/Logout";
import Training from "../../../pages/Training";

describe("Check Training Page", () => {
    const visitpage = new BaseUrl();
    const userlogin = new Userlogin();
    const training = new Training();
    const userlogout = new UserLogout();

    beforeEach(() => {
        //cy.viewport(1920,1080);
        visitpage.visitadmindashboard();
        userlogin.loginwithusercred();
        //cy.reload(false)
        cy.wait(1000)

    })
    
    it('Date Filtering', () => {
        cy.wait(1000)
        training.Opentraining();
    })
    
    // it('User should be able to logout', () => {
    //     userlogout.logout();
    // })




})