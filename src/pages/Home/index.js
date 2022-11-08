import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "../../components/Header";
import { Post } from "../../components/Posts";
import { auth, db } from "../../firebase/firebase";
import { addDoc, collection, doc, getDoc, Timestamp } from "firebase/firestore";
import avatar from "../../assets/avatar.png";
import style from "./Home.module.css";

function Home() {
  let navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  //const [pic, setPic] = useState(avatar)
  const [post, setPost] = useState("")

  const uid = auth.currentUser.uid;

  const getData = async () => {
    const docRef = doc(db, "users", uid);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      setName(docSnap.data().name);
      setEmail(docSnap.data().email);
    }
  };

  getData()

  const postSomething = (post) => {
    addDoc(collection(db, "posts"), {
      post,
      uid,
      email,
      name,
      likes: [],
      datePosted: Timestamp.fromDate(new Date())
    })
  }

  return (
    <section className={style.home}>
      <Header />
      <div className={style.currentUser}>
        <div className={style.pic}>
          <img src={avatar} alt={name} />
        </div>
        <div>
          <p>{name}</p>
          <p>{email}</p>
        </div>
      </div>
      <button onClick={() => navigate("/profile")}>Ver mi perfil</button>
      <div className={style.postForm}>
        <textarea
          style={{ resize: "none" }}
          name="post"
          id="comment"
          rows="6"
          cols="12"
          placeholder="¿Qué nos quieres decir?"
          value={post}
          onChange={(e) => setPost(e.target.value)}
        />
        <div className={style.buttonContainer}>
          <button>Cargar imagen</button>
          <button onClick={postSomething(post)}>Compartir</button>
        </div>
      </div>
      <Post></Post>
    </section>
  );
}
export { Home };
