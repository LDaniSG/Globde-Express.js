const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Servicio = sequelize.define('Servicio', {
  id_servicio: {
    type: DataTypes.BIGINT.UNSIGNED,
    primaryKey: true,
    autoIncrement: true,
  },
  nombre: {
    type: DataTypes.STRING(120),
    allowNull: false,
    unique: true,
    validate: {
      notEmpty: { msg: 'El nombre del servicio es obligatorio' },
    },
  },
  categoria: {
    type: DataTypes.ENUM('Cortes', 'Barba', 'Combos', 'Tratamientos', 'Infantil'),
    allowNull: false,
    defaultValue: 'Cortes',
  },
  descripcion: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  precio: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
    validate: {
      min: 0.01,
    },
  },
  duracion_minutos: {
    type: DataTypes.SMALLINT.UNSIGNED,
    allowNull: false,
    validate: {
      min: 1,
    },
  },
  popular: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  activo: {
    type: DataTypes.BOOLEAN,
    defaultValue: true,
  },
}, {
  tableName: 'servicios',
  timestamps: false,
});

module.exports = Servicio;
