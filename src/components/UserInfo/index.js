import React, { useContext } from "react";
import { db, doc, getDoc } from "../../firebase/firebase";
import style from "./UserInfo.module.css";
import avatar from "../../assets/avatar.png";
import { UserContext } from "../../App";

const UserInfo = ({ uid }) => {
  const context = useContext(UserContext);

  const getData = async () => {
    const docRef = doc(db, "users", uid);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      context.setName(docSnap.data().name);
      context.setEmail(docSnap.data().email);
    }
  };

  getData();

  return (
    <div className={style.currentUser}>
      <div className={style.pic}>
        <img src={avatar} alt={context.name} />
      </div>
      <div className={style.userData}>
        <p>{context.name}</p>
        <p>{context.email}</p>
      </div>
    </div>
  );
};

export { UserInfo };
