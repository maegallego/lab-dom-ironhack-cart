// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
  const price = product.querySelector('.price span').innerHTML;
  const quantity = product.querySelector('.quantity input').value;
  let subtotal = price * quantity;
  product.querySelector('.subtotal span').innerHTML = subtotal;
  return subtotal;
}

function calculateAll() {
    let cart = document.querySelector('#cart');
    let products = cart.querySelectorAll('.product');
    let total = 0;
  
    products.forEach((allProduct)=>{
      total += updateSubtotal(allProduct);
    });
    document.querySelector('#total-value span').innerText = total.toFixed(2);
  // end of test

  // ITERATION 2
  //... your code goes here

  // ITERATION 3
  //... your code goes here
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
