import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Main from './pages/Main';
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
      <Route  path="/" component={Main}/>
    </BrowserRouter>
  </div>
  )
};

export default App;
