$(function () {
    $('input[type="checkbox"]').iCheck({
        checkboxClass: 'icheckbox_square-blue',
        radioClass: 'iradio_square-blue',
        increaseArea: '20%' /* optional */
    });
    $(".submitorconfirm").click(function () {
        
        //if ($('.field-validation-error:visible').length > 0 || !$("form").valid()) {
        //    return false;
        //}
    });
});