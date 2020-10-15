import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    backgrounds: {
      default: string;
      primaryGradient: string;
    };
    texts: {
      primary: string;
    };
    colors: {
      primary: string;
      primaryLight: string;
      primaryDark: string;
      accent: string;
    };
  }
}
