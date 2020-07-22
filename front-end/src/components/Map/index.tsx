import React from 'react'
import { Map, TileLayer, Circle} from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
//import {HeatmapLayer} from 'leaflet-heat/dist/leaflet-heat'

/*
<HeatmapLayer
  fitBoundsOnLoad
  fitBoundsOnUpdate
  points={points}
  longitudeExtractor={(m:any) => m[1]}
  latitudeExtractor={(m:any) => m[0]}
  intensityExtractor={(m:any) => parseFloat(m[2])}
/>
*/

//const HeatmapLayer = require('react-leaflet-heatmap-layer');

const MapContainer: React.FC = () =>{
  const styler = { height: 'calc(100vh - 80px)'}

  const points = [
  [-37.8869090667, 175.3657417333, "486"],
  [-37.8894207167, 175.4015351167, "807"],
  [-37.8927369333, 175.4087452333, "899"],
  [-37.90585105, 175.4453463833, "1273"],
  [-37.9064188833, 175.4441556833, "1258"],
  [-37.90584715, 175.4463564333, "1279"],
  [-37.9033391333, 175.4244005667, "1078"],
  [-37.9061991333, 175.4492620333, "1309"],
  [-37.9058955167, 175.4445613167, "1261"],
  [-37.88888045, 175.39146475, "734"],
  [-37.8950811333, 175.41079175, "928"],
  [-37.88909235, 175.3922956333, "740"],
  [-37.8889259667, 175.3938591667, "759"],
  [-37.8876576333, 175.3859563833, "687"],
  [-37.89027155, 175.3973178833, "778"],
  [-37.8864473667, 175.3806136833, "631"],
  [-37.9000262833, 175.4183242167, "1012"],
  [-37.90036495, 175.4189457, "1024"],
  [-37.9000976833, 175.4197312167, "1027"],
  [-37.90239975, 175.42371165, "1067"],
  [-37.9043379667, 175.42430325, "1080"],
  [-37.9026441, 175.4231055167, "1068"],
  [-37.8883536333, 175.3888573833, "718"]
  ];

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
