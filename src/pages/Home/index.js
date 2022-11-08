import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "../../components/Header";
import { Post } from "../../components/Posts";
import { auth } from "../../firebase/firebase";
import style from "./Home.module.css";
import { PostForm } from "../../components/Forms/PostForm";
import { UserInfo } from "../../components/UserInfo";

function Home() {
  let navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  //const [pic, setPic] = useState(avatar)

  const uid = auth.currentUser.uid;

  return (
    <section className={style.home}>
      <Header />
      <UserInfo
        uid={uid}
        name={name}
        setName={setName}
        email={email}
        setEmail={setEmail}
      ></UserInfo>
      <button onClick={() => navigate("/profile")}>Ver mi perfil</button>
      <PostForm uid={uid} email={email} name={name} />
      <Post></Post>
    </section>
  );
}
export { Home };
