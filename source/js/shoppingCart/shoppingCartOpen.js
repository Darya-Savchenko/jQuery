export const shoppingCartOpen = () => {
    $('.popup__shoppingCart').show();
    if( window.innerWidth >=  767)
        $('body').addClass('lock');
}