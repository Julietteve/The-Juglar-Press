import React from 'react';
import { ArticleList, Loading, HasError } from '../index';
import Pagination from "react-js-pagination";
import { 
    ArticleWrap, 
    ArticleOutterBorder, 
    Welcome, 
    Reader, 
    ReaderSpan, 
    Slogan, 
    CategoryName, 
    Keyword, 
    PaginationContainer } from './styles'

const ArticleContainer = ( { 
    articles, 
    hasError, 
    isLoading, 
    categoryName, 
    keywordSearch, 
    activePage, 
    onChange, 
    totalItemsCount } ) => 
    {
    return (
        <ArticleWrap>
            <ArticleOutterBorder>
                <Slogan>
                    <Welcome>El robusto newsfeed</Welcome>
                    <Reader>
                        <ReaderSpan>Para el lector distinguido
                        </ReaderSpan>
                    </Reader>
                </Slogan>
                    {categoryName && !keywordSearch && !isLoading && <CategoryName>{categoryName}</CategoryName>}
                    {keywordSearch && !isLoading && <Keyword>{`Ud. buscó "${ keywordSearch }"`}</Keyword>}
                    {articles && <ArticleList articles={articles}/>}
                    {isLoading && <Loading/>}
                    {hasError && !isLoading && <HasError/>}
                <PaginationContainer>
                    <Pagination activePage={activePage}
                        itemsCountPerPage={10}
                        totalItemsCount={totalItemsCount}
                        pageRangeDisplayed={10}
                        onChange={onChange}/>
                </PaginationContainer>
            </ArticleOutterBorder>
        </ArticleWrap>
    );
    };

export default ArticleContainer;
