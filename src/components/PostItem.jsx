import React from "react";
import { MyButton } from './UI/buttons/MyButton';

const PostItem = ({post, number, remove}) => {
    return (
        <div className='App'>
            <div className='post'>
                <div className='post__content'>
                    <strong>{number}. {post.title}</strong>
                    <div>
                        {post.description}
                    </div>
                </div>
                <div className='post__btns'>
                    <MyButton onClick={() => remove(post)}>Delete</MyButton>
                </div>
            </div>
        </div>
    )
}

export default PostItem
