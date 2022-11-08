import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "../../components/Header";
import { Post } from "../../components/Posts";
import { auth, db } from "../../firebase/firebase";
import style from "./Home.module.css";
import { PostForm } from "../../components/Forms/PostForm";
import { UserInfo } from "../../components/UserInfo";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";

function Home() {
  let navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  //const [pic, setPic] = useState(avatar)

  const uid = auth.currentUser.uid;

  

  /*const onGetPosts = () => {
    const user = auth.currentUser;
    const q = query(collection(db, "posts"), orderBy("datePosted", "desc"));
    onSnapshot(q, (querySnapshot) => {
      querySnapshot.forEach((post) => {
        posts.push(Object.assign(post.data()))
      })
      console.log(posts)
    })
    let posts = []
  }
  

  onGetPosts()*/

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
