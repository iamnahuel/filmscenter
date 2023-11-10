import React from "react";
import MenuFilms from './MenuFilms.jsx'
import '../styles/header.css';



const Header = () => {
    return (
        <>
            <div className="header">
                <MenuFilms />
                <h1 className="tituloHeader">CENTER FILMS</h1>

            </div>

        </>
    )
}

export default Header;

