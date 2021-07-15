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
router.get('/agregar', async (req, res) => {
  // conseguir el listado de autores y pasarlo al render
  const extra = await api.getExtra();
 
  res.render('pages/agregar', { extra });
});

// creamos la ruta atraves del metodo Pos para que se active con el formulario de agregar 
router.post('/agregar_proceso', async (req, res) => {
 // respetar aqui los nombres de los name de los input, nombre de los objetos
  const { nombre, descripcion, precio, imagen, disponible, extra } = req.body;
  // es igual a poner "const nombre = req.body.nombre..." 
  await api.addProduct(nombre, descripcion, precio, imagen, disponible, extra); //lo dejo sin const por que no lo uso
  const product = await api.getProduct();
  
  res.render('index', { title: 'Proyecto', product });
  // res.send(product); // devuelve un JSON con la informacion
});


  //res.send(produc);   //req.body trae la info del formulario en json
//});

router.get('/otro-listado', async (req, res) => {
  const extra = await api.getExtra();
  const produc = await api.getProduct();

  res.render('pages/otro-listado', { extra, produc });
});

router.get('/eliminar/:id', async (req, res) => {
  const affectedRows = await api.deleteProductById(req.params.id);
  if (affectedRows > 0) { //la respuesta de la query es la cantidad de lineas afectadas
    res.redirect('/');  //si todo salio bien redirijo a la home
  } else {
    res.send('Algo salió mal');
  }
});




module.exports = router;
