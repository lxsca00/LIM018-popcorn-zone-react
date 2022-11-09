import React from "react";
import { useState } from "react";

const EditPost = ({text, handleEdit}) => {
  const [newPost, setNewPost] = useState(text);

  return (
      <form>
        <h3>Edita tu post</h3>
        <textarea
          value={newPost}
          onChange={(e) => setNewPost(e.target.value)}
        />
        <button onClick={(e) => handleEdit(e, newPost)}>Editar</button>
      </form>
  );
};

export { EditPost };
