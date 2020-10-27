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
  
  @media only screen and (max-width: 600px) {
    display: none;
  }

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

export const Trend = styled.button`
    color:#282723 ;
    text-align: justify;
    text-justify: inter-word;
    font-size: 0.9em;
    font-family: 'IM Fell English SC', serif;
    border-color: transparent;
    background-color: transparent;
    padding: 1%;
    transition: all .2s ease-in-out; 
    cursor: pointer;

    :focus{
        outline:none
    }
    :hover{
    transform: scale(1.1);
    color: #7A786A;
  }

`;

export const TrendContainer = styled.div`
    padding: 5px;
    margin: 5%;
    display:flex;
    flex-direction:row;
    flex-wrap:wrap;
    justify-content: space-evenly;
`;

export const Trendings = styled.div`
   font-family: 'IM Fell English SC', serif;
    text-align: center;
    font-size: 1em;
    border-radius: 25px;
    border: 1px solid #7A786A;
    color: #282723;
    padding: 2%;
    margin: 2%;


`;