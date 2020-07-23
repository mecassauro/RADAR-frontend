import React, { useContext, useState} from 'react'

import Input from '../../components/Input'
import Button from '../../components/Button'

import imgDoctors from '../../assets/doctors.svg'
import Dino from '../../assets/Dino.svg'

import { FiMail} from 'react-icons/fi'

import { Background, Content, Container } from './styles'

import { useFirebase } from '../../components/Firebase'


const Forgot: React.FC = (props) =>{

  const firebase = useFirebase()!
  const handRecoverButton = () => {
	console.log("54321")
	firebase.reset('gabrielbaliza1@gmail.com')
	
  }

  return (
    <Container>

      <Content>

        <img src={Dino} alt="Dino" width="300" height="350" />

          <form>

            <h1>Recuperar senha:</h1>
            <Input name="Email" icon={FiMail} placeholder="Email" type="text"/>

          </form>

          <Button onClick={handRecoverButton}> Enviar </Button>
      </Content>

      <Background>
      <img src={imgDoctors} alt="Médico e globo terrestre" />
      </Background>

    </Container>
  )
}

export default Forgot;