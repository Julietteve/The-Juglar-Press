import React from 'react';
import {
    NavContainer, 
    Icon, 
    CloseIcon,
    SideBarWrapper,
    SideBarMenu,
    SideBarLink, 
    Hand,
    Category
} from './styles'
import { getCategoryName } from "../../utils";

const MobileNavBar = ({isOpen,toggle}) => {

    const categoryName = [];
    for(let i = 1; i<=6 ; i++){
        categoryName.push(getCategoryName(i));
    }

    return (
        <NavContainer  isOpen={isOpen} onClick={toggle}>
            <Icon onClick={toggle}>
                <CloseIcon/>
            </Icon>
            <SideBarWrapper>
                <SideBarMenu>
                    <Hand src="images/vintage-hand.png"></Hand>
                    <Category>Categorias</Category>
                        {
                        categoryName.map((category) =>
                        <SideBarLink style={{textDecoration:'none', color:'#282723'}} to={`/${category}`}>
                        {category}
                        </SideBarLink>)
                        }
                </SideBarMenu>
            </SideBarWrapper>
        </NavContainer>
    );
};

export default MobileNavBar;