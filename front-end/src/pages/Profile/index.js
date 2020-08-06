import React, { useState, useEffect } from 'react';
import {FiUser, FiLock,FiMail } from 'react-icons/fi'
import { useFirebase } from '../../hooks/firebase';
import Input from '../../components/Input'
import Header from '../../components/Header'
import Button from '../../components/Button'
import {Container, Card, Photo, Text, Edge} from './styles.js'
import { Form } from '@unform/web';


function Profile (){

  const {updateProfile} = useFirebase();
  const [data, setData] = useState([]);

  useEffect(()=>{
    const user = localStorage.getItem('@Radar:user');
    const token = localStorage.getItem('@Radar:token')
    console.log(user)
    if ( user && token){
      setData({user: JSON.parse(user), token})
    }
  },[])

  const handleSubmit = async ({name, current_password, new_password}) => {
    console.log(name, current_password, new_password)
    await updateProfile({name, current_password, new_password});
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
