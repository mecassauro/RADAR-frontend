import React from 'react';

import Header from '../../components/Header';
import Selector from '../../components/Selector';

import Import from '../../assets/Import.svg';
import Export from '../../assets/Export.svg';

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
  Pdf,
} from './styles';

function UBS() {
  const { signOut } = useFirebase();

  return (
    <Container>
      <Header />

      <PanelContainer>
        <DataContainer>
          <div>
            <Selector options={['UBS5', 'UBS4', 'UBS3', 'UBS2', 'UBS1']} />
            <Selector
              options={[
                'Janeiro',
                'Fevereiro',
                'Março',
                'Abril',
                'Maio',
                'Junho',
                'Julho',
                'Agosto',
                'Setembro',
                'Outubro',
                'Novenbro',
                'Dezenbro',
              ]}
            />
            <Selector options={['2020', '2019']} />
          </div>
          <div>
            <Selector
              name="Cidades"
              options={[
                'Plano Piloto',
                'Lago Sul',
                'Lago Norte',
                'Águas Claras',
                'Gama',
                'Planaltina',
                'Guará',
                'Samabaia',
                'Taguatinga',
                'Ceilândia',
                'Sobradinho',
                'Braslândia',
                'Riacho F.',
                'Cruzeiro',
              ]}
            />
            <Pdf>
              <span> Importar </span>
              <img src={Import} alt="Import" />
            </Pdf>
            <Pdf>
              <span> Gerar PDF</span>
              <img src={Export} alt="Export" />
            </Pdf>
          </div>
        </DataContainer>
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
