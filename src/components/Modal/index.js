import React from "react";
import style from "./Modal.module.css";
import upcoming from "../../assets/upcoming.svg"

function Modal({ children, state, onChangeState }) {
  return (
    <>
      {state && (
        <div className={style.backgroundModal}>
          <div className={style.modalCard}>
            {children}
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

function UpcomingModal({ state, onChangeState }) {
  return (
    <>
      {state && (
        <div className={style.backgroundModal}>
          <div className={style.modalCard}>
            <img src={upcoming} alt="upcomming-function"></img>
            <div>
              <h2>Oh no...</h2>
              <p>Aún estamos trabajando en esta funcionalidad.</p>
              <p>¡Sentimos las molestias!</p>
            </div>
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

export { Modal, UpcomingModal };
