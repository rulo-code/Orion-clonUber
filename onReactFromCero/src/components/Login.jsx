import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { loginReguest } from '../actions';
import '../assets/styles/components/Login.css';
import googleIcon from '../assets/static/googleIcon.png';
import facebookIcon from '../assets/static/facebookIcon.png';


const Login = (props) => {
  const [form, setValues] = useState({
    email: "",
    password: "",
  });
  const  handleInput = event => {
    setValues({
      ...form,
      [event.target.name]: event.target.value,
    });
  };
  const handleSubmit = event => {
    event.preventDefault();
    props.loginReguest(form);
    console.log(form);
    props.history.push('/');
  }
  return (
    <div className="container ">

      <div className="logo  flex">
        Logo
      </div>

      <form className="form  flex" onSubmit={handleSubmit}>
        <input
          name="email"
          onChange={handleInput}
          className="input" 
          type="email" 
          placeholder="Email"
        />
        <input
          name="password"
          onChange={handleInput}
          className="input" 
          type="password" 
          placeholder="password"
        />
        <button 
          type="submit" 
          className="btn" 
        >
          Iniciar
        </button>
        <a href="#">¿Olvidaste tu constraseña?</a>
      </form>

      <div className="redes  flexColumn">

        <div className=" flex redes__container">
          <div>
            <a href="#">
              <img className="google" src={facebookIcon} alt="facebook"/>
            </a>
          </div>
          <div >
            <a href="#">
              <img className="google" src={googleIcon} alt="google"/>
            </a>
          </div>
        </div>

        <div className=" flex register ">
          <p>¿No tienes una cuenta?</p>
          <Link className="signUp" to="/register">
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
