import {
  Container,
  VStack,
  Flex,
  Heading,
  Stack,
  HStack,
  Box,
  Text,
  Image,
} from '@chakra-ui/react';
import { CONTAINER_MAX_WIDTH } from '../../../constant/sizes';
import { FC } from 'react';

interface IContactHeroProps {
  contactDetails: {
    text: string;
    icon: JSX.Element;
  }[];
}

const ContactHero: FC<IContactHeroProps> = ({ contactDetails }) => {
  return (
    <>
      {' '}
      <Box
        bgImage="/images/contact/bg.svg"
        bgRepeat="no-repeat"
        bgSize={{ base: '70%', md: 'auto' }}
        bgPos={{ base: 'left -6rem top 0', md: 'left -10rem top 0' }}>
        <Container maxW={CONTAINER_MAX_WIDTH} mt="20" pb="10">
          <VStack spacing={{ base: 8, md: 20 }}>
            <Flex gap={{ base: 2, md: 4 }}>
              <Heading size="h5020" as="span" fontWeight="semibold" whiteSpace="nowrap">
                Mitten in
              </Heading>
              <Text mb="-6 !important" as="span" variant="cursive" size="80">
                Wien
              </Text>
            </Flex>
            <Stack spacing={{ base: 4, lg: 8 }} flex="1" display={{ base: 'flex', md: 'none' }}>
              <Heading size="h2415" fontWeight="semibold">
                Partyshop, Lager, Werkstatt & Büro
              </Heading>
              <Stack spacing={{ base: 4, lg: 8 }}>
                {contactDetails.map((item, index) => (
                  <HStack key={item.text}>
                    <Box fontSize="xl" color="red.500">
                      {item.icon}
                    </Box>{' '}
                    <Text size="b2012">{item.text}</Text>
                  </HStack>
                ))}
              </Stack>
            </Stack>
            <Box
              mt={{ base: '20 !important', md: '0' }}
              mb="8"
              bg="red"
              w="full"
              borderRadius="xl"
              overflow="hidden"
              boxShadow="dark">
              <Image
                minH="12.5rem"
                objectFit="cover"
                h="full"
                w="100%"
                src="/images/contact/map.png"
              />
            </Box>
          </VStack>
        </Container>
      </Box>
    </>
  );
};
export default ContactHero;
