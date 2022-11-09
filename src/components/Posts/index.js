import { deleteDoc, doc, updateDoc } from "firebase/firestore";
import React, { useState } from "react";
import { db } from "../../firebase/firebase";
import { EditPost } from "../Forms/EditPost";
import { Modal } from "../Modal";
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
      <div className={style.likeCounter}>
        <i className="fa-solid fa-heart"></i>
        <p>0</p>
      </div>

      <hr></hr>
      <div className={style.buttonContainer}>
        <button>Me gusta</button>
        <button>Comentar</button>
      </div>
    </div>
  );
}

function PostWithMenu({ email, text, id, onDelete }) {

  const [modalEdit, setModalEdit] = useState(false);

  const handleDelete = () => {
    deleteDoc(doc(db, "posts", id));
  };

  const handleEdit = async (e, newPost) => {
    e.preventDefault();
    const docRef = doc(db, "posts", id)
    await updateDoc(docRef, {
      post: newPost,
    });
    setModalEdit(false)
  };

  return (
    <>
      <div className={style.postBody}>
        <div className={style.containerUser}>
          <div className={style.pic}></div>
          <p>{email}</p>
        </div>
        <div>
          <button onClick={() => handleDelete()}>Borrar</button>
          <button onClick={() => setModalEdit(true)}>Editar</button>
        </div>
        <p className={style.postText}>{text}</p>
        <hr></hr>
        <div className={style.likeCounter}>
          <i className="fa-solid fa-heart"></i>
          <p>0</p>
        </div>
        <hr></hr>
        <div className={style.buttonContainer}>
          <button>Me gusta</button>
          <button>Comentar</button>
        </div>
      </div>
      <Modal state={modalEdit} onChangeState={setModalEdit}>
        <EditPost text={text} handleEdit={handleEdit}></EditPost>
      </Modal>
    </>
  );
}

export { Post, PostWithMenu };
