const Cita = require('../src/models/Cita');
const Servicio = require('../src/models/Servicio');

const getAllCitas = async (req, res) => {
  try {
    const citas = await Cita.findAll({ include: { model: Servicio, as: 'servicio' } });
    res.status(200).json(citas);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createCita = async (req, res) => {
  try {
    const {
      codigo_reserva,
      id_cliente,
      id_barbero,
      id_servicio,
      fecha,
      hora_inicio,
      hora_fin,
      precio_total,
    } = req.body;

    const servicio = await Servicio.findByPk(id_servicio);
    if (!servicio) {
      return res.status(404).json({ mensaje: 'Servicio no encontrado' });
    }

    const nuevaCita = await Cita.create({
      codigo_reserva,
      id_cliente,
      id_barbero,
      id_servicio,
      fecha,
      hora_inicio,
      hora_fin,
      precio_total,
    });
    res.status(201).json(nuevaCita);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getAllCitas,
  createCita,
};
