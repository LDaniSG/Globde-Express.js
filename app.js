const express = require('express');
const sequelize = require('./src/config/database');
const logger = require('./src/middlewares/logger');
const errorHandler = require('./src/middlewares/errorHandler');
const publicRoutes = require('./src/routes/publicRoutes');
const adminRoutes = require('./src/routes/adminRoutes');
const barberoRoutes = require('./src/routes/barberoRoutes');
const clienteRoutes = require('./src/routes/clienteRoutes');
const rolRoutes = require('./src/routes/rolRoutes');
const usuarioRoutes = require('./src/routes/usuarioRoutes');
const servicioRoutes = require('./src/routes/servicioRoutes');
const citaRoutes = require('./src/routes/citaRoutes');
const app = express();

app.use(express.json());
app.use(logger);

app.use('/', publicRoutes);
app.use('/', adminRoutes);
app.use('/', barberoRoutes);
app.use('/', clienteRoutes);
app.use('/roles', rolRoutes);
app.use('/usuarios', usuarioRoutes);
app.use('/servicios', servicioRoutes);
app.use('/citas', citaRoutes);

app.use((req, res) => {
  res.status(404).json({
    mensaje: 'Ruta no encontrada'
  });
});

app.use(errorHandler);

app.listen(3000, async () => {
  console.log('Servidor ejecutándose en http://localhost:3000');
  try {
    await sequelize.authenticate();
    console.log('Conexión con MySQL establecida correctamente.');
  } catch (error) {
    console.error('Error al conectar con MySQL:', error);
  }
});