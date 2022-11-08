import React, { useState } from "react";
import { LoginForm } from "../../components/Forms/LoginForm";
import style from "./Login.module.css";
import login from "../../assets/login.svg";
import { Modal } from "../../components/Modal";

import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { db } from "../../firebase/firebase";
import { auth } from "../../firebase/firebase";
import { useNavigate } from "react-router-dom";
import { setDoc, doc } from "firebase/firestore";

function Login() {
  let navigate = useNavigate();

  const handleGoogleLogin = (e) => {
    e.preventDefault();
    const provider = new GoogleAuthProvider();

    signInWithPopup(auth, provider)
      .then(async (result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        const uid = user.uid;
        if (user) {
          const userRef = doc(db, "users", uid);
          setDoc(
            userRef,
            { name: user.displayName, email: user.email, photo: user.photoURL },
            { merge: true }
          );
          navigate("/home");
        }
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
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
