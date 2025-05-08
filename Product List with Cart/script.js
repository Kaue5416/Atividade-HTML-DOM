let productsData = [];
let cart = [];


fetch('data.json')
  .then(response => response.json())
  .then(products => {
    productsData = products;
    renderProducts(products);
    updateCart();
  });

function renderProducts(products) {
  const container = document.getElementById('product-list');
  container.innerHTML = '';

  products.forEach(product => {
    const div = document.createElement('div');
    div.classList.add('product');

    div.innerHTML = `
      <div class="product-image-container">
        <img src="${product.image.thumbnail}" alt="${product.name}" width="150">
        <button class="icon-button add-to-cart-btn" onclick="addToCart(${product.id})" aria-label="Adicionar ao carrinho">
          <img src="./assets/images/icon-add-to-cart.svg" alt="Adicionar ao carrinho" width="20">
        </button>
      </div>
      <h3>${product.name}</h3>  <!-- Exibe o nome do produto -->
      <p>Categoria: ${product.category}</p>  <!-- Exibe a categoria do produto -->
      <p>Preço: R$ ${product.price.toFixed(2)}</p>  <!-- Exibe o preço do produto -->
    `;

    container.appendChild(div);
  });
}

function addToCart(productId) {
  const product = productsData.find(p => p.id === productId);

  if (!product) return;

  const itemInCart = cart.find(item => item.id === productId);

  if (itemInCart) {
    itemInCart.quantity += 1;
  } else {
    cart.push({ ...product, quantity: 1 });
  }

  updateCart();
}

function removeFromCart(productId) {
  cart = cart.filter(item => item.id !== productId);
  updateCart();
}

function increaseQuantity(productId) {
  const item = cart.find(p => p.id === productId);
  if (item) {
    item.quantity += 1;
    updateCart();
  }
}

function decreaseQuantity(productId) {
  const itemIndex = cart.findIndex(p => p.id === productId);
  if (itemIndex > -1) {
    cart[itemIndex].quantity -= 1;
    if (cart[itemIndex].quantity === 0) {
      cart.splice(itemIndex, 1);
    }
    updateCart();
  }
}

function updateCart() {
  const cartItemsContainer = document.getElementById('cart-items');
  const totalDisplay = document.getElementById('total');

  cartItemsContainer.innerHTML = '';
  let total = 0;

  if (cart.length === 0) {
    cartItemsContainer.innerHTML = '<p>Carrinho vazio</p>';
  } else {
    cart.forEach(item => {
      const li = document.createElement('li');
      li.innerHTML = `
          <strong>${item.name}</strong> x ${item.quantity}<br>
          Subtotal: R$ ${(item.price * item.quantity).toFixed(2)}<br>
          <button aria-label="Diminuir quantidade" onclick="decreaseQuantity(${item.id})">
            <img src="./assets/images/icon-decrement-quantity.svg" alt="Diminuir" width="20">
          </button>
          <button aria-label="Aumentar quantidade" onclick="increaseQuantity(${item.id})">
            <img src="./assets/images/icon-increment-quantity.svg" alt="Aumentar" width="20">
          </button>
          <button aria-label="Remover item" onclick="removeFromCart(${item.id})">
            <img src="./assets/images/icon-remove-item.svg" alt="Remover" width="20">
          </button>
        `;

      cartItemsContainer.appendChild(li);
      total += item.price * item.quantity;
    });
  }

  totalDisplay.textContent = `Total: R$ ${total.toFixed(2)}`;
}