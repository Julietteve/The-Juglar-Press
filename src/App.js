import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
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
       <Switch>
        <Route exact path="/:id" children={<Main></Main>}>
        </Route>
        <Route path="/">
        <Main></Main>
        </Route>
       </Switch>
    </BrowserRouter>
  </div>
  )
};

export default App;
