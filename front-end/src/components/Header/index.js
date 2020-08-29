import React from 'react';

import { Container } from './styles';
import imgLogo  from '../../assets/logo.svg'
import {FiLogOut} from 'react-icons/fi';

import { useFirebase } from '../../hooks/firebase';

function Header(){
    const { signOut } = useFirebase();
    return(
    <Container>
        <img src={imgLogo} alt="Logo" />
        <h1>Radar</h1>
        <div>
            <FiLogOut onClick={signOut} size={20} color="#8257E5" />
        </div>
    </Container>

    );
}

export default Header;
