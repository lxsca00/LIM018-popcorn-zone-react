import React, { useState } from "react";
import { DeletePost } from "../Forms/DeletePost";
import { EditPost } from "../Forms/EditPost";
import { Modal } from "../Modal";
import {
  auth,
  db,
  deleteDoc,
  doc,
  getDoc,
  updateDoc,
} from "../../firebase/firebase";
import avatar from "../../assets/avatar.png";
import style from "./Post.module.css";

function Post({ email, text, id, likes }) {
  const uid = auth.currentUser.uid;

  const handleLike = async () => {
    const docRef = doc(db, "posts", id);
    const docSnap = await getDoc(docRef);
    const postLikes = docSnap.data().likes;
    return postLikes.includes(uid)
      ? updateDoc(docRef, {
          likes: postLikes.filter((item) => item !== uid),
        })
      : updateDoc(docRef, {
          likes: [...postLikes, uid],
        });
  };

  return (
    <div className={style.postBody}>
      <div className={style.containerUser}>
        <div className={style.pic}>
          <img src={avatar} alt="user" />
        </div>
        <p>{email}</p>
      </div>
      <p className={style.postText}>{text}</p>
      <hr></hr>
      <div className={style.likeCounter}>
        <i className="fa-solid fa-heart"></i>
        <p>{likes.length}</p>
      </div>

      <hr></hr>
      <div className={style.buttonContainer}>
        <button className="mainButton" onClick={handleLike}>
          Me gusta
        </button>
        <button className="secondaryButton">Comentar</button>
      </div>
    </div>
  );
}

function PostWithMenu({ email, text, id, likes }) {
  const [modalEdit, setModalEdit] = useState(false);
  const [modalDelete, setModalDelete] = useState(false);

  const uid = auth.currentUser.uid;

  const handleDelete = (e) => {
    e.preventDefault();
    deleteDoc(doc(db, "posts", id));
  };

  const handleEdit = async (e, newPost) => {
    e.preventDefault();
    const docRef = doc(db, "posts", id);
    await updateDoc(docRef, {
      post: newPost,
    });
    setModalEdit(false);
  };

  const handleLike = async () => {
    const docRef = doc(db, "posts", id);
    const docSnap = await getDoc(docRef);
    const postLikes = docSnap.data().likes;
    return postLikes.includes(uid)
      ? updateDoc(docRef, {
          likes: postLikes.filter((item) => item !== uid),
        })
      : updateDoc(docRef, {
          likes: [...postLikes, uid],
        });
  };

  return (
    <>
      <div className={style.postBody}>
        <div className={style.containerUser}>
          <div className={style.pic}>
            <img src={avatar} alt="user" />
          </div>
          <p>{email}</p>
        </div>
        <div className={style.containerEventButtons}>
          <button onClick={() => setModalDelete(true)}>Borrar</button>
          <button onClick={() => setModalEdit(true)}>Editar</button>
        </div>
        <p className={style.postText}>{text}</p>
        <hr></hr>
        <div className={style.likeCounter}>
          <i className="fa-solid fa-heart"></i>
          <p>{likes.length}</p>
        </div>
        <hr></hr>
        <div className={style.buttonContainer}>
          <button className="mainButton" onClick={handleLike}>
            Me gusta
          </button>
          <button className="secondaryButton">Comentar</button>
        </div>
      </div>
      <Modal state={modalEdit} onChangeState={setModalEdit}>
        <EditPost text={text} handleEdit={handleEdit}></EditPost>
      </Modal>
      <Modal state={modalDelete} onChangeState={setModalDelete}>
        <DeletePost handleDelete={handleDelete}></DeletePost>
      </Modal>
    </>
  );
}

export { Post, PostWithMenu };
