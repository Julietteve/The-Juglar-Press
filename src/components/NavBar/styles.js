import styled from "styled-components/macro";

export const Category = styled.p`
  font-size: 1rem;
  text-transform: uppercase;
  font-weight: bolder;
  text-align: center;
  font-family: "Old Standard TT", serif;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
  }

  @media screen and (max-width: 992px) {
    font-size: 0.8rem;
  }
`;

export const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  width: 15%;
  padding: 1%;
  padding-right: 0;

  @media only screen and (max-width: 768px) {
    display: none;
  }

  @media screen and (max-width: 992px) {
    width: 20%;
  }
`;

export const CategoryTitle = styled.div`
  margin: 10%;
  text-align: center;
  text-transform: uppercase;
  padding-top: 12%;
  padding-bottom: 12%;
  border-top: 1px gray solid;
  border-bottom: 1px gray solid;
  font-family: "IM Fell English SC", serif;
  letter-spacing: 3px;

  @media screen and (max-width: 992px) {
    font-size: 0.8rem;
    letter-spacing: 1px;
  }
`;

export const Hand = styled.img`
  padding: 20%;
  padding-bottom: 5%;
  margin: 0 auto;
  width: 70%;
`;
