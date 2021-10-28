import React, { useState } from "react";

function App() {
 
  const [likes, setLikes] = useState(0)

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
    </div>
  );
}

export default App;
