import React from 'react'
import { Map, TileLayer, Marker, Popup} from 'react-leaflet'

const MapContainer: React.FC = () =>{
  return (
    <Map center={[-15.8276, -47.9218]} zoom={13} >
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
      </Map>
  )
}

export default MapContainer
