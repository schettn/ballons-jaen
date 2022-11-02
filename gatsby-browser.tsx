/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 */

// You can delete this file if you're not using it

import '@fontsource/poppins/500.css';
import '@fontsource/poppins/100.css';
import '@fontsource/poppins/200.css';
import '@fontsource/poppins/300.css';
import '@fontsource/poppins/400.css';
import '@fontsource/poppins/600.css';
import '@fontsource/poppins/700.css';
import '@fontsource/poppins/800.css';
import '@fontsource/poppins/900.css';

//import 'slick-carousel/slick/slick.css';
//import 'slick-carousel/slick/slick-theme.css';

//import './src/styles/global.css';

import { GatsbyBrowser } from 'gatsby';
import { RootWrapper } from './src/chakra/RootWrapper';

export const wrapRootElement: GatsbyBrowser['wrapRootElement'] = ({ element }) => {
    return <RootWrapper>
        {element}
    </RootWrapper>
}