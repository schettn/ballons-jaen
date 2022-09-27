import { Box, Button, Heading, Stack, Text } from '@chakra-ui/react';
import { FC } from 'react';

interface INewsContentProps {}

const NewsContent: FC<INewsContentProps> = () => {
  return (
    <Stack
      spacing={4}
      align={{ base: 'center', lg: 'start' }}
      textAlign={{ base: 'center', lg: 'start' }}>
      <Text
        mb={{ base: '-8', md: '-12', lg: '-16 !important' }}
        fontSize={{ base: '30px', md: '60px', lg: '90px' }}
        variant="cursive">
        News
      </Text>
      <Heading fontSize={{ base: '20px', md: '64px', lg: '60px' }}>
        Bleib auf dem <br /> Laufenden
      </Heading>
      <Box w="55px" h="6px" bg="black" />
      <Heading fontWeight="semibold" fontSize="24px">
        Gute Dekoration ist kein Zufall
      </Heading>
      <Text fontSize={{ base: '15px', md: '20px' }} maxW={{ md: '50%' }} mb="4 !important">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus in libero risus semper
      </Text>

      <Button fontSize={{ base: '15px', md: '22px' }} w={{ base: '200px', md: '270px' }}>
        Alle News anzeigen
      </Button>
    </Stack>
  );
};
export default NewsContent;
