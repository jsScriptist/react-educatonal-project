import React, { useState } from "react";

function App() {
 
  const [likes, setLikes] = useState(0)
  const [inputText, setText] = useState('')

  function increase() {
    setLikes(likes + 1)
  }

  function decrease() {
    setLikes(likes - 1)
  }

  return (
    <div className="App">
      <h1>Likes: {likes}</h1>
      <button onClick={increase}>Increment</button>    
      <button onClick={decrease}>Decrement</button>
      <h1>Text from input: {inputText}</h1>
      <input 
        type='text'
        value={inputText}
        onChange={e => setText(e.target.value)}
         />    
    </div>
  );
}

export default App;
