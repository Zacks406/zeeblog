import React from 'react'
import { Link } from 'react-router-dom'
import "./TopBar.css"
export default function TopBar() {
    const user = false;
    return (
        <div className="top">
            <div className="topLeft">
                <i className=" topIcon fa-brands fa-facebook-square"></i>
                <i className=" topIcon fa-brands fa-twitter-square"></i>
                <i className=" topIcon fa-brands fa-pinterest-square"></i>
                <i className=" topIcon fa-brands fa-instagram-square"></i>
            </div>
            <div className="topCenter">
                <ul className="topList">
                    <li className="topListItem">
                        <Link className="link" to="/" >Home</Link>
                    </li>
                    <li className="topListItem">
                        <Link className="link" to="about" >About</Link>
                    </li>
                    <li className="topListItem">
                        <Link className="link" to="contact" >Contact</Link>
                    </li>
                    <li className="topListItem">
                        <Link className="link" to="write" >Write</Link>
                    </li>
                    <li className="topListItem">
                        {user && "Logout"}
                    </li>
                </ul>
            </div>
            <div className="topRight">
                {
                    user ? (
                        <img
                            className="topImg"
                            src="/images/pf8.png"
                            alt="mage"
                        />
                    ) : (
                        <ul className="topList">
                            <li className="topListItem">
                                <Link to="/login" className="link" >Login</Link>
                            </li>
                            <li className="topListItem">
                                <Link to="/register" className="link" >Register</Link>
                            </li>
                        </ul>
                    )
                }
                <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
            </div>
        </div>
    )
}
