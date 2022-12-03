import React from "react";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../firebase/firebase";
import { preferenceOptions, countryOptions } from "./data-select.js";
import style from "./Forms.module.css";

const EditProfile = ({
  uid,
  description,
  genres,
  country,
  preference,
  setCountry,
  setPreference,
  setGenres,
  setDescription,
  setModal
}) => {
  // Select en react
  // https://www.geeksforgeeks.org/how-to-use-html-select-tag-in-reactjs/
  // https://www.youtube.com/watch?v=Y9-UkL6ent4&t=709s

  const handleCountry = (e) => {
    setCountry(e.target.value);
  };

  const handlePreferences = (e) => {
    setPreference(e.target.value);
  };

  const handleChange = (e) => {
    e.preventDefault();
    updateDoc(doc(db, "users", uid), {
      description,
      genres,
      country,
      preference,
    });
    setModal(false)
  };

  return (
    <form onSubmit={handleChange}>
      <h3>Edita tu perfil</h3>
      <label>Descripción</label>
      <textarea
        className={style.textArea}
        value={description}
        placeholder="Coloca tu nueva descripción"
        onChange={(e) => setDescription(e.target.value)}
        style={{ resize: "none" }}
        rows="6"
      />
      <label>País</label>
      <select value={country} onChange={handleCountry}>
        {countryOptions.map((option) => (
          <option value={option}>{option}</option>
        ))}
      </select>
      <label>¿Qué prefieres ver?</label>
      <select value={preference} onChange={handlePreferences}>
        {preferenceOptions.map((option) => (
          <option value={option}>{option}</option>
        ))}
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
