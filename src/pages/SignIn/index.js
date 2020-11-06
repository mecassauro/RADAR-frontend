import React, { useRef, useState } from 'react';

import { FiUser, FiLock } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { Form } from '@unform/web';
import * as Yup from 'yup';

import getValidationErrors from '../../utils/getValidationError';

import imgLogo from '../../assets/logo.svg';
import imgDoctors from '../../assets/doctors.svg';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { useFirebase } from '../../hooks/firebase';

import {
  Container,
  Background,
  Content,
  Extras,
  VanishDiv,
  Title,
  LogoArea,
  Error,
} from '../../styles/common';

import theme from '../../styles/theme';

function SignIn() {
  const { signIn } = useFirebase();
  const formRef = useRef();
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleSubmit = async ({ email, password }) => {
    try {
      setEmailError('');
      setPasswordError('');
      if (formRef.current) {
        formRef.current.setErrors({});
      }
      const schema = Yup.object().shape({
        email: Yup.string()
          .required('E-mail obrigatório')
          .email('Digite um e-mail válido'),
        password: Yup.string().required('Senha obrigatória'),
      });

      await schema.validate(
        { email, password },
        {
          abortEarly: false,
        },
      );
      await signIn({ email, password });
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errors = getValidationErrors(err);
        if (formRef.current) {
          formRef.current.setErrors(errors);
          setEmailError(errors.email);
          setPasswordError(errors.password);
        }
      }
    }
  };

  return (
    <Container>
      <div>
        <Content style={{ marginBottom: 36 }}>
          <LogoArea>
            <img src={imgLogo} alt="Logo" />
            <h1>Radar</h1>
          </LogoArea>
        </Content>
        <Content>
          <Title>Login</Title>
          <Form
            style={{ marginBottom: 16 }}
            ref={formRef}
            onSubmit={handleSubmit}
          >
            <Input name="email" icon={FiUser} placeholder="E-mail" />
            <Error>{emailError}</Error>
            <Input
              name="password"
              icon={FiLock}
              placeholder="Senha"
              type="password"
            />
            <Error>{passwordError}</Error>
            <Button type="submit">Entrar</Button>
          </Form>
          <Link
            style={{
              color: `${theme.color.primary}`,
              marginTop: 8,
              marginBottom: 8,
              fontSize: 14,
            }}
            to="/forgot"
          >
            Esqueci minha senha
          </Link>
          <Extras>
            <p
              style={{
                color: `${theme.color.darkGrey}`,
                fontSize: 14,
                fontWeight: 'initial',
                marginBottom: 32,
              }}
            >
              Não tem uma conta?
              <Link
                style={{
                  color: `${theme.color.primary}`,
                  fontSize: 14,
                  fontWeight: 'initial',
                }}
                to="/signup"
              >
                {' '}
                Cadastre-se
              </Link>
            </p>
          </Extras>
        </Content>
      </div>

      <Background>
        <VanishDiv>
          <h1>Vigilância Epidemiológica | APS</h1>
          <h2>Região de Saúde Sudoeste - DF</h2>
          <img src={imgDoctors} alt="Doctors" />
        </VanishDiv>
      </Background>
    </Container>
  );
}

export default SignIn;
