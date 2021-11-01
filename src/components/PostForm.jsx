import React, { useState } from "react";
import { MyInput } from './UI/input/MyUnmanageableInput';
import { MyButton } from './UI/buttons/MyButton';

export const PostForm = ({create}) => {

    const [post, setPost] = useState({title: '', description: ''});
  
    const addNewPost = (e) => {
      e.preventDefault();
      const newPost = {
          ...post, id: Date.now()
      }
      create(newPost)
      setPost({title: '', description: ''})
    };
    return (
        <form>
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
        <MyButton onClick={addNewPost}>Create a new post</MyButton>
      </form>
    )
}