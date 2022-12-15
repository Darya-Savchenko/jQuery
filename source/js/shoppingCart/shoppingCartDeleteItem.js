export const shoppingCartDeleteItem = (e) => {
    let shoppingCart = JSON.parse(localStorage.getItem('shoppingCart'));
    let id = e.target.closest('.shoppingCart__item').dataset.id;
    shoppingCart = shoppingCart.filter(el => el.id !== id);
    localStorage.setItem('shoppingCart', JSON.stringify(shoppingCart));
}