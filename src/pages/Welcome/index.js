import React from "react";
import { useNavigate } from "react-router-dom";
import style from "./Welcome.module.css";
import cine from "../../assets/communication.svg";

function Welcome() {
  let navigate = useNavigate();

  return (
    <section className={style.welcome}>
      <img src={cine} alt="popcorn-zone" />
      <div className={style.dotContainer}>
        <div className={style.dot}></div>
        <div className={style.dot}></div>
        <div className={style.dot}></div>
      </div>
      <h1>PopcornZone</h1>
      <p className={style.message}>
        ¡Bienvenido a la red social más popular de los amantes de películas y
        series!
      </p>
      <p className={style.message}>
        Comparte opiniones, encuentra recomendaciones y reúnete con tus amigos
        para maratonear juntos.
      </p>
      <p className={style.startNow}> Comienza ahora</p>
      {/*Enfasis en botón de registro*/}
      <div className={style.welcomeButtonContainer}>
        <button
          className={style.enphasisButton}
          onClick={() => navigate("/register")}
        >
          Registrate
        </button>
        <button onClick={() => navigate("/login")}>Inicia sesión</button>
      </div>
    </section>
  );
}
export { Welcome };
