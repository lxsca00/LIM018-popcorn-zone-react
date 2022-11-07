import React from "react";
import { Header } from "../../components/Header";
import { Post } from "../../components/Posts";
import style from "./Home.module.css";

function Home() {
  return (
    <section className={style.home}>
      <Header />
      <div className={style.currentUser}>
        <div className={style.pic}></div>
        <p>correo@gmail.com</p>
      </div>
      <h1>Este es el home</h1>
      <button>Ver mi perfil</button>
      <div className={style.postForm}>
        <textarea
          name="post"
          id="comment"
          minLength="4"
          maxLength="600"
          rows="6"
          cols="12"
          placeholder="¿Qué nos quieres decir?"
        />
        <div className={style.buttonContainer}>
          <button>Carga una imagen</button>
          <button>Compartir</button>
        </div>
      </div>
      <Post></Post>
    </section>
  );
}
export { Home };
