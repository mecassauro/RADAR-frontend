import React, { useState, useEffect, useMemo } from 'react';
import { useHistory } from 'react-router-dom';

import { Map, TileLayer, GeoJSON } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import HeatmapLayer from 'react-leaflet-heatmap-layer';

import CircularProgress from '@material-ui/core/CircularProgress';
import {
  FiSkipBack,
  FiPlay,
  FiPause,
  FiSkipForward,
  FiUser,
  FiLogOut,
  FiX,
  FiClipboard,
} from 'react-icons/fi';
import geoJsonSam from '../../Material/samTot.json';
import geoJsonRec from '../../Material/emasTot.json';

import { useFirebase } from '../../hooks/firebase';
import api from '../../api';
import getPointsFiltered from '../../utils/getPointsFiltered';
import getStatistics from '../../utils/getStatistics';

import imgLogo from '../../assets/logo.svg';

import {
  Container,
  Header,
  TimeLine,
  Controllers,
  LineContainer,
  Line,
  Logo,
  UserInfo,
  UBSInfo,
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

function valueText(value) {
  return marks_ant[marks_ant.findIndex(mark => mark.value === value)].label;
}

function Dashboard() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [openCard, setOpenCard] = useState(false);
  const [lineValue, setLineValue] = useState(99);
  const [apiData, setApiData] = useState([]);
  const [data, setData] = useState([]);
  const [USBData, setUBSData] = useState({});
  const [time, setTime] = useState(0);
  const [points, setPoints] = useState([{}]);
  const { token, signOut } = useFirebase();
  const navigation = useHistory();

  useEffect(() => {
    async function loadCases() {
      try {
        const response = await api.get('/cases', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setApiData(response.data);

        const dataFiltered = getPointsFiltered(
          response.data,
        ).map(({ lat, long, data: date }) => ({ lat, long, date }));
        setData(dataFiltered);
        setPoints(dataFiltered);
      } catch (err) {
        signOut();
        console.log(err);
      }
    }
    loadCases();
  }, [token, signOut]);

  useEffect(() => {
    const dayOne = new Date('2020-03-01').getTime();
    const currentPoints = data.map(({ date, long, lat }) => {
      const dayTwo = new Date(date).getTime();
      if (
        Math.round(Math.abs((dayOne - dayTwo) / (24 * 60 * 60 * 1000))) <
        7 * lineValue
      ) {
        return { date, long, lat };
      }
    });
    const filteredPoints = currentPoints.filter(point => {
      return point != null;
    });
    setPoints(filteredPoints);
  }, [lineValue, data]);

  function addValue() {
    if (!isPlaying) {
      setLineValue(state => state + 1);
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

  function handleLine(dataReceived, value) {
    clearInterval(time);
    setLineValue(value);
    setIsPlaying(false);
  }

  function handleFeature({ layer }) {
    const { feature } = layer;
    const usbStatistic = getStatistics(apiData, feature.properties.UBS);
    setUBSData(usbStatistic);
    setOpenCard(true);
  }

  const currentUbS = useMemo(() => {
    // console.log(USBData)
    const obito = Math.round((USBData.obito * 100) / USBData.casos);
    const comorb = Math.round((USBData.comorb * 100) / USBData.casos);

    return {
      total: USBData.casos,
      obito,
      comorb,
    };
  }, [USBData]);

  return (
    <>
      {points ? (
        <Container>
          <Header>
            <Logo>
              <img src={imgLogo} alt="logo" />
              <h1>Radar</h1>
            </Logo>
            <UserInfo>
              <div>
                <FiClipboard
                  onClick={() => navigation.push('UBS')}
                  size={20}
                  color="#8257E5"
                />
              </div>
              <div>
                <FiUser
                  onClick={() => navigation.push('profile')}
                  size={20}
                  color="#8257E5"
                />
              </div>
              <div>
                <FiLogOut onClick={signOut} size={20} color="#8257E5" />
              </div>
            </UserInfo>
          </Header>
          <Map
            zoomControl={false}
            center={[-15.869, -48.0933]}
            zoom={12}
            style={{ height: '100vh', zIndex: 1 }}
          >
            <TileLayer
              url="https://cartodb-basemaps-{s}.global.ssl.fastly.net/light_all/{z}/{x}/{y}.png"
              attribution='© <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, © <a href="https://carto.com/attribution">CARTO</a>'
            />
            <GeoJSON
              fillOpacity={0.1}
              onclick={handleFeature}
              data={geoJsonSam}
            />
            <GeoJSON
              fillOpacity={0.1}
              onclick={handleFeature}
              data={geoJsonRec}
            />
            <HeatmapLayer
              fitBoundsOnLoad
              points={points}
              longitudeExtractor={({ long }) => long}
              latitudeExtractor={({ lat }) => lat}
              intensityExtractor={() => 1}
            />
          </Map>
          <TimeLine>
            <Controllers>
              <FiSkipBack size={24} color="#9E9E9E" />
              {isPlaying ? (
                <FiPause onClick={handlePlay} size={24} color="#9E9E9E" />
              ) : (
                <FiPlay onClick={handlePlay} size={24} color="#9E9E9E" />
              )}
              <FiSkipForward size={24} color="#9E9E9E" />
            </Controllers>
            <LineContainer>
              <Line
                value={lineValue}
                valueLabelFormat={valueText}
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

          {openCard && (
            <UBSInfo>
              <FiX
                onClick={() => setOpenCard(false)}
                size={20}
                color="#CC0909"
              />
              <h1>UBS 02</h1>
              <table>
                <tr>
                  <td>Casos</td>
                  <td>{currentUbS.total}</td>
                </tr>
                <tr>
                  <td>Óbitos</td>
                  <td>{currentUbS.obito}%</td>
                </tr>
                <tr>
                  <td>Recuperados</td>
                  <td>{currentUbS.obito}%</td>
                </tr>
                <tr>
                  <td>Investigação</td>
                  <td>1%</td>
                </tr>
                <tr>
                  <td>Em aberto</td>
                  <td>2%</td>
                </tr>
                <tr>
                  <td>Idade média</td>
                  <td>2%</td>
                </tr>
                <tr>
                  <td>Comorbidade</td>
                  <td>{currentUbS.comorb}%</td>
                </tr>
                <tr>
                  <td>Hospitalizados</td>
                  <td>2%</td>
                </tr>
              </table>
            </UBSInfo>
          )}
        </Container>
      ) : (
        <CircularProgress
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        />
      )}
    </>
  );
}

export default Dashboard;
