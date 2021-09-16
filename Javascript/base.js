var cartCount = document.getElementById('cart-count');
    cardCount = window.localStorage.getItem('Cart');
    cartCount.innerHTML = JSON.parse(cardCount);