import { css, Global } from '@emotion/react';

const Fonts = () => (
  <Global
    styles={css`
      @font-face {
        font-style: normal;
        font-family: 'Proyale';
        font-weight: 400;
        src: local('Proyale'), url(/fonts/Proyale.otf) format('otf');
      }
      @font-face {
        font-style: normal;
        font-family: 'Red Buttery';
        font-weight: 400;
        src: local('Red_Buttery'), url(/fonts/Red_Buttery.otf) format('otf');
      }
    `}
  />
);
export default Fonts;
