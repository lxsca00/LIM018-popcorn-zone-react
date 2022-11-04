import React from "react";
import style from "./Header.module.css"

function Header() {
  return (
    <header>
      <div className={style.logoContainer}>
        <img src="#" alt="PopcornZone" />
        <h1>PopcornZone</h1>
      </div>
      <button>
        <img src="#" alt="log-out" />
        <p>Cerrar sesión</p>
      </button>
    </header>
  );
}

export { Header };
