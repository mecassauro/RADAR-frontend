import React, { useState, useEffect } from 'react';
import { FiUser, FiLock, FiMail } from 'react-icons/fi';
import { Form } from '@unform/web';
import { useFirebase } from '../../hooks/firebase';
import Input from '../../components/Input';
import Header from '../../components/Header';
import Button from '../../components/Button';
import ProfilePic from '../../assets/profile.svg';
import { Container, Card, Photo, Text, Edge } from './styles.js';

function Profile() {
  const { updateProfile } = useFirebase();
  const [data, setData] = useState([]);

  useEffect(() => {
    const user = localStorage.getItem('@Radar:user');
    const token = localStorage.getItem('@Radar:token');

    if (user && token) {
      setData({ user: JSON.parse(user), token });
    }
  }, []);

  const [usuario, setUsuario] = useState([]);

  useEffect(() => {
    if (data.user) {
      setUsuario(data.user.user);
    }
  }, [data]);

  function callName() {
    // return usuario.displayName == null ? usuario.email.split("@", 1) : usuario.displayName
    return usuario.displayName == null ? usuario.email : usuario.displayName;
  }

  const handleSubmit = async ({ name, current_password, new_password }) => {
    await updateProfile({ name, current_password, new_password });
  };

  return (
    <Container>
      <Header />
      <Card>
        <img src={ProfilePic} alt="Foto de perfil" maxWidth="150px" />
        <Text>{usuario.email}</Text>

        <Form>
          <Edge>
            <Input name="name" icon={FiUser} placeholder={callName()} />
          </Edge>
          <Edge>
            <Input
              name="current_password"
              icon={FiLock}
              placeholder="Senha atual"
            />
          </Edge>
          <Button type="submit">Salvar mudanças</Button>
        </Form>
      </Card>
    </Container>
  );
}

export default Profile;
