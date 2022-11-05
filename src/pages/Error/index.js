import React from "react";
import { useNavigate } from "react-router-dom";
import error from "../../assets/404.svg";
import style from "./Error.module.css";

function Error404() {
  let navigate = useNavigate()

  return (
    <section className={style.error}>
      <img src={error} alt="error404" />
      <h1>¡Ooops!</h1>
      <p>Lo sentimos, no podemos encontrar la página que estas buscando</p>
      <button onClick={() => navigate("/")}>Llévame de regreso</button>
    </section>
  );
}
export { Error404 };
