import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './pages/home';
import MasterDetail from './pages/masterDetail';
import {createGlobalStyle} from 'styled-components/macro';

const GlobalStyle = createGlobalStyle`
  html{
    margin-left:5%;
    margin-right:5%;
    background-color: #F5F2D5;
    box-sizing: border-box;
  }    
`;

const App = () => {
  return(
  <div>
    <BrowserRouter>
       <GlobalStyle/>
      <Route  path="/" component={Home}/>
      <Route  path="/categorias" component={MasterDetail}/>
    </BrowserRouter>
  </div>
  )
};

export default App;
