import { Container, Flex, Grid, Stack, Heading, Button, Box, Text, Image } from '@chakra-ui/react';
import { CONTAINER_MAX_WIDTH } from 'constant/sizes';
import { settings } from 'constant/slider';
import { FC } from 'react';
import Slider from 'react-slick';
import { IWhiteSlide } from 'types/commonTypes';

interface IWhiteDesktopSliderProps {
  slides: IWhiteSlide[];
}

const WhiteDesktopSlider: FC<IWhiteDesktopSliderProps> = ({ slides }) => {
  return (
    <Container
      display={{ base: 'none', md: 'block' }}
      borderRadius={{ base: '10px', md: '20px', lg: '50px' }}
      boxShadow="xl"
      py="8"
      bg="white"
      maxW={CONTAINER_MAX_WIDTH}>
      <Slider {...settings} className="white_slider">
        {slides.map((slide, i) => (
          <Box key={i}>
            <Flex
              h={{ xl: '360px' }}
              pb="8"
              flex="1"
              align="center"
              justify="center"
              flexDir={{ base: 'column', md: 'row' }}>
              <Grid flex="1" placeItems="center">
                <Box
                  boxShadow="md"
                  overflow="hidden"
                  boxSize={{ base: '150px', md: '250px', lg: '180px', xl: '230px' }}
                  bg="gray.800"
                  borderRadius="full">
                  <Image src={slide.image} />
                </Box>
              </Grid>
              <Stack gap="4" flex="1">
                <Text fontSize="20px">{slide.date}</Text>
                <Heading color="black.500" fontSize="30px" fontWeight="semibold">
                  {slide.title}
                </Heading>
                <Text fontSize="20px">{slide.text}</Text>
                <Button
                  size={{ base: 'sm', md: 'md' }}
                  fontSize={{ base: '15px', md: '22px' }}
                  variant="outline"
                  w={{
                    md: '240px',
                    lg: '224px',
                  }}>
                  Mehr anzeigen
                </Button>
              </Stack>
            </Flex>
          </Box>
        ))}
      </Slider>
    </Container>
  );
};
export default WhiteDesktopSlider;
