// Starter data
const cart = [
  { name: "Pen", price: 20, quantity: 3 },
  { name: "Notebook", price: 50, quantity: 2 },
  { name: "Pencil", price: 10, quantity: 5 }
];

// Start coding here...
function totalPrice({ name, price, quantity }) {
  const total = price * quantity;
  return `${name} - ${price} x ${quantity} = ₱${total}`;
}

const totalPriceDescriptions = cart.map(totalPrice);

let totalPriceCart = document.getElementById("total_price");
totalPriceCart.textContent = totalPriceDescriptions.join("  ");

function newDescriptions({ name, price }) {
  return `${name} - ${price}`;
}

const newCartDescriptions = cart.map(newDescriptions);

let newDescriptionCart = document.getElementById("cart_description");
newDescriptionCart.textContent = newCartDescriptions.join("   ");

const totalCartValue = cart.reduce((value,carts) => value + carts.price * carts.quantity, 0);
document.getElementById("total_cart_value").textContent = `Total Cart Value: ₱${totalCartValue}`;
