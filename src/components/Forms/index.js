import React from "react";
import style from "./Forms.module.css"

const RegisterForm = () => {
  return (
    <form>
      <h1> Regístrate </h1>
      <p> Por favor registrate para iniciar sesión </p>
      <label htmlFor="name">Nombre</label>
      <input placeholder="John Doe"/>
      <label htmlFor="email">Correo electrónico</label>
      <input placeholder="email@example.com"/>
      <label htmlFor="password">Contraseña</label>
      <input placeholder="password"/>
      <button type="submit">Registrarme</button>
    </form>
  );
};

const LoginForm = () => {
  return (
    <form>
      <h1>Inicia sesión</h1>
      <p> Por favor inicia sesión para continuar </p>
      <label htmlFor="email">Correo electrónico</label>
      <input placeholder="email@example.com"/>
      <label htmlFor="password">Contraseña</label>
      <input placeholder="password"/>
      <button type="submit">Ingresar</button>
    </form>
  );
};

export { RegisterForm, LoginForm };
