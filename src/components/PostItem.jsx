import React from "react";

const PostItem = ({post}) => {

    console.log(post);

    return (
        <div className='App'>
            <div className='post'>
                <div className='post__content'>
                    <strong>{post.id}. {post.title}</strong>
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
