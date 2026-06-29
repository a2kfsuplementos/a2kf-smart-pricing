function normalizeProduct(product) {

    return {

        sku: product.sku,

        name: product.name,

        brand: product.brand,

        category: product.category,

        price: Number(product.price),

        image: product.image,

        url: product.url

    };

}

module.exports = normalizeProduct;
