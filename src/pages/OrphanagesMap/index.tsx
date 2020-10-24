import React, { useEffect, useState } from 'react';
import { MdAdd,MdArrowForward } from 'react-icons/md';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';

import marker from '../../assets/images/marker-icon.svg';

import api from '../../services/api';

import { happyMapIcon } from '../../utils/matIcon';

import { Container, SideBar, Link, OrphanageLink } from './styles';

interface IOrphanage {
  id: number;
  title: string;
  latitude: number;
  longitude: number;
}

const OrphanagesMap: React.FC = () => {
  const [orphanages, setOrphanages] = useState<IOrphanage[]>([]);

  useEffect(() => {
    async function getOrphanages() {
      try {
        const { data } = await api.get<IOrphanage[]>('v1/orphanages');

        setOrphanages(data);
      } catch (error) {
        console.log('Ops... algo deu errado');
      }
    }

    getOrphanages();
  }, []);

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
        
        <TileLayer
          url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
          />

        {orphanages.map(orphanage => (
          <Marker key={orphanage.id} icon={happyMapIcon} position={[orphanage.latitude, orphanage.longitude]}>
            <Popup closeButton={false } minWidth={240} maxWidth={240} className="map-popup">
              { orphanage.title }

              <OrphanageLink to={`/orphanages/${orphanage.id}`}>

              <MdArrowForward size={20} color="#fff"/>
              </OrphanageLink>
            </Popup>
          </Marker>
        ))}
      </Map>
    </Container>
  );
};

// <TileLayer url='https://a.tile.openstreetmap.org/{z}/{x}/{y}.png' />

export default OrphanagesMap;
