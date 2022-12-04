import React from "react";
import style from "./Header.module.css";
import { auth, signOut } from "../../firebase/firebase";
import { useNavigate } from "react-router-dom";

function Header() {
  let navigate = useNavigate();

  const handleLogOut = (e) => {
    e.preventDefault();

    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        console.log("Vuelve a intentarlo");
      });
  };

  return (
    <header>
      <div className={style.logoContainer}>
        <img
          src="https://i.pinimg.com/originals/54/cc/e0/54cce0449cfd4414fdc19b068a97e00a.png"
          alt="popcorn-zone"
        />
        <h1>PopcornZone</h1>
      </div>
      <button onClick={handleLogOut}>
        <i className="fa-solid fa-power-off"></i>
      </button>
    </header>
  );
}

export { Header };
