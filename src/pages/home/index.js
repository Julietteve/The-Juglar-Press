import React, {useState, useEffect} from 'react';
import { Container } from './styles';
import { getTextExcerpt, formatDate } from '../../utils';
import { AsideBar, NamePlate, SearchBar, NavBar, ArticleContainer } from '../../components';

const Home = () => {

    let now = new Date();
    let today = formatDate( now );

    const [articles, setArticles] = useState( [] );
    const [currentPage] = useState(1);
    const [articlesPerPage] = useState(10);

    useEffect( () => {
        fetch( `https://api.canillitapp.com/latest/${ today }` )
        .then( ( res ) => res.json() )
        .then( ( json ) => {
            const formattedRes = json.map( article => {
                return { 
                    id: article.id,
                    url: article.url, 
                    title: getTextExcerpt( article.title, 50 ), 
                    img_url: article.img_url, 
                    source_img: article.source_img, 
                    source_name: article.source_name,
                    date: article.date,
                }
            } )
            setArticles( formattedRes )
        } )
    }, [ today ] )
    
    const indexLastArticle = currentPage*articlesPerPage;
    const indexFirstArticle = indexLastArticle -articlesPerPage;
    const currentArticles = articles.slice(indexFirstArticle, indexLastArticle);

    return (


        <div>
            <NamePlate/>
            <SearchBar/>
            <Container>
                <NavBar/>
                <ArticleContainer articles={currentArticles}/>
            <AsideBar></AsideBar>
            </Container>
        </div>
    )
}

export default Home;
