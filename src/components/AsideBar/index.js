import React from 'react';
import {
    Aside,
    AsideWrapper,
    Title,
    Atenttion,
    Globus,
    Trend
} from './styles';

const AsideBar = ({trends}) => {
    return (
        <AsideWrapper>
            <Aside>
                <Title>Tendencias
                    <Atenttion>¡Mire Mire Mire!</Atenttion>
                </Title>
                <Globus src="images/globus.png"></Globus>
                <Trend>{trends}</Trend>
            </Aside>
        </AsideWrapper>
    );
};

export default AsideBar;
