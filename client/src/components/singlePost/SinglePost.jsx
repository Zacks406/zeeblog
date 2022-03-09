import React from 'react'
import "./SinglePost.css"
export default function SinglePost() {
    return (
        <div className="singlePost">
            <div className="singlePostWrapper">
                <img
                    className="singlePostImg"
                    src="/images/pf2.jpg"
                    alt=""
                />
                <h1 className="singlePostTitle">
                    Lorem ipsum dolor sit.
                    <div className="singlePostEdit">
                        <i className="singlePostIcon far fa-edit"></i>
                        <i className="singlePostIcon far fa-trash-alt"></i>
                    </div>
                </h1>
                <div className="singlePostInfo">
                    <span className="singlePostAuthor"><b>Author: Haruna Zakari</b></span>
                    <span className="singlePostDate"><b>2 hours ago</b></span>
                </div>
                <p className="singlePostDesc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam dolorem assumenda
                    corporis corrupti sit architecto placeat eaque aliquid eligendi fugit veniam odio
                    rem laudantium, quisquam ea tempore nesciunt excepturi nemo.
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam dolorem assumenda
                    corporis corrupti sit architecto placeat eaque aliquid eligendi fugit veniam odio
                    rem laudantium, quisquam ea tempore nesciunt excepturi nemo.
                </p>
            </div>
        </div>
    )
}
