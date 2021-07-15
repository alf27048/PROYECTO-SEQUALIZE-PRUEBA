const { Op } = require('sequelize');    //traigo la parte de Op que me permite hacer querys avanzadas
const db = require('../models');


const getProduct = async () => {
    const product = await db.producto.findAll({ include: db.extra})
        .then(result => {
            return result;
        });

    return product;
}
const getExtra = async () => {
    const Extra = await db.extra.findAll({ include: db.producto })
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

const findProducByNombre = async (query) => {   //recibo el termino de busqueda que insertó el usuario en el formulario y  lo guardo en query
    const product =await db.producto.findAll({
        where: {
            nombre: {
                [Op.substring]: query   //[Op.substring]: LIKE = "%dato%"
            }
        },
        include: db.extra
    }).then(result => {
        return result;
    });
    return product;
}
 const addProduct = async (nombre, descripcion, precio, imagen, disponible, extraId) => {
    // En el create, respetamos los nombres y el orden de las columnas de la tabla producto 
    const produc = await db.producto.create({
         nombre,
         descripcion,
         precio,
         imagen,
         disponible,
         extraId
     });

     return produc;

 }

 const deleteProductById = async (idProducto) => {
    const product = await db.producto.destroy({
        where:{
            id: idProducto
        }
    });

    return product;
}



module.exports = {
    getProduct,
    getExtra,
    getProductById,
    findProducByNombre,
    addProduct,
    deleteProductById
}