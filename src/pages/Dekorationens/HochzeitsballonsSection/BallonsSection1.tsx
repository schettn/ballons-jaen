import { Box, Container, Heading, Image, Text, VStack } from '@chakra-ui/react';
import { FC } from 'react';

interface IBallonsSection1Props {}

const BallonsSection1: FC<IBallonsSection1Props> = () => {
  return (
    <Box>
      <Container h={{ base: '16.25rem', md: 'auto' }} maxW="100vw" mx="auto" overflow="hidden">
        <VStack
          pos="relative"
          py={{ base: '8', md: '40', lg: '60', '2xl': '80' }}
          h={{ md: '60rem', lg: '70rem', xl: '75rem' }}
          w="full">
          <Image
            display={{ base: 'none', md: 'block' }}
            pos="absolute"
            top={{ md: '10rem', xl: '18.75rem' }}
            right="-15rem"
            w="calc(20vw + 15vh)"
            src="/images/decorationen/ballons.png"
          />
          <Image
            pos="absolute"
            top={{ base: '0rem' }}
            w={{ base: '40%', md: '60%', lg: '70%', xl: '58%' }}
            left={{ base: '0', lg: '-64px', xl: 0 }}
            src="/images/decorationen/shapes/shape.svg"
          />
          <VStack pos="relative">

            <Text variant="cursive" size="120">

              Hochzeitsballons
            </Text>
            <Heading textAlign="center" fontSize={{ base: 'md', md: 'lg', lg: 'xl', xl: '2xl' }}>
              Ballons bringen Ihren Festtag zum Leben!
            </Heading>
            <Text
              maxW={{ base: '80%', md: '60%', lg: '50%' }}
              fontSize={{ base: 'sm', lg: 'md' }}
              textAlign="center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus imperdiet sed id
              elementum. Quam vel aliquam sit vulputate.
            </Text>
          </VStack>
        </VStack>
      </Container>
    </Box>
  );
};
export default BallonsSection1;
