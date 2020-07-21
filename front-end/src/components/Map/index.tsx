import React from 'react'
import { Map, TileLayer, Marker, Popup} from 'react-leaflet'
import 'leaflet/dist/leaflet.css';

const MapContainer: React.FC = () =>{
  const styler = { height: 'calc(100vh - 80px)'}

  return (
    <Map center={[-15.8383, -47.9546]} zoom={12} style={styler}>
        <TileLayer
        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
    </Map>
  )
}

export default MapContainer
