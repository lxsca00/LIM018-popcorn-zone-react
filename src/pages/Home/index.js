import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "../../components/Header";
import { Post, PostWithMenu } from "../../components/Posts";
import {
  auth,
  db,
  collection,
  onSnapshot,
  orderBy,
  query,
} from "../../firebase/firebase";
import style from "./Home.module.css";
import { PostForm } from "../../components/Forms/PostForm";
import { UserInfo } from "../../components/UserInfo";
import { UpcomingModal } from "../../components/Modal";

function Home() {
  let navigate = useNavigate();
  
  const [allPosts, setAllPosts] = useState([]);
  const [upcomingModal, setUpcomingModal] = useState(false);
  const uid = auth.currentUser.uid;

  const getPosts = () => {
    const q = query(collection(db, "posts"), orderBy("datePosted", "desc"));
    onSnapshot(q, (querySnapshot) => {
      const posts = [];
      querySnapshot.forEach((doc) => posts.push({ ...doc.data(), id: doc.id }));
      setAllPosts(posts);
    });
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <section className={style.home}>
      <Header />
      <UserInfo uid={uid} />
      <button className={style.goProfile} onClick={() => navigate("/profile")}>
        <i className="fa-solid fa-address-card"></i>
        <p>Ver mi perfil</p>
      </button>
      <PostForm uid={uid} onNewFunction={setUpcomingModal} />
      {allPosts.map((post, index) =>
        post.uid === uid ? (
          <PostWithMenu
            key={index}
            email={post.email}
            text={post.post}
            id={post.id}
            likes={post.likes}
          />
        ) : (
          <Post
            key={index}
            id={post.id}
            email={post.email}
            text={post.post}
            likes={post.likes}
          />
        )
      )}
      <UpcomingModal state={upcomingModal} onChangeState={setUpcomingModal} />
    </section>
  );
}
export { Home };
