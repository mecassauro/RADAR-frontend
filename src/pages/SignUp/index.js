import React, { useCallback, useRef, useState } from 'react';

import { FiUser, FiLock, FiMail } from 'react-icons/fi';
import { Form } from '@unform/web';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';

import getVaidationError from '../../utils/getValidationError';

import imgLogo from '../../assets/logo.svg';
import imgTeam from '../../assets/signup.svg';
import Input from '../../components/Input';
import Button from '../../components/Button';
import theme from '../../styles/theme';
import {
  Container,
  Background,
  Content,
  LogoArea,
  Title,
  Extras,
  Error,
  VanishDiv,
} from '../../styles/common';

function SignUp() {
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const formRef = useRef(null);

  const handleSubmit = useCallback(async ({ name, email, password }) => {
    try {
      if (formRef.current) {
        formRef.current.setErrors({});
      }

      const schema = Yup.object().shape({
        name: Yup.string().required('Nome obrigatório'),
        email: Yup.string()
          .required('E-mail obrigatório')
          .email('Digite um e-mail válido'),
        password: Yup.string().required('Senha obrigatória'),
      });

      await schema.validate(
        { name, email, password },
        {
          abortEarly: false,
        },
      );
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errors = getVaidationError(err);
        if (formRef.current) {
          formRef.current.setErrors(errors);
          setNameError(errors.name);
          setEmailError(errors.email);
          setPasswordError(errors.password);
        }
      }
    }
  }, []);

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
          <Title>Cadastro</Title>
          <Form
            style={{ marginBottom: 16 }}
            ref={formRef}
            onSubmit={handleSubmit}
          >
            <Input name="name" icon={FiUser} placeholder="Nome" />
            <Error>{nameError}</Error>
            <Input name="email" icon={FiMail} placeholder="E-mail" />
            <Error>{emailError}</Error>
            <Input
              name="password"
              icon={FiLock}
              placeholder="Senha"
              type="password"
            />
            <Error>{passwordError}</Error>
            <Button type="submit">Cadastrar</Button>
          </Form>
          <Extras>
            <p
              style={{
                color: `${theme.color.darkGrey}`,
                fontSize: 14,
                fontWeight: 'initial',
                marginBottom: 32,
              }}
            >
              Já possui cadastro?
              <Link
                style={{
                  color: `${theme.color.primary}`,
                  fontSize: 14,
                  fontWeight: 'initial',
                }}
                to="/"
              >
                {' '}
                Entre
              </Link>
            </p>
          </Extras>
        </Content>
      </div>

      <Background>
        <VanishDiv>
          <h1>Vigilância Epidemiológica | APS</h1>
          <h2>Região de Saúde Sudoeste - DF</h2>
          <img src={imgTeam} alt="Doctors" />
        </VanishDiv>
      </Background>
    </Container>
  );
}

export default SignUp;
