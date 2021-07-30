/* global Cart */
'use strict';

// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
const table = document.getElementById('cart');
table.addEventListener('click', removeItemFromCart);
let cart;

function loadCart() {
  const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  cart = new Cart(cartItems);
}

// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
function renderCart() {
  loadCart();
  clearCart();
  showCart();
}

// DONE: Remove all of the rows (tr) in the cart table (tbody)
function clearCart() {
  let tBodyElem = document.querySelector('tbody');
  tBodyElem.innerHTML = '';
}

// DONE: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {
  let tBodyElem = document.querySelector('tbody');
  for (let item of cart.items) {
    let tRowElem = document.createElement('tr');
    tBodyElem.appendChild(tRowElem);
    let tData3Elem = document.createElement('td');
    tData3Elem.textContent = 'Delete';
    tData3Elem.id = `${item.product}`;
    tRowElem.appendChild(tData3Elem);
    let tData2Elem = document.createElement('td');
    tData2Elem.textContent = `${item.quantity}`;
    tRowElem.appendChild(tData2Elem);
    let tDataElem = document.createElement('td');
    tDataElem.textContent = `${item.product}`;
    tRowElem.appendChild(tDataElem);
  }

  // DONE: Find the table body
  /// ------------------ querySelector ---------------------------///

  // DONE: Iterate over the items in the cart
  // DONE: Create a TR
  // DONE: Create a TD for the delete link, quantity,  and the item
  // DONE: Add the TR to the TBODY and each of the TD's to the TR

}

function removeItemFromCart(event) {
  //DONE: When a delete link is clicked, use cart.removeItem to remove the correct item
  cart.removeItem(event.target.id);
  cart.saveToLocalStorage();
  renderCart();
  // DONE: Save the cart back to local storage
  // DONE: Re-draw the cart table

}

// This will initialize the page and draw the cart on screen
renderCart();
