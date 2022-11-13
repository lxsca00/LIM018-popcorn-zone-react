import React from "react";

const DeletePost = ({ handleDelete }) => {
  return (
    <>
      <p>Estas a punto de eliminar este post...</p>
      <p>¿Estás seguro?</p>
      <button className="secondaryButton modalButton" onClick={(e) => handleDelete(e)}>Eliminar</button>
    </>
  );
};

export { DeletePost };
