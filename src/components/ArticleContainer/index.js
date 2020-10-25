import React from 'react';
import  {ArticleList, Loading, HasError} from '../index';
import { ArticleWrap, ArticleOutterBorder, Welcome, Reader, ReaderSpan, Slogan, CategoryName, Keyword, Key} from './styles'

const ArticleContainer = ( {articles, hasError, isLoading, categoryName, keywordSearch} ) => {
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
                         {keywordSearch && !isLoading && <Keyword>{`Resultados para :  ${keywordSearch}`}</Keyword>}
                         {articles && <ArticleList articles={articles}/>}
                         {isLoading && <Loading/>}
                         {hasError && !isLoading && <HasError/>}
            </ArticleOutterBorder>
        </ArticleWrap>

    );
};

export default ArticleContainer;
