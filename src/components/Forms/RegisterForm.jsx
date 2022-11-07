import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  getAuth,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import style from "./Forms.module.css";

const RegisterForm = ({ onOpenModal, handleError }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  let navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        //const uid = user.uid
        if (user) {
          navigate("/login");
        }
      })
      .catch((error) => {
        onOpenModal(true);
        switch (error.code) {
          case "auth/email-already-in-use":
            handleError("Email en uso");
            break;
          case "auth/invalid-email":
            handleError("Proporcione una dirección de correo válida");
            break;
          case "auth/internal-error":
            handleError("El ingreso de contraseña es obligatorio");
            break;
          case "auth/weak-password":
            handleError("Tu contraseña debe tener al menos 6 caracteres");
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
    <form onSubmit={handleRegister}>
      <h1> Regístrate </h1>
      <p className={style.message}>Por favor registrate para iniciar sesión.</p>
      <label htmlFor="name">Nombre</label>
      <input
        placeholder="John Doe"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
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
        onChange={(e) => setPassword(e.target.value)}
      />
      <button className={style.buttonRegister} type="submit">
        Registrarme
      </button>
    </form>
  );
};


export { RegisterForm };
