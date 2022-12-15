export const shoppingCartClose = () => {
    $(".popup__shoppingCart__items").text("");
    $('.popup__shoppingCart').hide();
    if( window.innerWidth >=  767)
        $('body').removeClass('lock');
}