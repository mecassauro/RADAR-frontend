import React from 'react'

import imgBackground from '../../assets/timeSaude.svg'
import imgContent from '../../assets/mundinho.svg'

import Input from '../../components/Input'
import Button from '../../components/Button'

import { FiMail,FiLock,FiNavigation,FiArrowLeft } from 'react-icons/fi'

import {Container,Background,Content,Link} from './styles'

const SignUp: React.FC = () => {

  return (
    <Container>
      <Content>
        <img src={imgContent} alt="Globo terrestre" />
        <h1>Radar</h1>
        <form>
          <Input icon = {FiNavigation} placeholder="Nome" type="text"/>
          <Input icon= {FiMail} placeholder="Email" type="text"/>
          <Input icon = {FiLock} placeholder="Senha" type="password"/>
          <Button>Cadastrar</Button>
        </form>

        <Link>
          <a  href="">
            <FiArrowLeft/>
             Voltar</a>
        </Link>

      </Content>

      <Background>
        <img src = {imgBackground} alt="Time de profissionais de Saúde" />
      </Background>

    </Container>
  )
}

export default SignUp;
