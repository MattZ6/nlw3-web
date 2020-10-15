import React from 'react';
import { MdKeyboardArrowRight } from 'react-icons/md';

import logoImg from '../../assets/images/logo.svg';
import homeImg from '../../assets/images/home.svg';

import {
  Container,
  Wrapper,
  Children,
  Content,
  Location,
  Link,
} from './styles';

const Landing: React.FC = () => {
  return (
    <Container>
      <Wrapper>
        <img src={logoImg} alt='Happy :D' />

        <Content>
          <h1>Leve felicidade para o mundo</h1>
          <p>Visite orfanatos e mude o dia de muitas crianças.</p>
        </Content>

        <Children src={homeImg} alt='Crianças' />

        <Location>
          <strong>Guarapuava</strong>
          <span>Paraná</span>
        </Location>

        <Link to='/app'>
          <MdKeyboardArrowRight size={26} color='rgba(0, 0, 0, 0.6)' />
        </Link>
      </Wrapper>
    </Container>
  );
};

export default Landing;
