import {auto} from "../support/methods";

describe('Addcart', ()=> {
    it ('by', ()=> {
        auto.Site()
        auto.Zapro('Куртка')
        auto.Poisk('Найти')
        auto.Poisk('Full Swing® Armstrong Active Jacket')
        auto.Poisk('В корзину')
    })
})