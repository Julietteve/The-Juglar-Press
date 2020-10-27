import React from 'react';
import * as moment from 'moment';
import 'moment/locale/es';
import { Link } from 'react-router-dom';
import {SplitterTop, Name, Date, MobileIcon, ContainerNamePlate} from './styles';
import { FaBars } from 'react-icons/fa';
import { Container } from '../../pages/Main/styles';


const NamePlate = ({toggle}) => {
   
    const dateToFormat = moment().format('dddd LL'); 
    return (
        <div>
            <Link style={{textDecoration:'none', color:'#282723'}} to="/">
                <SplitterTop/>
                <Name>THE JUGLAR PRESS</Name>
                <MobileIcon onClick={toggle}>
                    <FaBars></FaBars>
                </MobileIcon>
            <Date>{dateToFormat}</Date>
            </Link>
        </div>
    )
};

export default NamePlate;
