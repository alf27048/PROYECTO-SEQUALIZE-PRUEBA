var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
  res.render('index', { title: 'Proyecto' });
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
