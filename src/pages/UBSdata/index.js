import React from 'react';

import { FiLogOut } from 'react-icons/fi';
import Homem from '../../assets/Homem.svg'
import Mulher from '../../assets/Mulher.svg'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Grid from '@material-ui/core/Grid';
import Header from '../../components/Header';
import Mulher from '../../assets/Mulher.svg';
import Homem from '../../assets/Homem.svg';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Grid from '@material-ui/core/Grid';

import { useFirebase } from '../../hooks/firebase';

<<<<<<< HEAD
import { Container2, Content, Idade, Casos, Comorbidades, Profissao, Sexes} from './styles';
=======
import {
  Container2,
  Content,
  Idade,
  Casos,
  Comorbidades,
  Profissao,
  Sexes,
} from './styles';
>>>>>>> Releases

function UBS() {
  const { signOut } = useFirebase();

  return (
    <Container2>
<<<<<<< HEAD
		<Header>

		</Header>

      <Content>
	{/* <Container fluid>
=======
      <Header />

      <Content>
        {/* <Container fluid>
>>>>>>> Releases
	<Row>
    		<Col>
				<Casos></Casos>
    		</Col>
<<<<<<< HEAD

    		<Col>
				<Comorbidades></Comorbidades>
    		</Col>
  		</Row>

  		<Row>
    		<Col>
				<Sexes>SSS</Sexes>
    		</Col>
    		<Col>
				<Idade>III</Idade>
    		</Col>
    		<Col>
				<Profissao>PPP</Profissao>
    		</Col>
  		</Row>
		</Container> */}

		<div>
		<Grid container>
			<Grid item> 
				<Casos></Casos>
			</Grid>
		</Grid>
		<Grid container>
			<Grid item> 
				<Sexes></Sexes>
			</Grid>
			<Grid item> 
				<Idade></Idade>
			</Grid>
		</Grid>
		</div>
		<div display = {'block'}> 

			<Comorbidades></Comorbidades>
			<Profissao></Profissao>

		</div>
      </Content>

=======

    		<Col>
				<Comorbidades></Comorbidades>
    		</Col>
  		</Row>

  		<Row>
    		<Col>
				<Sexes>SSS</Sexes>
    		</Col>
    		<Col>
				<Idade>III</Idade>
    		</Col>
    		<Col>
				<Profissao>PPP</Profissao>
    		</Col>
  		</Row>
		</Container> */}

        <div>
          <Grid container>
            <Grid item>
              <Casos />
            </Grid>
          </Grid>
          <Grid container>
            <Grid item>
              <Sexes />
            </Grid>
            <Grid item>
              <Idade />
            </Grid>
          </Grid>
        </div>
        <div display="block">
          <Comorbidades />
          <Profissao />
        </div>
      </Content>
>>>>>>> Releases
    </Container2>
  );
}

export default UBS;
