function showMenu(type) {
    let menu = document.getElementById("menu");
    let items = document.getElementById("items");

    menu.style.display = "block";

    if (type === "pizza") {
        items.innerHTML = `
            <p>🍕 Margherita - ₹200</p>
            <button onclick="order()">Order</button>
        `;
    }

    else if (type === "dominos") {
        items.innerHTML = `
            <p>🍕 Cheese Burst - ₹250</p>
            <button onclick="order()">Order</button>
        `;
    }

    else if (type === "taco") {
        items.innerHTML = `
            <p>🌮 Tacos - ₹150</p>
            <button onclick="order()">Order</button>
        `;
    }
}
function placeOrder() {
    let s = document.getElementById("status");
    let bar = document.getElementById("progress-bar");

    s.innerHTML = "💳 Payment Done";
    bar.style.width = "10%";

    setTimeout(() => {
        s.innerHTML = "✅ Order Placed";
        bar.style.width = "30%";
    }, 2000);

    setTimeout(() => {
        s.innerHTML = "👨‍🍳 Preparing";
        bar.style.width = "60%";
    }, 5000);

    setTimeout(() => {
        s.innerHTML = "🚚 Out for Delivery";
        bar.style.width = "85%";
    }, 8000);

    setTimeout(() => {
        s.innerHTML = "🎉 Delivered!";
        bar.style.width = "100%";
    }, 11000);

    history.push(JSON.stringify(cart));
    updateHistory();

    cart = {};
    updateCart();
}