import React, {useRef} from 'react';

import { FiLogIn, FiUser, FiLock } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { Form } from '@unform/web';
import * as Yup from 'yup'

import getValidationErrors from '../../utils/getValidationError'

import imgLogo from '../../assets/logo.svg';
import imgDoctors from '../../assets/doctors.svg';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { useFirebase } from '../../hooks/firebase';

import { Container, Background, Content, CreateAccount, Borda} from './styles';

function SignIn() {
  const { signIn } = useFirebase();
  const formRef = useRef()

  const handleSubmit = async ({ email, password }) => {

    try{
      if(formRef.current){
        formRef.current.setErrors({})
      }
      const schema = Yup.object().shape({
        email: Yup.string().required('E-mail obrigatório').email('Digite um e-mail válido'),
        password: Yup.string().required('Senha obrigatória')
      })

      await schema.validate({email, password}, {
        abortEarly: false
      })
      await signIn({ email, password });

    }catch(err){
      if(err instanceof Yup.ValidationError){
        const errors = getValidationErrors(err)
        if(formRef.current){
          formRef.current.setErrors(errors)
        }
        console.log(errors)
        return
      }

    }

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
        <Form ref={formRef} onSubmit={handleSubmit}>
          <Input name="email" icon={FiUser} placeholder="E-mail" />
          <Input
            name="password"
            icon={FiLock}
            placeholder="Senha"
            type="password"
          />
          <Button type="submit">Entrar</Button>
          <Link to="/forgot">Esqueci minha senha</Link>
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
