import React from "react";
import MenuFilms from './MenuFilms.jsx'
import '../styles/header.css';
import { Text } from '@chakra-ui/react'


const Header = () => {
    return (
        <>
            <div className="header">
                <MenuFilms />
                <Text fontSize='6xl' color={"black"} fontFamily={'Poppins'}>CENTER FILMS</Text>
            </div>
        </>
    )
}

export default Header;

