import React from 'react';

import { Container } from './styles';
import imgLogo  from '../../assets/logo.svg'

function Header(){
    return(
    <Container>
        <img src={imgLogo} alt="Logo" />
        <h1>Radar</h1>
    </Container>

    );
}

export default Header;
