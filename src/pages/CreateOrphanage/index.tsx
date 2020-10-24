import React from 'react';
import { Map, Marker, TileLayer } from 'react-leaflet';
import { FiPlus } from 'react-icons/fi';

import Sidebar from '../../components/Sidebar';

import { happyMapIcon } from '../../utils/matIcon';

import { 
  Container,
  Content,
  InputBlock,
  NewImageButton,
  SelectContainer,
  SelectButton,
  SubmitButton,
} from './styles';

export default function CreateOrphanage() {

  return (
    <Container>
     <Sidebar />

      <Content>
        <form>
          <fieldset>
            <legend>Dados</legend>

            <Map 
              center={[-27.2092052,-49.6401092]} 
              style={{ width: '100%', height: 280 }}
              zoom={15}
            >
              <TileLayer 
                url={`https://api.mapbox.com/styles/v1/mapbox/light-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
              />

              <Marker interactive={false} icon={happyMapIcon} position={[-27.2092052,-49.6401092]} />
            </Map>

            <InputBlock>
              <label htmlFor='name'>Nome</label>
              <input id='name' />
            </InputBlock>

            <InputBlock>
              <label htmlFor='about'>Sobre <span>Máximo de 300 caracteres</span></label>
              <textarea id='name' maxLength={300} />
            </InputBlock>

            <InputBlock>
              <label htmlFor='images'>Fotos</label>

              <div className='uploaded-image'>

              </div>

              <NewImageButton type="button">
                <FiPlus size={24} color='#15b6d6' />
              </NewImageButton>
            </InputBlock>
          </fieldset>

          <fieldset>
            <legend>Visitação</legend>

            <InputBlock>
              <label htmlFor='instructions'>Instruções</label>
              <textarea id='instructions' />
            </InputBlock>

            <InputBlock>
              <label htmlFor='opening_hours'>Nome</label>
              <input id='opening_hours' />
            </InputBlock>

            <InputBlock>
              <label htmlFor='open_on_weekends'>Atende fim de semana</label>

              <SelectContainer>
                <SelectButton type='button' isActive>Sim</SelectButton>
                <SelectButton type='button'>Não</SelectButton>
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
