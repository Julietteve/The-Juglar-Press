import styled, {keyframes} from 'styled-components/macro'


export const Container = styled.div`
    display: flex;
    justify-content: colum;
    align-items: center;
    flex-direction: center;
    padding: 30%;
`;

export const spin = keyframes`
    from {
        transform:rotate(0deg);
    }
    to {
        transform:rotate(360deg);
    }

`;

export const Wheel = styled.img`
    margin: 0 auto;
    filter: sepia(80%);
   -webkit-filter: sepia(80%);
   width: 30%;
   animation-name: ${spin};
 animation-duration: 5000ms;
  animation-iteration-count: infinite;
  animation-timing-function: linear; 
`;

