import React from "react";
import { Header } from "../../components/Header";
import style from "./Home.module.css"

function Home() {
  return (
    <section>
      <Header />
      <h1>Este es el home</h1>
      <div className={style.postForm}>
        <textarea
          name="post"
          id="comment"
          minlength="4"
          maxlength="600"
          rows="6"
          cols="12"
          placeholder="¿Qué nos quieres decir?"
        />
        <div className={style.buttonContainer}>
          <button>Carga una imagen</button>
        <button>Compartir</button>
        </div>
        
      </div>
    </section>
  );
}
export { Home };
