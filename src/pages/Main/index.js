import React, {useEffect, useState} from 'react';
import { useParams } from "react-router-dom";
import {useSelector, useDispatch} from 'react-redux';
import {dataFetching} from '../../utils/api/dataFetching';
import {getCategoryName} from '../../utils/index'
import {setCategory} from '../../redux/actions'
import { Container } from './styles';
import { AsideBar, NamePlate, SearchBar, NavBar, ArticleContainer} from '../../components';

const Main = () => {

    const { id } = useParams();
    const {hasError, isLoading, keyword, category, articles} = useSelector((state) => state);
    const dispatch = useDispatch();

    if(getCategoryName(category)!== id){
        dispatch(setCategory(id));
    }
    
    useEffect(()=>{
        dataFetching(dispatch, keyword, category);
    }, [keyword,id,category,dispatch]);


    const [currentPage] = useState(1);
    const [articlesPerPage] = useState(10);

    const indexOfLastArticle = currentPage * articlesPerPage;
    const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
    const currentArticles = articles.slice(indexOfFirstArticle, indexOfLastArticle);

    return (
        
        <div>
            <NamePlate/>
            <SearchBar/>
                <Container>
                <NavBar/>
                <ArticleContainer 
                articles= {currentArticles} 
                hasError={hasError} 
                isLoading={isLoading} 
                categoryName={getCategoryName(category)}
                keywordSearch={keyword}
                />
            <AsideBar/>
            </Container>
        </div>
    )
}

export default Main;
