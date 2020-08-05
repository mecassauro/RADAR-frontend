import React from 'react';
import {FiUser, FiLock,FiMail } from 'react-icons/fi'
import { useFirebase } from '../../hooks/firebase';
import Input from '../../components/Input'
import Header from '../../components/Header'
import Button from '../../components/Button'
import {Container, Card, Photo} from './styles.js'
import { Form } from '@unform/web';




function Profile (){

  const {resetPassword} = useFirebase();

  function handleSubmit (data) {
    console.log(data)
  };
  return(
    <Container>
        <Header></Header>
        <Card>
            <Photo></Photo>
            <h1>Meu perfil</h1>
            <Form onSubmit={handleSubmit} >
                <Input name="name" icon={FiUser} placeholder="Nome" />
                <Input name="email" icon={FiMail} placeholder="Email"/>
                <Input name="current_password" icon={FiLock} placeholder="Senha atual"/>
                <Input name="new_password" icon={FiLock} placeholder="Nova senha"  />
                <Input name="confirm_password" icon={FiLock} placeholder="Confirme sua senha" />

                <Button type="submit">Confirmar Mudanças</Button>
            </Form>

        </Card>
    </Container>

  )
}


export default Profile
