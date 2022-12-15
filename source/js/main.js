import {createMenu} from "./createMenu.js";
import {popupCallOpen} from "./popupCall.js";
import {popupCallClose} from "./popupCall.js";
import {popupCallSubmit} from "./popupCall.js";
import {menuBurger} from "./menuBurger.js";
import {shoppingCartClose} from "./shoppingCart/shoppingCartClose.js"
import {createShoppingCart} from "./shoppingCart/shoppingCart.js";
import {shoppingCartOpen} from "./shoppingCart/shoppingCartOpen.js";

$(document).ready(function () {
    $('.popup__shoppingCart').hide();
    $('.popup__call').hide();
    $('.popup__add-item-shopping-cart').hide();
    createMenu();

    $('.header__menu__burger').click(menuBurger);

    $('.buttons__call-back').click(popupCallOpen);

    $('.popup__call__form').submit((e) => popupCallSubmit(e));

    $('.popup__call__close').click(popupCallClose);

    $('.buttons__shoppingCart').click(() => {
        shoppingCartOpen();
        createShoppingCart();
    });

    $('.popup__shoppingCart__close').click(shoppingCartClose);
});
