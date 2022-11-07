import React, {useState} from "react";
import { LoginForm } from "../../components/Forms";
import style from "./Login.module.css"
import login from "../../assets/login.svg"
import { Modal } from "../../components/Modal";

function Login() {

  const [modal, setModal] = useState(false)
  const [error, setError] = useState("este es un error")

  return (
    <section className={style.login}>
      <LoginForm handleError={setError} onOpenModal={setModal}/>
      <p className={style.anotherSignIn}>Ingresa con</p>
      <div className={style.buttonContainer}>
        <button> Google </button>
        <button> Facebook </button>
      </div>
      <div className={style.goRegister}>
        <p>¿No tienes cuenta?</p>
        <a href="/register">Regístrate aquí</a>
      </div>
      <img src={login} alt="login"/>
      <Modal state={modal} onChangeState={setModal} text={error}/>
    </section>
  );
}
export { Login };
