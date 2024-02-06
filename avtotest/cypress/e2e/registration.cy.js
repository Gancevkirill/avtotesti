import {auto} from "../support/methods";

describe("Log in", function(){
  it("Sign in", function () {
        const randomEmail = require('random-email')
        auto.Site()
        auto.Poisk('Войти')
        auto.Poisk('Регистрация')
        auto.Registration('Кирилл', 'Ганцев')
        auto.number()
        cy.get('input[name="email"]').type(`${randomEmail({domain: 'gmail.com'})}`)
        auto.Poisk('Зарегистрироваться')
        cy.wait(1000)
  })
})


