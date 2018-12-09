window.onload = function () {
    var elem = document.querySelector('input[type="range"]');

    var rangeValue = function () {
        var newValue = elem.value;
        var target = document.querySelector('.value');
        target.innerHTML = newValue;
    }

    elem.addEventListener("input", rangeValue);

    // var wrapper = $("#button-wrapper");

    // $(".submit").click(function () {
    //     if (wrapper.not(".checked")) {
    //         wrapper.addClass("checked");
    //         setTimeout(function () {
    //             wrapper.removeClass("checked");
    //         }, 8000);
    //     }
    // });
}