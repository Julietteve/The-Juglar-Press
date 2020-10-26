import styled from 'styled-components/macro';

export const Container = styled.div`
    display: flex;
    flex-direction:row;
    justify-content: space-around;
`;

export const Footer = styled.div`
    display:flex;
    align-items:center;
    justify-content: center;
    height: 30px;
    flex-shrink: 0;
    font-family: 'Meie Script', cursive;
    font-size: 1.4em;
    color: black;
`;
 
export const MainWrapper = styled.div`
   flex: 1 0 auto;
`;
