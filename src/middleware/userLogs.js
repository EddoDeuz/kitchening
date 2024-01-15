// middlewares/userLogs.js
const fs = require('fs');
const path = require('path');

const logFilePath = path.join(__dirname, '../logs/userLogs.txt');

const userLogsMiddleware = (req, res, next) => {
  const logMessage = `El usuario ingresó a la ruta: ${req.originalUrl}\n`;

  // Registra la ruta en userLogs.txt
  fs.appendFile(logFilePath, logMessage, (err) => {
    if (err) {
      console.error('Error al escribir en el archivo de registros:', err);
    }
  });

  next();
};

module.exports = userLogsMiddleware;
