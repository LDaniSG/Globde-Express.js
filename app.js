const express = require('express');
const logger = require('./src/middlewares/logger');
const errorHandler = require('./src/middlewares/errorHandler');
const publicRoutes = require('./src/routes/publicRoutes');
const adminRoutes = require('./src/routes/adminRoutes');
const barberoRoutes = require('./src/routes/barberoRoutes');
const clienteRoutes = require('./src/routes/clienteRoutes');
const app = express();

app.use(express.json());
app.use(logger);

app.use('/', publicRoutes);
app.use('/', adminRoutes);
app.use('/', barberoRoutes);
app.use('/', clienteRoutes);

app.use((req, res) => {
  res.status(404).json({
    mensaje: 'Ruta no encontrada'
  });
});

app.use(errorHandler);

app.listen(3000, () => {
  console.log('Servidor ejecutándose en http://localhost:3000');
});