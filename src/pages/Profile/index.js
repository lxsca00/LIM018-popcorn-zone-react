import React from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "../../components/Header";
import style from "./Profile.module.css"

function Profile() {

  let navigate = useNavigate();

  return (
    <section className={style.profile}>
      <Header/>
      <h1>Este es el profile de alguien</h1>
      <div className={style.pic}></div>
      <p>Fulanito Pérez</p>
      <p>fulano@gmail.com</p>
      <div className={style.userLocation}>
        <p>Worldwide</p>
      </div>
      <div>
        <p>Aquí va la descripción</p>
      </div>
      <section>
        <div>
          <p>Aquí van las preferencias</p>
        </div>
        <div>
          <p>Aquí van los generos preferidos</p>
        </div>
      </section>
      <button>Editar perfil</button>
      <button onClick={() => navigate("/home")}>Regresar al muro</button>
    </section>
  );
}
export { Profile };
