import React, { useState } from 'react';
import { connect } from 'react-redux';
import { Link } from '@reach/router';
import { registerReguest } from '../actions';

import '../assets/styles/components/Register.scss';
import googleIcon from '../assets/static/googleIcon.png';
import facebookIcon from '../assets/static/facebookIcon.png';
import RegisterService from '../services/register';

const Register = (props) => {
  const [form, setValues] = useState({
    name: '',
    lastName: '',
    email: '',
    mobileNumber: '',
    password: '',
    confirmPassword: '',
  });
  const handleInput = (event) => {
    setValues({
      ...form,
      [event.target.name]: event.target.value,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = {
      'id': form.dni,
      'nombre': form.name,
      'apellido': form.lastName,
      'correo': form.email,
      'numero': form.mobileNumber,
      'contraseña': form.password,
      'validacion': form.password,
    };
    RegisterService(data)
      .then((response) => {
        if (response.status === 'ok') {
          console.log('Usuario guardado');
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className='register'>
      <form
        className='register__form'
        onSubmit={handleSubmit}
      >
        <h2>
Crea una cuenta
        </h2>
        <div className='fullName'>

          <input
            name='name'
            onChange={handleInput}
            className='input'
            type='text'
            placeholder='Nombre'
          />
          <input
            name='lastName'
            onChange={handleInput}
            className='input'
            type='text'
            placeholder='Apellido'
          />
        </div>
        <input
          name='email'
          onChange={handleInput}
          className='input'
          type='text'
          placeholder='Correo'
        />
        <input
          name='dni'
          onChange={handleInput}
          className='input'
          type='phone'
          placeholder='DNI'
        />

        <input
          name='mobileNumber'
          onChange={handleInput}
          className='input'
          type='number'
          placeholder='Numero Celular'
        />
        <input
          name='password'
          onChange={handleInput}
          className='input'
          type='password'
          placeholder='Contraseña'
        />
        <input
          name='confirmPass'
          onChange={handleInput}
          className='input'
          type='password'
          placeholder='Confirmar contraseña'
        />
        <div className='terms'>
          <input
            type='checkbox'
            name='vehicle1'
            value='Bike'
          />
    Terminos y Condiciones
        </div>
        <button
          type='submit'
          className='btn'
          href='/'
        >
Registrate
        </button>
      </form>
      <div className='register__redes'>
        <p>
Registrate con:
        </p>
        <div className='icons'>
          <div>
            <img
              className='imgIcon'
              src={facebookIcon}
              alt='facebook'
            />
          </div>
          <div>
            <img
              className='imgIcon'
              src={googleIcon}
              alt='google'
            />
          </div>
        </div>
        <div className='toLogin'>
          <p>
¿Ya tienes una cuenta ?
          </p>
          <Link
            className='signIn'
            to='/login'
          >
    Inicia!
          </Link>
        </div>
      </div>
    </div>
  );

};
const mapDispatchToProps = {
  registerReguest,
};
export default connect(null, mapDispatchToProps)(Register);
