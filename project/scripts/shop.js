const products = [
    {
        id: "aeth-jkt-01",
        name: "Aegean Performance Jacket",
        category: "tailored",
        price: 148,
        description: "Water-resistant tailored shell built to move from training to the office."
    },
    {
        id: "aeth-tee-02",
        name: "Marble Tech Tee",
        category: "activewear",
        price: 42,
        description: "Moisture-wicking, four-way stretch tee for high-output training days."
    },
    {
        id: "aeth-short-03",
        name: "Olympic Training Short",
        category: "activewear",
        price: 58,
        description: "Lightweight training short with a built-in liner and zip pocket."
    },
    {
        id: "aeth-jog-04",
        name: "Charcoal Tapered Jogger",
        category: "casual",
        price: 76,
        description: "Soft cotton-blend jogger with a tailored taper for everyday wear."
    },
    {
        id: "aeth-base-05",
        name: "Seamless Base Layer",
        category: "activewear",
        price: 54,
        description: "Second-skin base layer designed for layering under outerwear."
    },
    {
        id: "aeth-shirt-06",
        name: "Pentelic Oxford Shirt",
        category: "tailored",
        price: 88,
        description: "Crisp oxford shirt cut from breathable stretch cotton for all-day tailoring."
    },
    {
        id: "aeth-polo-07",
        name: "Vale Cotton Polo",
        category: "casual",
        price: 52,
        description: "Classic knit polo in soft pima cotton for effortless everyday wear."
    }
];

const productGrid = document.querySelector('#product-grid');
const filterButtons = document.querySelectorAll('.filter-btn');

function getImagePath(productName) {
    const fileName = productName.toLowerCase().replace(/\s+/g, '-');
    return `images/${fileName}.png`;
}

function renderProducts(category) {
    const filteredProducts = category === 'all'
        ? products
        : products.filter((product) => product.category === category);

    if (filteredProducts.length === 0) {
        productGrid.innerHTML = `<p class="empty-state">No products found in this category.</p>`;
        return;
    }

    productGrid.innerHTML = filteredProducts.map((product) => `
    <article class="content-card product-card">
      <img src="${getImagePath(product.name)}" alt="${product.name}" width="200" height="200" loading="lazy" class="product-photo">
      <h3>${product.name}</h3>
      <p class="product-price">$${product.price}</p>
      <p>${product.description}</p>
    </article>
  `).join('');
}

function setActiveButton(category) {
    filterButtons.forEach((button) => {
        if (button.dataset.category === category) {
            button.classList.add('active');
        } else {
            button.classList.remove('active');
        }
    });
}

function getSavedFilter() {
    return localStorage.getItem('shopFilter');
}

function saveFilter(category) {
    localStorage.setItem('shopFilter', category);
}

filterButtons.forEach((button) => {
    button.addEventListener('click', () => {
        const category = button.dataset.category;
        renderProducts(category);
        setActiveButton(category);
        saveFilter(category);
    });
});

const initialFilter = getSavedFilter() || 'all';
renderProducts(initialFilter);
setActiveButton(initialFilter);