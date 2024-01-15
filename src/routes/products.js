const express = require('express');
const router = express.Router();
const {detail,example, dashboard,create,formCreate,formUpdate,update,productDelete} = require("../controllers/productsController");
/* GET home page. */
router
//Listar productos
.get('/dashboard', dashboard)

//Crear productos
.get('/formCreate', formCreate)
.post('/create', create)

//Ver productos
.get('/detail/:id', detail)

//Actualizar productos
.get('/formUpdate/:id',formUpdate)
.put('/update/:id', update)

//Borrar productos
.delete('/delete/:id', productDelete)

//Ejemplo para Mayco
.get('/example', example);

router.post('/add-product', (req, res) => {
    // Aquí puedes procesar la lógica para añadir un nuevo producto a tu sistema.
  
    // Después, registra la acción en el archivo de logs.
    const logMessage = `El usuario añadió un nuevo producto: ${req.body.productName}\n`;
  
    // Ajusta la ruta del archivo de logs según tu estructura.
    const logFilePath = path.join(__dirname, '../logs/userLogs.txt');
  
    // Registra la acción en userLogs.txt
    fs.appendFile(logFilePath, logMessage, (err) => {
      if (err) {
        console.error('Error al escribir en el archivo de registros:', err);
      }
    });
  
    res.send('Producto añadido correctamente');
  });


module.exports = router;