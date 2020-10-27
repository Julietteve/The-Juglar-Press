import React , {useState} from 'react';
import {useDispatch} from 'react-redux';
import {
  SplitterBottom, 
  Container, 
  SideBarOut, 
  SideBar, 
  ContainerInput, 
  SearchingBar, 
  SplitterTop,
  // Btn
} from './styles';
// import {FiSearch} from 'react-icons/fi'
import {setSearchKeyword} from '../../redux/actions'

const SearchBar = () => {
    const dispatch = useDispatch();
    const [keyword, setValue] = useState("");

    const dispatchSearch = (e)=>{
      if(e.key === 'Enter'){
        dispatch(setSearchKeyword(keyword));
      }
    }
    return (
      <div>
        <SplitterTop/>
          <Container>
             <SideBarOut>Free edition</SideBarOut>
                <ContainerInput>
                    <SideBar>B A</SideBar>
                        <SearchingBar
                            placeholder="Encuentre aqui lo que vino a buscar"
                            value={keyword}
                            onChange={(e)=>setValue(e.target.value)}
                            onKeyPress={dispatchSearch}
                        />
                       {/* <Btn onClick={()=>dispatch(setSearchKeyword(keyword))}><FiSearch/></Btn> */}
                    <SideBar>B A</SideBar>
                 </ContainerInput>
              <SideBarOut>Est 2020</SideBarOut>
          </Container>
        <SplitterBottom/>
      </div>
    );
};

export default SearchBar;