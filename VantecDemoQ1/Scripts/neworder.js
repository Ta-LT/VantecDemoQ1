$(function () {
    $('input[type="checkbox"]').iCheck({
        checkboxClass: 'icheckbox_square-blue',
        radioClass: 'iradio_square-blue',
        increaseArea: '20%' /* optional */
    });
    if ($("#orderState").val()) {
        switch ($("#orderState").val()) {
            case "2":
                $(".order-pallet-admin").find("input").attr("readonly", "readonly");
            case "1":
                $(".order-pallet-client").find("input").attr("readonly", "readonly");
                $(".order-address").find("input").attr("readonly", "readonly");
        }
    }
});