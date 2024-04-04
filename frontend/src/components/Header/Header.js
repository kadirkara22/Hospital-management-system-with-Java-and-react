import React from 'react'
import "./header.css"

export const menus = [
    {
        name: "home",
        path: "/",

    },
    {
        name: "doctors",
        path: "/doctors/"
    },
    {
        name: "departmans",
        path: "/departmans/",
    },


]

const Header = () => {
    return (
        <div className="header">
            <div className="header_title">Hospital MS</div>
            <div className="header_menu">
                <div >Doktorlarımız</div>
                <div>Bölümlerimiz</div>
                <div>Contact Us</div>
                <div>About Us</div>
            </div>
        </div>
    )
}

export default Header
