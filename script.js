
const cartBtn = document.querySelector('.cart-btn');
const cartModal = document.getElementById('cart-modal');
const closeBtn = document.getElementById('close-cart');
const productGrid = document.getElementById('product-grid');


const burger = document.querySelector('#burger-menu');
const navLinks = document.querySelector('#nav-links');

burger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    burger.classList.toggle('open');
});
document.addEventListener('DOMContentLoaded', () => {
    const burger = document.querySelector('.burger-menu');
    const navLinks = document.querySelector('.nav-links');

    if (burger && navLinks) {
        burger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }
});
const products = [
    // --- Accessories ---
    { id: 1, name: "Passport Holder", price: 50, category: "Accessories", image: "images/passport-holder.avif" },
    { id: 2, name: "Silk Tie", price: 85, category: "Accessories", image: "images/tie.avif" },
    { id: 3, name: "Money Clip", price: 120, category: "Accessories", image: "images/moneyclip.webp" },
    { id: 4, name: "Leather Wallet", price: 120, category: "Accessories", image: "images/wallet.avif" },
    { id: 5, name: "Modern Watch", price: 250, category: "Accessories", image: "images/modernwatch.avif" },
    { id: 6, name: "Sunglasses", price: 320, category: "Accessories", image: "images/sunglasses.avif" },
    { id: 7, name: "Briefcase", price: 400, category: "Accessories", image: "images/briefcase.avif" },
    { id: 8, name: "Gold Cufflinks", price: 450, category: "Accessories", image: "images/gold-accessory.avif" },
    { id: 9, name: "Montblanc Pen", price: 600, category: "Accessories", image: "images/pen.avif" },

    // --- Kitchen ---
    { id: 10, name: "Digital Kitchen Scale", price: 30, category: "Kitchen", image: "images/kitchenscale.webp" },
    { id: 11, name: "Dish Rack", price: 45, category: "Kitchen", image: "images/dishrack.webp" },
    { id: 12, name: "Slow Cooker", price: 70, category: "Kitchen", image: "images/slowcooker.webp" },
    { id: 13, name: "Cast Iron Skillet", price: 90, category: "Kitchen", image: "images/skillet.jpg" },
    { id: 14, name: "Toaster Oven", price: 110, category: "Kitchen", image: "images/toaster.jpg" },
    { id: 15, name: "Blender Pro", price: 120, category: "Kitchen", image: "images/blender.jpg" },
    { id: 16, name: "Air Fryer", price: 150, category: "Kitchen", image: "images/airfryer.jpg" },
    { id: 17, name: "Chef's Knife Set", price: 200, category: "Kitchen", image: "images/knifeset.webp" },
    { id: 18, name: "Stand Mixer", price: 400, category: "Kitchen", image: "images/mixer.webp" },
    { id: 19, name: "Espresso Machine", price: 800, category: "Kitchen", image: "images/espressomachine.jpeg" },

    // --- Phones ---
    { id: 20, name: "Nothing Phone 2", price: 600, category: "Phones", image: "images/nothingphone2.png" },
    { id: 21, name: "Xiaomi 14", price: 699, category: "Phones", image: "images/xiaomi14ultra.webp" },
    { id: 22, name: "OnePlus 12", price: 799, category: "Phones", image: "images/oneplus.jpg" },
    { id: 23, name: "Google Pixel 8", price: 899, category: "Phones", image: "images/googlepixel8.avif" },
    { id: 24, name: "iPhone 15 Pro", price: 999, category: "Phones", image: "images/iphone15.webp" },
    { id: 25, name: "Samsung S24 Ultra", price: 1299, category: "Phones", image: "images/s24.avif" },
    { id: 26, name: "iPhone 17 Pro Max", price: 1999, category: "Phones", image: "images/iphone17.webp" },
    { id: 27, name: "Samsung S26 Ultra", price: 1799, category: "Phones", image: "images/s26.webp" },
    { id: 28, name: "Xiaomi 17 Ultra", price: 1999, category: "Phones", image: "images/xiaomi17.jpg" },
    { id: 29, name: "Vertu Signature", price: 5000, category: "Phones", image: "images/vertu.avif" },

    // --- Laptops ---
    { id: 30, name: "Acer Swift Go", price: 900, category: "Laptops", image: "images/acer.jpg" },
    { id: 31, name: "Lenovo ThinkPad", price: 1500, category: "Laptops", image: "images/thinkpad.avif" },
    { id: 32, name: "Dell XPS 15", price: 1800, category: "Laptops", image: "images/gaminglaptop.webp" },
    { id: 33, name: "MacBook Air M3", price: 1900, category: "Laptops", image: "images/mc.webp" },
    { id: 34, name: "ASUS ROG Zephyrus", price: 2200, category: "Laptops", image: "images/asus.jpg" },
    { id: 35, name: "MacBook Pro", price: 2499, category: "Laptops", image: "images/mcpro.jpg" },
    { id: 36, name: "Razer Blade 16", price: 3200, category: "Laptops", image: "images/razer.jpg" },
    { id: 37, name: "Alienware m18", price: 3500, category: "Laptops", image: "images/alienware.jpg" },
    { id: 38, name: "Surface Laptop 6", price: 2800, category: "Laptops", image: "images/surface.webp" },
    { id: 39, name: "MacBook Pro M3 Max", price: 4500, category: "Laptops", image: "images/mcm3pro.jpeg" },

    // --- PC ---
    { id: 40, name: "Office Mini PC", price: 300, category: "PC", image: "images/minipc.jpg" },
    { id: 41, name: "Basic Desktop", price: 500, category: "PC", image: "images/basicpc.webp" },
    { id: 42, name: "Monitor", price: 400, category: "PC", image: "images/monitor.jpg" },
    { id: 43, name: "Office PC", price: 800, category: "PC", image: "images/officepc.jpg" },
    { id: 44, name: "Creator Workstation", price: 1100, category: "PC", image: "images/creatorpc.webp" },
    { id: 45, name: "Gaming Monitor", price: 1200, category: "PC", image: "images/gamingmonitor.webp" },
    { id: 46, name: "Mid-Range Gaming PC", price: 1500, category: "PC", image: "images/midgamingpc.jpg" },
    { id: 47, name: "High-End Gaming Rig", price: 2500, category: "PC", image: "images/bestpc.jpg" },
    { id: 48, name: "Gaming PC Pro", price: 3000, category: "PC", image: "images/gamingpc.png" },
    { id: 49, name: "Liquid Cooled Monster", price: 5000, category: "PC", image: "images/besttpc.jpg" },

    // --- Furniture ---
    { id: 50, name: "Desk Lamp", price: 80, category: "Furniture", image: "images/desklamp.jpg" },
    { id: 51, name: "Nightstand", price: 150, category: "Furniture", image: "images/nighstand.webp" },
    { id: 52, name: "Bookshelf", price: 200, category: "Furniture", image: "images/bookshelf.webp" },
    { id: 53, name: "Coffee Table", price: 250, category: "Furniture", image: "images/coffeetable.jpg" },
    { id: 54, name: "Office Chair", price: 300, category: "Furniture", image: "images/officechair.webp" },
    { id: 55, name: "TV Stand", price: 400, category: "Furniture", image: "images/tvstand.jpg" },
    { id: 56, name: "Bed Frame", price: 600, category: "Furniture", image: "images/bedframe.jpeg" },
    { id: 57, name: "Dining Table", price: 800, category: "Furniture", image: "images/diningtable.avif" },
    { id: 58, name: "Wardrobe", price: 900, category: "Furniture", image: "images/wardrobe.jpeg" },
    { id: 59, name: "Minimalist Sofa", price: 1200, category: "Furniture", image: "images/sofa.jpg" },

    // --- Bathroom ---
    { id: 60, name: "Soap Dispenser", price: 30, category: "Bathroom", image: "images/soapdispenser.avif" },
    { id: 61, name: "Bath Mat", price: 40, category: "Bathroom", image: "images/bathmat.jpg" },
    { id: 62, name: "Towel Rack", price: 60, category: "Bathroom", image: "images/towelrack.webp" },
    { id: 63, name: "Faucets", price: 120, category: "Bathroom", image: "images/faucets.jpeg" },
    { id: 64, name: "Shower Head", price: 150, category: "Bathroom", image: "images/showerhead.webp" },
    { id: 65, name: "Shelving Unit", price: 180, category: "Bathroom", image: "images/shelving.jpg" },
    { id: 66, name: "Mirror Cabinet", price: 200, category: "Bathroom", image: "images/mirrorcabinet.webp" },
    { id: 67, name: "Toilet Bowl", price: 300, category: "Bathroom", image: "images/toiletbowl.webp" },
    { id: 68, name: "Marble Sink", price: 550, category: "Bathroom", image: "images/marblesink.webp" },
    { id: 69, name: "Bathtub", price: 1000, category: "Bathroom", image: "images/bathub.webp" },

    // --- Chocolate ---
    { id: 70, name: "Dark Choco Bar", price: 10, category: "Chocolate", image: "images/chocobar.webp" },
    { id: 71, name: "White Choco", price: 12, category: "Chocolate", image: "images/whitechoco.jpg" },
    { id: 72, name: "Hazelnut Choco", price: 20, category: "Chocolate", image: "images/hazelnutchoco.jpg" },
    { id: 73, name: "Milk Choco Box", price: 25, category: "Chocolate", image: "images/chocobox.webp" },
    { id: 74, name: "Artisan Truffles Box", price: 45, category: "Chocolate", image: "images/truffels.jpg" },
    { id: 75, name: "Belgian Gold Pralines", price: 60, category: "Chocolate", image: "images/belgianchoco.webp" },

    // --- Food ---
    { id: 76, name: "Fresh Butter Croissant", price: 8, category: "Food", image: "images/croissant.webp" },
    { id: 77, name: "Premium Sourdough Bread", price: 12, category: "Food", image: "images/bread.avif" },
    { id: 78, name: "Green Tea", price: 15, category: "Food", image: "images/greentea.webp" },
    { id: 79, name: "Caprese Ciabatta", price: 18, category: "Food", image: "images/ciabatta.jpg" },
    { id: 80, name: "Roast Beef & Arugula Sandwich", price: 22, category: "Food", image: "images/sandwich.avif" },
    { id: 81, name: "Organic Honey", price: 25, category: "Food", image: "images/organichoney.webp" },
    { id: 82, name: "Prosciutto & Brie Baguette", price: 25, category: "Food", image: "images/baguette.avif" },
    { id: 83, name: "Ethiopian Roasted Coffee", price: 30, category: "Food", image: "images/coffee.webp" },
    { id: 84, name: "Cold Pressed Olive Oil", price: 35, category: "Food", image: "images/oliveoil.jpg" },
    { id: 85, name: "Matcha Latte Kit", price: 40, category: "Food", image: "images/matcha.webp" },
    { id: 86, name: "Italian Truffle Pasta", price: 55, category: "Food", image: "images/pasta.webp" },
    { id: 87, name: "Smoked Salmon Platter", price: 75, category: "Food", image: "images/salmon.jpg" },
    { id: 88, name: "Artisan Cheese Selection", price: 85, category: "Food", image: "images/cheese.webp" },

    // --- Jewelry ---
    { id: 89, name: "Silver Ring", price: 150, category: "Jewelry", image: "images/silverring.jpg" },
    { id: 90, name: "Silver Bracelet", price: 200, category: "Jewelry", image: "images/silver-braclet.avif" },
    { id: 91, name: "Pearl Necklace", price: 500, category: "Jewelry", image: "images/neckale.webp" },
    { id: 92, name: "Gold Studs", price: 700, category: "Jewelry", image: "images/goldnuc.jpeg" },
    { id: 93, name: "Diamond Pendant", price: 900, category: "Jewelry", image: "images/diamond.jpeg" },
    { id: 94, name: "Platinum Earrings", price: 1200, category: "Jewelry", image: "images/earrings.webp" },
    { id: 95, name: "Gold Necklace", price: 1800, category: "Jewelry", image: "images/goldneckale.webp" },
    { id: 96, name: "Sapphire Ring", price: 2200, category: "Jewelry", image: "images/sapphirering.webp" },
    { id: 97, name: "Diamond Ring", price: 2500, category: "Jewelry", image: "images/diamondring.webp" },
    { id: 98, name: "Luxury Watch (Gold)", price: 15000, category: "Jewelry", image: "images/goldenwatch.webp" },

    // --- Cars ---
    { id: 99, name: "Mercedes-Benz W202 C-class", price: 6000, category: "Cars", image: "images/w202.webp" },
    { id: 100, name: "Mercedes-Benz W210 C-class", price: 7000, category: "Cars", image: "images/w210.webp" },
    { id: 101, name: "Toyota Corolla", price: 7500, category: "Cars", image: "images/toyotacorolla.jpg" },
    { id: 102, name: "Toyota Camry", price: 9000, category: "Cars", image: "images/toyotacamry.jpg" },
    { id: 103, name: "Volkswagen", price: 9000, category: "Cars", image: "images/volkswagen.jpeg" },
    { id: 104, name: "Land Cruiser 200", price: 12000, category: "Cars", image: "images/lc200.jpeg" },
    { id: 105, name: "Mercedes-Benz W211", price: 12000, category: "Cars", image: "images/w211.jpeg" },
    { id: 106, name: "Land Cruiser 200 restyling", price: 25000, category: "Cars", image: "images/lc200re.jpg" },
    { id: 107, name: "Mercedes-Benz W140 S-Class", price: 25000, category: "Cars", image: "images/mercedesw140.webp" },
    { id: 108, name: "BMW f90 m5", price: 30000, category: "Cars", image: "images/f90m5.jpeg" },
    { id: 109, name: "Mercedes-Benz W220 S-Class", price: 35000, category: "Cars", image: "images/w220.jpg" },
    { id: 110, name: "Tesla Model S", price: 45000, category: "Cars", image: "images/tesla.jpeg" },
    { id: 111, name: "Gelendwagen", price: 55000, category: "Cars", image: "images/gelendwagen.webp" },
    { id: 112, name: "Range Rover", price: 60000, category: "Cars", image: "images/range-rover.avif" },
    { id: 113, name: "Mercedes-Benz W221 S-Class", price: 65000, category: "Cars", image: "images/mercedesw221.webp" },
    { id: 114, name: "Land Cruiser 300", price: 85000, category: "Cars", image: "images/lc300.webp" },
    { id: 115, name: "Mercedes-Benz W222 S-Class", price: 100000, category: "Cars", image: "images/mercedesw222.webp" },
    { id: 116, name: "Audi A8", price: 115000, category: "Cars", image: "images/audia8.webp" },
    { id: 117, name: "Mercedes-Benz W223 S-Class", price: 120000, category: "Cars", image: "images/mercedesw223.avif" },
    { id: 118, name: "Audi e8", price: 120000, category: "Cars", image: "images/audie8.jpg" },
    { id: 119, name: "Tesla Cybertruck", price: 125000, category: "Cars", image: "images/cybertruck.jpeg" },
    { id: 120, name: "Lexus LX600", price: 135000, category: "Cars", image: "images/lexuslx600.webp" },
    { id: 121, name: "Porsche 911", price: 150000, category: "Cars", image: "images/porsche911.avif" },
    { id: 122, name: "Ferrari", price: 225000, category: "Cars", image: "images/ferrari.jpg" },
    { id: 123, name: "Lamborghini Huracán", price: 250000, category: "Cars", image: "images/lamborghin.webp" },
    { id: 124, name: "Bentley", price: 350000, category: "Cars", image: "images/bentley.avif" },
    { id: 125, name: "Rolls-Royce", price: 600000, category: "Cars", image: "images/rollsroyce.webp" },
    { id: 126, name: "Bugatti Chiron", price: 3000000, category: "Cars", image: "images/bugatti-chiron.jpg" },

    // --- Real Estate ---
    { id: 127, name: "City Studio", price: 150000, category: "Real Estate", image: "images/apartmentstudio.webp" },
    { id: 128, name: "Mountain Cabin", price: 300000, category: "Real Estate", image: "images/mountaincabin.jpg" },
    { id: 129, name: "Beach Apartment", price: 450000, category: "Real Estate", image: "images/beachcabin.jpg" },
    { id: 130, name: "Townhouse", price: 550000, category: "Real Estate", image: "images/townhouse.jpg" },
    { id: 131, name: "Office Space", price: 700000, category: "Real Estate", image: "images/officehouse.jpg" },
    { id: 132, name: "Suburban Mansion", price: 850000, category: "Real Estate", image: "images/suburbanhouse.jpg" },
    { id: 133, name: "Historic Home", price: 900000, category: "Real Estate", image: "images/historichouse.png" },
    { id: 134, name: "Penthouse Loft", price: 1100000, category: "Real Estate", image: "images/penthouseloft.jpg" },
    { id: 135, name: "Modern Villa", price: 1200000, category: "Real Estate", image: "images/modernvilla.jpg" },
    { id: 136, name: "Penthouse", price: 2500000, category: "Real Estate", image: "images/penthouse.webp" }
];
let cart = [];


