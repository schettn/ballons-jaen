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
        fontSize={{ base: 'xl', md: '4xl', lg: '7xl' }}
        variant="cursive">
        News
      </Text>
      <Heading fontSize={{ base: 'md', md: '4xl' }}>
        Bleib auf dem <br /> Laufenden
      </Heading>
      <Box w="3.4375rem" h=".375rem" bg="black" />
      <Heading fontWeight="semibold" fontSize="lg">
        Gute Dekoration ist kein Zufall
      </Heading>
      <Text fontSize={{ base: 'sm', md: 'md' }} maxW={{ sm: '60%', md: '50%' }} mb="4 !important">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus in libero risus semper
      </Text>

      <Button fontSize={{ base: 'sm', md: '1.375rem' }} w={{ base: '12.5rem', md: '16.875rem' }}>
        Alle News anzeigen
      </Button>
    </Stack>
  );
};
export default NewsContent;
