import React, { useCallback, useRef } from 'react';

import { FiArrowLeft, FiUser, FiLock, FiMail } from 'react-icons/fi';
import { Form } from '@unform/web';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';

import getVaidationError from '../../utils/getValidationError';

import imgLogo from '../../assets/logo.svg';
import imgTeam from '../../assets/team.svg';
import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, Background, Content, Back } from './styles';

function SignUp() {
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
        password: Yup.string().required('Senha obrigatório'),
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
        }
      }
    }
  }, []);

  return (
    <Container>
      <Content>
        <img src={imgLogo} alt="Logo" />
        <h1>Radar</h1>
        <Form ref={formRef} onSubmit={handleSubmit}>
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
        <h1>Vigilância Epidemiológica | APS</h1>
        <h2>Região de Saúde Sudoeste - DF</h2>
        <img src={imgTeam} alt="Doctors" />
      </Background>
    </Container>
  );
}

export default SignUp;
