import { Box, Flex, Heading, HStack, Image, Text, VStack } from '@chakra-ui/react';
import { CONTAINER_MAX_WIDTH } from 'constant/sizes';
import { FC } from 'react';

interface IBrandsProps {}

const Brands: FC<IBrandsProps> = () => {
  return (
    <HStack
      pos="relative"
      justify="center"
      align="end"
      h={{ base: '800px', md: '1100px', lg: '1400px', '2xl': '1500px' }}
      overflow="hidden">
      <Image
        pos="absolute"
        src="/images/großhandel/logo2_bg.svg"
        w="full"
        objectFit="cover"
        top="0"
        h="full"
      />
      <VStack
        maxW={CONTAINER_MAX_WIDTH}
        mx="auto"
        pos="relative"
        justify="end"
        h="full"
        pb={{ base: '24', md: '60' }}>
        <Heading mb="8" size="h3018">
          Wir sind
        </Heading>

        <BrandsSection
          title="Qualatex"
          cursiveTitle="Distributor"
          text="Profitieren Sie von einer unglaublichen Auswahl an Ideen, Produkten und Business-Boostern in unserem Netzwerk."
          logosUrl="/images/großhandel/logos1.png"
        />
        <Box mt="8 !important">
          <BrandsSection
            title="Conwin"
            cursiveTitle="Distributor"
            text="Wir versorgen Sie mit der professionellen Ausrüstung von Conwin zum Arbeiten und Dekorieren mit Ballons, sowie mit Luft als auch mit Helium."
            logosUrl="/images/großhandel/logos2.png"
          />
        </Box>
      </VStack>
    </HStack>
  );
};
export default Brands;

interface IBrandsSectionProps {
  title: string;
  cursiveTitle: string;
  text: string;
  logosUrl: string;
}

export const BrandsSection: FC<IBrandsSectionProps> = ({ title, cursiveTitle, text, logosUrl }) => {
  return (
    <VStack>
      <Flex gap={{ base: 2, md: 4 }}>
        <Heading size="h5020" as="span" fontWeight="semibold">
          {title}
        </Heading>
        <Text mb="-6 !important" as="span" variant="cursive" size="80">
          {cursiveTitle}
        </Text>
      </Flex>
      <Text size="b2412" maxW="60%" mb="4 !important" textAlign="center">
        {text}
      </Text>
      <Box w={{ base: '400px', md: 'auto' }} overflowX="auto">
        <Image src={logosUrl} minW={{ base: '500px', md: 'auto' }} flexShrink="0" />
      </Box>
    </VStack>
  );
};
