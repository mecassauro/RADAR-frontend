import React from 'react'

import Input from '../../components/Input'
import Button from '../../components/Button'

import imgBackground from '../../assets/Image-Doctor.svg'
import imgContent from '../../assets/mundinho.svg'
import imgArte from '../../assets/Arte.svg'

import { Background, Content, Container } from './styles'

const SignUp: React.FC = () =>{

return (
  <Container>

    <Background>
    <img src={imgBackground} alt="Médico e globo terrestre" />
    </Background>


    <Content>

        <img src={imgContent} alt="Globo terrestre" />
        <form>

        <h1>Entrar</h1>
        <Input placeholder="Email" type="text"/>
        <Input placeholder="Senha" type="password"/>
        <Button />
        </form>

        <img src={imgArte} alt="Bolinhas" />
    </Content>

  </Container>
)
}

export default SignUp;
