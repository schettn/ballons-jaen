import { extendTheme, ThemeConfig, withDefaultColorScheme } from '@chakra-ui/react';

export const colors = {
  gray: {
    100: '#F4F4F4',
    500: '#E6E6E6',
    700: '#606060',
  },
  red: {
    500: '#E3000F',
    600: '#E3000F',
  },

  black: {
    500: '#333333',
  },
};
export const fonts = {
  body: `'Poppins', sans-serif`,
  heading: `'Poppins', sans-serif`,
  font1: `'Poppins', sans-serif`,
  font2: `'Lato', sans-serif`,
  font_RB: `'Red Buttery', sans-serif`,
  font_Pro: `'Proyale', sans-serif`,
};
const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false,
};

const theme = extendTheme(
  {
    shadow: {
      light: '0px 4px 10px rgba(0, 0, 0, 0.1)',
    },
    components: {
      Button: {
        // The styles all button have in common
        baseStyle: {
          borderRadius: 'full',
          fontSize: '22px',
          fontWeight: 'medium',
        },
        // Two sizes: sm and md
        sizes: {
          sm: {
            fontSize: '15px',
            px: 5,
            py: '20px',
          },
          md: {
            fontSize: '22px',
            px: 8,
            py: 6,
          },
          lg: {
            fontSize: '22px',
            px: '30px',
            py: '15px',
          },
        },
        // Two variants: outline and solid
        variants: {
          outline: {
            // borderWidth: { base: '2px', md: '3px' },
            outline:'none',
            boxShadow: {
              base: '0px 0px 0px 2px #E3000F inset',
              md: '0px 0px 0px 3px #E3000F inset',
            },
          },
        },
      },
      Text: {
        // The styles all button have in common
        baseStyle: {
          borderRadius: 'full',
          fontSize: '22px',
        },
        // Two sizes: sm and md
        sizes: {},

        variants: {
          cursive: {
            fontFamily: 'font_RB',
            fontSize: '22px',
            fontWeight: 'normal',
            color: 'red.500',
          },
        },
      },
    },
    styles: {
      global: {
        'html, body': {
          background: '#f4f4f4',
        },
      },
    },
    config,

    colors,

    fonts,
  },
  withDefaultColorScheme({
    colorScheme: 'red',
  })
);

export default theme;
