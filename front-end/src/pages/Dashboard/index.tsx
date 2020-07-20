import React from 'react'

import { Container, Header, Map, TimeLine } from './styles'

import MapContainer from '../../components/Map'

const Dashboard: React.FC = () =>{

return (

    <Container>
        <Header></Header>

        <MapContainer />

        <TimeLine></TimeLine>

    </Container>

)

}

export default Dashboard;
