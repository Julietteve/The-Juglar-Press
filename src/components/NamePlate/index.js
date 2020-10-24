import React from 'react';
import * as moment from 'moment';
import 'moment/locale/es';
import { Link } from 'react-router-dom';
import {SplitterTop, Name, Date} from './styles';


const NamePlate = () => {
   
    const dateToFormat = moment().format('dddd LL'); 
    return (
        <div>
            <Link style={{textDecoration:'none', color:'#282723'}} to="/">
                <SplitterTop/>
                <Name>THE JUGLAR PRESS</Name>
            <Date>{dateToFormat}</Date>
            </Link>
        </div>
    )
};

export default NamePlate;
