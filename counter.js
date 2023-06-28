export function setupCounter(element) {
  let counter = 0
  const setCounter = (count) => {
    counter = count
    element.innerHTML = `count is ${counter}`
  }
  element.addEventListener('click', () => setCounter(counter + 1))
  setCounter(0)
}

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

