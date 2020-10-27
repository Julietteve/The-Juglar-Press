import styled from 'styled-components/macro';
import {FaTimes} from 'react-icons/fa'
import {Link as Links} from 'react-router-dom';

export const NavContainer = styled.aside`
  display:flex;
  justify-content:center;
  position: fixed;
  z-index: 999;
  width:100%;
  height:100%;
  background-color:#F5F2D5;
  align-items:center;
  top:0;
  left:0;
  transition: 0.3 ease-in-out;
  opacity: ${({isOpen})=>(isOpen ? '100%' : '0')};
  top: ${({isOpen})=>(isOpen ? '0' : '-100%')};
`;

export const CloseIcon = styled(FaTimes)`
  color: #282723;
`;

export const Icon = styled.div`
  display:flex;
  justify-content:center;
  position:absolute;
  top:3rem;
  left:3rem;
  background:transparent;
  font-size:2rem;
  cursor:pointer;
  outline:none;
`;

export const SideBarLink =styled(Links)`
  font-size: 1rem;
  text-decoration:none;
  list-style:none;
  text-decoration: none;
  color: #282723;
  cursor:pointer;
  text-transform: uppercase;
  font-weight: bolder;
  text-align: center;
  font-family: 'Old Standard TT', serif;
  transition: all .2s ease-in-out; 
  margin:3%;
  cursor: pointer;

   &:hover{
    transform: scale(1.1);
  }
`;

export const SideBarWrapper= styled.div`
  margin:3%;
  color: black;
`;

export const SideBarMenu= styled.ul`
  display:flex;
  justify-content:center;
  flex-direction:column;
  text-align:center;
`;


export const Hand = styled.img`
  padding:5%;
  margin : 0 auto;
  width: 30%;
`;

export const Category=styled.div`
  margin : 0 auto;
  margin-bottom: 4%;
  text-align:center;
  font-family: 'IM Fell English SC', serif;
  text-transform: uppercase;
  border-top: 1px gray solid;
  border-bottom: 1px gray solid;
  width:50%;
  letter-spacing: 3px;
  padding-top: 5%;
  padding-bottom: 5%;
`;



