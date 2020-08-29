import React from 'react';

import { FiLogOut } from 'react-icons/fi';
import Homem from '../../assets/Homem.svg'
import Mulher from '../../assets/Mulher.svg'

import Header from '../../components/Header';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Grid from '@material-ui/core/Grid';

import { useFirebase } from '../../hooks/firebase';

import { Container2, Content, Idade, Casos, Comorbidades, Profissao, Sexes} from './styles';

function UBS() {

	const { signOut } = useFirebase();

  return (
    <Container2>
		<Header>

		</Header>

      <Content>
	{/* <Container fluid>
	<Row>
    		<Col>
				<Casos></Casos>
    		</Col>

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

    </Container2>
  );
}

export default UBS;
