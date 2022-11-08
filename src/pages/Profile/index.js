import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "../../components/Header";
import { Modal } from "../../components/Modal";
import style from "./Profile.module.css";
import avatar from "../../assets/avatar.png";

function Profile() {
  const [modal, setModal] = useState(false)

  let navigate = useNavigate();

  return (
    <section className={style.profile}>
      <Header />
      <div className={style.pic}>
        <img src={avatar} alt="profile" />
      </div>
      <p>Fulanito Pérez</p>
      <p className={style.emailUser}>fulano@gmail.com</p>
      <div className={style.userLocation}>
        <i className="fa-solid fa-location-dot"></i>
        <p>Worldwide</p>
      </div>
      <div className={style.containerDescription}>
        <p>Aquí va la descripciónAquí va la descripciónAquí va la descripciónAquí va la descripción.</p>
      </div>
      <section className={style.info}>
        <div className={style.infoContainer}>
          <p>Me gusta ver: </p>
          <p>Aquí van las preferencias
          </p>
        </div>
        <div className={style.infoContainer}>
          <p>Mis generos favoritos: </p>
          <p>Aquí van los géneros</p>
        </div>
      </section>
      <div className={style.buttonContainer}>
        <button onClick={() => setModal(true)}>Editar perfil</button>
      <button onClick={() => navigate("/home")}>Volver al muro</button>
      </div>
      
      <Modal text={"Modal para editar"} state={modal} onChangeState={setModal}></Modal>
    </section>
  );
}
export { Profile };
