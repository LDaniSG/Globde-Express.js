const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Servicio = require('./Servicio');

// Nota: id_cliente e id_barbero se guardan como referencia, pero no se
// validan contra las tablas clientes/barberos porque no hacen parte de
// este subconjunto de tablas trabajado en Express.js.
const Cita = sequelize.define('Cita', {
  id_cita: {
    type: DataTypes.BIGINT.UNSIGNED,
    primaryKey: true,
    autoIncrement: true,
  },
  codigo_reserva: {
    type: DataTypes.STRING(30),
    allowNull: false,
    unique: true,
  },
  id_cliente: {
    type: DataTypes.BIGINT.UNSIGNED,
    allowNull: false,
  },
  id_barbero: {
    type: DataTypes.BIGINT.UNSIGNED,
    allowNull: false,
  },
  id_servicio: {
    type: DataTypes.BIGINT.UNSIGNED,
    allowNull: false,
  },
  fecha: {
    type: DataTypes.DATEONLY,
    allowNull: false,
  },
  hora_inicio: {
    type: DataTypes.TIME,
    allowNull: false,
  },
  hora_fin: {
    type: DataTypes.TIME,
    allowNull: false,
  },
  estado: {
    type: DataTypes.ENUM('pendiente', 'confirmada', 'en_atencion', 'completada', 'cancelada', 'no_asistio'),
    allowNull: false,
    defaultValue: 'pendiente',
  },
  precio_total: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
    defaultValue: 0.00,
  },
  observaciones: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
}, {
  tableName: 'citas',
  timestamps: false,
});

Servicio.hasMany(Cita, { foreignKey: 'id_servicio', as: 'citas' });
Cita.belongsTo(Servicio, { foreignKey: 'id_servicio', as: 'servicio' });

module.exports = Cita;
