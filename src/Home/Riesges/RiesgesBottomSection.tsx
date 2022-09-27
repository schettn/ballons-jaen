import { Button, Flex, Grid, Heading, HStack, Image, Stack, Text } from '@chakra-ui/react';
import { FC } from 'react';
import { fonts } from 'styles/theme';

interface IRiesgesBottomSectionProps {}

const RiesgesBottomSection: FC<IRiesgesBottomSectionProps> = () => {
  const leftTexts = {
    title: 'Riesiges',
    subtitle: 'Produktsortiment',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus imperdiet sed id elementum. Quam vel aliquam sit vulputate. ',
  };

  const items = [
    {
      title: 'Latexballons',
      text: 'Lorem ipsum dolor sit amet, consetetur sadipscing',
    },
    {
      title: 'Bedruckbare Ballons',
      text: 'Lorem ipsum dolor sit amet, consetetur sadipscing',
    },
    {
      title: 'Bedruckbare Ballons',
      text: 'Lorem ipsum dolor sit amet, consetetur sadipscing',
    },
    {
      title: 'Bedruckbare Ballons',
      text: 'Lorem ipsum dolor sit amet, consetetur sadipscing',
    },
    {
      title: 'Bedruckbare Ballons',
      text: 'Lorem ipsum dolor sit amet, consetetur sadipscing',
    },
    {
      title: 'Bedruckbare Ballons',
      text: 'Lorem ipsum dolor sit amet, consetetur sadipscing',
    },
  ];

  return (
    <Flex flexDir={{ base: 'column', xl: 'row' }} gap="10">
      <Stack flex="1">
        <Heading
          fontSize={{ base: '30px', md: '50px', lg: '60px' }}
          mb="4 !important"
          fontWeight="semibold">
          {leftTexts.title}
        </Heading>
        <Heading
          color="red.500"
          lineHeight={{ base: '30px', md: '50px', lg: '80px' }}
          fontSize={{ base: '35px', md: '50px', lg: '80px' }}
          fontFamily={fonts.font_RB}
          mb={{ base: '4 !important', md: 0 }}
          fontWeight="semibold">
          {leftTexts.subtitle}
        </Heading>
        <Text
          maxW={{ base: '90%', md: '75%' }}
          fontSize={{ base: '15px', lg: '24px' }}
          mt="-4 !important"
          mb="2 !important">
          {leftTexts.description}
        </Text>
        <HStack display={{ base: 'none', xl: 'block' }}>
          <Button
            size="lg"
            // fontSize="22px"
            variant="outline"
            colorScheme="red"
            borderRadius="full">
            Mehr erfahren
          </Button>
        </HStack>
      </Stack>

      <Grid
        flex="2"
        gap="4"
        gridTemplateColumns={{
          base: 'repeat(auto-fit,minmax(150px,1fr))',
          md: 'repeat(auto-fit,minmax(320px,1fr))',
        }}>
        {items.map((item, index) => (
          <Flex key={index} gap="1" flexDir={{ base: 'column', xl: 'row' }}>
            <Image
              w={{ base: '60px', lg: '86px' }}
              h={{ base: '45px', lg: '75px' }}
              ml="-4"
              src="/images/home/reisges/pink_blob.svg"
              alt="pink blob"
            />
            <Stack spacing="0" key={index}>
              <Heading fontSize={{ base: '20px', lg: '30px' }} fontWeight="semibold">
                {item.title}
              </Heading>
              <Text maxW="95%" fontSize={{ base: '12px', sm: '14px', lg: '20px' }}>
                {item.text}
              </Text>
            </Stack>
          </Flex>
        ))}
      </Grid>
      <HStack display={{ base: 'flex', xl: 'none' }}>
        <Button size={{ base: 'sm', sm: 'md' }} variant="outline">
          Mehr erfahren
        </Button>
      </HStack>
    </Flex>
  );
};
export default RiesgesBottomSection;
