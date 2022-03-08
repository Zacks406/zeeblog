import React from 'react'
import "./Settings.css"
import SideBar from "../../components/sidebar/SideBar"

export default function Settings() {
    return (
        <div className="settings">
            <div className="settingsWrapper">
                <div className="settingsTitle">
                    <div className="settingsUpdateTitle">Update Your Account</div>
                    <div className="settingsDeleteTitle">Delete Your Account</div>
                </div>
                <form className="settingsForm">
                    <label>Profile Picture</label>
                    <div className="settingsPP">
                        <img
                            className="settingsImg"
                            src="/images/pff1.jpg"
                            alt="mage"
                        />
                        <label htmlFor="fileInput">
                            <i className="settingsPPIcon far fa-user-circle"></i>
                        </label>
                        <input type="file" id="fileInput" style={{ display: "none" }}></input>
                    </div>
                    <label>UserName</label>
                    <input type="text" placeholder="zacks"></input>
                    <label>Email</label>
                    <input type="email" placeholder="zacks.haruna@gmail.com"></input>
                    <label>Password</label>
                    <input type="password"></input>
                    <button className="settingsSubmit">Update</button>

                </form>
            </div>
            <SideBar />
        </div>
    )
}
