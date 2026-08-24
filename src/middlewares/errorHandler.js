const errorHandler = (err, req, res, next) => {
  console.error('❌ Error capturado:', err.message);
  const statusCode = err.status || 500;
  res.status(statusCode).json({
    exito: false,
    error: {
      mensaje: err.message || 'Error interno del servidor',
      codigo: statusCode
    }
  });
};
module.exports = errorHandler;