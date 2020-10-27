import React, {useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';
import {
    Aside,
    AsideWrapper,
    Title,
    Atenttion,
    Globus,
    Trend,
    TrendContainer,
    Trendings
} from './styles';
import {formatDate} from '../../utils'
import {setSearchKeyword} from '../../redux/actions'

const AsideBar = () => {

    const dispatch = useDispatch();
    let now = new Date();
    let today = formatDate( now );
    const [trends, setTrends] = useState([]);

    useEffect(()=>{
        fetch(`https://api.canillitapp.com/trending/${today}/50`)
        .then( res=> res.json())
        .then (response =>{
            setTrends(response.keywords)
        })
    },[today])

    const dispatchSearch = (e)=>{
          dispatch(setSearchKeyword(e.target.value));
    }
    
    return (
        <AsideWrapper>
            <Aside>
                <Title>Tendencias
                    <Atenttion>¡Mire Mire Mire!</Atenttion>
                </Title>
                <Globus src="images/globus.png"></Globus>
                <Trendings>☆ Busquedas del día ☆ </Trendings>
                <TrendContainer>{trends.map(trend=><Trend value={trend} onClick={dispatchSearch}>{`  ${trend} `}</Trend>)}</TrendContainer>
            </Aside>
        </AsideWrapper>
    );
};

export default AsideBar;
