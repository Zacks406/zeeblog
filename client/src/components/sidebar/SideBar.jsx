import React from 'react'
import "./SideBar.css"

export default function SideBar() {
    return (
        <div className="sideBar">
            <div className="sideBarItem">
                <span className="sideBarTitle">ABOUT ME</span>
                <img className="sideBarImg" src="./images/pff1.jpg" alt="sideBarImg" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus corporis alias
                    commodi at vero, dolorem nobis fugit voluptatibus.
                </p>
            </div>
            <div className="sideBarItem">
                <span className="sideBarTitle">CATEGORIES</span>
                <ul className="sideBarList">
                    <li className="sideBarListItem">Life</li>
                    <li className="sideBarListItem">Music</li>
                    <li className="sideBarListItem">Style</li>
                    <li className="sideBarListItem">Sport</li>
                    <li className="sideBarListItem">Tech</li>
                    <li className="sideBarListItem">Cinema</li>
                </ul>
            </div>
            <div className="sideBarItem">
                <span className="sideBarTitle">FOLLOW US</span>
                <div className="sideBarSocial">
                    <i className=" sideBarIcon fa-brands fa-facebook-square"></i>
                    <i className=" sideBarIcon fa-brands fa-twitter-square"></i>
                    <i className=" sideBarIcon fa-brands fa-pinterest-square"></i>
                    <i className=" sideBarIcon fa-brands fa-instagram-square"></i>
                </div>
            </div>
        </div>
    )
}
