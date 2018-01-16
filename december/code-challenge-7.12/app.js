var productItemList = $('.products');
var deliveryMethodSelection = $('.delivery-methods');
var totalQuantity = $('.total-quantity');
var totalPrice = $('.price');
var updateButton = $('.update-button');

var product1 = {
  name: "Product name",
  description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  price: 5.00,
}

var product2 = {
  name: "Product name",
  description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  price: 19.00,
}

var deliveryPrice = 3.49;
var productList = [product1, product2];
var basket = {
  0: 2,
  1: 1
};

loadItems();
loadTotalQuantity();
loadTotalPrice();

function insertProduct(product, key) {

  var productEntry = $('<div class="product"></div>');

  var productColumn = $('<div class="info product-column"></div>');
  var productName = $('<h1>' + product.name + '</h1>');
  var productDescription = $('<h2>' + product.description + '</h2>');

  var quantityColumn = $('<div class="quantity quantity-column"></div>');
  var quantityInput = $('<input class="quantity-input ' + key + '" type="number" min="0" value="' + basket[key] + '">');

  var priceColumn = $('<div class="price-column"></div>');
  var price = $('<span class="price">$' + (basket[key] * product.price).toFixed(2) + '</span>');
  var deleteButton = $('<i class="remove-button fa fa-times" aria-hidden="true"></i>');

  productItemList.append(productEntry);

  productEntry.append(productColumn);
  productColumn.append(productName);
  productColumn.append(productDescription);

  productEntry.append(quantityColumn);
  quantityColumn.append(quantityInput);

  productEntry.append(priceColumn);
  priceColumn.append(price);
  priceColumn.append(deleteButton);

  bindQuantityChangeListener();
}

  function loadItems () {

  productItemList.html('');

  for (var key in productList) {
    var product = productList[key];
    insertProduct(product, key);
  }
};

function loadTotalQuantity() {
  var quantity = 0;

  for (var key in basket) {
    var value = basket[key];
    quantity = quantity + value;
  }

  totalQuantity.html(quantity);
}

function loadTotalPrice() {

  var total = 0;

  for (var key in basket) {
    var product = productList[key];
    var price = (basket[key] * product.price);
    total = total + price;
  }

  total = total + Number(deliveryMethodSelection.val());
  total = total.toFixed(2);
  total = Number(total);
  totalPrice.html('$' + total);
}

updateButton.click(function() {
  loadItems();
  loadTotalQuantity();
  loadTotalPrice();
});

function bindQuantityChangeListener() {
  $('.quantity-input').bind('input', function() {

    var value = $(this).val();
    var classNames = $(this).attr('class');
    var productKey = classNames.split(' ')[1];

    console.log(value);
    basket[productKey] = Number(value);
  });
}
