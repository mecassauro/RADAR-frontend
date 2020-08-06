import React from 'react';
import {FiUser, FiLock,FiMail } from 'react-icons/fi'
import { useFirebase } from '../../hooks/firebase';
import Input from '../../components/Input'
import Header from '../../components/Header'
import Button from '../../components/Button'
import {Container, Card, Photo, Text, Edge} from './styles.js'
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
            <Text>Meu perfil</Text>
            <Form onSubmit={handleSubmit} >

                <Edge><Input name="name" icon={FiUser} placeholder="Nome" /></Edge>
                <Edge><Input name="email" icon={FiMail} placeholder="Email"/></Edge>
                <Edge><Input name="current_password" icon={FiLock} placeholder="Senha atual"/></Edge>
                <Edge><Input name="new_password" icon={FiLock} placeholder="Nova senha"  /></Edge>
                <Edge><Input name="confirm_password" icon={FiLock} placeholder="Confirme sua senha" /></Edge>
                <Button type="submit">Confirmar Mudanças</Button>

            </Form>

        </Card>
    </Container>

  )
}


export default Profile
