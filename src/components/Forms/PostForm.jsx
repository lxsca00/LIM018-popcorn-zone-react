import React, { useState } from "react";
import { addDoc, collection, Timestamp } from "firebase/firestore";
import { db } from "../../firebase/firebase";
import style from "./Forms.module.css";

const PostForm = ({ uid, email, name, onNewFunction }) => {
  const [post, setPost] = useState("");

  const postSomething = (post) => {
    addDoc(collection(db, "posts"), {
      post,
      uid,
      email,
      name,
      likes: [],
      datePosted: Timestamp.fromDate(new Date()),
    });
    //Insertar modal de que si se subió el post
    setPost("");
  };

  return (
    <>
      <div className={style.postForm}>
        <textarea
          style={{ resize: "none" }}
          name="post"
          rows="6"
          placeholder="¿Qué nos quieres decir?"
          value={post}
          onChange={(e) => setPost(e.target.value)}
        />
        <div className={style.buttonContainer}>
          <button className={style.imageButton} onClick={() => onNewFunction(true)}>
            <i className="fa-solid fa-image"></i>
          </button>
          <button className="mainButton" onClick={() => postSomething(post)}>Compartir</button>
        </div>
      </div>
    </>
  );
};

export { PostForm };
