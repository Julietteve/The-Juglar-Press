import React from 'react';
import Article from './../Article'
import {MainContainer} from './styles'

const ArticlesList = ({articles}) => {
    return (

        <MainContainer>
        {
        articles.map((article) => (
            <Article key={article.id}
                articleImg={article.img_url}
                mainTitle={article.title}
                source={article.source_name}
                url={article.url}/>
        ) )
    } 
    </MainContainer>
    );
};

export default ArticlesList;