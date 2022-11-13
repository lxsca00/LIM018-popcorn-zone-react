import React from "react";
import style from "./Forms.module.css";

const EditProfile = ({country, setCountry, description, setDescription, genres, setGenres}) => {
  // Select en react
  // https://www.geeksforgeeks.org/how-to-use-html-select-tag-in-reactjs/
  // https://www.youtube.com/watch?v=Y9-UkL6ent4&t=709s

  return (
    <form>
      <h3>Edita tu perfil</h3>
      <label>Descripción</label>
      <textarea
        className={style.modalDescription}
        placeholder="Coloca tu nueva descripción"
        value={description}
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
        <option>Series</option>
        <option>Películas</option>
        <option>Animes</option>
        <option>Documentales</option>
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
