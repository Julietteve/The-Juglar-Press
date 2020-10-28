import styled from "styled-components/macro";

export const ArticleWrap = styled.div`
  width: 65%;
  padding: 0;
  height: auto;

  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const ArticleOutterBorder = styled.div`
  margin-top: 5%;
  padding: 0;
  border-left: 2px solid #7a786a;
  border-right: 2px solid #7a786a;
`;

export const Welcome = styled.div`
  font-family: "Ewert", cursive;
  text-align: center;
  padding-bottom: 10px;
  font-size: 2.5em;
  letter-spacing: 5px;
  color: #282723;

  @media only screen and (max-width: 768px) {
    font-size: 1.5em;
    letter-spacing: 3px;
  }
`;

export const Reader = styled.h2`
  font-family: "Old Standard TT", serif;
  padding-top: 0;
  font-size: 1em;
  font-weight: lighter;
  text-transform: uppercase;
  font-style: italic;
  text-align: center;
  letter-spacing: 3px;
  width: 100%;
  border-bottom: 1px solid #282723;
  line-height: 0.1em;
  margin: 10px 0 20px;

  @media only screen and (max-width: 768px) {
    font-size: 0.8em;
  }
`;
export const ReaderSpan = styled.span`
  background: #f5f2d5;
  padding: 0 10px;
`;

export const Slogan = styled.div`
  padding-left: 4%;
  padding-right: 4%;
  margin-bottom: 2%;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;
export const CategoryName = styled.div`
  color: #f5f2d5;
  font-family: "Rye", cursive;
  font-size: 2em;
  letter-spacing: 2px;
  padding: 2%;
  text-align: center;
  text-transform: uppercase;
  padding: 0;
  background-color: #282723;
  width: 90%;
  margin: 0 auto;

  @media only screen and (max-width: 768px) {
    font-size: 1.8em;
  }
`;

export const Keyword = styled.div`
  color: #f5f2d5;
  font-family: "Rye", cursive;
  font-size: 1.5em;
  letter-spacing: 2px;
  padding: 2%;
  text-align: center;
  padding: 1%;
  background-color: #282723;
  width: 90%;
  margin: 0 auto;
  font-style: italic;
  text-transform: uppercase;

  @media only screen and (max-width: 768px) {
    font-size: 1.5em;
  }
`;

export const PaginationContainer = styled.div`
  ul {
    display: flex;
    justify-content: center;
    align-content: center;
    align-items: center;
    text-align: center;
    padding: 2%;
  }

  ul li {
    margin: 2%;
    list-style: none;
    display: inline;
  }

  a {
    font-size: 1.2em;
    text-decoration: none;
    color: #282723;
    font-family: "Old Standard TT", serif;
    padding: 2%;
    transition: all 0.2s ease-in-out;
  }

  a:hover {
    transform: scale(1.2);
    color: #7a786a;
  }
`;
