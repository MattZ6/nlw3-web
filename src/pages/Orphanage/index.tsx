import React, { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { FiClock, FiInfo } from "react-icons/fi";
import { Map, Marker, TileLayer } from "react-leaflet";

import api from "../../services/api";

import Sidebar from "../../components/Sidebar";

import { happyMapIcon } from "../../utils/matIcon";

import { 
  Container,
  Content, 
  ImagesList, 
  ImageButton,
  DetailsContent, 
  MapContainer, 
  OpenDetailsContainer, 
  OpenDetails,
  ContactButton, 
} from './styles';
import { useParams } from "react-router-dom";

interface IImage {
  id: number;
  url: string;
}

interface IOrphanageDetails {
  id: number;
  title: string;
  about: string;
  instructions: string;
  latitude: number;
  longitude: number; 
  open_on_weekends: boolean;
  opening_hours: string;
  images: IImage[];
}

interface IRouteParams {
  id: string;
}

export default function Orphanage() {
  const params = useParams<IRouteParams>();
  const [orphanage, setOrphanage] = useState<IOrphanageDetails>();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    async function getOrphanage() {
      try {
        const { data } = await api.get<IOrphanageDetails>(`v1/orphanages/${params.id}`);

        setOrphanage(data);
      } catch (error) {
        console.log('Ops... algo deu errado');
      }
    }

    getOrphanage();
  }, [params.id]);

  if(!orphanage){
    return <p>Carregando...</p>;
  }

  return (
    <Container>
      <Sidebar/>

      <Content>
        <div>
          <img src={orphanage.images[currentImageIndex].url} alt={orphanage.title} />

          <ImagesList>
            { orphanage.images.map((image, index) => (
              <ImageButton key={image.id} isActive={index === currentImageIndex} type="button" onClick={() => setCurrentImageIndex(index)}>
                <img src={image.url} alt={orphanage.title} />
              </ImageButton>
            )) }
          </ImagesList>
          
          <DetailsContent>
            <h1>{orphanage.title}</h1>
            <p>{orphanage.about}</p>

            <MapContainer>
              <Map 
                center={[orphanage.latitude, orphanage.longitude]} 
                zoom={16} 
                style={{ width: '100%', height: 280 }}
                dragging={false}
                touchZoom={false}
                zoomControl={false}
                scrollWheelZoom={false}
                doubleClickZoom={false}
              >
                <TileLayer 
                  url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
                />
                <Marker interactive={false} icon={happyMapIcon} position={[orphanage.latitude, orphanage.longitude]} />
              </Map>

              <footer>
                <a target="_blank" rel="noopener noreferrer" href={`https://www.google.com/maps/dir/?api=1&destination=${orphanage.latitude},${orphanage.longitude}`}>
                  Ver rotas no Google Maps
                </a>
              </footer>
            </MapContainer>

            <hr />

            <h2>Instruções para visita</h2>
            <p>{orphanage.instructions}</p>

            <OpenDetailsContainer>
              <OpenDetails type="default">
                <FiClock size={32} color="#15B6D6" />
                Segunda à Sexta <br />
                { orphanage.opening_hours }
              </OpenDetails>

              <OpenDetails type={orphanage.open_on_weekends ? 'open' : "closed"}>
                <FiInfo size={32} color={ orphanage.open_on_weekends ? "#39CC83" : '#ff669d'} />
                { orphanage.open_on_weekends ? 'Atendemos' : 'Não atendemos'} <br />
                fim de semana
              </OpenDetails>
            </OpenDetailsContainer>

            <ContactButton type="button">
              <FaWhatsapp size={20} color="#FFF" />
              Entrar em contato
            </ContactButton>
          </DetailsContent>
        </div>
      </Content>
    </Container>
  );
}