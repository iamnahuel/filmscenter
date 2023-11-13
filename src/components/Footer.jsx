import React from "react";
import '../styles/footer.css';
import { Text } from '@chakra-ui/react'
import ImgFacebook from "../images/icono-facebook.jpg";
import ImgInstragram from "../images/icono-instagram.jpg";
import { Avatar, AvatarBadge, AvatarGroup } from '@chakra-ui/react';
import { Image } from '@chakra-ui/react'

const Footer = () => {

    return (
        <>
            <footer className="footer">
                <div>
                    <Text as='i' color={"white"} fontSize={"1.4rem"}>I am Nahuel ®</Text>
                    <br />
                    <Text as='samp' color={"white"} fontSize={"1.4rem"}>Santa Rosa | La Pampa | Argentina</Text>
                </div>
                <div className="iconosRedes">
                    <AvatarGroup spacing='1rem'>
                        <a href="https://www.facebook.com/" target="_blank"> <Avatar m={2} w={[10, 20, 30]} h={[10, 20, 30]} src={ImgFacebook} title="Facebook" /></a>
                        <a href="https://www.instagram.com/" target="_blank"><Avatar m={2} w={[10, 20, 30]} h={[10, 20, 30]} src={ImgInstragram} title="Instagram" /></a>
                    </AvatarGroup>
                </div>
            </footer>
        </>
    )
}

export default Footer;
