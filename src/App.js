import React, { useState } from "react";
import Counter from './components/Counter';
import ClassCounter from './components/ClassCounter';
import StyledComponent from './components/StyledComponent';
import './styles/App.css'

function App() {

  return (
    <div className="App">
      <Counter />
      <ClassCounter />
      <StyledComponent />
      <StyledComponent />
      <StyledComponent />
    </div>
  );
}

export default App;
