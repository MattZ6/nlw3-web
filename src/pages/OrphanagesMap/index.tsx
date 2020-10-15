import React from 'react';
import { MdAdd } from 'react-icons/md';
import { Map, TileLayer } from 'react-leaflet';

import 'leaflet/dist/leaflet.css';

import marker from '../../assets/images/marker-icon.svg';

import { Container, SideBar, Link } from './styles';

const OrphanagesMap: React.FC = () => {
  return (
    <Container>
      <SideBar>
        <header>
          <img src={marker} alt='Happy' />

          <h2>Escolha um orfanato no mapa</h2>
          <p>Muitas crianças estão esperando por sua visita :)</p>
        </header>

        <footer>
          <strong>Guarapuava</strong>
          <span>Paraná</span>
        </footer>
      </SideBar>

      <Link to=''>
        <MdAdd size={32} />
      </Link>

      <Map
        center={[-25.3924403, -51.4624744]}
        zoom={15}
        style={{
          width: '100%',
          height: '100%',
        }}
      >
        {/* <TileLayer url='https://a.tile.openstreetmap.org/{z}/{x}/{y}.png' /> */}
        <TileLayer
          url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
        />
      </Map>
    </Container>
  );
};

export default OrphanagesMap;
