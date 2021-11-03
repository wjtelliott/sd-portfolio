let item =
{
    sku: '',
    quantity: 0,
    price: 0,
};

let cart =
{
    subTotal: 0,
    tax: 5.55,
    total: 0,
    cartItems: [],

    init: function()
    {
        let nullItem = item;
        nullItem.sku = 'null';
        nullItem.quantity = 0;
        nullItem.price = 1.0;
        this.cartItems.push(nullItem);
    },

    addQuantity: function(itemSku, amountToAdd)
    {
        for (let i = 0; i < this.cartItems.length; i++)
        {
            if (this.cartItems[i].sku === itemSku)
            {
                this.cartItems[i].quantity += amountToAdd;
                if (this.cartItems[i].quantity < 0)
                {
                    this.cartItems[i].quantity = 0;
                }
            }
        }
    },

    addItem: function(item)
    {
        this.cartItems.push(item);
    },

    getItemQuantity: function(itemSku)
    {
        for (let i = 0; i < this.cartItems.length; i++)
        {
            if (itemSku === this.cartItems[i].sku)
            {
                return this.cartItems[i].quantity;
            }
        }
    },

    checkout: function()
    {

        this.subTotal = 0;

        for (let i = 0; i < this.cartItems.length; i++)
        {
            this.subTotal += (this.cartItems[i].price * this.cartItems[i].quantity);
        }

        this.total = this.subTotal * (this.tax / 100) + this.subTotal;

        return this.total.toFixed(2);
    },
};