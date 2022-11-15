import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth, db } from "../../firebase/firebase";
import { Header } from "../../components/Header";
import { Modal } from "../../components/Modal";
import style from "./Profile.module.css";
import { EditProfile } from "../../components/Forms/EditProfile";
import { doc, onSnapshot } from "firebase/firestore";

function Profile() {
  const [modal, setModal] = useState(false);
  const [profile, setProfile] = useState("")
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("Worldwide");
  const [description, setDescription] = useState("");
  const [preferences, setPreferences] = useState("");
  const [genres, setGenres] = useState("");
  const uid = auth.currentUser.uid;

  //Creo que ya se debe usar useContext

  let navigate = useNavigate();

  const userData = () => {
    onSnapshot(
      doc(db, "users", uid),
      { includeMetadataChanges: true },
      (user) => {
        setEmail(user.data().email);
        setName(user.data().name);
        setDescription(user.data().description);
        setCountry(user.data().country);
        setPreferences(user.data().preferences)
        setGenres(user.data().genres)
        setProfile(user.data().photo)
      }
    );
  };

  userData();

  return (
    <section className={style.profile}>
      <Header />
      {/*<img src={profile} alt={name}></img>*/}
      <p>{name}</p>
      <p>{email}</p>
      {/*<UserInfo
        uid={uid}
        name={name}
        setName={setName}
        email={email}
        setEmail={setEmail}
      ></UserInfo>*/}
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
          uid={uid}
        ></EditProfile>
      </Modal>
    </section>
  );
}
export { Profile };
