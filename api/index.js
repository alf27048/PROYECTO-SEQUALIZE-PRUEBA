const db = require('../models');

const getProduct = async () => {
    const product = await db.producto.findAll()
        .then(result => {
            return result;
        });

    return product;
}

module.exports = {
    getProduct
}