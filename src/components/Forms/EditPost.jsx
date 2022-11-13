import React from "react";
import { useState } from "react";
import style from "./Forms.module.css"

const EditPost = ({ text, handleEdit }) => {
  const [newPost, setNewPost] = useState(text);
  //Editar colores de los botones en modales

  return (
    <form>
      <h3>Edita tu post</h3>
      <textarea className={style.textArea} style={{ resize: "none" }} value={newPost} onChange={(e) => setNewPost(e.target.value)} />
      <button className="secondaryButton" onClick={(e) => handleEdit(e, newPost)}>Editar</button>
    </form>
  );
};

export { EditPost };
