import React from 'react';
import {Nav, Category, CategoryTitle, Hand} from './styles'
import { Link } from "react-router-dom";
import {getCategoryName} from '../../utils/index'

const NavBar = () => {

    const categoryName = [];
    for(let i = 1; i<=6 ; i++){
        categoryName.push(getCategoryName(i));
    }
    return (
        <Nav>
                <Hand src="images/vintage-hand.png"></Hand>
                <CategoryTitle>Categorias</CategoryTitle>
                {
                    categoryName.map((category) =>
                    <Link style={{textDecoration:'none', color:'#282723'}} to={`/${category}`}>
                        <Category>{category}</Category>
                    </Link>)
                }
        </Nav>
    );
};

export default NavBar;
