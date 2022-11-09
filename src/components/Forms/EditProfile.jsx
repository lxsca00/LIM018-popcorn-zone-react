import React from "react";

const EditProfile = () => {
  // https://www.geeksforgeeks.org/how-to-use-html-select-tag-in-reactjs/
  // https://www.youtube.com/watch?v=Y9-UkL6ent4&t=709s
  return (
    <form>
      <h3>Edita tu perfil</h3>
      <label>Descripción</label>
      <textarea style={{ resize: "none" }} rows="6" />
      <label>País</label>
      <select>
        <option disabled>Eligen una opción</option>
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
      <input></input>
      <button className="secondaryButton">Actualizar</button>
    </form>
  );
};

export { EditProfile };
