import React, {useEffect, useState} from 'react';
import { useParams } from "react-router-dom";
import {useSelector, useDispatch} from 'react-redux';
import {dataFetching} from '../../utils/api/dataFetching';
import {getCategoryName} from '../../utils/index'
import {setCategory} from '../../redux/actions'
import { Container, Footer, MainWrapper} from './styles';
import { 
    AsideBar, 
    NamePlate, 
    SearchBar, 
    NavBar, 
    ArticleContainer, 
    MobileNavBar
} from '../../components';

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

    const handlePageChange = ( pageNumber ) => {
        setCurrentPage( pageNumber )
     };

    const articlesPerPage = 10;
    const [ activePage, setCurrentPage ] = useState( 1 );
    const [isOpen, setIsOpen]= useState(false);

    const toggle = () =>{setIsOpen(!isOpen)}

    const indexOfLastArticle  = activePage * articlesPerPage;
    const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
    const currentArticles     = articles.slice( indexOfFirstArticle, indexOfLastArticle );

    return (
        <MainWrapper>
            <div>
                <NamePlate  toggle={toggle}/>
                <SearchBar/>
                <Container>
                    <NavBar/>
                    <MobileNavBar isOpen={isOpen} toggle={toggle}/>
                    <ArticleContainer 
                        articles= {currentArticles} 
                        hasError={hasError} 
                        isLoading={isLoading} 
                        categoryName={getCategoryName(category)}
                        keywordSearch={keyword}
                        activePage={ activePage }
                        totalItemsCount={ articles.length }
                        onChange={ handlePageChange }
                     />
                    <AsideBar/>
                </Container>
                <Footer>Printed with Love</Footer>
            </div>
        </MainWrapper>
    )
}

export default Main;
