
var products = [
    {
        productId : 1,
        productTitle : "Vegetable",
        productImage : "Photo.png",
        productName : "Calabrese Broccoli",
        productPrice : 20.00,
        productDiscountPrice: 13.00
    },
    {
        productId : 2,
        productTitle : "Vegetable",
        productImage : "Photo.png",
        productName : "Calabrese Broccoli",
        productPrice : 20.00,
        productDiscountPrice: 13.00
    }
    ,
    {
        productId : 3,
        productTitle : "Vegetable",
        productImage : "Photo.png",
        productName : "Calabrese Broccoli",
        productPrice : 20.00,
        productDiscountPrice: 13.00
    },
    {
        productId : 4,
        productTitle : "Vegetable",
        productImage : "Photo.png",
        productName : "Calabrese Broccoli",
        productPrice : 20.00,
        productDiscountPrice: 13.00
    }
]

const productGrid = document.querySelector('.product-grid');

products.forEach(product => {
    ProductAdder(product);
});

function ProductAdder(product) {
    const productCard = document.createElement('div');
    productGrid.append(productCard);
    productCard.outerHTML = `
                <div class="product-cart">
                    <div class="protitle"><p>
                        ${product.productTitle}
                    </p></div>
                    <div class="proimage">
                        <img src="${product.productImage}" alt="">
                    </div>
                    <div class="prodesc">
                        <div class="pd-top"><p>${product.productName}</p></div>
                        <div class="pd-bottom">
                            <div class="pdbl"><span><s>$${product.productPrice}</s></span>$${product.productDiscountPrice}</div>
                            <div class="pdbr">
                                <div class="pd-star">
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                    <i class="fa-solid fa-star"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                `
}