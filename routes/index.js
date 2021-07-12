var express = require('express');
var router = express.Router();
const api = require('../api');

/* GET home page. */
router.get('/', async (req, res) => {
  const product = await api.getProduct();
  console.log(product);

  //res.render('index', { title: 'Proyecto' });
  res.send(product); // devuelve un JSON con la informacion
});

/* GET de Contacto */
router.get('/contacto', (req, res) => {
  res.render('pages/contacto');
});
/* GET de Nosotros */
router.get('/nosotros', (req, res) => {
  res.render('pages/nosotros');
});

module.exports = router;
