var cartCount = document.getElementById('cart-count');
var cardCount = window.localStorage.getItem('Cart');
cartCount = JSON.parse(cardCount);
console.log(cardCount)

// var totalCount = 0;
//     for(var i=0; i<cardCount.length; i++) {
//         totalCount = totalCount + productList[i].count;
//     }

$('#owl-carousel').owlCarousel({
    loop: true,
    margin: 30,
    dots: true,
    nav: true,
    items: 1,
    autoplay:true,
    autoplayTimeout:3000,
    autoplayHoverPause:true
})
// Products
var mainCard = document.getElementById('clothing-grids');
var accesoryCard = document.getElementById('acessory-grids');


  var http = new XMLHttpRequest();
  http.open('GET', 'https://5d76bf96515d1a0014085cf9.mockapi.io/product', true);
  http.onreadystatechange = function() {
      if(this.readyState == 4) {
          var productList = JSON.parse(this.responseText);
          var productListId = productList[0].id;
        function carding(i) {
            if(productList[i].isAccessory == false) {
            mainCard.innerHTML += `<div onclick="renderCard(${productList[i].id})" id="${productList[i].id}" class="clothing-cards">
            <div class="image-container">
                <img src="${productList[i].preview}" alt="" class="product-image">
            </div>
            <div class="card-content">
                <h1 class="product-name">${productList[i].name}</h1>
                <p class="product-brand">${productList[i].brand}</p>
                <p class="product-price">Rs. ${productList[i].price}</p>
            </div>
        </div>`
        console.log(mainCard);
            } else {
                if (productList[i].isAccessory != false) {
                    accesoryCard.innerHTML += `<div onclick="renderCard(${productList[i].id})" id="${productList[i].id}" class="clothing-cards">
                    <div class="image-container">
                        <img src="${productList[i].preview}" alt="" class="product-image">
                    </div>
                    <div class="card-content">
                        <h1 class="product-name">${productList[i].name}</h1>
                        <p class="product-brand">${productList[i].brand}</p>
                        <p class="product-price">Rs. ${productList[i].price}</p>
                    </div>
                </div>`
                }
            }
            
            }
    
            for (i=0; i<=productList.length; i++) {
                carding(i);
            }
            
      }
  }
  
http.send();
mainCard.addEventListener('click', function() {
    window.open('./Html/details.html',"_self");
})
accesoryCard.addEventListener('click', function() {
    window.open('./Html/details.html',"_self")
})

