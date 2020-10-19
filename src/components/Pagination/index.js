import React from 'react';

const Pagination = ({articlesPerPage, totalArticles}) => {
    const pageNumbers = [];
    for(let i = 1; i<= Math.ceil(articlesPerPage/totalArticles); i++){
        pageNumbers.push(i);
    }

    return (
        <div>
            {pageNumbers.map(number=>(
                <ul>
                <li key={number}>
                    <a href= "!#">{number}</a>
                </li>
                </ul>
            ))}
        </div>
    );
};

export default Pagination;