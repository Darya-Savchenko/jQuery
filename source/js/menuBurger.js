export const menuBurger = () => {
    $('.header__menu__burger, .header__menu, .buttons__container').toggleClass('active');
    $('body').toggleClass('lock');
};