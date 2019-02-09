$('document').ready(function () {
    var animateButton = function (e) {

        e.preventDefault;
        //reset animation
        e.target.classList.remove('animate');

        e.target.classList.add('animate');
        setTimeout(function () {
            e.target.classList.remove('animate');
        }, 700);
    };

    var bubblyButtons = document.getElementsByClassName("bubbly-button");

    for (var i = 0; i < bubblyButtons.length; i++) {
        bubblyButtons[i].addEventListener('click', animateButton, false);
    }

    let [button, modal] = document.body.children;

    button.addEventListener('click', () => {
        setTimeout(function() {
            modal.showModal()
            document.addEventListener('click', ({target}) => target === modal && modal.close());
    }, 700)});
    
});

