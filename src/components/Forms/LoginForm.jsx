import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { auth, signInWithEmailAndPassword } from "../../firebase/firebase";
import style from "./Forms.module.css";
import { UserContext } from "../../App";

const LoginForm = ({ onOpenModal, handleError }) => {
  const context = useContext(UserContext);

  let navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, context.email, context.password)
      .then((userCredential) => {
        const user = userCredential.user;
        context.setUser(user)
        if (user) {
          navigate("/home");
        }
      })
      .catch((error) => {
        onOpenModal(true);
        switch (error.code) {
          case "auth/user-not-found":
            handleError("No existe ningún usuario registrado con este email");
            break;
          case "auth/invalid-email":
            handleError("Proporcione una dirección de correo válida");
            break;
          case "auth/internal-error":
            handleError("El ingreso de contraseña es obligatorio");
            break;
          case "auth/wrong-password":
            handleError("La contraseña ingresada es incorrecta.");
            break;
          default:
            handleError("Algo ocurrió, vuelve a intentarlo");
            break;
        }
        context.setEmail("");
        context.setPassword("");
      });
  };

  return (
    <form onSubmit={handleLogin}>
      <h1>Inicia sesión</h1>
      <p className={style.message}> Por favor inicia sesión para continuar </p>
      <label htmlFor="email">Correo electrónico</label>
      <input
        placeholder="email@example.com"
        value={context.email}
        onChange={(e) => context.setEmail(e.target.value)}
      />
      <label htmlFor="password">Contraseña</label>
      <input
        placeholder="******"
        value={context.password}
        onChange={(e) => context.setPassword(e.target.value)}
        type="password"
      />
      <button type="submit" className="mainButton">
        Ingresar
      </button>
    </form>
  );
};

export { LoginForm };
