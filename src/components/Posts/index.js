import React from "react";
import style from "./Post.module.css";

function Post({email, text}) {
  return (
    <div className={style.postBody}>
      <div className={style.containerUser}>
        <div className={style.pic}></div>
        <p>{email}</p>
      </div>
      <p className={style.postText}>{text}</p>
      <hr></hr>
      <p>Aquí cuento los likes</p>
      <hr></hr>
      <div className={style.buttonContainer}>
        <button>Me gusta</button>
        <button>Comentar</button>
      </div>
    </div>
  );
}

export { Post };
