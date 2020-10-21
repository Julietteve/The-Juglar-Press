import React, {useEffect} from 'react';
import { useParams } from "react-router-dom";
import {useSelector, useDispatch} from 'react-redux';
import {dataFetching} from '../../utils/api/dataFetching';
import { Container } from './styles';
import { AsideBar, NamePlate, SearchBar, NavBar, ArticleContainer,ArticleList,Loading } from '../../components';
import { getCategoryId, getCategoryName } from '../../utils';
import {setCategory} from '../../redux/actions'

const Main = () => {

    const { id } = useParams();
    const {hasError, isLoading, keyword, category, articles} = useSelector((state) => state);
    const dispatch = useDispatch();

    useEffect(()=>{
        dataFetching(dispatch, keyword, category);
    }, [keyword,id,category,dispatch])

    return (
        <div>
            <NamePlate/>
            <SearchBar/>
                <Container>
                <NavBar/>
                <ArticleContainer 
                articles={isLoading ? <Loading></Loading> : <ArticleList articles={articles}/>}/>
            <AsideBar/>
            </Container>
        </div>
    )
}

export default Main;
