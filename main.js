
const slider = document.querySelector('.slider');
let slideIndex = 0;
// Get all the add-to-cart buttons
const Comprarahora = document.querySelectorAll('btn');

// Get the cart items element
const cartItemsElement = document.querySelector('.cart-items');

let cartItems = [];
function slideNext() {
  slideIndex++;
  if (slideIndex >= slider.children.length) {
    slideIndex = 0;
  }
  slider.style.transform = `translateX(-${slideIndex *20}%)`;
}

setInterval(slideNext, 2000);


