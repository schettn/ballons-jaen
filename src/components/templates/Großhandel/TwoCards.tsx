import { Box, Container, Image } from '@chakra-ui/react';
import { CONTAINER_MAX_WIDTH } from '../../../constant/sizes';
import { FC } from 'react';
import HorizontalImageCard from './HorizontalImageCard';

interface ITwoCardsProps {}

const TwoCards: FC<ITwoCardsProps> = () => {
  return (
    <>
      <Box pos="relative" overflow="hidden" pb={{ md: '10', xl: 8 }} pt={{ base: '16', lg: 48 }}>
        <Image
          display={{ base: 'none', md: 'block' }}
          src="/images/großhandel/card_line.svg"
          pos="absolute"
          top="0"
          w="full"
        />
        <Container
          maxW={CONTAINER_MAX_WIDTH}
          pos="relative"
          mb={{ base: '16 !important', md: '0' }}>
          <HorizontalImageCard
            cardData={{
              tag: 'PRODUKTE',
              cursiveTitle: 'Kataloge',
              title: 'Unsere',
              leftCrusive: false,
              description:
                'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et do',
              buttonText: 'Zum Shop',
              imgUrl: '/images/großhandel/img1.png',
              imageLeft: true,
            }}
          />
        </Container>
      </Box>
      <Box pt={{ '2xl': 16 }} pb="10" pos="relative" overflow="hidden">
        <Image
          display={{ base: 'none', md: 'block' }}
          src="/images/großhandel/shape2.svg"
          pos="absolute"
          top="0"
          right="0"
          w="25%"
          transform="rotate(270deg)"
        />
        <Container maxW={CONTAINER_MAX_WIDTH} pos="relative">
          <HorizontalImageCard
            cardData={{
              tag: 'WERDE PARTNER',
              cursiveTitle: 'Rund',
              title: 'umsteigen',
              leftCrusive: true,
              description:
                'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et do',
              buttonText: 'Mehr erfahren',
              imgUrl: '/images/großhandel/img2.png',
              imageLeft: false,
            }}
          />
        </Container>
      </Box>
    </>
  );
};
export default TwoCards;
