const express = require('express');
const router = express.Router();
const servicioController = require('../controllers/servicioController');

// Ruta original
router.get('/', servicioController.getAllServicios);

// NUEVA RUTA: Cumpliendo con Actividad 3
// Estructura: /servicios/:idCategoria/:idServicio?estado=activo&orden=asc
router.get('/:idCategoria/:idServicio', (req, res) => {
    // 1. Captura de 2 parámetros dinámicos
    const { idCategoria, idServicio } = req.params;

    // 2. Captura de 2 parámetros de consulta
    const { estado, orden } = req.query;

    // 3. Validaciones básicas
    if (!idCategoria || !idServicio) {
        return res.status(400).json({ error: "Faltan parámetros dinámicos obligatorios" });
    }

    if (!estado || !orden) {
        return res.status(400).json({ error: "Se requieren los query params: 'estado' y 'orden'" });
    }

    // Validación numérica (opcional, si los IDs deben ser números)
    if (isNaN(idCategoria) || isNaN(idServicio)) {
        return res.status(400).json({ error: "Los IDs deben ser numéricos" });
    }

    // Aquí podrías llamar a una función de tu controlador, 
    // pero por ahora devolvemos una respuesta confirmando la recepción
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