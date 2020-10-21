import styled from 'styled-components/macro'

export const ArticleWrap = styled.div `
    width: 65%;
    padding:0;
`;

export const ArticleOutterBorder = styled.div `
    margin-top: 5%;
    padding :0;
    border-left: 2px solid #7A786A;
    border-right: 2px solid #7A786A;
   
`;

export const Welcome = styled.div `
   font-family: 'Ewert', cursive;
    text-align: center;
    padding-bottom:10px;
    font-size: 2.5em;
    letter-spacing: 5px;
    color:  #282723;
`;

export const Reader = styled.h2 `
    font-family: 'Old Standard TT', serif;
   padding-top: 0;
   font-size: 1em;
   font-weight: lighter;
   text-transform: uppercase;
   font-style: italic;
   text-align: center;
   letter-spacing: 3px;
   width: 100%; 
   border-bottom: 1px solid  #282723; 
   line-height: 0.1em;
   margin: 10px 0 20px; 
`;
export const ReaderSpan = styled.span `
    background:#F5F2D5; 
    padding:0 10px; 
`;

export const Slogan = styled.div `
    padding-left: 4%;
    padding-right: 4%;
    margin-bottom: 2%;
    display: flex;
    justify-content: center;
    flex-direction: column;
`;
