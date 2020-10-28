import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Main from './pages/Main';
import {NotFound} from './components/index'
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
            <Route path="/:id" component={Main}/>
            <Route exact path="/" component={Main}/>
            <Route path="*" exact={true} component={NotFound}/>
        </Switch>
      </BrowserRouter>
    </div>
  )
};

export default App;
