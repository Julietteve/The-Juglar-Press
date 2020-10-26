import React from 'react';
import {Container, Wheel} from './styles'

const Loading = () => {
    return (
        <div>
            <Container>
                <Wheel src="images/engine.png"></Wheel>
            </Container>
        </div>
    );
};

export default Loading;