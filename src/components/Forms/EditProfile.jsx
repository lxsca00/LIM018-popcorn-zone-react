import { doc, updateDoc } from "firebase/firestore";
import React from "react";
import { useState } from "react";
import { db } from "../../firebase/firebase";
import style from "./Forms.module.css";

const EditProfile = ({uid}) => {
  // Select en react
  // https://www.geeksforgeeks.org/how-to-use-html-select-tag-in-reactjs/
  // https://www.youtube.com/watch?v=Y9-UkL6ent4&t=709s

  const [description, setDescription] = useState("")
  const [genres, setGenres] = useState("");

  const handleChange = (e) => {
    e.preventDefault()
    updateDoc(doc(db, "users", uid), {description, genres})
    console.log("Ok?");
  }

  return (
    <form onSubmit={handleChange}>
      <h3>Edita tu perfil</h3>
      <label>Descripción</label>
      <textarea
        className={style.modalDescription}
        value={description}
        placeholder="Coloca tu nueva descripción"
        onChange={(e) => setDescription(e.target.value)}
        style={{ resize: "none" }}
        rows="6"
      />
      <label>País</label>
      <select>
        <option disabled>Elige una opción</option>
      </select>
      <label>¿Qué prefieres ver?</label>
      <select>
        <option disabled>Elige tu favorito</option>
        <option value="Series">Series</option>
        <option value="Películas">Películas</option>
        <option value="Animes">Animes</option>
        <option value="Documentales">Documentales</option>
      </select>
      <label>¿Cuáles son tus géneros preferidos?</label>
      <input
        className={style.modalGenre}
        placeholder="¿Drama?¿Romance?¿Terror?"
        value={genres}
        onChange={(e) => setGenres(e.target.value)}
      ></input>
      <button className="secondaryButton">Actualizar</button>
    </form>
  );
};

export { EditProfile };
