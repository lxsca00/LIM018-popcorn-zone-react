import React from "react";
import style from "./Header.module.css";

function Header() {
  return (
    <header>
      <div className={style.logoContainer}>
        <img src="#" alt="PopcornZone" />
        <h1>PopcornZone</h1>
      </div>
      <button>
        <i class="fa-solid fa-power-off"></i>
      </button>
    </header>
  );
}

export { Header };
