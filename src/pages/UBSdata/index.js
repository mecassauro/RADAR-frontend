import React from 'react';

import Header from '../../components/Header';
import Selector from '../../components/Selector';

import { useFirebase } from '../../hooks/firebase';

import {
  Container,
  DataContainer,
  Content,
  Content2,
  Content3,
  Comorbidities,
  Cases,
  Content4,
  Deaths,
  Sexes,
  PanelContainer,
} from './styles';

function UBS() {
  const { signOut } = useFirebase();

  return (
    <Container>
      <Header />

      <PanelContainer>
        <DataContainer />
        <Content />

        <Content2>
          <Content3>
            <Cases />
            <Content4>
              <Deaths />
              <Sexes />
            </Content4>
          </Content3>
          <Comorbidities />
        </Content2>
      </PanelContainer>
    </Container>
  );
}

export default UBS;
