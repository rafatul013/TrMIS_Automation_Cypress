class  BaseUrl {
    visitpage () {
         cy.visit("https://trmis.inneed.cloud");
         //cy.visit("http://localhost:5173");
         cy.wait(1000);
     }
     visitadmindashboard () {
       cy.visit('https://trmis.inneed.cloud/')
        //cy.visit('http://localhost:5173/')
        .window()
        .then((win) => {
            win.history.pushState({}, '', 'login');
        })
    }
 }
 export default BaseUrl;

