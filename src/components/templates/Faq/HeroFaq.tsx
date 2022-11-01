import { Container, VStack, Flex, Heading, Text } from '@chakra-ui/react';
import { FC } from 'react';

interface IHeroFaqProps {}

const HeroFaq: FC<IHeroFaqProps> = () => {
  return (
    <Container
      maxW="87.5rem"
      bgImage="/images/faq/top_bg.svg"
      bgRepeat="no-repeat"
      bgPos={{ base: 'left 4% top 20%', xl: 'left 11rem top 0' }}
      bgSize={{ base: '25%', xl: 'auto' }}
      py="5rem"
      my="5%">
      <VStack>
        <Flex gap={{ base: 2, md: 4 }}>
          <Heading size="h5030" as="span" fontWeight="semibold" whiteSpace="nowrap">
            Häufig gestellte
          </Heading>
          <Text mb="-6 !important" as="span" variant="cursive" size="80">
            Fragen
          </Text>
        </Flex>
        <Text size="b2415" fontWeight="light" maxW="800px" textAlign="center">
          Wir beantworten hier Fragen, welche wir häufig von unseren Kunden hören. Lies dich gerne
          ein! Falls du weitere Fragen hast, stehen wir dir natürlich gerne zur Verfügung.
          <Text ml="1" as="span" size="b2415" fontWeight="bold">
            +43 2 326 34 25.
          </Text>
        </Text>
      </VStack>
    </Container>
  );
};
export default HeroFaq;
