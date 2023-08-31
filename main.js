/* icono de menu desktop */
const menuEmail = document.querySelector('.navbar-email');

/* menu desplegable desktop */
const desktopMenu = document.querySelector('.desktop-menu');

/*--------------------------------*/

/* icono de menu mobile */
const menuMedia = document.querySelector('.menu');

/* menu desplegable mobile */
const mobileMenu = document.querySelector('.mobile-menu');

/*--------------------------------*/

/* icono de shopping cart */
const shoppingCartIcon = document.querySelector('.navbar-shopping-cart');
/* shopping cart */
const shoppingCart = document.querySelector('#shoppingCartContainer');

const productDetailContainer = document.querySelector('#productDetail');

const productDetailClose = document.querySelector('.product-detail-close');

const cardsContainer = document.querySelector('.cards-container');



menuEmail.addEventListener('click', toggleDesktopMenu) //Click Desktop Menu Icon


menuMedia.addEventListener('click', toggleMobileMenu) //Click Mobile Menu Icon

productDetailClose.addEventListener('click',closeProductDetailAside)

shoppingCartIcon.addEventListener('click', toggleShoppingCart) //Click Shopping Cart Icon



function toggleDesktopMenu(){

    const isShoppingCartClosed = shoppingCart.classList.contains('inactive');

    if(!isShoppingCartClosed){
        shoppingCart.classList.add('inactive');
    }

    const isProductDetailClosed = productDetailContainer.classList.contains('inactive');

    if(!isProductDetailClosed){
        closeProductDetailAside();
    }
    
    desktopMenu.classList.toggle('inactive');
    
}


function toggleMobileMenu(){
    const isShoppingCartClosed = shoppingCart.classList.contains('inactive');

    if(!isShoppingCartClosed){
        shoppingCart.classList.add('inactive');
    }

    const isProductDetailClosed = productDetailContainer.classList.contains('inactive');

    if(!isProductDetailClosed){
        closeProductDetailAside()
    }
    
    mobileMenu.classList.toggle('inactive');
};

function toggleShoppingCart(){
    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');

    if(!isMobileMenuClosed){
        mobileMenu.classList.add('inactive');
    }

    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');

    if(!isDesktopMenuClosed){
        desktopMenu.classList.add('inactive');
    }

    const isProductDetailClosed = productDetailContainer.classList.contains('inactive');

    if(!isProductDetailClosed){
        closeProductDetailAside()
    }

    shoppingCart.classList.toggle('inactive');
};



function openProductDetailAside(){
    productDetailContainer.classList.remove('inactive');

    const isShoppingCartClosed = shoppingCart.classList.contains('inactive');

    if(!isShoppingCartClosed){
        shoppingCart.classList.add('inactive');
    }

    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');

    if(!isDesktopMenuClosed){
        desktopMenu.classList.add('inactive');
    }

    const isMobileMenuClosed = mobileMenu.classList.contains('inactive');

    if(!isMobileMenuClosed){
        mobileMenu.classList.add('inactive');
    }
    
}

function closeProductDetailAside(){
    productDetailContainer.classList.add('inactive');
}

const productList = [];
productList.push({
    name: 'Bike',
    price: 30,
    photoURL: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'},{name: 'Vintage Smart-TV',price: 640,photoURL: 'https://images.pexels.com/photos/5211580/pexels-photo-5211580.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'},{name: 'Smart Phone',price: 340,photoURL: 'https://images.pexels.com/photos/4110156/pexels-photo-4110156.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'},{name: 'MacBook Pro 2016(used)',price: 650,photoURL: 'https://images.pexels.com/photos/6446709/pexels-photo-6446709.jpeg'},{name: 'Timex Mechanical Wrist Watch',price: 90,photoURL: 'https://images.pexels.com/photos/2078268/pexels-photo-2078268.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'},{name: 'Apple Watch 4th Gen(refurbished)',price: 380,photoURL: 'https://images.pexels.com/photos/437037/pexels-photo-437037.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'})


//     <div class="product-card">
//     <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
//     <div class="product-info">
//       <div>
//         <p>$120,00</p>
//         <p>Bike</p>
//       </div>
//       <figure>
//         <img src="./icons/bt_add_to_cart.svg" alt="">
//       </figure>
//     </div>
//   </div>

function renderProducts(arr){
    for (product of productList){

        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        const productImg = document.createElement('img');
        productImg.setAttribute('src',product.photoURL);

        productImg.addEventListener('click',openProductDetailAside);
       

        const productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
        const productInfoDiv = document.createElement('div');
    
        const productPrice = document.createElement('p');
        productPrice.innerText = '$' + product.price;
        const productName = document.createElement('p');
        productName.innerText = product.name;
    
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
    
        const productInfoFigure = document.createElement('figure');
        const ProductImgCart = document.createElement('img');
        ProductImgCart.setAttribute('src','./icons/bt_add_to_cart.svg');
        ProductImgCart.classList.add('add-to-cart-button');
    
        productInfoFigure.appendChild(ProductImgCart);
    
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
    
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
    
        cardsContainer.appendChild(productCard);
    }
}

renderProducts(productList);