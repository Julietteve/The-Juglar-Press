import React from 'react';
import { 
    ArticleImg, 
    ArticleContainer, 
    Title, 
    Description, 
    SplitterBottom, 
    SplitterTop, 
    Source, 
    ImageContainer, 
    Overlay, 
    Eye, 
    EyeWrapper, 
    ReadMore, 
    UrlAnchor 
} from './styles'


const Article = ( { articleImg, mainTitle, intro, source, reference, url } ) => {
    const receivedImg = articleImg === null ? 'images/not-found.png' : articleImg;
    return (
        <ArticleContainer>
            <ImageContainer>
                <ArticleImg src={receivedImg} alt={reference}/>
                <Title>{mainTitle}</Title>
                <Description>{intro}</Description>
                <SplitterBottom/>
                <Source>{`Fuente : ${ source } `}</Source>
                <SplitterTop/>
                <Overlay>
                    <EyeWrapper>
                        <ReadMore>
                            Seguir leyendo ...
                        </ReadMore>
                        <UrlAnchor href={url} target="_blank"rel="noopener noreferrer">
                            <Eye src="images/eye.png"/>
                        </UrlAnchor>
                    </EyeWrapper>
                </Overlay>
            </ImageContainer>
        </ArticleContainer>
    );
};

export default Article;
