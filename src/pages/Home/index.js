import React from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "../../components/Header";
import { Post } from "../../components/Posts";
import style from "./Home.module.css";

function Home() {

  let navigate = useNavigate()

  return (
    <section className={style.home}>
      <Header />
      <div className={style.currentUser}>
        <div className={style.pic}></div>
        <p>correo@gmail.com</p>
      </div>
      <h1>Este es el home</h1>
      <button onClick={() => navigate("/profile")}>Ver mi perfil</button>
      <div className={style.postForm}>
        <textarea
          style={{resize: "none"}}
          name="post"
          id="comment"
          rows="6"
          cols="12"
          placeholder="¿Qué nos quieres decir?"
        />
        <div className={style.buttonContainer}>
          <button>Cargar imagen</button>
          <button>Compartir</button>
        </div>
      </div>
      <Post></Post>
    </section>
  );
}
export { Home };
