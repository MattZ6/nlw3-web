import { createGlobalStyle } from 'styled-components';

import 'leaflet/dist/leaflet.css';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    color: ${({ theme }) => theme.texts.primary};
    background: ${({ theme }) => theme.backgrounds.default};
  }

  body, input, textarea, button {
    font: 600 18px Nunito, sans-serif;
  }

  .map-popup {
    .leaflet-popup-content-wrapper {
      background: rgba(255,255,255,.8);
      border-radius: 20px;
      box-shadow: none;
    }
  
    .leaflet-popup-content {
      display:flex;
      align-items:center;
      justify-content: space-between;

      color: #0089a5;
      font-size:20px;
      font-weight:bold;
      margin: 8px 12px;

      a {
        display:flex;
        align-items:center;
        justify-content:center;

        width:40px;
        height:40px;
        border-radius:12px;
        background: #15c3d6;

        box-shadow: 17.2886px 27.6589px 41.4884px rgba(23,142,166,0.16);
      }
    }

    .leaflet-popup-tip-container {
      display: none;
    }
  }
`;
