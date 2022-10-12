import { Box, Button, Container, Flex, Heading, Image, Stack, Text } from '@chakra-ui/react';
import { CONTAINER_MAX_WIDTH } from 'constant/sizes';
import { FC } from 'react';

interface IProductCatlogProps {}

const ProductCatlog: FC<IProductCatlogProps> = () => {
  return (
    <Container
      maxW={CONTAINER_MAX_WIDTH}
      pos="relative"
      top={{ base: '-3rem', md: '-6.25rem', lg: '-12.5rem' }}
      mb={{ base: '1rem', md: '-4.25rem', lg: '-10.5rem' }}>
      <Flex gap="12" align="center" flexDir={{ base: 'column', lg: 'row' }}>
        <Box flex="1" w={{ base: '70%', md: 'unset' }}>
          <Image h="full" src="/images/we_design_party/stack_cards.png" />
        </Box>
        <Box display={{ base: 'block', md: 'none' }}>
          <Button>Zum Katalog</Button>
        </Box>
        <Stack
          display={{ base: 'none', md: 'flex' }}
          flex="1"
          pl={{ base: '4rem', xl: '9rem' }}
          pb={{ base: '2rem', xl: '5rem' }}
          pt="3.125rem"
          pr="1.25rem"
          bg="white"
          boxShadow="light"
          borderRadius="xl">
          <Heading fontSize={{ base: 'md', md: 'lg', xl: 'xl' }} fontWeight="semibold">
            PRODUKTE
          </Heading>
          <Heading fontSize={{ base: 'md', md: 'xl', lg: '2xl', xl: '3xl' }} fontWeight="semibold">
            Unsere
            <Text
              ml="4"
              fontSize={{ base: 'xl', md: '4xl', lg: '5xl', xl: '6xl' }}
              variant="cursive"
              as="span">
              Kataloge
            </Text>
          </Heading>
          <Text fontSize={{ base: 'sm', lg: 'md' }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius quibusdam, atque iusto
            culpa libero nostrum sit fuga cumque sunt tenetur! Lorem, ipsum dolor sit amet
            consectetur adipisicing elit.
          </Text>
          <Box>
            <Button size="sm" variant="outline" mt="4">
              Zum Shop
            </Button>
          </Box>
        </Stack>
      </Flex>
    </Container>
  );
};
export default ProductCatlog;
