const giftContainer = document.getElementById('giftContainer');
const popupOverlay = document.getElementById('popupOverlay');
const closeButton = document.getElementById('closeButton');

giftContainer.addEventListener('click', function() {
    this.classList.add('shake');

    setTimeout(() => {
        this.classList.remove('shake');
        this.classList.add('pop-out');

        setTimeout(() => {
            popupOverlay.classList.add('active');
        }, 300);
    }, 500);
});

closeButton.addEventListener('click', function(e) {
    e.stopPropagation();
    popupOverlay.classList.remove('active');

    setTimeout(() => {
        giftContainer.classList.remove('pop-out');
    }, 300);
});

popupOverlay.addEventListener('click', function(e) {
    if (e.target === popupOverlay) {
        popupOverlay.classList.remove('active');

        setTimeout(() => {
            giftContainer.classList.remove('pop-out');
        }, 300);
    }
});
