import React from 'react'
import Header from '../../components/header/Header'
import Posts from '../../components/posts/Posts'
import SideBar from '../../components/sidebar/SideBar'
import "./Home.css"

export default function Home() {
    return (
        <div>
            <>
                <Header />
                <div className="home">
                    <Posts />
                    <SideBar />
                </div>
            </>
        </div>
    )
}
