import React, { useRef, useState } from "react";
import Counter from "./components/Counter";
import ClassCounter from "./components/ClassCounter";
import StyledComponent from "./components/StyledComponent";
import "./styles/App.css";
import { PostList } from "./components/PostList";
import { PostForm } from "./components/PostForm";

function App() {
  const [posts, setPosts] = useState([
    {
      id: 10,
      title: "The 10th post",
      description: "This is some post description 10=10=10",
    },
    {
      id: 11,
      title: "The 11th post",
      description: "This is some post description 1111111",
    },
    {
      id: 12,
      title: "The 12th post",
      description: "This is some post description 12121212",
    },
  ]);

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }

  return (
    <div className="App">
      <Counter />
      <ClassCounter />
      <StyledComponent />
      <PostList posts={posts} title={"Post List"} />
      <PostForm create={createPost} />
    </div>
  );
}

export default App;
