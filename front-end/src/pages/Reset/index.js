import React from 'react';

import { FiMail } from 'react-icons/fi';
import { Form } from '@unform/web';
import { Link } from 'react-router-dom';
import Tooltip from '@material-ui/core/Tooltip';

import imgLogo from '../../assets/logo.svg';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { useFirebase } from '../../hooks/firebase';

import { Container, Content, Sub, Borda, Texto1, SubCenter} from './styles';

function Reset() {

  const {resetPassword} = useFirebase();

  const [open, setOpen] = React.useState(true);
  const handleTooltipOpen = () => {
    setOpen(true);
  };

  const handleSubmit = async ({email}) => {
    console.log(email);
    await resetPassword({email});
  };

  return (
    <Container>

      <Content>
        <img src={imgLogo} alt="Logo" />
        <Form onSubmit={handleSubmit}>
          <Texto1> Redefina sua senha:</Texto1>
          <Borda>
          <Input name="email" icon={FiMail} placeholder="E-mail" />
          </Borda>
          <Tooltip
            title="E-mail enviado. Cheque sua caixa de entrada"
            open={open}
          >
            <Button type="submit" onClick={handleTooltipOpen} >Enviar link</Button>
          </Tooltip >
        </Form>
      </Content>
      <SubCenter>
        <Sub>
          <Link to="/" style={{color: '#0364D7', marginLeft: '25px', marginRight: '25px'}}>Voltar</Link>
          <Link to="/signup" style={{color: '#0364D7', marginLeft: '25px', marginRight: '25px'}}>Cadastrar-se</Link>
        </Sub>
      </SubCenter>   
      
    </Container>
  );
}

export default Reset;
