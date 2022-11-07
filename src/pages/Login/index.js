import React, { useState } from "react";
import { LoginForm } from "../../components/Forms/LoginForm";
import style from "./Login.module.css";
import login from "../../assets/login.svg";
import { Modal } from "../../components/Modal";

import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useNavigate } from "react-router-dom";



function Login() {

  let navigate = useNavigate();

  const handleGoogleLogin = (e) => {
    e.preventDefault();
    const auth = getAuth();
    const provider = new GoogleAuthProvider();
    
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // ...
        console.log("se logeo", user);
        if (user) {
          navigate("/home");
        }
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
        console.log(errorCode, errorMessage);
      });
  };

  const [modal, setModal] = useState(false);
  const [error, setError] = useState("este es un error");

  return (
    <section className={style.login}>
      <LoginForm handleError={setError} onOpenModal={setModal} />
      <p className={style.anotherSignIn}>Ingresa con</p>
      <div className={style.buttonContainer}>
        <button onClick={handleGoogleLogin}>
        <i className="fa-brands fa-google"></i>
        </button>
        {/*Add a upcoming function modal */}
        <button>
        <i className="fa-brands fa-facebook-f"></i>
        </button>
      </div>
      <div className={style.goRegister}>
        <p>¿No tienes cuenta?</p>
        <a href="/register">Regístrate aquí</a>
      </div>
      <img src={login} alt="login" />
      <Modal state={modal} onChangeState={setModal} text={error} />
    </section>
  );
}
export { Login };
