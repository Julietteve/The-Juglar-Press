import styled from 'styled-components/macro';

export const SplitterTop = styled.div`
  border-top: 2px #7A786A solid;
  border-bottom: 2px #282723 solid;
  height: 3px;

  @media only screen and (max-width: 600px) {
  margin-bottom: 5%;
  }
`;

export const NameplateImg = styled.img`
  width : 10%;
  display: block;
  padding: 0;
  margin: 0 auto;
`;

export const Name = styled.h1`
  text-align: center;
  font-family: 'Old Standard TT', serif;
  font-size:5em;
  margin:0;
  margin-top: 1%;
  padding:0;

  @media only screen and (max-width: 600px) {
  font-size: 4em;
  }
`;

export const MobileIcon = styled.div`
  display: none;

  @media only screen and (max-width: 600px) {
    display:block;
    position: absolute;
    top:3rem;
    left:3rem;
    transform: (-100%,60%);
    font-size:1.5rem;
    cursor:pointer;
    color: #282723;
    font-size:2em;
     
  }

`;

export const Date = styled.p`
  text-align: center;
  font-size: 0.8em;
  font-family: 'Old Standard TT', serif;
  text-transform: uppercase;
  padding: 0;
  margin:0;
  margin-bottom: 1%;
  letter-spacing: 2px;

  @media only screen and (max-width: 600px) {
    margin-bottom:5%;
  }
`;
