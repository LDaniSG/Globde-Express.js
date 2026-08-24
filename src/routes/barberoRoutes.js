const express = require('express');
const authCheck = require('../middlewares/authCheck');
const router = express.Router();

// Ruta privada - solo barbero
router.get('/barbero', authCheck('barbero'), (req, res) => {
  res.json({
    mensaje: 'Bienvenido al panel del barbero'
  });
});

module.exports = router;