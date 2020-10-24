import React from 'react';
import { MdAdd,MdArrowForward } from 'react-icons/md';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';

import marker from '../../assets/images/marker-icon.svg';

import { Container, SideBar, Link, OrphanageLink } from './styles';
import { happyMapIcon } from '../../utils/matIcon';

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

      <Link to='/orphanages/create'>
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

        <Marker icon={happyMapIcon} position={[-25.3924403, -51.4624744]}>
          <Popup closeButton={false } minWidth={240} maxWidth={240} className="map-popup">
            Lar das meninas

            <OrphanageLink to="/orphanages/1">

            <MdArrowForward size={20} color="#fff"/>
            </OrphanageLink>
          </Popup>
        </Marker>
      </Map>
    </Container>
  );
};

export default OrphanagesMap;
