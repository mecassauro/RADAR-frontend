import React from 'react'
import imgContent from '../../assets/mundinho.svg'
import Button from '../../components/Button'
import imgContent2 from '../../assets/power.svg'

import { FiUser } from 'react-icons/fi'

import { Container, Header, Map, TimeLine } from './styles'

import MapContainer from '../../components/Map'

const Dashboard: React.FC = () =>{


return (

    <Container>
        <Header>

            <div>
              <img src={imgContent} alt="Globo terrestre" />
              <h1>Radar</h1>
            </div>
           <div>
             <div>
              <FiUser size={20}/>
             </div>
             <h1>Fulano de Tal</h1>
           </div>

        </Header>

        <MapContainer />

        <TimeLine>

        </TimeLine>

    </Container>

)

}

export default Dashboard


