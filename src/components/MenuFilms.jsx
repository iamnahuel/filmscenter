import React from "react";

import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider,

} from '@chakra-ui/react'
import { PhoneIcon, AddIcon, WarningIcon, HamburgerIcon, ExternalLinkIcon, RepeatIcon, EditIcon } from '@chakra-ui/icons'




import { Avatar, AvatarBadge, AvatarGroup, WrapItem, IconButton } from '@chakra-ui/react'

const MenuFilms = () => {
    return (
        <div className="menu">
            <WrapItem>
                <Avatar size='md' name='Ryan Florence' src='https://bit.ly/ryan-florence' mr={"5"} />{' '}
            </WrapItem>
            <Menu>
                <MenuButton
                    as={IconButton}
                    aria-label='Options'
                    icon={<HamburgerIcon />}
                    variant='outline'
                    color={"white"}
                />
                <MenuList>
                    <MenuItem icon={<AddIcon />} command='⌘T'>
                       Buscar
                    </MenuItem>
                    <MenuItem icon={<ExternalLinkIcon />} command='⌘N'>
                       Mas vistas
                    </MenuItem>
                    <MenuItem icon={<RepeatIcon />} command='⌘⇧N'>
                       Categorias
                    </MenuItem>
                    <MenuItem icon={<EditIcon />} command='⌘O'>
                       Ultimos estrenos
                    </MenuItem>
                </MenuList>
            </Menu>


        </div>
    )
}

export default MenuFilms;