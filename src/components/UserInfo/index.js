import React, { useContext, useState } from "react";
import { db, doc, getDoc } from "../../firebase/firebase";
import style from "./UserInfo.module.css";
import avatar from "../../assets/avatar.png";
import { UserContext } from "../../App";

const UserInfo = ({ uid }) => {
  const context = useContext(UserContext);
  const [photo, setPhoto] = useState(avatar);

  const getData = async () => {
    const docRef = doc(db, "users", uid);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      context.setName(docSnap.data().name);
      context.setEmail(docSnap.data().email);
      setPhoto(docSnap.data().photo);
    }
  };

  getData();

  return (
    <div className={style.currentUser}>
      <div className={style.pic}>
        <img src={photo} alt={context.name} />
      </div>
      <div className={style.userData}>
        <p>{context.name}</p>
        <p>{context.email}</p>
      </div>
    </div>
  );
};

export { UserInfo };
