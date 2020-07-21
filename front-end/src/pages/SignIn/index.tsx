import React from 'react'

import Input from '../../components/Input'
import Button from '../../components/Button'

import imgBackground from '../../assets/Image-Doctor.svg'
import imgDoctors from '../../assets/doctors.svg'
import imgContent from '../../assets/mundinho.svg'
import imgArte from '../../assets/Arte.svg'

import { FiMail,FiLock,FiLogIn } from 'react-icons/fi'

import { Background, Content, Container } from './styles'

import { withFirebase } from '../../components/Firebase'

const SignInPage = () => (
  <SignIn />
)

const SignInBase: React.FC = (props) =>{

  const handleSignButton = () => {

  }

  return (
    <Container>
      <Background>
      <img src={imgDoctors} alt="Médico e globo terrestre" />
      </Background>
      <Content>

          <img src={imgContent} alt="Globo terrestre" />
          <form>
            <h1>Entrar</h1>
            <Input name="Email" icon={FiMail} placeholder="Email" type="text"/>
            <Input name="password" icon={FiLock} placeholder="Senha" type="password"/>
            <Button onClick={handleSignButton}>Entrar</Button>
          </form>

          <a href="forgot" >Esqueci minha senha</a>
          <a href="signup" >
            <FiLogIn/>
            Criar conta
          </a>
      </Content>
    </Container>
  )
}

const SignIn = withFirebase(SignInBase)


export default SignInPage;
