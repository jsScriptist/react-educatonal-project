import React, { useState } from "react";
import Counter from './components/Counter';
import ClassCounter from './components/ClassCounter';
import StyledComponent from './components/StyledComponent';
import './styles/App.css'
import PostItem from "./components/PostItem";

function App() {

  return (
    <div className="App">
      <Counter />
      <ClassCounter />
      <StyledComponent />
      <PostItem post={{id: 1, title: 'The first post', description: 'This is some post description'}} />
      <PostItem post={{id: 2, title: 'The 2nd post', description: 'This is some post description ***'}} />
      <PostItem post={{id: 5, title: 'The fifth post', description: 'This is some post description ###'}} />
    </div>
  );
}

export default App;
