import React from 'react';
import { Container } from './styles';
import { getTextExcerpt, formatDate } from '../../utils';
import { AsideBar, NamePlate, SearchBar, NavBar, ArticleContainer } from '../../components';

const Home = () => {

    let now = new Date();
    let today = formatDate( now );

    const [articles, setArticles] = React.useState( [] );
    React.useEffect( () => {
        fetch( `https://api.canillitapp.com/latest/${ today }` )
        .then( ( res ) => res.json() )
        .then( ( json ) => {
            const formattedRes = json.map( article => {
                return { 
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

    const [trends, setTrends] = React.useState([]);
    React.useEffect( () => {
        fetch(`https://api.canillitapp.com/trending/${ today }/10`)
        .then((res)=> res.json())
        .then( (json) =>{
            console.log(json)
            setTrends(json);
        })
    },[today])
    return (

        <div>
            <NamePlate/>
            <SearchBar/>
            <Container>
                <NavBar/>
                <ArticleContainer articles={articles}/>
                <AsideBar></AsideBar>
            </Container>
        </div>
    )
}

export default Home;
