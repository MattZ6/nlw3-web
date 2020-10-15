import React from 'react';
import { ThemeProvider } from 'styled-components';

import GlobalStyles from './styles/global';
import light from './styles/themes/light';

import Routes from './routes';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={light}>
      <Routes />

      <GlobalStyles />
    </ThemeProvider>
  );
};

export default App;
