import React from 'react';

import { FiLogIn, FiUser, FiLock } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { Form } from '@unform/web';

import imgLogo from '../../assets/logo.svg';
import imgDoctors from '../../assets/doctors.svg';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { useFirebase } from '../../hooks/firebase';

import { Container, Background, Content, CreateAccount } from './styles';

function SignIn() {
  const { signIn } = useFirebase();

  const handleSubmit = async ({ email, password }) => {
    await signIn({ email, password });
  };

  return (
    <Container>
      <Background>
        <h1>Vigilância Epidemiológica | APS</h1>
        <h2>Região de Saúde Sudoeste - DF</h2>
        <img src={imgDoctors} alt="Doctors" />
      </Background>

      <Content>
        <img src={imgLogo} alt="Logo" />
        <h1>Radar</h1>
        <Form onSubmit={handleSubmit}>
          <Input name="email" icon={FiUser} placeholder="E-mail" />
          <Input
            name="password"
            icon={FiLock}
            placeholder="Senha"
            type="password"
          />
          <Button type="submit">Entrar</Button>
          <a href="forgot">Esqueci minha senha</a>
        </Form>

        <CreateAccount>
          <FiLogIn size={20} />
          <Link to="/signup">Criar uma conta</Link>
        </CreateAccount>
      </Content>
    </Container>
  );
}

export default SignIn;
