import React from 'react';
import { Container } from './styles';
import { AsideBar, NamePlate, SearchBar, NavBar, ArticleContainer } from '../../components';

const Home = () => {
    return (
        <div>
            <NamePlate/>
            <SearchBar/>
            <Container>
                <NavBar/>
                <ArticleContainer/>
            <AsideBar></AsideBar>
            </Container>
        </div>
    )
}

export default Home;
