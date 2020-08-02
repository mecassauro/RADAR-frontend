import React from 'react';

import { FiArrowLeft, FiMail } from 'react-icons/fi';
import { Form } from '@unform/web';
import { Link } from 'react-router-dom';

import imgLogo from '../../assets/logo.svg';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { useFirebase } from '../../hooks/firebase';

import { Container, Content, Back } from './styles';

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
          <Input name="email" icon={FiMail} placeholder="E-mail" />
          <Button type="submit">Enviar link</Button>
        </Form>

        <Back>
          <FiArrowLeft size={20} />
          <Link to="/">Voltar</Link>
          <Link to="/signup">Cadastrar-se</Link>
        </Back>
      </Content>

    </Container>
  );
}

export default Reset;
