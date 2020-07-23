import React from 'react'
import { Map, TileLayer } from 'react-leaflet'
import HeatmapLayer from 'react-leaflet-heatmap-layer'
import { useFirebase } from '../../components/Firebase'
import Button from '../../components/Button'
import 'leaflet/dist/leaflet.css';
import { domainToUnicode } from 'url'


type Props = {
	slidePos:any
}



function treatData(ogPoints:any, setNew:any, limit:any) {
  var newState:any = []
  const d1 = new Date("2020-03-01").getTime()
  ogPoints.forEach((point:any) => {
    let d = new Date(point.data).getTime()
    if((Math.round(Math.abs((d - d1) / (24 * 60 * 60 * 1000)))) < (7*limit)) {
		newState.push(
			[
				point.lat,
				point.long,
				1
			]
		)
		
	}
	
  })
  
  setNew(newState)
}

const MapContainer: React.FC<Props> = (props) =>{
  const styler = { height: 'calc(100vh - 80px)'}
  const firebase = useFirebase()!
  const [data, setData] = React.useState([])
  const [points, setPoints] = React.useState([[]])
  const [dum, setDum] = React.useState(0)

  React.useEffect(()=>{
    async function cases() {
      if(firebase.auther.currentUser) {
        const token = await firebase.auther.currentUser.getIdToken()
		console.log(token)
		var res = [[]]
        await fetch('http://localhost:3333/cases', {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,  
          },
		}).then(response => response.json()).then(data => setData(data))
	} else {
		if(dum === 1) {
		  setDum(0)
		}
	}
	}
    cases()	
	}, [dum])

	React.useEffect(() => {
		if(dum === 0 && !firebase.auther.currentUser) {
			setDum(1)
		}
	}, [dum])

	React.useEffect(() => {
		treatData(data, setPoints, props.slidePos)
	}, [data, props.slidePos])


  return (
	<>
    <Map center={[-15.8383, -47.9546]} zoom={12} style={styler}>
        <TileLayer
        attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
		<HeatmapLayer
		fitBoundsOnLoad
		fitBoundsOnUpdate
		points={points}
		longitudeExtractor={(m:any) => m[1]}
		latitudeExtractor={(m:any) => m[0]}
		intensityExtractor={(m:any) => parseFloat(m[2])}
		/>
    </Map>
	</>
  )
}

export default MapContainer