function displayProducts(productsToDisplay = products) {
    productGrid.innerHTML = ''; 
    productsToDisplay.forEach(product => {
        const productCard = `
            <div class="product-card">
                <div class="product-image">
                    <img src="${product.image}" alt="${product.name}">
                    <span class="category-tag">${product.category}</span>
                </div>
                <div class="product-info">
                    <h3>${product.name}</h3>
                    <p class="price">$${product.price.toLocaleString()}</p>
                    <button class="add-to-cart-btn" onclick="addToCart(${product.id})">
                        Add to Cart
                    </button>
                </div>
            </div>
        `;
        productGrid.innerHTML += productCard;
    });
}
displayProducts(products);


function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const existingProduct = cart.find(item => item.id === productId);

    if (existingProduct) {
        
        existingProduct.quantity += 1;
    } else {
        
        cart.push({ ...product, quantity: 1 });
    }
    
    updateCartUI();
}


function updateCartUI() {
    const cartItemsList = document.getElementById('cart-items-list');
    const cartCount = document.querySelector('.cart-count');
    const totalPriceElement = document.querySelector('.total-price');
    
    cartItemsList.innerHTML = '';
    let total = 0;
    let totalItemsQuantity = 0;

    cart.forEach((item, index) => {
        total += item.price * item.quantity;
        totalItemsQuantity += item.quantity;
        
        const li = document.createElement('li');
        li.classList.add('cart-item-row');
        
        li.innerHTML = `
            <div>
                <span style="font-weight: bold;">${item.name}</span>
                <span style="color: #888; margin-left: 10px;">x${item.quantity}</span>
            </div>
            <div>
                <span style="margin-right: 10px;">$${(item.price * item.quantity).toLocaleString()}</span>
                <button onclick="removeFromCart(${index})" class="remove-item">&times;</button>
            </div>
        `;
        cartItemsList.appendChild(li);
    });

    cartCount.innerText = totalItemsQuantity;
    totalPriceElement.innerText = `Total: $${total.toLocaleString()}`;
}


