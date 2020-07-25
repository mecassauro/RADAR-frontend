import React, { useState, useEffect } from 'react';

import { Map, TileLayer } from 'react-leaflet';
import HeatmapLayer from 'react-leaflet-heatmap-layer';

import {
  FiSkipBack,
  FiPlay,
  FiPause,
  FiSkipForward,
  FiUser,
  FiLogOut,
} from 'react-icons/fi';
import 'leaflet/dist/leaflet.css';

import { useFirebase } from '../../hooks/firebase';
// import api from '../../api';
import imgLogo from '../../assets/logoHeader.svg';
import {
  Container,
  Header,
  TimeLine,
  Controlls,
  LineContainer,
  Line,
  Logo,
  UserInfo,
} from './styles';

const marks_ant = [
  {
    value: 0,
    label: '01',
  },
  {
    value: 1,
    label: '08',
  },
  {
    value: 2,
    label: '15',
  },
  {
    value: 3,
    label: '22',
  },
  {
    value: 4,
    label: '29',
  },
  {
    value: 5,
    label: '05',
  },
  {
    value: 6,
    label: '12',
  },
  {
    value: 7,
    label: '19',
  },
  {
    value: 8,
    label: '26',
  },
  {
    value: 9,
    label: '03',
  },
  {
    value: 10,
    label: '10',
  },
  {
    value: 11,
    label: '17',
  },
  {
    value: 12,
    label: '24',
  },
  {
    value: 13,
    label: '31',
  },
  {
    value: 14,
    label: '07',
  },
  {
    value: 15,
    label: '14',
  },
  {
    value: 16,
    label: '21',
  },
  {
    value: 17,
    label: '28',
  },
  {
    value: 18,
    label: '04',
  },
  {
    value: 19,
    label: '11',
  },
  {
    value: 20,
    label: '15',
  },
];

const marks = [
  {
    value: 0,
    label: 'Março',
  },
  {
    value: 5,
    label: 'Abril',
  },
  {
    value: 9,
    label: 'Maio',
  },
  {
    value: 14,
    label: 'Junho',
  },
  {
    value: 18,
    label: 'Julho',
  },
];

function valuetext(value) {
  return marks_ant[marks_ant.findIndex(mark => mark.value === value)].label;
}

function treatData(ogPoints, setNew, limit) {
  const newState = [];
  const d1 = new Date('2020-03-01').getTime();
  ogPoints.forEach(point => {
    const d = new Date(point.data).getTime();
    if (Math.round(Math.abs((d - d1) / (24 * 60 * 60 * 1000))) < 7 * limit) {
      newState.push([point.lat, point.long, 1]);
    }
  });
  setNew(newState);
}

function Dashboard() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [lineValue, setLineValue] = useState(99);
  const [data, setData] = useState([]);
  const [time, setTime] = useState(0);
  const [points, setPoints] = React.useState([[]]);
  const [dum, setDum] = React.useState(0);
  const { auther, getIdToken, signOut } = useFirebase();
  let slider = lineValue;

  // useEffect(() => {
  //   async function loadCases() {
  //     const token = getIdToken();
  //     const response = await api.get('/cases', {
  //       headers: {
  //         Authorization: `Bearer ${token}`,
  //       },
  //     });
  //   }

  //   loadCases();
  // }, [loading, getIdToken]);

  useEffect(() => {
    async function cases() {
      if (auther.currentUser) {
        const token = await getIdToken();
        await fetch(
          'https://us-central1-covinfo-cdf17.cloudfunctions.net/app/cases',
          {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              Authorization: `Bearer ${token}`,
            },
          },
        )
          .then(response => response.json())
          .then(datas => setData(datas));
      } else if (dum <= 35) {
        setDum(dum + 1);
      }
    }
    cases();
  }, [dum, auther.currentUser, getIdToken]);

  useEffect(() => {
    if (dum <= 35 && !auther.currentUser) {
      setDum(dum + 1);
    }
  }, [dum, auther.currentUser]);

  useEffect(() => {
    treatData(data, setPoints, lineValue);
  }, [data, lineValue]);

  function addValue() {
    if (!isPlaying) {
      setLineValue(slider);
      slider = slider < 30 ? slider + 1 : slider;
    }
  }

  function handlePlay() {
    setIsPlaying(!isPlaying);
    if (!isPlaying) {
      const timer = setInterval(addValue, 500);
      setTime(timer);
    } else {
      clearInterval(time);
    }
  }

  function handleLine(dataRecived, value) {
    clearInterval(time);
    setLineValue(value);
    setIsPlaying(false);
  }

  return (
    <Container>
      <Header>
        <Logo>
          <img src={imgLogo} alt="logo" />
          <h1>Radar</h1>
        </Logo>

        <UserInfo>
          <div>
            <FiUser size={20} color="#03b515" />
          </div>
          <div>
            <FiLogOut onClick={signOut} size={20} color="#03b515" />
          </div>
        </UserInfo>
      </Header>
      <Map
        zoomControl={false}
        center={[-15.8383, -47.9546]}
        zoom={12}
        style={{ height: '100vh', zIndex: 1 }}
      >
        <TileLayer
          url="https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png"
          attribution='© <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, © <a href="https://carto.com/attribution">CARTO</a>'
        />
        <HeatmapLayer
          fitBoundsOnLoad
          points={points}
          longitudeExtractor={m => m[1]}
          latitudeExtractor={m => m[0]}
          intensityExtractor={m => parseFloat(m[2])}
        />
      </Map>
      <TimeLine>
        <Controlls>
          <FiSkipBack size={24} color="#9E9E9E" />
          {isPlaying ? (
            <FiPause onClick={handlePlay} size={24} color="#9E9E9E" />
          ) : (
            <FiPlay onClick={handlePlay} size={24} color="#9E9E9E" />
          )}
          <FiSkipForward size={24} color="#9E9E9E" />
        </Controlls>
        <LineContainer>
          <Line
            value={lineValue}
            valueLabelFormat={valuetext}
            min={0}
            max={20}
            step={1}
            marks={marks}
            valueLabelDisplay="on"
            aria-label="pretto slider"
            onChange={handleLine}
          />
        </LineContainer>
      </TimeLine>
    </Container>
  );
}

export default Dashboard;
