document.addEventListener('DOMContentLoaded', (event) => {
    let cart = [];

    function updateCart() {
        const cartItems = document.getElementById('cart-items');
        cartItems.innerHTML = '';
        cart.forEach(item => {
            const li = document.createElement('li');
            li.textContent = `${item.name} - $${item.price.toFixed(2)}`;
            cartItems.appendChild(li);
        });
        const totalPrice = cart.reduce((sum, item) => sum + item.price, 0);
        document.getElementById('total-price').textContent = `Total: $${totalPrice.toFixed(2)}`;
    }

    document.querySelectorAll('.cart').forEach(cartButton => {
        cartButton.addEventListener('click', (event) => {
            const container = event.currentTarget.closest('.small-container');
            const name = container.querySelector('h4').textContent;
            const price = parseFloat(container.querySelector('p').textContent.replace('$', ''));
            cart.push({ name, price });
            updateCart();
        });
    });

    document.getElementById('checkout').addEventListener('click', () => {
        alert('Checkout not implemented yet');
    });
});
