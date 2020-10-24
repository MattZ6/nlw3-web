import React, { ChangeEvent, FormEvent, useCallback, useMemo, useState } from 'react';
import { Map, Marker, TileLayer } from 'react-leaflet';
import { FiPlus } from 'react-icons/fi';
import { LeafletMouseEvent } from 'leaflet';

import Sidebar from '../../components/Sidebar';

import { happyMapIcon } from '../../utils/matIcon';

import { 
  Container,
  Content,
  InputBlock,
  ImagesContainer,
  NewImageButton,
  SelectContainer,
  SelectButton,
  SubmitButton,
} from './styles';
import api from '../../services/api';
import { useHistory } from 'react-router-dom';

interface ICreateOrphanageDTO {
  latitude: number;
  longitude: number;
  title: string;
  about: string;
  instructions: string;
  opening_hours: string;
  open_on_weekends: boolean;
  files?: File[];
}

export default function CreateOrphanage() {
  const history = useHistory();

  const [position, setPosition] = useState({ latitude: 0, longitude: 0, });

  const [title, setTitle] = useState('');
  const [about, setAbout] = useState('');
  const [instructions, setInstructions] = useState('');
  const [opening_hours, setOpeningHours] = useState('');
  const [open_on_weekends, setOpenOnWeekends] = useState(true);
  const [images, setImages] = useState<File[]>([]);

  const handleMapClick = useCallback((event: LeafletMouseEvent) => {
    setPosition({ latitude: event.latlng.lat, longitude: event.latlng.lng });
  }, []);

  const handleSubmit = useCallback(async (event: FormEvent) => {
    event.preventDefault();

    const data = new FormData();

    data.append('title', title);
    data.append('about', about);
    data.append('instructions', instructions);
    data.append('opening_hours', opening_hours);
    data.append('open_on_weekends', String(open_on_weekends));
    data.append('latitude', String(position.latitude));
    data.append('longitude', String(position.longitude));

    images.forEach(image => {
      data.append('images', image);
    });
    
    try {
      await api.post('v1/orphanages', data);

      history.push('/app')
    } catch (error) {
      console.log('Algo deu errado');
    }

  }, [title, about, instructions, opening_hours, open_on_weekends, position.latitude, position.longitude, images, history]);

  const handleInputImageChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    if (!event.target.files) {
      return;
    }

    const files = Array.from(event.target.files);

    setImages(images => [...images, ...files.filter(file => file.type.includes('image/'))]);
  }, []);

  const previewImages = useMemo(() => images.map(image => URL.createObjectURL(image)), [images]);

  return (
    <Container>
     <Sidebar />

      <Content>
        <form onSubmit={handleSubmit}>
          <fieldset>
            <legend>Dados</legend>

            <Map 
              center={[-27.2092052,-49.6401092]} 
              style={{ width: '100%', height: 280 }}
              zoom={14}
              onclick={handleMapClick}
            >
              <TileLayer 
                url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
              />

              { position.latitude !== 0 && (
                <Marker interactive={false} icon={happyMapIcon} position={[position.latitude, position.longitude]} />
              ) }
            </Map>

            <InputBlock>
              <label htmlFor='name'>Nome</label>
              <input 
                id='name'
                value={title}
                onChange={event => setTitle(event.target.value)}
              />
            </InputBlock>

            <InputBlock>
              <label htmlFor='about'>Sobre <span>Máximo de 300 caracteres</span></label>
              <textarea 
                id='name' 
                maxLength={300} 
                value={about}
                onChange={event => setAbout(event.target.value)}
              />
            </InputBlock>

            <InputBlock>
              <label htmlFor='images'>Fotos</label>

              <ImagesContainer>
                { previewImages.map(image => (
                  <img key={image} src={image} alt={title} />
                )) }

                <NewImageButton htmlFor="image-input">
                  <FiPlus size={24} color='#15b6d6' />

                  <input
                    id="image-input" 
                    type="file" 
                    multiple 
                    accept=".jpg,.jpeg,.png" 
                    onChange={handleInputImageChange}
                  />
                </NewImageButton>
              </ImagesContainer>

            </InputBlock>
          </fieldset>

          <fieldset>
            <legend>Visitação</legend>

            <InputBlock>
              <label htmlFor='instructions'>Instruções</label>
              <textarea 
                id='instructions'
                value={instructions}
                onChange={event => setInstructions(event.target.value)}
              />
            </InputBlock>

            <InputBlock>
              <label htmlFor='opening_hours'>Horário de funcionamento</label>
              <input 
                id='opening_hours'
                value={opening_hours}
                onChange={event => setOpeningHours(event.target.value)}
              />
            </InputBlock>

            <InputBlock>
              <label htmlFor='open_on_weekends'>Atende fim de semana</label>

              <SelectContainer>
                <SelectButton 
                  type='button' 
                  isActive={open_on_weekends}
                  onClick={() => setOpenOnWeekends(true)}
                >
                  Sim
                </SelectButton>
                <SelectButton 
                  type='button' 
                  isActive={!open_on_weekends}
                  onClick={() => setOpenOnWeekends(false)}
                >
                  Não
                </SelectButton>
              </SelectContainer>
            </InputBlock>
          </fieldset>

          <SubmitButton type='submit'>
            Confirmar
          </SubmitButton>
        </form>
      </Content>
    </Container>
  );
}

// return `https://a.tile.openstreetmap.org/${z}/${x}/${y}.png`;
