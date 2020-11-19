import React, { useState, useCallback } from 'react';

import { ImArrowUp2, ImArrowDown2 } from 'react-icons/im';
import { BsFillSquareFill } from 'react-icons/bs';

import Header from '../../components/Header';
import Selector from '../../components/Selector';
import LinearProgres from '../../components/LinearProgres';
import CasesGraph from '../../components/CasesGraph';
import DeathGraph from '../../components/DeathGraph';

import Import from '../../assets/Import.svg';
import Export from '../../assets/Export.svg';

import User from '../../assets/User.svg';
import Pulse from '../../assets/Pulse.svg';
import Cure from '../../assets/Cure.svg';
import Magnifier from '../../assets/Magnifier.svg';
import Female from '../../assets/Female.svg';
import Male from '../../assets/Male.svg';

import {
  Container,
  PanelContainer,
  DataContainer,
  Content,
  Content2,
  Content3,
  Content4,
  Comorbidities,
  Cases,
  Deaths,
  Sexes,
  Pdf,
  MiniContainer,
} from './styles';

function UBS() {
  const [ubsNumber, setUbsNumber] = useState('UBS01');
  const [month, setMonth] = useState('Janeiro');
  const [year, setYear] = useState('2020');
  const [city, setCity] = useState('Plano Piloto');

  return (
    <Container>
      <Header />

      <PanelContainer>
        <DataContainer>
          <div>
            <Selector
              onChange={setUbsNumber}
              options={['UBS01', 'UBS02', 'UBS03', 'UBS04', 'UBS05']}
            />
            {console.log(`${ubsNumber} ${month} ${year} ${city}`)}
            <Selector
              onChange={setMonth}
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
            <Selector onChange={setYear} options={['2020', '2019']} />
          </div>
          <div>
            <Selector
              onChange={setCity}
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
            <Cases>
              <span> Casos </span>
              <CasesGraph
                width="100%"
                height="100%"
                data={[
                  25.0,
                  32.4,
                  22,
                  39.4,
                  34.2,
                  22.0,
                  23.2,
                  21,
                  20.0,
                  10,
                  8,
                  5,
                ]}
              />
            </Cases>

            <Content4>
              <Deaths>
                <span> Óbitos </span>
                <DeathGraph
                  min={0}
                  max={40}
                  dataMulheres={[1, 3, 6, 10, 15, 18, 25, 38]}
                  dataHomens={[2, 4, 7, 10, 15, 18, 25, 38]}
                />
              </Deaths>

              <Sexes>
                <div>
                  <img src={Female} alt="Mulher" />
                  <img src={Male} alt="Home" />
                </div>

                <div>
                  <h1>26%</h1>
                  <h1>74%</h1>
                </div>

                <div>
                  <h4>
                    <BsFillSquareFill color="#E786D7" /> Mulher
                  </h4>
                  <h4>
                    <BsFillSquareFill color="#5E6BE3" /> Homem
                  </h4>
                </div>
              </Sexes>
            </Content4>
          </Content3>
          <Comorbidities>
            <h2>Comorbidades</h2>
            <LinearProgres name="Diabetes" value={40} />
            <LinearProgres name="Hipertensao" value={61.42} />
            <LinearProgres name="HIV" value={47} />
            <LinearProgres name="Nefropatia" value={36.84} />

            <h2>Profissões</h2>
            <LinearProgres name="Médicos" value={79.58} />
            <LinearProgres name="Enfermeiros" value={83.52} />
            <LinearProgres name="Dentistas" value={90.41} />
            <LinearProgres name="Comissários" value={60} />
          </Comorbidities>
        </Content2>
      </PanelContainer>
    </Container>
  );
}

export default UBS;
