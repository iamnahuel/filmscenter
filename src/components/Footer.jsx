import React from "react";
import '../styles/footer.css';
import { Text } from '@chakra-ui/react'

const Footer = () => {

    return (
        <>
            <div className="footer">
                <Text as='i' color={"white"}>I am Nahuel ®</Text>
                <br />
                <Text as='samp' color={"white"}>Santa Rosa | La Pampa | Argentina</Text>
            </div>
        </>
    )
}

export default Footer;
