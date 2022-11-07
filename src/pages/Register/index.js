import React, { useState } from "react";
import style from "./Register.module.css"
import { RegisterForm } from "../../components/Forms/RegisterForm";
import { Modal } from "../../components/Modal";

function Register() {

  const [modal, setModal] = useState(false)
  const [error, setError] = useState("este es un error")

  return (
    <section className={style.register}>
      <RegisterForm handleError={setError} onOpenModal={setModal}/>
      <div className={style.goLogin}>
        <p>¿Ya tienes cuenta?</p>
        <a href="/login">Inicia sesión aquí</a>
      </div>
      <Modal state={modal} onChangeState={setModal} text={error}/>
    </section>
  );
}
export { Register };
