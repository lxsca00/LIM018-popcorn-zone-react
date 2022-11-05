import React from "react";
import { LoginForm } from "../../components/Forms";
import style from "./Login.module.css"

function Login() {
  return (
    <section className={style.login}>
      <LoginForm />
      <p>Ingresa con</p>
      <div>
        <button> Google </button>
        <button> Facebook </button>
      </div>
      <div>
        <p>¿No tienes cuenta?</p>
        <p>Regístrate aquí</p>
      </div>
    </section>
  );
}
export { Login };
