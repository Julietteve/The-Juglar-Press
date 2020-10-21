import React from 'react';
import {useDispatch} from 'react-redux';
import {SplitterBottom, Container, SideBarOut, SideBar, ContainerInput, SearchingBar, SplitterTop} from './styles';
import {setSearchKeyword} from '../../redux/actions'

const SearchBar = () => {

    const dispatch = useDispatch();
    return (
        <div>
        <SplitterTop/>
          <Container>
             <SideBarOut>Free edition</SideBarOut>
                <ContainerInput>
                    <SideBar>B A</SideBar>
                    <SearchingBar
                         placeholder="Encuentre aqui lo que vino a buscar"
                         onClick={(e)=>dispatch(setSearchKeyword(e.target.value))}
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