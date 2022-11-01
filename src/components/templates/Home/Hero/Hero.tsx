import { Box, Button, Flex, Heading, HStack, Image, Stack, Text } from '@chakra-ui/react';
import { FC } from 'react';
import Slider from 'react-slick';
import { fonts } from '../../../../styles/theme';
interface IHeroProps {}

const Hero: FC<IHeroProps> = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const sliderData = [
    {
      mainImage: '/images/home/slider/slider_left.png',
      title: 'Für unvergessliche',
      subtitle: 'Momente',
      description:
        'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et do ',
      rightImage: '/images/home/ballons3.png',
    },
    {
      mainImage: '/images/home/slider/slider_left.png',
      title: 'Für unvergessliche',
      subtitle: 'Momente',
      description:
        'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et do ',
      rightImage: '/images/home/ballons3.png',
    },
    {
      mainImage: '/images/home/slider/slider_left.png',
      title: 'Für unvergessliche',
      subtitle: 'Momente',
      description:
        'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et do ',
      rightImage: '/images/home/ballons3.png',
    },
  ];
  return (
    <Box
      pos="relative"
      pb={{
        base: '43.75rem',
        sm: '50rem',
        md: '35.625rem',
        lg: '44rem',
        xl: '50rem',
        '2xl': '65.625rem',
      }}>
      <Image
        top={{ base: '34.375rem', md: '-9.375rem' }}
        pos="absolute"
        left=""
        h={{ base: 'auto', md: '48rem', lg: '56.25rem', xl: '65rem', '2xl': '80rem' }}
        src="/images/home/hero_shape.svg"
        alt="herobackground"
        zIndex={{ base: 'none', md: '50' }}
        display={{ base: 'none', md: 'block' }}
      />

      <Image
        overflow="hidden"
        pos="absolute"
        top={{ base: '33.75rem', md: '20rem', lg: '22rem', xl: '26rem', '2xl': '34rem' }}
        left={{ base: '-3.125rem' }}
        src="/images/home/hero_line.svg"
        alt="herobackground"
      />
      <Box
        pos="absolute"
        top={{ md: '6.25rem', xl: '9.375rem' }}
        w="100%"
        overflow="hidden"
        pb="12"
        zIndex={{ base: 'none', md: '100' }}>
        <Slider {...settings}>
          {sliderData.map((item, i) => (
            <Flex key={i} overflow="hidden">
              <Flex
                h={{ base: '37.5rem', md: 'auto' }}
                justify={{ base: 'start', md: 'center' }}
                w="100%"
                pos="relative"
                flexDirection={{ base: 'column', md: 'row' }}>
                <Image
                  pos="relative"
                  src={item.mainImage}
                  alt="slider_img"
                  boxShadow="light"
                  mb="4"
                  borderRadius={{ md: 'lg', xl: 'xl' }}
                  transform={{ md: 'skewX(-10deg)' }}
                  left={{ md: 'calc(-20% + 2rem)' }}
                  objectFit="cover"
                  height={{
                    base: '25rem',
                    md: '18rem',
                    lg: '22rem',
                    xl: '25rem',
                    '2xl': '32rem',
                  }}
                />
                <Flex
                  padding={{ base: '0', md: '5', lg: '10' }}
                  pos="absolute"
                  left={{
                    base: '-10%',
                    md: 'calc(40% + 2rem)',
                    lg: 'calc(45% + 2rem)',
                    '2xl': 'calc(45% + 2rem)',
                  }}
                  borderRadius={{ base: 'md', xl: 'xl' }}
                  transform="skewX(-10deg)"
                  zIndex="100"
                  top={{
                    base: '12.5rem',
                    md: '1rem',
                    lg: '1.875rem',
                    xl: '2.5rem',
                    '2xl': '1rem',
                  }}
                  h={{ base: '23.625rem', md: '80%', '2xl': '90%' }}
                  width={{
                    base: '95%',
                    md: '26rem',
                    lg: '30rem',
                    xl: '35rem',
                    '2xl': '45rem',
                  }}
                  justify={{ base: 'center', md: 'unset' }}
                  boxShadow="light"
                  bg="#FFFAFA">
                  <Stack
                    transform="skewX(10deg)"
                    flex="2"
                    pl="4"
                    pt={{ base: '8', md: '0' }}
                    maxW="80%"
                    pos={{ base: 'relative', md: 'unset' }}
                    left={{ md: '9.375rem' }}>
                    <Heading
                      fontSize={{ base: 'md', md: 'lg', '2xl': '3xl' }}
                      mb="4 !important"
                      fontWeight="semibold">
                      {item.title}
                    </Heading>
                    <Heading
                      color="red.500"
                      lineHeight={{ base: '1.875rem', md: '2rem', '2xl': '6.25rem' }}
                      fontSize={{ base: '2.125rem', md: '2xl', '2xl': '8xl' }}
                      fontFamily={fonts.font_RB}
                      mb={{ base: '4 !important', md: 0 }}
                      fontWeight="semibold">
                      {item.subtitle}
                    </Heading>
                    <Text
                      maxW="75%"
                      fontWeight="light"
                      fontSize={{ base: 'sm', md: 'xs', xl: 'sm', '2xl': 'md' }}
                      mt="-4 !important"
                      mb="2 !important">
                      {item.description}
                    </Text>
                    <HStack>
                      <Button size={{ base: 'sm', md: 'xs', lg: 'sm', '2xl': 'lg' }}>
                        Mehr erfahren
                      </Button>
                    </HStack>
                  </Stack>
                  <Image
                    flex="1"
                    transform="skewX(10deg)"
                    pos="absolute"
                    right={{ base: '-10%', sm: '-15%', md: '-20%' }}
                    top={{ md: '-10%' }}
                    w={{ base: '12.5rem', sm: '18.75rem', md: '65%' }}
                    h={{ base: '15.625rem', sm: '21.875rem', md: '130%' }}
                    src={item.rightImage}
                  />
                </Flex>
              </Flex>
            </Flex>
          ))}
        </Slider>
      </Box>
    </Box>
  );
};
export default Hero;
