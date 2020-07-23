import React, { useContext } from 'react'

import Input from '../../components/Input'
import Button from '../../components/Button'

import imgBackground from '../../assets/Image-Doctor.svg'
import imgDoctors from '../../assets/doctors.svg'
import imgContent from '../../assets/mundinho.svg'
import imgArte from '../../assets/Arte.svg'

import { FiMail,FiLock,FiLogIn } from 'react-icons/fi'

import { Background, Content, Container } from './styles'

import { useFirebase } from '../../components/Firebase'


const SignIn: React.FC = (props) =>{
  const firebase = useFirebase()!
  const handleSignButton = () => {
	console.log("12345")
	firebase.signIn('test@account.com','123456')
	//.catch((error:any) => {
	//	console.log(error)
	//	console.log("1234")
	//})
  }

  async function temp() {
	var d = new Date("2020-03-19").getTime()
	var d1 = new Date ("2020-03-01").getTime()
	var j = (Math.round(Math.abs((d - d1) / (24 * 60 * 60 * 1000)))) < (7*3)
	console.log(j)
	//firebase.signOut()
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
            
          </form>
		  <Button onClick={handleSignButton}>Entrar</Button>
		  <Button onClick={temp}>Temp</Button>

          <a href="forgot" >Esqueci minha senha</a>
          <a href="signup" >
            <FiLogIn/>
            Criar conta
          </a>
      </Content>
    </Container>
  )
}


export default SignIn;
