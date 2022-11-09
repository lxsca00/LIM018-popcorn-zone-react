import React from "react";
import style from "./Post.module.css";

function Post({ email, text }) {
  return (
    <div className={style.postBody}>
      <div className={style.containerUser}>
        <div className={style.pic}></div>
        <p>{email}</p>
      </div>
      <p className={style.postText}>{text}</p>
      <hr></hr>
      <i className="fa-solid fa-heart"></i>
      <p>0</p>
      <hr></hr>
      <div className={style.buttonContainer}>
        <button>Me gusta</button>
        <button>Comentar</button>
      </div>
    </div>
  );
}

function PostWithMenu({ email, text, onEdit, onDelete }) {
  return (
    <div className={style.postBody}>
      <div className={style.containerUser}>
        <div className={style.pic}></div>
        <p>{email}</p>
      </div>
      <div>
        <button onClick={() => onDelete(true)}>Borrar</button>
        <button onClick={() => onEdit(true)}>Editar</button>
      </div>
      <p className={style.postText}>{text}</p>
      <hr></hr>
      <i className="fa-solid fa-heart"></i>
      <p>0</p>
      <hr></hr>
      <div className={style.buttonContainer}>
        <button>Me gusta</button>
        <button>Comentar</button>
      </div>
    </div>
  );
}

export { Post, PostWithMenu };
