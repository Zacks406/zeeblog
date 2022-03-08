import React from 'react'
import "./Post.css"
export default function Post() {
    return (
        <div className="post">
            <img
                className="postImg"
                src="/images/pf3.jpg"
                alt="post"
            />
            <div className="postInfo">
                <div className="postCats">
                    <span className="postCat">Music</span>
                    <span className="postCat">Life</span>
                </div>
                <span className="postTitle">
                    Lorem ipsum dolor sit.
                </span>
                <hr />
                <span className="postDate">1 hour ago</span>
            </div>
            <p className="postDesc">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, error, enim modi dolorem 
                autem iure ullam voluptatibus hic labore ducimus sit ad asperiores rem placeat nihil, 
                quibusdam esse aperiam delectus.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, error, enim modi dolorem 
                autem iure ullam voluptatibus hic labore ducimus sit ad asperiores rem placeat nihil, 
                quibusdam esse aperiam delectus.
            </p>
        </div>
    )
}
