import {shoppingCartAddItem} from "./shoppingCartAddItem.js";
import {shoppingCartTakeAwayItem} from "./shoppingCartTakeItem.js";
import {shoppingCartDeleteItem} from "./shoppingCartDeleteItem.js";

export const createShoppingCart = () => {
    if (localStorage.getItem('shoppingCart')) {
        $('.popup__shoppingCart__no-items').hide();
        $('.popup__shoppingCart__total').show();
        $('.popup__shoppingCart__form__container').show();
        $('.popup__shoppingCart__order-except').hide();

        let shoppingCart = JSON.parse(localStorage.getItem('shoppingCart'));
        shoppingCart = shoppingCart.filter(el => el.quantity > 0);

        if (shoppingCart.length === 0) {
            $('.popup__shoppingCart__total').hide();
            $('.popup__shoppingCart__form__container').hide();
            $('.popup__shoppingCart__no-items').show();
        }

        let items = '';
        let total = 0;

        for (let i = 0; i < shoppingCart.length; i++) {
            items += `<div class="popup__shoppingCart__item shoppingCart__item" data-id="${shoppingCart[i].id}">
                        <div class="shoppingCart__item__info">
                            <div class="shoppingCart__item__img">
                                <img src="${shoppingCart[i].img}">
                            </div>
                            <div class="shoppingCart__title__container">
                                <div class="shoppingCart__title">${shoppingCart[i].title}</div>
                                <div class="shoppingCart__item__quantity__container">
                                    <div class="shoppingCart__quantity">${shoppingCart[i].quantity}</div>
                                    <button class="shoppingCart__item__minus shoppingCart__item__button">-</button>
                                    <button class="shoppingCart__item__plus shoppingCart__item__button">+</button>
                                    <button class="shopping__item__delete shoppingCart__item__button">delete</button>
                                </div>
                            </div>
                        </div>
                        <div class="shoppingCart__item__price">$${shoppingCart[i].price * shoppingCart[i].quantity}</div>
                    </div>`

            total += shoppingCart[i].quantity * shoppingCart[i].price;
        }

        $('.popup__shoppingCart__items').text('');
        $('.popup__shoppingCart__items').append(items);
        $('.popup__shoppingCart__total').text("Total: " + total + "$");

        $('.shopping__item__delete').click((e) => {
            shoppingCartDeleteItem(e);
            createShoppingCart();
        });

        $('.shoppingCart__item__plus').click((e) => {
            shoppingCartAddItem(e);
            createShoppingCart();
        });

        $('.shoppingCart__item__minus').click((e) => {
            shoppingCartTakeAwayItem(e);
            createShoppingCart();
        });
        $('.shoppingCart__submit').click((e) => {
            e.preventDefault();
            $('.popup__shoppingCart__order-except').show();
        });
    } else {
        $('.popup__shoppingCart__total').hide();
        $('.popup__shoppingCart__form__container').hide();
        $('.popup__shoppingCart__no-items').show();
    }
}
