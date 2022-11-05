import React from "react";
import style from "./Modal.module.css";

function Modal({ text, state, onChangeState }) {
  return (
    <>
      {state && (
        <div className={style.backgroundModal}>
          <div className={style.modalCard}>
            <p>{text}</p>
            <button
              className={style.buttonModal}
              onClick={() => onChangeState(false)}
            >
              Cerrar
            </button>
          </div>
        </div>
      )}
    </>
  );
}

export { Modal };
