import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth, db, doc, onSnapshot } from "../../firebase/firebase";
import { Header } from "../../components/Header";
import { Modal } from "../../components/Modal";
import style from "./Profile.module.css";
import avatar from "../../assets/avatar.png";
import { EditProfile } from "../../components/Forms/EditProfile";
import { UserContext } from "../../App";

function Profile() {
  const context = useContext(UserContext);

  const [modal, setModal] = useState(false);
  const [description, setDescription] = useState("¡Cuéntanos más sobre ti!");
  const [genres, setGenres] = useState("¿Qué sueles ver?");
  const [country, setCountry] = useState("Selecciona tu país");
  const [preference, setPreference] = useState("¿Qué prefieres ver?");

  const [photo, setPhoto] = useState(avatar);

  const uid = auth.currentUser.uid;

  let navigate = useNavigate();

  const userData = () => {
    onSnapshot(
      doc(db, "users", uid),
      { includeMetadataChanges: true },
      (user) => {
        context.setEmail(user.data().email);
        context.setName(user.data().name);
        setPhoto(user.data().photo);
        if (user.data().description !== undefined) {
          setCountry(user.data().country);
          setDescription(user.data().description);
          setPreference(user.data().preference);
          setGenres(user.data().genres);
        }
      }
    );
  };

  useEffect(() => {
    userData();
  });

  return (
    <section className={style.profile}>
      <Header />
      <div className={style.pic}>
        <img src={photo} alt={context.name} />
      </div>
      <p>{context.name}</p>
      <p>{context.email}</p>
      <div className={style.userLocation}>
        <i className="fa-solid fa-location-dot"></i>
        <p>{country}</p>
      </div>
      <div className={style.containerDescription}>
        <p>{description}</p>
      </div>
      <section className={style.info}>
        <div className={style.infoContainer}>
          <p>Me gusta ver: </p>
          <p>{preference}</p>
        </div>
        <div className={style.infoContainer}>
          <p>Mis generos favoritos: </p>
          <p>{genres}</p>
        </div>
      </section>
      <div className={style.buttonContainer}>
        <button className="secondaryButton" onClick={() => setModal(true)}>
          Editar perfil
        </button>
        <button className="mainButton" onClick={() => navigate("/home")}>
          Volver al muro
        </button>
      </div>

      <Modal state={modal} onChangeState={setModal}>
        <EditProfile uid={uid} setModal={setModal}></EditProfile>
      </Modal>
    </section>
  );
}
export { Profile };
