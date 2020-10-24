import React from 'react';
import  {ArticleList, Loading, HasError, Pagination} from '../index';
import { ArticleWrap, ArticleOutterBorder, Welcome, Reader, ReaderSpan, Slogan, CategoryName} from './styles'

const ArticleContainer = ( {articles, hasError, isLoading, categoryName, articlesPerPage, totalArticles, paginate} ) => {
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
                         {categoryName && <CategoryName>{categoryName}</CategoryName>}
                         {articles && <ArticleList articles={articles}/>}
                         {isLoading && <Loading/>}
                         {hasError && <HasError/>}
                         <Pagination
                         articlesPerPage={articlesPerPage}
                         totalArticles={totalArticles}
                         paginate={paginate}
                         ></Pagination>
            </ArticleOutterBorder>
        </ArticleWrap>

    );
};

export default ArticleContainer;
