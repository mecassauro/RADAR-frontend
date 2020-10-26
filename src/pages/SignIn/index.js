import React, { useRef, useState } from 'react';

import { FiUser, FiLock } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { Form } from '@unform/web';
import { useField } from '@unform/core';
import * as Yup from 'yup';

import getValidationErrors from '../../utils/getValidationError';

import imgLogo from '../../assets/logo.svg';
import imgDoctors from '../../assets/doctors.svg';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { useFirebase } from '../../hooks/firebase';

import { Container, Background, Content, CreateAccount } from './styles';
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
        console.log(errors);
        return;
      }
      console.log(err);
    }
  };

  return (
    <Container>
      <div>
        <Content style={{ marginBottom: 36 }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: 8,
              marginBottom: 8,
            }}
          >
            <img src={imgLogo} alt="Logo" />
            <h1>Radar</h1>
          </div>
        </Content>
        <Content>
          <h2
            style={{
              color: `${theme.color.darkGrey}`,
              fontSize: 36,
              marginTop: 36,
              marginBottom: 36,
              fontWeight: 'bold',
            }}
          >
            Login
          </h2>
          <Form
            style={{ marginBottom: 16 }}
            ref={formRef}
            onSubmit={handleSubmit}
          >
            <Input name="email" icon={FiUser} placeholder="E-mail" />
            <span
              style={{
                width: '100%',
                color: `${theme.color.error}`,
                marginBottom: 20,
                fontSize: 14,
              }}
            >
              {emailError}
            </span>
            <Input
              name="password"
              icon={FiLock}
              placeholder="Senha"
              type="password"
            />
            <span
              style={{
                width: '100%',
                color: `${theme.color.error}`,
                marginBottom: 20,
                fontSize: 14,
              }}
            >
              {passwordError}
            </span>
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
          <CreateAccount>
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
                Cadastre-se
              </Link>
            </p>
          </CreateAccount>
        </Content>
      </div>

      <Background>
        <h1>Vigilância Epidemiológica | APS</h1>
        <h2>Região de Saúde Sudoeste - DF</h2>
        <img src={imgDoctors} alt="Doctors" />
      </Background>
    </Container>
  );
}

export default SignIn;
