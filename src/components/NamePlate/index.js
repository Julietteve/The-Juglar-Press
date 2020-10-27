import React from 'react';
import * as moment from 'moment';
import 'moment/locale/es';
import { Link } from 'react-router-dom';
import {SplitterTop, Name, Date, MobileIcon} from './styles';
import { FaBars } from 'react-icons/fa';

const NamePlate = ({toggle}) => {
   
    const dateToFormat = moment().format('dddd LL'); 
    return (
        <div>
            <Link style={{textDecoration:'none', color:'#282723'}} to="/">
                <SplitterTop/>
                <Name>THE JUGLAR PRESS</Name>
                <MobileIcon onClick={toggle}>
                    <FaBars/>
                </MobileIcon>
                <Date>{dateToFormat}</Date>
            </Link>
        </div>
    )
};

export default NamePlate;
