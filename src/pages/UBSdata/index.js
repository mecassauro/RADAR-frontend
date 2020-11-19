import React, { useState } from 'react';

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

import DataInformer from '../../components/DataInformer';

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
          <DataInformer
            title="Total de casos"
            image={User}
            alt="User"
            quantity="42 mil"
            percentage="1.3%"
            direction="up"
          />

          <DataInformer
            title="Óbitos"
            image={Pulse}
            alt="Pulse"
            quantity="5 mil"
            percentage="0.9%"
            direction="down"
          />

          <DataInformer
            title="Curados"
            image={Cure}
            alt="Cure"
            quantity="35 mil"
            percentage="5.7%"
            direction="down"
          />

          <DataInformer
            title="Observações"
            image={Magnifier}
            alt="Magnifier"
            quantity="951"
            percentage="8.3%"
            direction="up"
          />
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
