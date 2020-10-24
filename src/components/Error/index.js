import React from 'react';
import {Container, ErrorText} from './styles'

const HasError = () => {
    return (
       <Container>
           <ErrorText>Error al cargar</ErrorText>
       </Container>
    );
};

export default HasError;