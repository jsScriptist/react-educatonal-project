import React, { useRef, useState } from "react";
import Counter from "./components/Counter";
import ClassCounter from "./components/ClassCounter";
import StyledComponent from "./components/StyledComponent";
import "./styles/App.css";
import { PostList } from "./components/PostList";
import { PostForm } from "./components/PostForm";
import { MySelect } from "./components/UI/select/MySelect";

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
    setPosts([...posts, newPost]);
  };
  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  const [selectedSort, setSelectedSort] = useState("");
  const sortPosts = (sort) => {
    setSelectedSort(sort)
    setPosts([...posts].sort((a, b) => a[sort].localeCompare(b[sort])))
  }

  return (
    <div className="App">
      <Counter />
      <ClassCounter />
      <StyledComponent />
      <hr style={{ margin: "20px 0" }} />
      <MySelect
        value={selectedSort}
        onChange={sortPosts}
        defaultValue={"Sort by..."}
        options={[
          { value: "title", name: "title" },
          { value: "description", name: "description" },
        ]}
      />
      {posts.length ? (
        <PostList remove={removePost} posts={posts} title={"Post List"} />
      ) : (
        <div style={{ textAlign: "center", fontSize: "20px" }}>
          <b>No posts yet!</b>
        </div>
      )}
      <PostForm create={createPost} />
    </div>
  );
}

export default App;