function removeFromCart(index) {
    if (cart[index].quantity > 1) {
        cart[index].quantity -= 1;
    } else {
        cart.splice(index, 1);
    }
    updateCartUI();
}


cartBtn.addEventListener('click', () => {
    cartModal.classList.remove('hidden-cart');
});

closeBtn.addEventListener('click', () => {
    cartModal.classList.add('hidden-cart');
});

window.addEventListener('click', (e) => {
    if (e.target === cartModal) {
        cartModal.classList.add('hidden-cart');
    }
});


function filterProducts(category) {
    
    const buttons = document.querySelectorAll('.filter-btn');
    
    
    const clickedBtn = Array.from(buttons).find(btn => btn.innerText === category);
    
    if (!clickedBtn) return; 

    const isAlreadyActive = clickedBtn.classList.contains('active');

    
    buttons.forEach(btn => btn.classList.remove('active'));

    if (isAlreadyActive) {
        
        productGrid.innerHTML = ''; 
        localStorage.removeItem('selectedCategory');
    } else {
        
        clickedBtn.classList.add('active');
        localStorage.setItem('selectedCategory', category);
        
        const filteredProducts = category === 'All' 
            ? products 
            : products.filter(p => p.category === category);
        
        displayProducts(filteredProducts);
    }
}
const searchInput = document.getElementById('search-input');


