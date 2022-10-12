import { Box } from '@chakra-ui/react';
import WhiteDesktopSlider from './WhiteDesktopSlider';
import WhiteMobileSlider from './WhiteMobileSlider';
import { FC } from 'react';
import { INewsSlides } from 'types/commonTypes';

interface INewsSlidesProps {
  slides: INewsSlides[];
  showNewsTitle?: boolean;
  withoutImageVariant?: boolean;
}

const NewsSlider: FC<INewsSlidesProps> = ({ withoutImageVariant, slides, showNewsTitle }) => {
  return (
    <>
      <Box px="4" my={{ md: '50', lg: 0 }}>
        <WhiteDesktopSlider showTitle={showNewsTitle} slides={slides} />
      </Box>

      {/* Form mobile */}
      <Box my="16">
        <WhiteMobileSlider
          withoutImageVariant={withoutImageVariant}
          showTitle={showNewsTitle}
          slides={slides}
        />
      </Box>
    </>
  );
};
export default NewsSlider;
