import React from 'react';
import { Link } from 'react-router-dom';

import { FiLogOut } from 'react-icons/fi';
import { Container } from './styles';
import imgLogo from '../../assets/logo.svg';

import { useFirebase } from '../../hooks/firebase';

function Header({ canQuit = true }) {
  const { signOut } = useFirebase();
  return (
    <Container>
      <div>
        <Link to="/dashboard">
          <img src={imgLogo} alt="Logo" />
        </Link>
        <h1>Radar</h1>
      </div>

      {canQuit && (
        <div>
          <FiLogOut onClick={signOut} size={20} color="#59595B" />
        </div>
      )}
    </Container>
  );
}

export default Header;
