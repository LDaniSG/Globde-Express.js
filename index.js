const express = require('express');
const servicioRoutes = require('./routes/servicioRoutes');

const app = express();
const PORT = 3000;

app.use(express.json());
app.use('/servicios', servicioRoutes);

app.listen(PORT, () => {
  console.log(`Servidor en http://localhost:${PORT}`);
});