searchInput.addEventListener('input', (e) => {
    const searchValue = e.target.value.toLowerCase(); 

   
    const filteredResults = products.filter(product => {
        return product.name.toLowerCase().includes(searchValue) || 
               product.category.toLowerCase().includes(searchValue);
    });

    
    displayProducts(filteredResults);
});
function searchProducts() {
    const query = document.getElementById('search-input').value.toLowerCase();
    const offset = 180; 

    if (query.includes('about')) {
        const element = document.getElementById('about');
        if (element) {
            const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
            window.scrollTo({
                top: elementPosition - offset,
                behavior: 'smooth'
            });
        }
    } else {
        const productGrid = document.getElementById('product-grid');
        if (productGrid) {
            const elementPosition = productGrid.getBoundingClientRect().top + window.pageYOffset;
            window.scrollTo({
                top: elementPosition - offset,
                behavior: 'smooth'
            });
        }
    }
}


document.querySelector('.search-bar button').addEventListener('click', searchProducts);
document.querySelectorAll('.faq-question').forEach(button => {
    button.addEventListener('click', () => {
        const answer = button.nextElementSibling;
        
        
        document.querySelectorAll('.faq-answer').forEach(el => {
            if (el !== answer) {
                el.style.maxHeight = null;
                el.previousElementSibling.classList.remove('active');
            }
        });

        
        button.classList.toggle('active');
        if (button.classList.contains('active')) {
            answer.style.maxHeight = answer.scrollHeight + "px";
        } else {
            answer.style.maxHeight = null;
        }
    });
});


