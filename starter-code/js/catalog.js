/* global Product, Cart */

'use strict';

// Set up an empty cart for use on this page.
const cart = new Cart([]);
/// ----------------------------- cart is an instance of a CART -------------------////
/// ------------------- use cmd/ctl f to look for words in your code ------------------///

// On screen load, we call this method to put all of the busmall options
// (the things in the Product.allProducts array) into the drop down list.
function populateForm() {
  const selectElement = document.getElementById('items');
  for (let product in Product.allProducts) {
    let optionElem = document.createElement('option');
    optionElem.textContent = `${Product.allProducts[product].name}`;
    optionElem.value = `${Product.allProducts[product].name}`;
    selectElement.appendChild(optionElem);
  }
}
  //DONE: Add an <option> tag inside the form's select for each product

// When someone submits the form, we need to add the selected item to the cart
// object, save the whole thing back to local storage and update the screen
// so that it shows the # of items in the cart and a quick preview of the cart itself.
function handleSubmit(event) {
  // DONE: Prevent the page from reloading
  event.preventDefault();
  /// --------------- at this point you know which item was picked from the list, how many ----------- ///
  // Do all the things ...
  addSelectedItemToCart();
  cart.saveToLocalStorage();
  updateCounter();
  updateCartPreview();

}

let selectElem = document.getElementById('items');
let inputElem = document.getElementById('quantity');
// DONE: Add the selected item and quantity to the cart
// DONE: suss out the item picked from the select list
// DONE: get the quantity
// DONE: using those, add one item to the Cart
function addSelectedItemToCart() {
  cart.addItem(selectElem.value, inputElem.value);
}
// DONE: Update the cart count in the header nav with the number of items in the Cart
function updateCounter() {
  let itemCountElem = document.getElementById('itemCount');
  let itemCount = cart.items.length;
  itemCountElem.textContent = ` (${itemCount})`;
}

// DONE: As you add items into the cart, show them (item & quantity) in the cart preview div
function updateCartPreview() {
  let itemOrdered = selectElem.value;
  let numOrdered = inputElem.value;
  let cartPreviewElem = document.getElementById('cartContents');
  for(let product of Product.allProducts) {
    if(itemOrdered === product.name) {
      //create img element that points us to itemOrdered within Product.allProducts
      let imgElem = document.createElement('img');
      imgElem.src = product.filePath;
      imgElem.classList.add("small");
      cartPreviewElem.appendChild(imgElem);
      let pElem = document.createElement('p');
      pElem.textContent = ` x ${numOrdered}`;
      cartPreviewElem.appendChild(pElem);
    }
  }
  // DONE: Get the item and quantity from the form
  // DONE: Add a new element to the cartContents div with that information

}

// Set up the "submit" event listener on the form.
// This is the trigger for the app. When a user "submits" the form, it will
// Call that handleSubmit method above and kick off the whole process
const catalogForm = document.getElementById('catalog');
catalogForm.addEventListener('submit', handleSubmit);

// Before anything else of value can happen, we need to fill in the select
// drop down list in the form.
populateForm();
