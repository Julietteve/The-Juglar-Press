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
    font-family: 'Meie Script', cursive;
    font-size: 1em;
    color: black;
    bottom:0;
    flex-shrink: 0;
`;
 
export const MainWrapper = styled.div`
    min-height:100%;
`;
