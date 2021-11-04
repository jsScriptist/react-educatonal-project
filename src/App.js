import React, { useEffect, useState } from "react";
import Counter from "./components/Counter";
import ClassCounter from "./components/ClassCounter";
import StyledComponent from "./components/StyledComponent";
import "./styles/App.css";
import { PostList } from "./components/PostList";
import { PostForm } from "./components/PostForm";
import { PostFilter } from "./components/PostFilter";
import { MyModal } from "./components/UI/MyModal/MyModal";
import { MyButton } from "./components/UI/buttons/MyButton";
import { useSortedPosts } from "./hooks/usePosts";
import PostService from "./components/API/PostService";
import { Loader } from "./components/UI/loader/Loader";
import { useFetching } from './hooks/useFetching';

function App() {
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({ sort: "", query: "" });
  const [modal, setModal] = useState(false);
  const [fetchPosts, isPostLoading, postError] = useFetching(async () => {
    const posts = await PostService.getAll()
    setPosts(posts)
  })

  const createPost = (newPost) => {
    setPosts([...posts, newPost]);
    setModal(false);
  };
  const removePost = (post) => {
    setPosts(posts.filter((p) => p.id !== post.id));
  };

  const sortedAndSearchedPosts = useSortedPosts(
    posts,
    filter.sort,
    filter.query
  );

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div className="App">
      <Counter />
      <ClassCounter />
      <StyledComponent />
      <hr style={{ margin: "20px 0" }} />
      <PostFilter filter={filter} setFilter={setFilter} />
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create={createPost} />
      </MyModal>
      {postError && <h1 className="error">Post loading error: {postError}</h1>}
      {isPostLoading ? (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Loader />
        </div>
      ) : (
        <PostList
          remove={removePost}
          posts={sortedAndSearchedPosts}
          title={"Post List"}
        />
      )}

      <MyButton style={{ marginTop: 20 }} onClick={() => setModal(true)}>
        Create a new post
      </MyButton>
      <MyButton style={{ marginLeft: 20 }} onClick={fetchPosts}>
        Load posts
      </MyButton>
    </div>
  );
}

export default App;
