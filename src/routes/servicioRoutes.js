const express = require('express');
const router = express.Router();
const servicioController = require('../../controllers/servicioController');

router.get('/', servicioController.getAllServicios);
router.post('/', servicioController.createServicio);

module.exports = router;
