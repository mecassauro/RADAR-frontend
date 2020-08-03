import React from 'react';

import { FiMail } from 'react-icons/fi';
import { Form } from '@unform/web';
import { Link } from 'react-router-dom';

import imgLogo from '../../assets/logo.svg';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { useFirebase } from '../../hooks/firebase';

import { Container, Content, Sub, Borda, Texto1, Texto2, SubCenter} from './styles';

function Reset() {

  const {resetPassword} = useFirebase();

  const handleSubmit = async ({email}) => {
    console.log(email);
    await resetPassword({email});
  };

  return (
    <Container>

      <Content>
        <img src={imgLogo} alt="Logo" />
        <Form onSubmit={handleSubmit}>
          <Texto1> Digite seu e-mail:</Texto1>
          <Borda>
          <Input name="email" icon={FiMail} placeholder="E-mail" />
          </Borda>
          <Button type="submit">Enviar link</Button>
          <Texto2>Enviaremos um link de recuperação de senha para o seu e-mail.</Texto2>
        </Form>
      </Content>
      <SubCenter>
        <Sub>
          <Link to="/" style={{color: '#0364D7', marginLeft: '25px', marginRight: '25px'}}>Voltar</Link>
          <Link to="/signup" style={{color: '#0364D7', marginLeft: '25px', marginRight: '25px'}}>Cadastrar-se</Link>
        </Sub>
      </SubCenter>   
      
      

    </Container>
  );
}

export default Reset;
