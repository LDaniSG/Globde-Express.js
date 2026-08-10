const express = require('express');
const router = express.Router();
const servicioController = require('../controllers/servicioController');

router.get('/', servicioController.getAllServicios);

router.get('/:idCategoria/:idServicio', (req, res) => {
    const { idCategoria, idServicio } = req.params;
    
    const { estado, orden } = req.query;
    
    if (!idCategoria || !idServicio) {
        return res.status(400).json({ error: "Faltan parámetros dinámicos obligatorios" });
    }

    if (!estado || !orden) {
        return res.status(400).json({ error: "Se requieren los query params: 'estado' y 'orden'" });
    }
    
    if (isNaN(idCategoria) || isNaN(idServicio)) {
        return res.status(400).json({ error: "Los IDs deben ser numéricos" });
    }
    
    try {
        res.status(200).json({
            mensaje: "Ruta procesada correctamente",
            params: { idCategoria, idServicio },
            query: { estado, orden }
        });
    } catch (error) {
        res.status(500).json({ error: "Error interno del servidor" });
    }
});

module.exports = router;
