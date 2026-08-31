const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Rol = require('./Rol');

const Usuario = sequelize.define('Usuario', {
  id_usuario: {
    type: DataTypes.BIGINT.UNSIGNED,
    primaryKey: true,
    autoIncrement: true,
  },
  id_rol: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: false,
  },
  nombre: {
    type: DataTypes.STRING(120),
    allowNull: false,
    validate: {
      notEmpty: { msg: 'El nombre es obligatorio' },
    },
  },
  correo: {
    type: DataTypes.STRING(180),
    allowNull: false,
    unique: true,
    validate: {
      isEmail: { msg: 'Debe ingresar un correo válido' },
    },
  },
  telefono: {
    type: DataTypes.STRING(25),
    allowNull: true,
  },
  contrasena_hash: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  activo: {
    type: DataTypes.BOOLEAN,
    defaultValue: true,
  },
}, {
  tableName: 'usuarios',
  timestamps: false,
});

// Un rol puede tener muchos usuarios
Rol.hasMany(Usuario, { foreignKey: 'id_rol', as: 'usuarios' });
Usuario.belongsTo(Rol, { foreignKey: 'id_rol', as: 'rol' });

module.exports = Usuario;
