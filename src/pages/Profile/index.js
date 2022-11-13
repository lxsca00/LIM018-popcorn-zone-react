import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase/firebase";
import { Header } from "../../components/Header";
import { Modal } from "../../components/Modal";
import style from "./Profile.module.css";
import { UserInfo } from "../../components/UserInfo";
import { EditProfile } from "../../components/Forms/EditProfile";

function Profile() {
  const [modal, setModal] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("Worldwide");
  const [description, setDescription] = useState(
    "Cuéntanos un poco más sobre ti"
  );
  const [preferences, setPreferences] = useState(
    "¿Series?¿Peliculas?¿Documentales?"
  );
  const [genres, setGenres] = useState("¿Romance?¿Drama?¿Terror?");
  const uid = auth.currentUser.uid;

  //Creo que ya se debe usar useContext

  let navigate = useNavigate();

  //Traer datos de Firebase, no del estado

  return (
    <section className={style.profile}>
      <Header />
      <UserInfo
        uid={uid}
        name={name}
        setName={setName}
        email={email}
        setEmail={setEmail}
      ></UserInfo>
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
          <p>{preferences}</p>
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
        <EditProfile
          country={country}
          setCountry={setCountry}
          description={description}
          setDescription={setDescription}
          genres={genres}
          setGenre={setGenres}
        ></EditProfile>
      </Modal>
    </section>
  );
}
export { Profile };
