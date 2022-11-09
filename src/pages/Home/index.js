import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "../../components/Header";
import { Post, PostWithMenu } from "../../components/Posts";
import { auth, db } from "../../firebase/firebase";
import style from "./Home.module.css";
import { PostForm } from "../../components/Forms/PostForm";
import { UserInfo } from "../../components/UserInfo";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { Modal, UpcomingModal } from "../../components/Modal";
import { DeletePost } from "../../components/Forms/DeletePost";

function Home() {
  let navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  //const [pic, setPic] = useState(avatar)
  const [allPosts, setAllPosts] = useState([]);
  const [modalDelete, setModalDelete] = useState(false);
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
      <UserInfo
        uid={uid}
        name={name}
        setName={setName}
        email={email}
        setEmail={setEmail}
      ></UserInfo>
      <button onClick={() => navigate("/profile")}>Ver mi perfil</button>
      <PostForm uid={uid} email={email} name={name} onNewFunction={setUpcomingModal}/>
      {allPosts.map((post, index) =>
        post.uid === uid ? (
          <PostWithMenu
            key={index}
            email={post.email}
            text={post.post}
            onDelete={setModalDelete}
            id={post.id}
          />
        ) : (
          <Post key={index} email={post.email} text={post.post} />
        )
      )}
      <Modal state={modalDelete} onChangeState={setModalDelete}>
        <DeletePost></DeletePost>
      </Modal>
      <UpcomingModal state={upcomingModal} onChangeState={setUpcomingModal} />
    </section>
  );
}
export { Home };
