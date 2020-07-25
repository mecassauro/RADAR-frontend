import React, { useCallback } from 'react';

import { FiArrowLeft, FiUser, FiLock, FiMail } from 'react-icons/fi';
import { Form } from '@unform/web';
import { Link } from 'react-router-dom';

import imgLogo from '../../assets/logo.svg';
import imgTeam from '../../assets/team.svg';
import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, Background, Content, Back } from './styles';

function SignUp() {
  const handleSubmit = useCallback(data => {
    console.log(data);
  }, []);

  return (
    <Container>
      <Content>
        <img src={imgLogo} alt="Logo" />
        <Form onSubmit={handleSubmit}>
          <Input name="name" icon={FiUser} placeholder="Nome" />
          <Input name="email" icon={FiMail} placeholder="E-mail" />
          <Input
            name="password"
            icon={FiLock}
            placeholder="Senha"
            type="password"
          />
          <Button type="submit">Cadastrar</Button>
        </Form>

        <Back>
          <FiArrowLeft size={20} />
          <Link to="/">Voltar</Link>
        </Back>
      </Content>

      <Background>
        <img src={imgTeam} alt="Doctors" />
      </Background>
    </Container>
  );
}

export default SignUp;
