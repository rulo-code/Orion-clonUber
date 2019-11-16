import React, { useState } from 'react';
import { Link, navigate } from '@reach/router';
import { connect } from 'react-redux';
import { loginReguest } from '../actions';
import googleIcon from '../assets/static/googleIcon.png';
import facebookIcon from '../assets/static/facebookIcon.png';
import callToLogin from '../services/login';
import '../assets/styles/components/Login.scss';

const Login = (props) => {
  const [form, setValues] = useState({
    email: '',
    password: '',
    error: false,
  });
  const handleInput = (event) => {
    setValues({
      ...form,
      [event.target.name]: event.target.value,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    //* AGREGAR SERVICIO DE CONSULTA DE USUARIO
    callToLogin(form.email).then((response) => {
      const { data } = response;
      if (data.length > 0) {
        form.auth = true;
        form.error = false;
        navigate('/');
      } else {
        form.error = true;
      }
      props.loginReguest(form);
    }).catch((err) => { console.warn(err); });

  };
  const { error } = form;
  return (
    <div className='login'>
      <form className='login__form' onSubmit={handleSubmit}>
        <h2>Inicia Sesión</h2>
        <input
          name='email'
          onChange={handleInput}
          className='input'
          type='email'
          placeholder='Email'
        />
        <input
          name='password'
          onChange={handleInput}
          className='input'
          type='password'
          placeholder='password'
        />
        <button
          type='submit'
          className='btn'
        >
          Entrar
        </button>
        {(error) ? 'Usuario no encontrado' : null}
        <a href='#'>¿Olvidaste tu constraseña?</a>
      </form>
      <div className='login__redes'>
        <p>Inicia con :</p>
        <div className='redes-icons'>
          <div>
            <a href='#'>
              <img className='imgIcon' src={facebookIcon} alt='facebook' />
            </a>
          </div>
          <div>
            <a href='#'>
              <img className='imgIcon' src={googleIcon} alt='google' />
            </a>
          </div>
        </div>
        <div className='toSignup'>
          <p>¿No tienes una cuenta?</p>
          <Link className='signUp' to='/register'>
            Registrate !
          </Link>
        </div>
      </div>
    </div>
  );

};
const mapDispatchToProps = {
  loginReguest,
};
export default connect(null, mapDispatchToProps)(Login);
