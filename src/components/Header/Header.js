import React from 'react'
import './style.scss'
function Header({theme, setTheme}) {
    const handleDawnTheme = () =>{
        localStorage.setItem("theme", "dawn-theme")
        theme !== "dawn-theme" && setTheme("dawn-theme")
    }
    const handleDarkTheme = () => {
        localStorage.setItem("theme", "dark-theme")
        theme !== "dark-theme" && setTheme("dark-theme")
    }
    return (
        <div id="header">
            <div className="theme-container">
                <div title="Dawn Theme" onClick={()=>handleDawnTheme()} className="dawn-theme theme"></div>
                <div title="Dark Theme" onClick={()=>handleDarkTheme()} className="dark-theme theme"></div>
            </div>
            <h1 className="title">to do list.</h1>
        </div>
    )
}

export default React.memo(Header);