class  UserLogout {

    logout(){
       cy.xpath('/html/body/div/header/div/div/button').click();
       cy.wait(1000)
       cy.get('.bx--switcher__item').eq(3).click();
      }  
  }
  export default UserLogout;
  