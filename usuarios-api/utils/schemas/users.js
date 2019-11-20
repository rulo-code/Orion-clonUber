const joi = require('@hapi/joi');

const userIdSchema = joi.string().regex(/^[0-9]{12}$/);
const nombreSchema = joi.string().max(80);
const apellidoSchema = joi.string().max(80);
const numeroSchema = joi.number()
const contrasenaSchema = joi.string().max(300);
const confirmarSchema = joi.string().max(300);



const createMovieSchema = {
  id: userIdSchema.required(),
  nombre: nombreSchema.required(),
  apellido: apellidoSchema.required(),
  numero: numeroSchema.required(),
  contraseña: contrasenaSchema.required(),
  validacion: confirmarSchema.required(),
 
};

const updateMovieSchema = {
  id: userIdSchema.required(),
  nombre: nombreSchema.required(),
  apellido: apellidoSchema.required(),
  numero: numeroSchema.required(),
  contraseña: contrasenaSchema.required(),
  validacion: confirmarSchema.required(),
};

module.exports = {
  userIdSchema,
  createMovieSchema,
  updateMovieSchema
};