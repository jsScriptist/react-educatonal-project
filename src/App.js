import React, { useRef, useState } from "react";
import Counter from "./components/Counter";
import ClassCounter from "./components/ClassCounter";
import StyledComponent from "./components/StyledComponent";
import "./styles/App.css";
import { PostList } from "./components/PostList";
import { MyButton } from "./components/UI/buttons/MyButton.jsx";
import { MyInput } from "./components/UI/input/MyInput";

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

  const [posts2, setPosts2] = useState([
    {
      id: 101,
      title: "The 101th post",
      description: "This is some post description 10=10=10",
    },
    {
      id: 111,
      title: "The 111th post",
      description: "This is some post description 1111111",
    },
    {
      id: 121,
      title: "The 121th post",
      description: "This is some post description 12121212",
    },
  ]);

  const [post, setPost] = useState({title: '', description: ''});
 
  //const bodyInputRef = useRef();

  const addNewPost = (e) => {
    e.preventDefault();
    setPosts([...posts, {...post, id: Date.now()}]);
    setPost({title: '', description: ''})
  };

  return (
    <div className="App">
      <Counter />
      <ClassCounter />
      <StyledComponent />
      <PostList posts={posts} title={"Post List"} />
      <form action="">
        <MyInput
          value={post.title}
          type="text"
          name="title"
          placeholder="New post title"
          onChange={(e) => setPost({...post, title: e.target.value})}
        />
        <MyInput
          value={post.description}
          type="text"
          name="description"
          placeholder="New post description"
          onChange={(e) => setPost({...post, description: e.target.value})}
        />
        {/* <MyUnmanageableInput
          ref={bodyInputRef}
          type="text"
          name="description"
          placeholder="New post description"
          onChange={(e) => setDescription(e.target.value)}
        /> */}
        <MyButton onClick={addNewPost}>Create a new post</MyButton>
      </form>
    </div>
  );
}

export default App;
