import { Box } from '@chakra-ui/react';
import WhiteDesktopSlider from 'components/WhiteSlider/WhiteDesktopSlider';
import WhiteMobileSlider from 'components/WhiteSlider/WhiteMobileSlider';

import { FC } from 'react';

interface IBottomSliderProps {}

const BottomSlider: FC<IBottomSliderProps> = () => {
  const slides = [
    {
      image: '/images/home/slides/slide1.png',
      date: '08. Februar 2022',
      title: 'Frauenlauf Dekoration',
      text: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus in libero risus semper',
    },
    {
      image: '/images/home/slides/slide2.png',

      date: '08. Februar 2022',
      title: 'Frauenlauf Dekoration',
      text: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus in libero risus semper',
    },
    {
      image: '/images/home/slides/slide1.png',

      date: '08. Februar 2022',
      title: 'Frauenlauf Dekoration',
      text: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus in libero risus semper',
    },
    {
      image: '/images/home/slides/slide2.png',

      date: '08. Februar 2022',
      title: 'Frauenlauf Dekoration',
      text: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus in libero risus semper',
    },
  ];

  return (
    <>
      <Box px="4" my={{md:"50",lg:0}}>
        <WhiteDesktopSlider slides={slides} />
      </Box>

      {/* Form mobile */}
      <Box my="16">
        <WhiteMobileSlider slides={slides} />
      </Box>
    </>
  );
};
export default BottomSlider;
