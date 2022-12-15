export const popupCallOpen = () => {
    $('.popup__call').show();
    $(".popup__call__response").hide();
};

export const popupCallClose = () => {
    $(".popup__call__response").text("");
    $('.popup__call').hide();
}

export const popupCallSubmit = (e) => {
    e.preventDefault();
    $(".popup__call__response").show();
}
