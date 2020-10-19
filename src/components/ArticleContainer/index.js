import React from 'react';
import Article from './../Article'
import { ArticleWrap, ArticleOutterBorder, Welcome, Reader, ReaderSpan, MainContainer, Slogan } from './styles'

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
                <MainContainer>
                    {/* {
                    articles.map( ( article) => (
                        <Article key={article.id}
                            articleImg={
                                article.img_url
                            }
                            mainTitle={
                                article.title
                            }
                            source={
                                article.source_name
                            }
                            url={
                                article.url
                            }/>
                    ) )
                }  */}
                </MainContainer>

            </ArticleOutterBorder>

        </ArticleWrap>

    );
};

export default ArticleContainer;
