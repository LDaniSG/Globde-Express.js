const express = require('express');
const authCheck = require('../middlewares/authCheck');
const router = express.Router();

// Ruta privada - solo admin
router.get('/admin', authCheck('admin'), (req, res) => {
  res.json({
    mensaje: 'Bienvenido al panel de administración'
  });
});

module.exports = router;