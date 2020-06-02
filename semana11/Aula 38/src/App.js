import React, { useState } from "react";
import "./App.css";
import { Post } from "./components/Post";

const App = () => {
  const [postsList, setPostsList] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [erro, setErro] = useState(false)

  const onChangeInput = event => {
    setInputValue(event.target.value);
  };

  const addPost = () => {
    // Adiciona um post à lista
    const newPost = {
      id: Date.now(),
      text: inputValue,
      liked: false
    };

    const newPostsList = [newPost, ...postsList];

    if(inputValue === ''){
      setErro(true)
    }else{
      setPostsList(newPostsList);
      setInputValue('')
      setErro(false)
    }
  };

  const deletePost = postId => {
    // Apaga um post da lista
    const newPostsList = postsList.filter(post => {
      return postId !== post.id;
    });

    setPostsList(newPostsList);
  };

  const toggleLike = postId => {
    // Altera o status de curtida de um post da lista
    const newPostsList = postsList.map(post => {
      if (postId === post.id) {
        const novoPost = {
          ...post,
          liked: !post.liked
        };
        return novoPost;
      } else {
        return post;
      }
    });

    setPostsList(newPostsList);
  };

  const posts = 
    postsList.map(post => {
      return (
        <Post
          key={post.id}
          post={post}
          toggleLike={toggleLike}
          deletePost={deletePost}
        />
      );
    })

  return (
    <div className="App">
      <div>
        <input
          type="text"
          onChange={onChangeInput}
          value={inputValue}
          placeholder={"Novo post"}
        />
        <button onClick={addPost}>Adicionar</button>
      </div>
      <br />
      {erro === false ? <div/> : <h3>Insira um valor</h3>}
      {posts.length === 0 ? <h1>Nenhum post</h1> : 
      <div>
        {posts}
        <h3>Quantidade de posts: {posts.length}</h3>
      </div>}
    </div>
  );
};

export default App;
