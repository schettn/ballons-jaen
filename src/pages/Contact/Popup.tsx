import { Box, Button, Flex, Heading, Image, Stack, Text, useDisclosure } from '@chakra-ui/react';
import { FC } from 'react';
import { Modal, ModalOverlay, ModalContent, ModalBody, ModalCloseButton } from '@chakra-ui/react';
interface IPopupProps {}

const Popup: FC<IPopupProps> = () => {
  // you can add delay here
  const { isOpen, onClose } = useDisclosure({ defaultIsOpen: true });

  return (
    <Modal isOpen={isOpen} onClose={onClose} size={{ base: 'sm', md: '3xl', lg: '4xl', xl: '6xl' }}>
      <ModalOverlay />
      <ModalContent>
        <ModalCloseButton size="4xl" p="4" />
        <ModalBody py="20">
          <Flex align="end" pos="relative" flexDir={{ base: 'column-reverse', md: 'row' }}>
            <Box
              flex="1"
              pos="relative"
              left="-5rem"
              bottom={{ base: 0, md: '-5rem' }}
              mb={{ base: '-5rem !important', md: '0 !important' }}>
              <Image src="/images/contact/ballons_man.png" w={{ base: '50%', md: 'auto' }} />
            </Box>
            <Stack flex="2" align={{ base: 'center', md: 'start' }}>
              <Heading
                lineHeight="1rem"
                fontWeight="semibold"
                size="h2418"
                display={{ base: 'none', md: 'block' }}>
                27.07 - 05.08 2022
              </Heading>
              <Flex>
                <Heading fontWeight="semibold" size="h6020">
                  Wir sind auf
                </Heading>
                <Text ml="2" mb="-6 !important" variant="cursive" size="80" as="span">
                  Urlaub
                </Text>
              </Flex>
              <Heading
                lineHeight="1rem"
                fontWeight="semibold"
                size="h2418"
                display={{ base: 'block', md: 'none' }}>
                27.07 - 05.08 2022
              </Heading>
              <Text size="b2015" maxW={{ md: '70%' }} textAlign={{ base: 'center', md: 'start' }}>
                Wir sind momentan auf Betriebsurlaub, unser Büro ist deshalb nicht besetzt. Wir
                bearbeiten deine Anfragen und Bestellungen natürlich wieder wie gewohnt ab
                06.08.2022.
              </Text>
              <Box>
                <Button
                  size={{ base: 'sm', md: 'md' }}
                  mt={{ base: '4 !important', md: '8 !important' }}>
                  Zur Website
                </Button>
              </Box>
            </Stack>
          </Flex>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};
export default Popup;
