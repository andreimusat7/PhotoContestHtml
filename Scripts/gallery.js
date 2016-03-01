
$(document).ready(function () {

    $('.imglike').click(function () {
        $(this).hide();
        $(this).next().show();
    });

    $('.imglikethis').click(function () {
        $(this).hide();
        $(this).prev().show();
    });

    $('SELECT').selectBox();

    $('.photolike').on("click", function () {
        debugger;
        $(this).hide();
        $(this).next().show();
    });
    $('.photolikepress').on("click", function () {
        $(this).hide();
        $(this).prev().show();

    });

    $('.rankminus').click(function () {
        $value = parseInt($(this).prev().val());
        if ($value > 0 && $value <= 100) {
            $value = $value - 1;
        }
        $(this).prev().val($value);
    });

    $('.rankplus').click(function () {
        $value = parseInt($(this).next().val());
        if ($value >= 0 && $value < 100) {
            $value = $value + 1;
        }
        $(this).next().val($value);
    });

});