// Started @ 6.32p 11.2.21
// Ended @ 7.04p 11.2.21

let petRockLimestone = item;
petRockLimestone.sku = 'pRock';
petRockLimestone.price = 15;
petRockLimestone.quantity = 1;

cart.addItem(petRockLimestone);

let updateQuantity = function()
{
    // find rock quantity and show it in cart
    let quantity = document.querySelector('.total-quantity');
    quantity.textContent = `Quantity: ${cart.getItemQuantity('pRock')}`;
};

let changeQuantity = function(amount)
{
    cart.addQuantity('pRock', amount);
};

document.querySelector('#quantity-down').addEventListener('click',
function()
{
    changeQuantity(-1);
    updateQuantity();
});
document.querySelector('#quantity-up').addEventListener('click',
function()
{
    changeQuantity(1);
    updateQuantity();
});

document.querySelector('.btn-checkout').addEventListener('click', 
function()
{
    cart.checkout();
    document.querySelector('.total-price').textContent = 
    `Subtotal: $${cart.subTotal},
    Tax: ${cart.tax}%,
    Total Price: $${cart.total.toFixed(2)}`;
});