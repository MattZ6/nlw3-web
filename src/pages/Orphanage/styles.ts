import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  min-height: 100vh;
`;

export const Content = styled.main`
  flex: 1;

  > div {
    width: 700px;
    margin: 64px auto;

    background: #FFFFFF;
    border: 1px solid #D3E2E5;
    border-radius: 20px;

    overflow: hidden;

    > img {
      width: 100%;
      height: 300px;
      object-fit: cover;
    }
  }
`;

export const ImagesList = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  column-gap: 16px;

  margin: 16px 40px 0;
`;

interface ImageButtonProps {
  isActive?: boolean;
}

export const ImageButton = styled.button<ImageButtonProps>`
  border: 0;
  height: 88px;
  background: none;
  cursor: pointer;
  border-radius: 20px;
  overflow: hidden;
  outline: none;

  opacity: ${props => props.isActive ? '1' : '0.6'};

  > img {
    width: 100%;
    height: 88px;
    object-fit: cover;
  }
`;

export const DetailsContent = styled.div`
  padding: 80px;

  > h1 {
    color: #4D6F80;
    font-size: 54px;
    line-height: 54px;
    margin-bottom: 8px;    
  }

  > p {
    line-height: 28px;
    color: #5C8599;
    margin-top: 24px;
  }

  > hr {
    width: 100%;
    height: 1px;
    border: 0;
    background: #D3E2E6;
    margin: 64px 0;
  }

  > h2 {
    font-size: 36px;
    line-height: 46px;
    color: #4D6F80;
  }
`;

export const MapContainer = styled.div`
  margin-top: 64px;
  background: #E6F7FB;
  border: 1px solid #B3DAE2;
  border-radius: 20px;

  .leaflet-container {
    border-bottom: 1px solid #DDE3F0;
    border-radius: 20px;
  }

  > footer {
    padding: 20px 0;
    text-align: center;

    > a {
      line-height: 24px;
      color: #0089A5;
      text-decoration: none;
    }
  }
`;

export const OpenDetailsContainer = styled.div`
  margin-top: 24px;
  
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 20px;
`;

interface OpenDetailsProps {
  type: 'default' | 'open' | 'closed';
}

export const OpenDetails = styled.div<OpenDetailsProps>`
  padding: 32px 24px;
  border-radius: 20px;
  line-height: 28px;
  
  ${props => props.type === 'default' && css`
    background: linear-gradient(149.97deg, #E6F7FB 8.13%, #FFFFFF 92.67%);
    border: 1px solid #B3DAE2;
    color: #5C8599;
  `}
  
  ${props => props.type === 'open' && css`
    background: linear-gradient(154.16deg, #EDFFF6 7.85%, #FFFFFF 91.03%);
    border: 1px solid #A1E9C5;
    color: #37C77F;
  `}

  > svg {
    display: block;
    margin-bottom: 20px;
  }
`;

export const ContactButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  
  width: 100%;
  height: 64px;
  border: 0;
  cursor: pointer;
  background: #3CDC8C;
  border-radius: 20px;
  color: #FFFFFF;
  font-weight: 800;
  
  margin-top: 64px;

  transition: background-color 200ms ease-out;

  &:hover {
    background: #36CF82;
  }

  > svg {
    margin-right: 16px;
  }
`;
