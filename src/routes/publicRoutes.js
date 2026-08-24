const express = require('express');
const router = express.Router();

// Ruta pública - Landing
router.get('/', (req, res) => {
  res.json({
    mensaje: 'Bienvenido a Globde'
  });
});

// Ruta pública - Login
router.post('/login', (req, res) => {
  res.json({
    mensaje: 'Inicio de sesión'
  });
});

// Ruta pública - Registro
router.post('/registro', (req, res) => {
  res.json({
    mensaje: 'Registro de usuario'
  });
});

module.exports = router;