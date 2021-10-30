import React from "react";

const PostItem = (props) => {

    console.log(props.post);

    return (
        <div className='App'>
            <div className='post'>
                <div className='post__content'>
                    <strong>{props.post.id}. {props.post.title}</strong>
                    <div>
                        {props.post.description}
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
