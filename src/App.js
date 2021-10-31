import React, { useState } from "react";
import Counter from './components/Counter';
import ClassCounter from './components/ClassCounter';
import StyledComponent from './components/StyledComponent';
import './styles/App.css'
import PostItem from "./components/PostItem";
import { PostList } from "./components/PostList";

function App() {

  const [posts, setPosts] = useState([
    {id: 10, title: 'The 10th post', description: 'This is some post description 10=10=10'},
    {id: 11, title: 'The 11th post', description: 'This is some post description 1111111'},
    {id: 12, title: 'The 12th post', description: 'This is some post description 12121212'}
  ])

  const [posts2, setPosts2] = useState([
    {id: 101, title: 'The 101th post', description: 'This is some post description 10=10=10'},
    {id: 111, title: 'The 111th post', description: 'This is some post description 1111111'},
    {id: 121, title: 'The 121th post', description: 'This is some post description 12121212'}
  ])

  return (
    <div className="App">
      <Counter />
      <ClassCounter />
      <StyledComponent />
      <h1 style={{textAlign: 'center'}}>Post list</h1>
      <PostItem post={{id: 1, title: 'The first post', description: 'This is some post description'}} />
      <PostItem post={{id: 2, title: 'The 2nd post', description: 'This is some post description ***'}} />
      <PostItem post={{id: 5, title: 'The fifth post', description: 'This is some post description ###'}} />
   
      <PostList posts={posts} title={'Post List 1'}/>
      <PostList posts={posts2} title={'Post List 2'}/>
    </div>
  );
}

export default App;
