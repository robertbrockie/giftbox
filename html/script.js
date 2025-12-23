const giftContainer = document.getElementById('giftContainer');
const popupOverlay = document.getElementById('popupOverlay');
const closeButton = document.getElementById('closeButton');

// Read GET parameters
const urlParams = new URLSearchParams(window.location.search);
const toParam = urlParams.get('to') || 'Kim';
const fromParam = urlParams.get('from') || 'Brock';
const imgParam = urlParams.get('img') || urlParams.get('src') || 'https://nuvebrand.com/cdn/shop/files/nuve-silk-3-pro-pdp-slider-hero-shot.webp?v=1760790737&width=1445';

// Update page title
document.title = `Gift for ${toParam}`;

// Update gift tag
const giftTagText = document.querySelector('.gift-tag-text');
giftTagText.innerHTML = `To: ${toParam}<br>Love: ${fromParam}`;

// Update popup image
const popupImage = document.querySelector('.popup-content img');
popupImage.src = imgParam;
popupImage.alt = 'Gift';

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
