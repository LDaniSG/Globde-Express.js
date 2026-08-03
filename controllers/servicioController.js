let servicios = [
  { id: 1, nombre: "Corte de cabello", precio: 25000, duracion_min: 30 },
  { id: 2, nombre: "Arreglo de barba", precio: 15000, duracion_min: 20 },
  { id: 3, nombre: "Corte + Barba", precio: 35000, duracion_min: 45 },
  { id: 4, nombre: "Tinte", precio: 40000, duracion_min: 60 },
  { id: 5, nombre: "Diseño de cejas", precio: 10000, duracion_min: 15 }
];

const getAllServicios = (req, res) => {
  res.status(200).json(servicios);
};

module.exports = {
  getAllServicios
};