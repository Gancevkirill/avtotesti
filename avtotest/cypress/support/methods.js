import randomEmail from "random-email";

class Auto {
      Registration(FirstName, LastName){
        cy.get('input[name="first_name"]').type(`${FirstName}`)
        cy.get('input[name="last_name"]').type(`${LastName}`)
      }
      Zapro(zapros) {
        cy.get('input[type="search"]').type(`${zapros}`)
    }
      Site() {
          cy.visit('https://usmall.ru/')
      }

      Poisk(text) {
          cy.contains(`${text}`).click()
      }
      opisanie() {
          cy.get('.toggle-content__heading').click()
      }

      number() {
          cy.get('input[name="phone"]').type('79').type('18').type('05').type('6').type('00').type('75')
      }
      

}

const auto = new Auto()

export {auto}






