import React from 'react';
import {Container, LoadingText} from './styles'

const Loading = () => {
    return (
        <div>
            <Container>
              <LoadingText>Cargando</LoadingText>
            </Container>
        </div>
    );
};

export default Loading;