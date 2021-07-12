const db = require('../models');

const getProduct = async () => {
    const product = await db.producto.findAll({ include: db.extra})
        .then(result => {
            return result;
        });

    return product;
}
const getExtra = async () => {
    const Extra = await db.extra.findAll()
        .then(result => {
            return result;
        });

    return Extra;
}

const getProductById = async (id) => {  //id es el dato que envio en la URL
    const produc = await db.producto.findByPk(id, {include: db.extra}) //find by primary Key, dame este dato que tiene este id
           // hace una conexion a la otra tabla y me trae los datos extras
        .then(result => {
            return result;
        });
        return produc;
}



module.exports = {
    getProduct,
    getExtra,
    getProductById
}