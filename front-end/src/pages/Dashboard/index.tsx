import React from 'react'
import imgContent from '../../assets/mundinho.svg'
import Button from '../../components/Button'
import imgContent2 from '../../assets/power.svg'

import { FiUser } from 'react-icons/fi'

import { Container, Header, Map, TimeLine } from './styles'

import MapContainer from '../../components/Map'
import LinhaTempo from '../../components/Slider'

const Dashboard: React.FC = () =>{
  const [slider, setSlider] = React.useState(99)

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
        
        <Map>
          <MapContainer slidePos={slider}/>
        </Map>

        <TimeLine>
          <LinhaTempo slideSet={setSlider}/>
        </TimeLine>

    </Container>

)

}

export default Dashboard


