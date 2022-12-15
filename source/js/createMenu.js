export const createMenu = () => {
    $.ajax({
        url: "http://localhost:5173/source/api/products.json",
        success: function (data) {
            let items = '';
            for (let i = 0; i < data.length; i++) {
                items += `<div class="menu__item" data-id="${data[i].id}">
                        <div class="menu__item__img">
                            <img src="${data[i].img}">
                        </div>
                        <div class="menu__item__title">${data[i].title}</div>
                        <div class="menu__item__info">${data[i].info}
                        </div>
                        <div class="menu__item__price">${data[i].price}$</div>
                        <div class="menu__item__button">Buy</div>
                    </div>`
            }
            $('.menu__container').append(items);
            $('.menu__item__button').click(function (e) {
                const id = e.target.closest('.menu__item').dataset.id;
                const currentItem = data.filter(product => product.id === id);

                let shoppingCart = [];

                if (localStorage.getItem('shoppingCart')) {
                    const shoppingCartItem = JSON.parse(localStorage.getItem('shoppingCart'));
                    shoppingCart.push(...shoppingCartItem);
                }

                const checkItem = () => {
                    for (let i = 0; i < shoppingCart.length; i++) {
                        if (shoppingCart[i].id === id) {
                            shoppingCart[i].quantity++;
                            return false;
                        }
                    }
                    return true;
                }

                if (checkItem()) {
                    shoppingCart.unshift({
                        id: currentItem[0].id, title: currentItem[0].title, img: currentItem[0].img,
                        price: currentItem[0].price, quantity: 1
                    });
                }
                localStorage.setItem('shoppingCart', JSON.stringify(shoppingCart));

                jQuery('.popup__add-item-shopping-cart').fadeIn();
                setTimeout(function () {
                    jQuery('.popup__add-item-shopping-cart').fadeOut();
                }, 3000);
            });
        }
    });
};
