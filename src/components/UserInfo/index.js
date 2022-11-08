import React from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase/firebase";
import style from "./UserInfo.module.css"
import avatar from "../../assets/avatar.png";

const UserInfo = ({name, setName, email, setEmail, uid}) => {

  const getData = async () => {
    const docRef = doc(db, "users", uid);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      setName(docSnap.data().name);
      setEmail(docSnap.data().email);
    }
  };

  getData()

  return (
    <div className={style.currentUser}>
      <div className={style.pic}>
        <img src={avatar} alt={name} />
      </div>
      <div className={style.userData}>
        <p>{name}</p>
        <p>{email}</p>
      </div>
    </div>
  );
};

export { UserInfo };
