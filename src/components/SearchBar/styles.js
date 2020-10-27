import styled from 'styled-components/macro';

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const ContainerInput = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  border-left: 1px solid gray;
  border-right : 1px solid gray;
  vertical-align:middle;

  @media only screen and (max-width: 600px) {
      border:none;
  }
`;

export const Nameplate = styled.h2`
 text-align: center;
 text-transform: uppercase;
 user-select: none;
`;

export const SplitterTop = styled.div`
  border-top: 2px #7A786A solid;
  border-bottom: 2px #282723 solid;
  height: 3px;
`;

export const SplitterBottom = styled.div`
  border-bottom: 2px #7A786A solid;
  border-top: 2px #282723 solid;
  height: 3px;
`;

export const SearchingBar = styled.input`
    width : 100%;
    font-size: 1.5rem;
    background-color: #F5F2D5;
    border: none;
    outline:none;
    font-family: 'Old Standard TT', serif;
    font-weight: lighter;
    text-transform:uppercase;
    text-align: center;
    align-items:center;

    @media only screen and (max-width: 600px) {
      font-size: 0.8em;
  }
`;

export const SideBar= styled.p`
  width: 20%;
  font-size: 0.9rem;
  color: gray;
  text-align: center;
  font-family: 'Anton', sans-serif;
  color: #020202;
`; 

export const SideBarOut= styled.p`
  width: 20%;
  font-size: 1rem;
  color: gray;
  text-align: center;
  font-family: 'Meie Script', cursive;
  color: #020202;

  @media only screen and (max-width: 600px) {
    display:none;
    }
`;

export const Btn = styled.button`
  display:flex;
  font-size:0.8em;
  align-items:center;
  font-size:2rem;
  color:#7A786A;
  outline:none;
  border:transparent;
  font-family: 'Old Standard TT', serif;
  background-color:transparent;
  cursor: pointer;
  
`;

