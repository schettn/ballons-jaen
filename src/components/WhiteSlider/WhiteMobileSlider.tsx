import {
  Container,
  Grid,
  Stack,
  Heading,
  Button,
  Box,
  Text,
  VStack,
  Image,
} from '@chakra-ui/react';
import { CONTAINER_MAX_WIDTH } from 'constant/sizes';
import { settings } from 'constant/slider';
import { FC } from 'react';
import Slider from 'react-slick';
import { IWhiteSlide } from 'types/commonTypes';

interface IWhiteMobileSliderProps {
  slides: IWhiteSlide[];
}

const WhiteMobileSlider: FC<IWhiteMobileSliderProps> = ({ slides }) => {
  return (
    <Container maxW={CONTAINER_MAX_WIDTH} display={{ base: 'block', md: 'none' }}>
      <Slider {...settings} className="white_slider">
        {slides.map((slide, i) => (
          <Box key={i}>
            <Stack
              mx="4"
              mt="100px"
              mb="8"
              borderRadius={{ base: '10px' }}
              boxShadow="xl"
              py="8"
              pb="16"
              px="8"
              bg="white"
              flex="1"
              pt="20"
              align="center"
              justify="center">
              <Grid flex="1" placeItems="center">
                <Box
                  pos="absolute"
                  top="4"
                  overflow="hidden"
                  boxSize={{ base: '150px' }}
                  bg="gray.800"
                  borderRadius="full">
                  <Image src={slide.image} />
                </Box>
              </Grid>
              <VStack gap="0" flex="1" textAlign="center">
                <Text fontSize="14px" color="gray.700">
                  {slide.date}
                </Text>
                <Heading color="black.500" fontSize="20px" fontWeight="semibold">
                  {slide.title}
                </Heading>
                <Text color="black.500" fontSize="15px">
                  {slide.text}
                </Text>
                <Button
                  size={{ base: 'sm', md: 'md' }}
                  fontSize={{ base: '15px', md: '22px' }}
                  variant="outline">
                  Mehr anzeigen
                </Button>
              </VStack>
            </Stack>
          </Box>
        ))}
      </Slider>
    </Container>
  );
};
export default WhiteMobileSlider;
