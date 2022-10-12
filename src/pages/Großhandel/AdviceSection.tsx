import { Box, Button, Container, Flex, Heading, Image, Stack, Text } from '@chakra-ui/react';
import { CONTAINER_MAX_WIDTH } from 'constant/sizes';
import { FC } from 'react';

interface IAdviceSectionProps {}

const AdviceSection: FC<IAdviceSectionProps> = () => {
  return (
    <Container
      h={{ base: 'auto', lg: '50rem' }}
      alignItems={{ base: 'center', lg: 'center' }}
      justifyContent="space-between"
      py="8"
      flexDirection={{ base: 'column-reverse', md: 'column', lg: 'row' }}
      as={Flex}
      gap="4"
      maxW={CONTAINER_MAX_WIDTH}>
      <Box flex="3">
        <Stack>
          <Flex gap={{ base: 2, md: 4 }}>
            <Heading size="h5020" as="span" fontWeight="semibold">
              Lass dich von uns
            </Heading>
            <Text mb="-6 !important" as="span" variant="cursive" size="80">
              beraten
            </Text>
          </Flex>

          <Text size="b2012" variant="light" maxW="90%">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
            invidunt ut labore et doLorem ipsum dolor sit amet, consetetur sadipscing elitr, sed
            diam nonumy eirmod tempor invidunt ut labore et do
            <br />
            <br />
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
            invidunt ut labore et do
          </Text>

          <Box>
            <Button mt="4" size={{ base: 'sm', md: 'md' }}>
              Jetzt Beratung anfragen
            </Button>
          </Box>
        </Stack>
      </Box>

      <Box flex="2">
        <Image
          mx="auto"
          w={{ base: '80%', sm: '80%', md: '25rem', lg: 'auto' }}
          src="/images/großhandel/shape_bg.png"
        />
      </Box>
    </Container>
  );
};
export default AdviceSection;
