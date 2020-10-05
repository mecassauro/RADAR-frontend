import React from 'react';

import { ImArrowUp2, ImArrowDown2 } from 'react-icons/im';
import Header from '../../components/Header';
import Selector from '../../components/Selector';
import LinearProgres from '../../components/LinearProgres';

import Import from '../../assets/Import.svg';
import Export from '../../assets/Export.svg';

import User from '../../assets/User.svg';
import Pulse from '../../assets/Pulse.svg';
import Cure from '../../assets/Cure.svg';
import Magnifier from '../../assets/Magnifier.svg';

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
  MiniContainer,
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
                'Novembro',
                'Dezembro',
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
        <Content>
          <MiniContainer>
            <div>
              <strong>Total de casos</strong>
              <img src={User} alt="User" />
            </div>

            <h1>42 mil</h1>

            <span>
              <small style={{ color: '#f80303' }}>
                <ImArrowUp2 size={11} color="#f80303" />
                1.3 %
              </small>
              Desde o último mes
            </span>
          </MiniContainer>

          <MiniContainer>
            <div>
              <strong>Óbitos</strong>
              <img src={Pulse} alt="Pulse" />
            </div>

            <h1>5 mil</h1>

            <span>
              <small style={{ color: '#04D361' }}>
                <ImArrowDown2 size={11} color="#04D361" />
                0.9 %
              </small>
              Desde o último mes
            </span>
          </MiniContainer>

          <MiniContainer>
            <div>
              <strong>Curados</strong>
              <img src={Cure} alt="Cure" />
            </div>
            <h1>35 mil</h1>
            <span>
              <small style={{ color: '#04D361' }}>
                <ImArrowDown2 size={11} color="#04D361" />
                5.7 %
              </small>
              Desde o último mes
            </span>
          </MiniContainer>

          <MiniContainer>
            <div>
              <strong>Observações</strong>
              <img src={Magnifier} alt="Magnifier" />
            </div>
            <h1>951</h1>
            <span>
              <small style={{ color: '#f80303' }}>
                <ImArrowUp2 size={11} color="#f80303" />
                8.3 %
              </small>
              Desde o último mes
            </span>
          </MiniContainer>
        </Content>

        <Content2>
          <Content3>
            <Cases />
            <Content4>
              <Deaths />
              <Sexes />
            </Content4>
          </Content3>
          <Comorbidities>
            <h2>Comorbidades</h2>
            <LinearProgres name="Diabetes" value={50.37} />
            <LinearProgres name="Hipertensao" value={61.42} />
            <LinearProgres name="HIV" value={30} />
            <LinearProgres name="Nefropatia" value={36.84} />

            <h2>Profissões</h2>
            <LinearProgres name="Diabetes" value={35.37} />
            <LinearProgres name="Hipertensao" value={61.42} />
            <LinearProgres name="HIV" value={15.51} />
            <LinearProgres name="Nefropatia" value={36.84} />
          </Comorbidities>
        </Content2>
      </PanelContainer>
    </Container>
  );
}

export default UBS;
