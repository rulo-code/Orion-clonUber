const joi = require('@hapi/joi');

const userIdSchema = joi.string().regex(/^[0-9]*$/);
const nombreSchema = joi.string().max(80);
const apellidoSchema = joi.string().max(80);
const correoSchema = joi.string().regex(/\S+@\S+\.\S+/);
const numeroSchema = joi.number()
const contrasenaSchema = joi.string().max(300);
const confirmarSchema = joi.string().max(300);



const createMovieSchema = {
  id: userIdSchema.required(),
  nombre: nombreSchema.required(),
  apellido: apellidoSchema.required(),
  correo: correoSchema.required(),
  numero: numeroSchema.required(),
  contraseña: contrasenaSchema.required(),
  validacion: confirmarSchema.required(),
 
};

const updateMovieSchema = {
  id: userIdSchema,
  nombre: nombreSchema,
  apellido: apellidoSchema,
  correo: correoSchema,
  numero: numeroSchema,
  contraseña: contrasenaSchema,
  validacion: confirmarSchema,
};

module.exports = {
  userIdSchema,
  createMovieSchema,
  updateMovieSchema
};