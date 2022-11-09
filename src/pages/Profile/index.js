import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase/firebase";
import { Header } from "../../components/Header";
import { Modal } from "../../components/Modal";
import style from "./Profile.module.css";
//import avatar from "../../assets/avatar.png";
import { UserInfo } from "../../components/UserInfo";
import { EditProfile } from "../../components/Forms/EditProfile";

function Profile() {
  const [modal, setModal] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const uid = auth.currentUser.uid;

  //Creo que ya se debe usar useContext

  let navigate = useNavigate();

  return (
    <section className={style.profile}>
      <Header />
      {/*<div className={style.pic}>
        <img src={avatar} alt="profile" />
      </div>
      <p>Fulanito Pérez</p>
  <p className={style.emailUser}>fulano@gmail.com</p>*/}
      <UserInfo
        uid={uid}
        name={name}
        setName={setName}
        email={email}
        setEmail={setEmail}
      ></UserInfo>
      <div className={style.userLocation}>
        <i className="fa-solid fa-location-dot"></i>
        <p>Worldwide</p>
      </div>
      <div className={style.containerDescription}>
        <p>
          Aquí va la descripciónAquí va la descripciónAquí va la descripciónAquí
          va la descripción.
        </p>
      </div>
      <section className={style.info}>
        <div className={style.infoContainer}>
          <p>Me gusta ver: </p>
          <p>Documentales</p>
        </div>
        <div className={style.infoContainer}>
          <p>Mis generos favoritos: </p>
          <p>Romance, drama y suspenso</p>
        </div>
      </section>
      <div className={style.buttonContainer}>
        <button className="secondaryButton" onClick={() => setModal(true)}>Editar perfil</button>
        <button className="mainButton" onClick={() => navigate("/home")}>Volver al muro</button>
      </div>

      <Modal state={modal} onChangeState={setModal}>
        <EditProfile></EditProfile>
      </Modal>
    </section>
  );
}
export { Profile };
