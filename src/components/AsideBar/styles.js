import styled from 'styled-components/macro';


export const Aside = styled.div `
    height: 200px;
    width: 100%;
    text-align: center;
`;

export const AsideWrapper = styled.aside `
display: flex;
  flex-direction: column;
  width: 15%;
  padding: 1%;
  padding-left: 0;
`;

export const Title = styled.div `
   margin: 10%;
   text-align: center;
   text-transform: uppercase;
   padding-top: 10%;
   padding-bottom: 10%;
   border-top: 1px gray solid;
   border-bottom: 1px gray solid;
   font-family: 'IM Fell English SC', serif;
   letter-spacing: 3px;
`;

export const Atenttion = styled.p `
    font-family: 'Anton', sans-serif;
    text-align: center;
    font-size: 0.8em;
    padding-top:5px;
    padding-bottom: 0;
    margin:0;
`;

export const Globus = styled.img `
    margin: auto 0;
    width: 70%;
`;

export const Trend = styled.p`
    text-align: center;
    font-family: 'IM Fell English SC', serif;
`;