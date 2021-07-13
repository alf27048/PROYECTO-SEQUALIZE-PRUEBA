var express = require('express');
var router = express.Router();
const api = require('../api');
const db = require('../models');

/* GET home page. */
router.get('/', async (req, res) => {
  const product = await api.getProduct();
  console.log(product);

  res.render('index', { title: 'Proyecto', product });
  // res.send(product); // devuelve un JSON con la informacion
});

/* GET de Contacto */
router.get('/contacto', (req, res) => {
  res.render('pages/contacto');
});
/* GET de Nosotros */
router.get('/nosotros', (req, res) => {
  res.render('pages/nosotros');
});

router.get('/extra', async (req, res) => {
  const Extra = await api.getExtra();
  console.log(Extra);

  res.send(Extra); // devuelve un JSON con la informacion
});

router.get('/producto/:id', async (req, res) => {
  //console.log(req.params);
  const produc = await api.getProductById(req.params.id);
  //res.send(produc);
  res.render('pages/productos', { produc });  // ahi le envio la info
});

router.get('/buscar', async (req, res) => {
// Los datos de la URL vienen en un req.query
const product = await api.findProducByNombre(req.query.query);
res.render('index', { title: 'Resultado de búsqueda', product }); //uso el render de la home

//res.send(product);  // me muestra el json con lo que busqué

});
router.get('/agregar', (req, res) => {
  res.render('pages/agregar');
});



module.exports = router;
