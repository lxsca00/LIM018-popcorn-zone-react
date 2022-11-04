import React from "react";
import { LoginForm } from "../../components/Forms";

function Login() {
  return (
    <section>
      <LoginForm />
      <p>Ingresa con</p>
      <div>
        <button> Google </button>
        <button> Facebook </button>
      </div>
      <div>
        <p>¿No tienes cuenta?</p>
        <p>Regístrate</p>
      </div>
    </section>
  );
}
export { Login };
