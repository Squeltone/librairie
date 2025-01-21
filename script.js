document.getElementById('panier').addEventListener('click', function (event) {
    event.preventDefault();
    document.getElementById('overlay').style.display = 'flex';
});

document.getElementById('close-popup').addEventListener('click', function () {
    document.getElementById('overlay').style.display = 'none';
});

document.getElementById('cart-link').addEventListener('click', function (event) {
    event.preventDefault();
    document.getElementById('mySlider').style.width = '250px';
    document.getElementById('overlay').style.display = 'flex';
});

document.getElementById('close-slider').addEventListener('click', function () {
    document.getElementById('mySlider').style.width = '0';
    document.getElementById('overlay').style.display = 'none';
});

 // Liste des produits dans le panier (avec nom, prix, quantité)
 let cart = [
    { name: 'Fahrenheit 451', price: 17.51, quantity: 1 },
    { name: 'Laink & terracid BD', price: 2.30, quantity: 1 },
    { name: 'Berserk', price: 7.20, quantity: 1 }
];

// Fonction pour afficher les articles du panier
function displayCart() {
    const cartItemsDiv = document.getElementById('cartItems'); // Récupère l'élément du DOM pour les produits du panier
    cartItemsDiv.innerHTML = ''; // Vide le contenu précédent des produits du panier

    // Boucle pour afficher chaque produit du tableau "cart"
    cart.forEach((product, index) => {
        const productDiv = document.createElement('div'); // Crée un nouvel élément <div> pour chaque produit
        productDiv.classList.add('product'); // Ajoute la classe "product" pour le style

        // Contenu HTML pour chaque produit, incluant le nom, le prix, la quantité et des boutons d'interaction
        productDiv.innerHTML = `
            <div class="product-details">
                <strong>${product.name}</strong><br>
                <span>Prix unitaire: €${product.price.toFixed(2)}</span>
            </div>
            <div class="quantity-control">
                <button onclick="changeQuantity(${index}, -1)">-</button>
                <span class="product-quantity">${product.quantity}</span>
                <button onclick="changeQuantity(${index}, 1)">+</button>
            </div>
            <div class="product-price">€${(product.price * product.quantity).toFixed(2)}</div>
            <button onclick="removeItem(${index})" style="color: red;">Supprimer</button>
        `;

        // Ajoute le produit au panier affiché dans la page
        cartItemsDiv.appendChild(productDiv);
    });

    // Met à jour le total à chaque fois que le panier est modifié
    updateTotal();
}

// Fonction pour ajuster la quantité d'un produit (+1 ou -1)
function changeQuantity(index, change) {
    cart[index].quantity += change; // Modifie la quantité du produit à l'indice donné
    if (cart[index].quantity < 1) {
        cart[index].quantity = 1; // Empêche d'avoir une quantité inférieure à 1
    }
    displayCart(); // Rafraîchit l'affichage du panier
}

// Fonction pour supprimer un produit du panier
function removeItem(index) {
    cart.splice(index, 1); // Supprime le produit à l'indice donné dans le tableau "cart"
    displayCart(); // Rafraîchit l'affichage du panier après suppression
}

// Fonction pour mettre à jour le total du panier
function updateTotal() {
    let total = 0; // Variable pour calculer le total
    cart.forEach(product => {
        total += product.price * product.quantity; // Additionne le prix total de chaque produit
    });
    // Affiche le total calculé dans l'élément HTML correspondant
    document.getElementById('totalPrice').textContent = total.toFixed(2);
}

// Fonction pour simuler le processus de paiement
function checkout() {
    alert('Procéder au paiement de €' + document.getElementById('totalPrice').textContent);
}

// Initialisation : appel de la fonction pour afficher le panier lors du chargement de la page
displayCart();