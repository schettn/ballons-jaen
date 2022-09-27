import { Box, Button, Flex, Heading, HStack, Image, Stack, Text } from '@chakra-ui/react';
import { FC } from 'react';
import Slider from 'react-slick';
import { fonts } from 'styles/theme';
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
    <Box pos="relative" pb={{ base: 700, md: '600', lg: 700, xl: '1050' }}>
      <Image
        top={{ base: '550px', md: '-150px' }}
        pos="absolute"
        left=""
        h={{ base: 'auto', md: '800px', lg: '900px', xl: 'auto' }}
        src="/images/home/hero_shape.svg"
        alt="herobackground"
        zIndex={{ base: 'none', md: '50' }}
        display={{ base: 'none', md: 'block' }}
      />

      <Image
        overflow="hidden"
        pos="absolute"
        top={{ base: '540px', md: '350px', xl: '600px' }}
        left={{ base: '-50px' }}
        src="/images/home/hero_line.svg"
        alt="herobackground"
      />
      <Box
        pos="absolute"
        top={{ md: '100px', xl: '150px' }}
        w="100%"
        overflow="hidden"
        pb="50px"
        zIndex={{ base: 'none', md: '100' }}>
        <Slider {...settings}>
          {sliderData.map((item, i) => (
            <Flex key={i} overflow="hidden">
              <Flex
                h={{ base: '600px', md: 'auto' }}
                justify={{ base: 'start', md: 'center' }}
                w="100%"
                pos="relative"
                flexDirection={{ base: 'column', md: 'row' }}>
                <Image
                  pos="relative"
                  src={item.mainImage}
                  alt="slider_img"
                  boxShadow="md"
                  mb="4"
                  borderRadius={{ md: '20px', xl: '50px' }}
                  transform={{ md: 'skewX(-10deg)' }}
                  left={{ md: '-14%', lg: '-16%', xl: '-12%' }}
                  objectFit="cover"
                  height={{ base: '400px', md: '340px', lg: '400px', xl: '500px', '2xl': 'auto' }}
                />
                <Flex
                  padding={{ md: '5', lg: '10' }}
                  pos="absolute"
                  left={{ base: '-60%', md: '38%', lg: '39%', xl: '45%' }}
                  borderRadius={{ base: '20px', xl: '50px' }}
                  transform="skewX(-10deg)"
                  zIndex="100"
                  top={{ base: '200px', md: '16px', lg: '30px', xl: '40px', '2xl': '50px' }}
                  h={{ base: '378px', md: '88%', lg: '85%', xl: '80%' }}
                  width={{ base: '145%', md: '450px', lg: '600px', xl: '700px', '2xl': '850px' }}
                  justify={{ base: 'center', md: 'unset' }}
                  boxShadow="lg"
                  bg="#FFFAFA">
                  <Stack
                    transform="skewX(10deg)"
                    flex="2"
                    pl="4"
                    pt={{ base: '8', md: '0' }}
                    maxW={{ base: '50%', md: '80%' }}
                    pos={{ base: 'relative', md: 'unset' }}
                    left={{ base: '100px', sm: '150px' }}>
                    <Heading
                      fontSize={{ base: '22px', md: '30px', '2xl': '50px' }}
                      mb="4 !important"
                      fontWeight="semibold">
                      {item.title}
                    </Heading>
                    <Heading
                      color="red.500"
                      lineHeight={{ base: '30px', md: '50px', '2xl': '100px' }}
                      fontSize={{ base: '35px', md: '50px', '2xl': '100px' }}
                      fontFamily={fonts.font_RB}
                      mb={{ base: '4 !important', md: 0 }}
                      fontWeight="semibold">
                      {item.subtitle}
                    </Heading>
                    <Text
                      maxW="75%"
                      fontWeight="light"
                      fontSize={{ base: '15px', lg: '17px', xl: '20px' }}
                      mt="-4 !important"
                      mb="2 !important">
                      {item.description}
                    </Text>
                    <HStack>
                      <Button size={{ base: 'sm', lg: 'md', '2xl': 'lg' }} fontSize="22px">
                        Mehr erfahren
                      </Button>
                    </HStack>
                  </Stack>
                  <Image
                    flex="1"
                    transform="skewX(10deg)"
                    pos="absolute"
                    right={{ base: '-10%', sm: '-15%', md: '-20%' }}
                    top={{ base: '-5%', md: '-10%' }}
                    w={{ base: '200px', sm: '300px', md: '65%' }}
                    h={{ base: '250px', sm: '350px', md: '130%' }}
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
