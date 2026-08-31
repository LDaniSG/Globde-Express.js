const Servicio = require('../src/models/Servicio');

const getAllServicios = async (req, res) => {
  try {
    const servicios = await Servicio.findAll();
    res.status(200).json(servicios);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createServicio = async (req, res) => {
  try {
    const { nombre, categoria, descripcion, precio, duracion_minutos, popular } = req.body;
    const nuevoServicio = await Servicio.create({
      nombre,
      categoria,
      descripcion,
      precio,
      duracion_minutos,
      popular,
    });
    res.status(201).json(nuevoServicio);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getAllServicios,
  createServicio,
};
