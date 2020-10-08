import React from 'react';

import { FiLogOut } from 'react-icons/fi';
import { Container } from './styles';
import imgLogo from '../../assets/logo.svg';

import { useFirebase } from '../../hooks/firebase';

function Header() {
  const { signOut } = useFirebase();
  return (
    <Container>
      <div>
        <img src={imgLogo} alt="Logo" />
        <h1>Radar</h1>
      </div>

      <div>
        <FiLogOut onClick={signOut} size={20} color="#59595B" />
      </div>
    </Container>
  );
}

export default Header;
