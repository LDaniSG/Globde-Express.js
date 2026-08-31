const Rol = require('../src/models/Rol');

const getAllRoles = async (req, res) => {
  try {
    const roles = await Rol.findAll();
    res.status(200).json(roles);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createRol = async (req, res) => {
  try {
    const { nombre, descripcion, activo } = req.body;
    const nuevoRol = await Rol.create({ nombre, descripcion, activo });
    res.status(201).json(nuevoRol);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getAllRoles,
  createRol,
};
