const express = require('express');
const authCheck = require('../middlewares/authCheck');
const router = express.Router();

// Ruta privada - solo cliente
router.get('/cliente', authCheck('cliente'), (req, res) => {
  res.json({
    mensaje: 'Bienvenido a tu panel de cliente'
  });
});

module.exports = router;