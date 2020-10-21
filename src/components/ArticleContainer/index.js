import React from 'react';
import { ArticleWrap, ArticleOutterBorder, Welcome, Reader, ReaderSpan, Slogan } from './styles'

const ArticleContainer = ( {articles} ) => {
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
                {articles}
            </ArticleOutterBorder>
        </ArticleWrap>

    );
};

export default ArticleContainer;
