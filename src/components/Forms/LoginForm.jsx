import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import style from "./Forms.module.css";

const LoginForm = ({ onOpenModal, handleError }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  let navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const auth = getAuth();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
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
        setEmail("");
        setPassword("");
      });
  };

  return (
    <form onSubmit={handleLogin}>
      <h1>Inicia sesión</h1>
      <p className={style.message}> Por favor inicia sesión para continuar </p>
      <label htmlFor="email">Correo electrónico</label>
      <input
        placeholder="email@example.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <label htmlFor="password">Contraseña</label>
      <input
        placeholder="******"
        value={password}
        onChange={(e) => setPassword(e.target.value)
        }
        type="password"
      />
      <button type="submit" className="mainButton">Ingresar</button>
    </form>
  );
};

export { LoginForm };
