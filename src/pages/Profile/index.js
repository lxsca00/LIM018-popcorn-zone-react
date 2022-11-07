import React from "react";
import { Header } from "../../components/Header";
import style from "./Profile.module.css"

function Profile() {
  return (
    <section className={style.profile}>
      <Header/>
      <h1>Este es el profile de alguien</h1>
      <div className={style.pic}></div>
      <p>Fulanito Pérez</p>
      <p>fulano@gmail.com</p>
      
      <button>Editar perfil</button>
      <button>Regresar al muro</button>
    </section>
  );
}
export { Profile };
