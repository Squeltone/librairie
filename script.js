document.getElementById('panier').addEventListener('click', function (event) {
    event.preventDefault();
    document.getElementById('overlay').style.display = 'flex';
});

document.getElementById('close-popup').addEventListener('click', function () {
    document.getElementById('overlay').style.display = 'none';
});

document.getElementById('cart-link').addEventListener('click', function (event) {
    event.preventDefault();
    document.getElementById('mySlider').style.width = '250px';
    document.getElementById('overlay').style.display = 'flex';
});

document.getElementById('close-slider').addEventListener('click', function () {
    document.getElementById('mySlider').style.width = '0';
    document.getElementById('overlay').style.display = 'none';
});

