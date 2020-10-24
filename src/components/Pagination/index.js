import React from 'react';
import {PaginationContainer, PaginationItem, Page} from './styles'

const Pagination = ({articlesPerPage, totalArticles,paginate}) => {
    const pageNumbers = [];
    for(let i = 1; i<= Math.ceil(articlesPerPage/totalArticles); i++){
        pageNumbers.push(i);
    }

    return (
        <PaginationContainer>
            {pageNumbers.map(number=>(
                <PaginationItem key={number}>
                    <Page onClick={() => paginate(number)} href= "!#" >{number}</Page>
                </PaginationItem>
            ))}
        </PaginationContainer>
    );
};



export default Pagination;