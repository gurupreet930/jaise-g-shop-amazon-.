const products = [
    { id: 1, name: "G-Shop Airbuds Pro USA Edition", price: 75 },
    { id: 2, name: "Smart Vision X-7 Watch", price: 140 },
    { id: 3, name: "Ultra HD 4K Dash Camera", price: 290 }
];

function loadProducts() {
    let grid = document.getElementById('product-list');
    products.forEach(p => {
        grid.innerHTML += `
            <div class="card">
                <img src="https://via.placeholder.com/150" width="100%">
                <h3>${p.name}</h3>
                <p class="price-tag">$${p.price}</p>
                <button class="btn-buy" onclick="openOrder(${p.id})">Buy Now</button>
            </div>`;
    });
}

function openOrder(id) {
    let p = products.find(x => x.id == id);
    let finalPrice = p.price;
    
    // Profit & Fair Discount Logic
    if (p.price >= 100 && p.price < 200) {
        finalPrice = p.price * 0.75; // 25% Off
    } else if (p.price >= 200) {
        finalPrice = p.price * 0.45; // 55% Off (For Large Orders)
    }

    document.getElementById('p-name').innerText = p.name;
    document.getElementById('p-price').innerText = "Original Price: $" + p.price;
    document.getElementById('p-discounted').innerText = "Your Price Today: $" + finalPrice.toFixed(2);
    document.getElementById('checkoutModal').style.display = 'block';
}

function closeModal() { document.getElementById('checkoutModal').style.display = 'none'; }

loadProducts();

