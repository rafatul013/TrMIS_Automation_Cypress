class  BaseUrl {
    visitpage () {
         cy.visit("https://trmis.inneed.cloud");
         cy.wait(1000);
     }
     visitadmindashboard () {
        cy.visit('https://trmis.inneed.cloud/')
        .window()
        .then((win) => {
            win.history.pushState({}, '', 'login');
        })
    }
 }
 export default BaseUrl;

