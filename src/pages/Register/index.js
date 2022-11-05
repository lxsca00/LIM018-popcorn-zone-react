import React from "react";
import style from "./Register.module.css"
import { RegisterForm } from "../../components/Forms";

function Register() {
  return (
    <section className={style.register}>
      <RegisterForm/>
      <div>
        <p>¿Ya tienes cuenta?</p>
        {/*Revisar react router aca*/}
        <p>Inicia sesión aquí</p>
      </div>
    </section>
  );
}
export { Register };
