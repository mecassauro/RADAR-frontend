import React from 'react';

import { FiLogOut } from 'react-icons/fi';

import Header from '../../components/Header';

import { useFirebase } from '../../hooks/firebase';

import { Container, Content, UserInfo} from './styles';

function UBS() {

	const { signOut } = useFirebase();

  return (
    <Container>
	<Header>
		{/* <UserInfo>
			<div>
         	   <FiLogOut onClick={signOut} size={20} color="#8257E5" />
        	</div>
		</UserInfo> */}
	</Header>

      <Content>
        
      </Content>

    </Container>
  );
}

export default UBS;
