import React from 'react'
import { Link } from 'react-router-dom'
import "./Register.css"

export default function Register() {
    return (
        <div className="register">
            <span className="registerTitle">Register</span>
            <form className="registerForm">
                <label>User Name</label>
                <input className="registerInput" type="text" placeholder="Enter your username..."></input>
                <label>Email</label>
                <input className="registerInput" type="text" placeholder="Enter your email..."></input>
                <label>Password</label>
                <input className="registerInput" type="password" placeholder="Enter your password..."></input>
                <button className="registerButton">Register</button>
            </form>
            <button className="registerLoginButton">
                <Link to="/login" className="link">Login</Link>
            </button>
        </div>
    )
}
