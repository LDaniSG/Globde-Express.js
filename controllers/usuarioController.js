const Usuario = require('../src/models/Usuario');
const Rol = require('../src/models/Rol');

const getAllUsuarios = async (req, res) => {
  try {
    const usuarios = await Usuario.findAll({ include: { model: Rol, as: 'rol' } });
    res.status(200).json(usuarios);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createUsuario = async (req, res) => {
  try {
    const { id_rol, nombre, correo, telefono, contrasena_hash } = req.body;

    const rol = await Rol.findByPk(id_rol);
    if (!rol) {
      return res.status(404).json({ mensaje: 'Rol no encontrado' });
    }

    const nuevoUsuario = await Usuario.create({
      id_rol,
      nombre,
      correo,
      telefono,
      contrasena_hash,
    });
    res.status(201).json(nuevoUsuario);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getAllUsuarios,
  createUsuario,
};
