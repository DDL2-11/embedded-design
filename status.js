$('document').ready(function () {
    var animateButton = function (e) {
        // 状态码
        let state_code = 0;
        let waring_text = '';

        if (state_code == 0) {
            waring_text = '关闭状态，正常'
        }
        else if (state_code == 1) {
            waring_text = '打开状态，正常'
        }
        else if (state_code == 2) {
            waring_text = '关闭状态，异常'
        }
        else if (state_code == 3) {
            waring_text = '打开状态，异常'
        }

        e.preventDefault;
        //reset animation
        e.target.classList.remove('animate');

        e.target.classList.add('animate');
        setTimeout(function () {
            e.target.classList.remove('animate');
            alert(waring_text);
        }, 700);
    };

    var bubblyButtons = document.getElementsByClassName("bubbly-button");

    for (var i = 0; i < bubblyButtons.length; i++) {
        bubblyButtons[i].addEventListener('click', animateButton, false);
    }

    // let [button, modal] = document.body.children;

    // button.addEventListener('click', () => {
    //     setTimeout(function() {
    //         modal.showModal()
    //         document.addEventListener('click', ({target}) => target === modal && modal.close());
    // }, 700)});
    
});

