import styled from "styled-components/macro";

export const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  padding: 10%;
  text-decoration:none ;
`;

export const NotFoundTxt = styled.h4`
  text-align: center;
  font-family: "Old Standard TT", serif;
  text-transform: uppercase;
  color: #282723;
  font-size: 1.5em;
  margin: 0;
  padding: 0;
`;

export const Error = styled.h1`
  color: #282723;
  text-align: center;
  font-family: "Old Standard TT", serif;
  text-transform: uppercase;
  margin: 0;
  padding: 0;
  font-size: 5em;
`;

export const Back = styled.div`
  color: #282723;
  text-align: center;
  font-family: "Old Standard TT", serif;
  text-transform: uppercase;
  padding: 0;
  font-size: 1em;
  margin-top: 20%;

  @media only screen and (max-width: 768px) {
    margin-top: 70%;
  }
`;

