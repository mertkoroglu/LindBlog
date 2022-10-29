import React from 'react'
import "./TopPosts.css";

const TopPosts = ({post, index}) => {
    let title = "" + post.title + "";


    if(title.length > 30){
        title = title.slice(0,40) + "...";
    }

    return (
        <div id='post'>
            <h1 id='index'>{index + 1}.</h1>
            <div>
                <h1 id='title'>{title}</h1>
                <h4 id='user'>by username</h4>
            </div>
        </div>
    )
}

export default TopPosts