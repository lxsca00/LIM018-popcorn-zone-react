import React, { useContext, useState } from "react";
import { LoginForm } from "../../components/Forms/LoginForm";
import style from "./Login.module.css";
import login from "../../assets/login.svg";
import { Modal, UpcomingModal } from "../../components/Modal";
import {
  db,
  auth,
  signInWithPopup,
  provider,
  setDoc,
  doc,
} from "../../firebase/firebase";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../App";

function Login() {
  const context = useContext(UserContext);
  let navigate = useNavigate();

  const handleGoogleLogin = (e) => {
    e.preventDefault();

    signInWithPopup(auth, provider)
      .then(async (result) => {
        const user = result.user;
        context.setUser(user);
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
        console.error(error);
      });
  };

  const [modal, setModal] = useState(false);
  const [upcomingModal, setUpcomingModal] = useState(false);
  const [error, setError] = useState("este es un error");

  return (
    <section className={style.login}>
      <div className={style.loginContainer}>
        <LoginForm handleError={setError} onOpenModal={setModal} />
        <p className={style.anotherSignIn}>Ingresa con</p>
        <div className={style.buttonContainer}>
          <button className={style.socialMedia} onClick={handleGoogleLogin}>
            <i className="fa-brands fa-google"></i>
            <p>Google</p>
          </button>
          <button
            className={style.socialMedia}
            onClick={() => setUpcomingModal(true)}
          >
            <i className="fa-brands fa-facebook-f"></i>
            <p>Facebook</p>
          </button>
        </div>
        <div className={style.goRegister}>
          <p>¿No tienes cuenta?</p>
          <a href="/register">Regístrate aquí</a>
        </div>
      </div>

      <img src={login} alt="login" />
      <Modal state={modal} onChangeState={setModal}>
        <p>{error}</p>
      </Modal>
      <UpcomingModal state={upcomingModal} onChangeState={setUpcomingModal} />
    </section>
  );
}
export { Login };
