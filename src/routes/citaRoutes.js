const express = require('express');
const router = express.Router();
const citaController = require('../../controllers/citaController');

router.get('/', citaController.getAllCitas);
router.post('/', citaController.createCita);

module.exports = router;
