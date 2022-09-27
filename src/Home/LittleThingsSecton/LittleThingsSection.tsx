import {
  Stack,
  Container,
  Flex,
  Heading,
  Text,
  HStack,
  Button,
  Box,
  Image,
  Grid,
} from '@chakra-ui/react';
import CardWithImageBackground from 'components/CardWithImageBackground';
import CricleImageWithBlobBg from 'components/CricleImageWithBlobBg';
import { CONTAINER_MAX_WIDTH } from 'constant/sizes';
import { FC } from 'react';

interface ILittleThingsSectionProps {}

const LittleThingsSection: FC<ILittleThingsSectionProps> = () => {
  const cards = [
    {
      image: '/images/home/little/little_section_1.png',
    },
    {
      image: '/images/home/little/little_section_2.png',
    },
    {
      image: '/images/home/little/little_section_3.png',
    },
  ];

  const cardHeight = { base: '240px', lg: '240px', xl: '320px' };
  const cardWidth = { base: '200px', lg: '200px', xl: '280px' };

  return (
    <Stack bg="white" py="20" px={{ base: 0, sm: 4, md: 8 }} align="center" justify="center">
      <Container
        justifyContent="space-between"
        as={Flex}
        gap={{ base: 32, lg: 8 }}
        spacing={{ base: 20, md: 32, xl: 40 }}
        flexDirection={{ base: 'column', lg: 'row' }}
        pt={{ base: 44, md: 20 }}
        maxW={CONTAINER_MAX_WIDTH}>
        <Flex display={{ base: 'none', md: 'flex' }} gap="4">
          <Stack flex="1" justify="center" display={{ base: 'none', lg: 'flex' }}>
            <CardWithImageBackground
              h={cardHeight}
              w={cardWidth}
              displayContent={false}
              card={{ image: cards[0].image }}
            />
          </Stack>
          <Stack
            gap="4"
            spacing="0"
            maxW="700px"
            h="full"
            w="full"
            align="start"
            justify={{ base: 'space-between', lg: 'center' }}
            flexDirection={{ base: 'row', lg: 'column' }}>
            <Box display={{ lg: 'none' }}>
              <CardWithImageBackground
                h={cardHeight}
                w={cardWidth}
                displayContent={false}
                card={{ image: cards[0].image }}
              />
            </Box>
            <CardWithImageBackground
              h={cardHeight}
              w={cardWidth}
              displayContent={false}
              card={{ image: cards[1].image }}
            />

            <CardWithImageBackground
              h={cardHeight}
              w={cardWidth}
              displayContent={false}
              card={{ image: cards[2].image }}
            />
          </Stack>
        </Flex>

        <Grid
          display={{ base: 'grid', md: 'none' }}
          pos="relative"
          bg="red"
          top="-240px"
          placeItems="center">
          <CricleImageWithBlobBg
            blob={'/images/home/little/big_shape.svg'}
            image={'/images/home/little/round_image.png'}
          />
          <Image
            right={{ base: '10px', sm: 20 }}
            top="160px"
            src="/images/home/little/shape.png"
            pos="absolute"
            boxSize="90px"
          />
        </Grid>

        <Stack maxW={{ lg: '50%' }} spacing="8" justify="center">
          <Heading
            fontSize={{ base: '20px', md: '32px', xl: '40px' }}
            lineHeight={{ base: '20px', md: '32px', xl: '40px' }}
            mb="-2"
            whiteSpace="nowrap">
            Auch die
            <Text
              ml="2"
              as="span"
              fontSize={{ base: '30', md: '32px', xl: '40px' }}
              variant="cursive">
              kleinsten
            </Text>
            <br />
            Dinge machen viel
            <Text
              ml="2"
              pos="relative"
              as="span"
              fontSize={{ base: '30px', md: '44px', xl: '60px' }}
              variant="cursive"
              pr="8">
              Freude
              <Image
                display={{ base: 'none', md: 'block' }}
                right={{ md: '26px', xl: '37px' }}
                top={{
                  md: '-80px',
                  xl: '-97px',
                }}
                src="/images/home/little/shape.png"
                pos="absolute"
              />
            </Text>
          </Heading>
          <Heading fontSize={{ base: '15px', md: '20px' }} fontWeight="semibold">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
            invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
          </Heading>
          <Text fontSize={{ base: '15px', md: '20px' }} fontWeight="light">
            At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no
            sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet,
            consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore
            magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et
            ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
            amet.
          </Text>
          <HStack
            fontSize="22px"
            justify="center"
            gap="4"
            flexDir={{ base: 'row-reverse', md: 'row' }}>
            <Button size={{ base: 'sm', md: 'md' }}>Zum Shop</Button>
            <Button size={{ base: 'sm', md: 'md' }} variant="outline">
              Großhandel
            </Button>
          </HStack>
        </Stack>
      </Container>
    </Stack>
  );
};
export default LittleThingsSection;
