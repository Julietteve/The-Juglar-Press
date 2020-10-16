import React from 'react';
import {SplitterBottom, Container, SideBarOut, SideBar, ContainerInput, SearchingBar, SplitterTop} from './styles';


const SearchBar = () => {
    return (
        <div>
        <SplitterTop/>
          <Container>
             <SideBarOut>Free edition</SideBarOut>
                <ContainerInput>
                    <SideBar>B A</SideBar>
                    <SearchingBar
                         placeholder="Encuentre aqui lo que vino a buscar"
                    />
                    <SideBar>B A</SideBar>
                 </ContainerInput>
              <SideBarOut>Est 2020</SideBarOut>
          </Container>
        <SplitterBottom/>
        </div>
    );
};

export default SearchBar;