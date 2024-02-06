import {auto} from "../support/methods";

describe('Filtres', ()=> {
    it ('by', ()=> {
        auto.Site()
        auto.Zapro('Толстовки')
        auto.Poisk('Найти')
        cy.get('[data-id="m"]').click()
        cy.get('.ui-filters__apply-btn').click()
        auto.Poisk('The RL Fleece Sweatshirt')
    })
})