

import React, { useState } from "react";
import { validaciones } from "./validaciones";
import './formulario.css'

const Formulario = ({ login }) => {
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = event => {
    setUserData({
      ...userData,
      [event.target.name]: event.target.value,
    });
    
  };

  const handleSubmit = event => {
    event.preventDefault();
    const errors = validaciones(userData);
console.log(errors)
    if (Object.keys(errors).length === 0) {
      login(userData);
    } else {
      setErrors(errors);
    }

  };

  return (
    <div className="form">
      <div className="icon"></div>
      <form className="loginform" onSubmit={handleSubmit}>
        <div className="title">Bienvenido</div>
        <div className="container-inputs">
          <div>
            <label htmlFor="email" className="span">Email</label>
            <div className="inputbox">
            {/* <input
                type="email"
                className="inputLogin"
                onChange={handleChange}
                value={userData.email}
                name="email"
              />
              <span>Email</span>
              <i></i> */}
              <input
                required="required"
                type="email"
                className="inputLogin"
                onChange={handleChange}
                value={userData.email}
                name="email"
                autoComplete="off"
              />
            </div>
            {errors.email && <div style={{ color: "red" }}>{errors.email}</div>}
            {errors.emailValido && (
              <div style={{ color: "red" }}>{errors.emailValido}</div>
            )}
            {errors.emailCaracteres && (
              <div style={{ color: "red" }}>{errors.emailCaracteres}</div>
            )}
          </div>
          <div>
            <label htmlFor="password" className="placeholderInput">Password</label>
            <div className="inputbox">
              {/* <input
                type="password"
                className="inputLogin"
                onChange={handleChange}
                value={userData.password}
                name="password"
              />
              <span>Password</span>
              <i></i> */}
              <input
                required="required"
                type="password"
                className="inputLogin"
                onChange={handleChange}
                value={userData.password}
                name="password"
                autoComplete="off"
              />
            </div>
            {errors.password && (
              <div style={{ color: "red" }}>{errors.password}</div>
            )}
            {errors.passwordLong && (
              <div style={{ color: "red" }}>{errors.passwordLong}</div>
            )}
          </div>
        </div>

        <button className="button-confirm" type="submit">
          Ingresar
        </button>
      </form>
    </div>
  );
};

export default Formulario;