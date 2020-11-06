import React, { useState, useRef } from 'react';

import { FiMail } from 'react-icons/fi';
import { Form } from '@unform/web';
import { Link } from 'react-router-dom';
import Tooltip from '@material-ui/core/Tooltip';
import * as Yup from 'yup';

import imgLogo from '../../assets/logo.svg';
import Input from '../../components/Input';
import Button from '../../components/Button';
import Header from '../../components/Header';

import getValidationErrors from '../../utils/getValidationError';

import { useFirebase } from '../../hooks/firebase';

import {
  ContainerWithHeader,
  Content,
  LogoArea,
  Title,
  BoldText,
  Error,
} from '../../styles/common';

function Forgot() {
  const { forgotPassword } = useFirebase();
  const [open, setOpen] = useState(false);
  const [emailError, setEmailError] = useState('');
  const formRef = useRef();

  const handleSubmit = async ({ email }) => {
    setOpen(false);
    try {
      setEmailError('');
      if (formRef.current) {
        formRef.current.setErrors({});
      }
      const schema = Yup.object().shape({
        email: Yup.string()
          .required('E-mail obrigatório')
          .email('Digite um e-mail válido')
      });

      await schema.validate(
        { email },
        {
          abortEarly: false,
        },
      );
      await forgotPassword({ email });
      setOpen(true);
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const errors = getValidationErrors(err);
        if (formRef.current) {
          formRef.current.setErrors(errors);
          setEmailError(errors.email);
        }
      }
    }
  };

  return (
    <>
      <Header canQuit={false} />
      <ContainerWithHeader>
        <div>
          <Content style={{ marginBottom: 36 }}>
            <LogoArea>
              <img src={imgLogo} alt="Logo" />
              <h1>Radar</h1>
            </LogoArea>
          </Content>

          <Content>
            <Title>Encontre sua conta</Title>
            <BoldText style={{ marginBottom: 24 }}>
              Enviaremos um link para o seu e-mail para redefinir sua senha.
            </BoldText>
            <Form ref={formRef} onSubmit={handleSubmit}>
              <Input name="email" icon={FiMail} placeholder="E-mail" />
              <Error>{emailError}</Error>
              <Tooltip
                title="E-mail enviado. Cheque sua caixa de entrada"
                open={open}
              >
                <Button type="submit">Enviar link</Button>
              </Tooltip>
            </Form>
          </Content>
        </div>
      </ContainerWithHeader>
    </>
  );
}

export default Forgot;
