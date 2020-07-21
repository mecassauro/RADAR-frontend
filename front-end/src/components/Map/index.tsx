import React from 'react'
import { Map, TileLayer, Circle} from 'react-leaflet'
import 'leaflet/dist/leaflet.css';

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

const HeatmapLayer = require('react-leaflet-heatmap-layer');

const MapContainer: React.FC = () =>{
  const styler = { height: 'calc(100vh - 80px)'}

  const points = [{latitude: 6.83646681, longitude: 79.77121907, weight: 1},
    {latitude: 6.82776681, longitude: 79.871319, weight: 1},
    {latitude: 6.82176681, longitude: 79.871319, weight: 1},
    {latitude: 6.83776681, longitude: 79.871319, weight: 1},
    {latitude: 6.83176681, longitude: 79.871319, weight: 1},
    {latitude: 6.83976681, longitude: 79.861319, weight: 1},
    {latitude: 6.83076681, longitude: 79.861319, weight: 1},
    {latitude: 6.82776681, longitude: 79.861319, weight: 1},
    {latitude: 6.82076681, longitude: 79.871319, weight: 1},
    {latitude: 6.82076681, longitude: 79.861319, weight: 1},
    {latitude: 6.81076681, longitude: 79.861319, weight: 1},
    {latitude: 6.83776681, longitude: 79.869319, weight: 1},
    {latitude: 6.83276681, longitude: 79.869319, weight: 1},
    {latitude: 6.81976681, longitude: 79.869319, weight: 1},
    {latitude: 6.83776681, longitude: 79.867319, weight: 1},
    {latitude: 6.83776681, longitude: 79.865319, weight: 1},
    {latitude: 6.83646681, longitude: 79.77121907, weight: 1},
    {latitude: 6.82776681, longitude: 79.871319, weight: 1},
    {latitude: 6.82176681, longitude: 79.871319, weight: 1},
    {latitude: 6.83776681, longitude: 79.871319, weight: 1},
    {latitude: 6.83176681, longitude: 79.871319, weight: 1},
    {latitude: 6.83976681, longitude: 79.861319, weight: 1},
    {latitude: 6.83076681, longitude: 79.861319, weight: 1},
    {latitude: 6.82776681, longitude: 79.861319, weight: 1},
    {latitude: 6.82076681, longitude: 79.871319, weight: 1},
    {latitude: 6.82076681, longitude: 79.861319, weight: 1},
    {latitude: 6.81076681, longitude: 79.861319, weight: 1},
    {latitude: 6.83776681, longitude: 79.869319, weight: 1},
    {latitude: 6.83276681, longitude: 79.869319, weight: 1},
    {latitude: 6.81976681, longitude: 79.869319, weight: 1},
    {latitude: 6.83776681, longitude: 79.867319, weight: 1},
    {latitude: 6.83776681, longitude: 79.865319, weight: 1},
    {latitude: 6.84076681, longitude: 79.871319, weight: 1},
    {latitude: 6.83646681, longitude: 79.77121907, weight: 1},
    {latitude: 6.82776681, longitude: 79.871319, weight: 1},
    {latitude: 6.82176681, longitude: 79.871319, weight: 1},
    {latitude: 6.83776681, longitude: 79.871319, weight: 1},
    {latitude: 6.83176681, longitude: 79.871319, weight: 1},
    {latitude: 6.83976681, longitude: 79.861319, weight: 1},
    {latitude: 6.83076681, longitude: 79.861319, weight: 1},
    {latitude: 6.82776681, longitude: 79.861319, weight: 1},
    {latitude: 6.82076681, longitude: 79.871319, weight: 1},
    {latitude: 6.82076681, longitude: 79.861319, weight: 1},
    {latitude: 6.81076681, longitude: 79.861319, weight: 1},
    {latitude: 6.83776681, longitude: 79.869319, weight: 1},
    {latitude: 6.83276681, longitude: 79.869319, weight: 1},
    {latitude: 6.81976681, longitude: 79.869319, weight: 1},
    {latitude: 6.83776681, longitude: 79.867319, weight: 1},
    {latitude: 6.83776681, longitude: 79.865319, weight: 1},
    {latitude: 6.84076681, longitude: 79.871319, weight: 1},
    {latitude: 6.841776681, longitude: 79.869319, weight: 1},
    {latitude: 6.83646681, longitude: 79.77121907, weight: 1},
    {latitude: 6.82776681, longitude: 79.871319, weight: 1},
    {latitude: 6.82176681, longitude: 79.871319, weight: 1},
    {latitude: 6.83776681, longitude: 79.871319, weight: 1},
    {latitude: 6.83176681, longitude: 79.871319, weight: 1},
    {latitude: 6.83976681, longitude: 79.861319, weight: 1},
    {latitude: 6.83076681, longitude: 79.861319, weight: 1},
    {latitude: 6.82776681, longitude: 79.861319, weight: 1},
    {latitude: 6.82076681, longitude: 79.871319, weight: 1},
    {latitude: 6.82076681, longitude: 79.861319, weight: 1},
    {latitude: 6.81076681, longitude: 79.861319, weight: 1},
    {latitude: 6.83776681, longitude: 79.869319, weight: 1},
    {latitude: 6.83276681, longitude: 79.869319, weight: 1},
    {latitude: 6.81976681, longitude: 79.869319, weight: 1},
    {latitude: 6.83776681, longitude: 79.867319, weight: 1},
    {latitude: 6.83776681, longitude: 79.865319, weight: 1},
    {latitude: 6.84076681, longitude: 79.871319, weight: 1},
    {latitude: 6.841776681, longitude: 79.869319, weight: 1},
    {latitude: 6.84076681, longitude: 79.871319, weight: 1},

  ];

  return (
    <Map center={[-15.8383, -47.9546]} zoom={12} style={styler}>
        <TileLayer
        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Circle center={[-15.8383, -47.9546]} radius={10} />
    </Map>
  )
}

export default MapContainer
