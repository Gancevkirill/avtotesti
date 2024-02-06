import {auto} from "../support/methods";

describe('Delete tovar in cart', ()=> {
    it ('by', ()=> {
        auto.Site()
        auto.Zapro('Штаны')
        auto.Poisk('Найти')
        auto.Poisk('Taclite Pro Pants')
        auto.Poisk('В корзину')
        auto.Poisk('Корзина')
        cy.get('.p-basket-item__remove-btn').click()
    })
})
