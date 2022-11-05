import React from "react";
import style from "./Welcome.module.css";

function Welcome() {
  return (
    <section className={style.welcome}>
      <img src="#" alt="popcorn-zone" />
      <h1>PopcornZone</h1>
      <p>
        ¡Bienvenido a la red social más popular de los amantes de películas y
        series!
      </p>
      <p>
        Comparte opiniones, encuentra recomendaciones y reúnete con tus amigos
        para maratonear juntos.
      </p>
      <p>Comienza ahora</p>
      {/*Enfasis en botón de registro*/}
      <div className={style.welcomeButtonContainer}>
        <button>Registrate</button>
        <button>Inicia sesión</button>
      </div>
    </section>
  );
}
export { Welcome };
