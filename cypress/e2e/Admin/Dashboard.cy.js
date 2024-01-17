import BaseUrl from "../../pages/BaseUrl";
import Userlogin from "../../pages/Userlogin";
import AdminDashboard from "../../pages/AdminDashboard";
import UserLogout from "../../pages/Logout";

describe("Check Admin Dashboard ", () => {
    const visitpage = new BaseUrl();
    const userlogin = new Userlogin();
    const admindashboard = new AdminDashboard();
    const userlogout = new UserLogout();

    beforeEach(() => {
        //cy.viewport(1920,1080);
        visitpage.visitadmindashboard();
        userlogin.loginwithusercred();
        //cy.reload(false)
        cy.wait(1000)

    })

    // it('Check that user login with valid credential', () => {
    //     userlogin.loginwithusercred();
    // })
    
    it('Date Filtering', () => {
        cy.wait(1000)
        admindashboard.Selectyear();
        admindashboard.SelectFromMonth();
        admindashboard.SelectTmMonth();
    })
    
    it('User should be able to logout', () => {
        userlogout.logout();
    })

})