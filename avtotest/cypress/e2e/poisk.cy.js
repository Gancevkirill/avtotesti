import {auto} from "../support/methods";

describe('Poiskovik', ()=> {
    it ('by', ()=> {
        auto.Site()
        auto.Zapro('Кроссовки')
        auto.Poisk('Найти')
        auto.Poisk('Under Armour Kids Lockdown 6 Sneakers (Big Kid)')
    })
})
