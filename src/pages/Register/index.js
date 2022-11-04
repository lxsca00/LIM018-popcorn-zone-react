import React from "react";
import { RegisterForm } from "../../components/Forms";

function Register() {
  return (
    <section>
      <RegisterForm/>
      <div>
        <p>¿Ya tienes cuenta?</p>
        {/*Revisar react router aca*/}
        <p>Inicia sesión</p>
      </div>
    </section>
  );
}
export { Register };
