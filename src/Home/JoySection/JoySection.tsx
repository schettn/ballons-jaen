import { Button, Grid, Heading, Stack, Text, VStack } from '@chakra-ui/react';
import { TransparentCard } from 'chakra/TransparentCard';
import { FC } from 'react';

interface IJoySectionProps {}

const JoySection: FC<IJoySectionProps> = () => {
  return (
    <Grid
      h={{ base: '690px', md: '960px' }}
      bgSize="cover"
      bgPos="center"
      placeItems="center"
      bgRepeat="no-repeat"
      bgImg="url('/images/home/joy/bg.png')"
      
      >
      <Stack
        spacing="6"
        justify="center"
        color="white"
        align="center"
        w={{ base: '320px', md: '600px' }}
        h={{ base: '480px', md: '600px' }}
        as={TransparentCard}>
        <VStack>
          <Heading
            lineHeight={{ base: '40px', md: '80px' }}
            fontWeight="semibold"
            fontSize={{ base: '60px', md: '96px' }}>
            Freude
          </Heading>
          <Heading fontWeight="semibold" fontSize={{ base: '30px', md: '48px' }} as="span">
            liegt in der Luft
          </Heading>
        </VStack>
        <Text fontSize={{ base: '15px', md: '20px' }} fontWeight="medium" textAlign="center">
          Selbst die kleinsten Dinge können viel Freude machen. Mit mehr als 30 Jahre Erfahrung sind
          wir der richtige Ansprechpartner, wenn es um wirkungsvolle Ballons, eindrucksvolle
          Event-Dekorationen, Partyzubehör uvm.
        </Text>
        <Button size={{ base: 'sm', md: 'md' }}>Erfahre mehr über uns</Button>
      </Stack>
    </Grid>
  );
};
export default JoySection;
