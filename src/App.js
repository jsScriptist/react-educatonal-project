import React, { useMemo, useRef, useState } from "react";
import Counter from "./components/Counter";
import ClassCounter from "./components/ClassCounter";
import StyledComponent from "./components/StyledComponent";
import "./styles/App.css";
import { PostList } from "./components/PostList";
import { PostForm } from "./components/PostForm";
import { PostFilter } from "./components/PostFilter";

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
  const [filter, setFilter] = useState({ sort: "", query: "" });

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
  };
  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };
  const sortedPosts = useMemo(() => {
    if (filter.sort) {
      return [...posts].sort((a, b) =>
        a[filter.sort].localeCompare(b[filter.sort])
      );
    }
    return posts;
  }, [filter.sort, posts]);

  const sortedAndSearchedPosts = useMemo(() => {
    return sortedPosts.filter((post) =>
      post.title.toLowerCase().includes(filter.query.toLowerCase())
    );
  }, [filter.query, sortedPosts]);

  return (
    <div className="App">
      <Counter />
      <ClassCounter />
      <StyledComponent />
      <hr style={{ margin: "20px 0" }} />
      <PostFilter filter={filter} setFilter={setFilter} />

      <PostList
        remove={removePost}
        posts={sortedAndSearchedPosts}
        title={"Post List"}
      />
      <PostForm create={createPost} />
    </div>
  );
}

export default App;
