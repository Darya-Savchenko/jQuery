import {createShoppingCart} from "./shoppingCart.js";
import {shoppingCartDeleteItem} from "./shoppingCartDeleteItem.js";

export const shoppingCartTakeAwayItem = (e) => {
    const shoppingCart = JSON.parse(localStorage.getItem('shoppingCart'));
    const id = e.target.closest('.shoppingCart__item').dataset.id;
    const currentItem = shoppingCart.findIndex(product => product.id === id);
    shoppingCart[currentItem].quantity--;
    localStorage.setItem('shoppingCart', JSON.stringify(shoppingCart));

    if(shoppingCart[currentItem] <= 0){
        shoppingCartDeleteItem(e);
        createShoppingCart();
    }
}