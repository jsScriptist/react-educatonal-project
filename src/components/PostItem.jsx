import React from "react";

const PostItem = ({post, number}) => {
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
                    <button>Delete</button>
                </div>
            </div>
        </div>
    )
}

export default PostItem
