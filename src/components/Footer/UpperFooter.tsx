import {
  Container,
  Grid,
  Stack,
  Heading,
  Divider,
  Flex,
  Table,
  Tbody,
  Tr,
  Td,
  Text,
  Box,
} from '@chakra-ui/react';
import { CONTAINER_MAX_WIDTH } from 'constant/sizes';
import { FC } from 'react';

interface IUpperFooterProps {}

const UpperFooter: FC<IUpperFooterProps> = () => {
  return (
    <Container color="white" maxW={CONTAINER_MAX_WIDTH}>
      <Grid
        px="4"
        gridTemplateColumns={{ sm: 'repeat(2,1fr)', md: 'repeat(4,1fr)' }}
        gap={{ base: 4, md: 6, lg: 8 }}>
        <Stack>
          <Heading mb={{ base: '20px', md: '30px', lg: '40px' }} fontWeight="bold" fontSize="20px">
            UNTERNEHMEN
          </Heading>

          <Text fontSize="15px" pl={{ base: 4, sm: 0 }}>
            Taborstraße 98 <br />
            1020 Wien <br />
            Austria <br />
            <br />
            +43 121 634 25 <br />
            office@ballons-ballons.com
          </Text>
        </Stack>
        <Divider opacity="0.3" display={{ base: 'block', sm: 'none' }} />
        <Stack>
          <Heading mb={{ base: '20px', md: '30px', lg: '40px' }} fontWeight="bold" fontSize="20px">
            ÖFFNUNGSZEITEN
          </Heading>

          <Flex>
            <Table variant="unstyled">
              <Tbody>
                <Tr>
                  <Td verticalAlign="top" px="0" whiteSpace="nowrap">
                    Mo - Do
                  </Td>
                  <Td verticalAlign="top" px="0">
                    09:00 - 17:00
                  </Td>
                </Tr>
                <Tr>
                  <Td verticalAlign="top" px="0">
                    Freitag
                  </Td>
                  <Td verticalAlign="top" px="0">
                    09:00 - 17:00 <Box my="4" /> Großhandel bis 13:00
                  </Td>
                </Tr>
                <Tr>
                  <Td verticalAlign="top" px="0">
                    Sa - So
                  </Td>
                  <Td verticalAlign="top" px="0">
                    Lieferungen und <Box my="4" /> Dekorationen vor Ort
                  </Td>
                </Tr>
              </Tbody>
            </Table>
            {/* <Stack spacing={8} align="start">
                <Text fontSize="15px">Mo - Do</Text>
                <Text fontSize="15px">Freitag</Text>
                <Text fontSize="15px">Sa - So</Text>
              </Stack>
              <Stack spacing={8} align="start">

              </Stack> */}
          </Flex>
        </Stack>
        <Divider opacity="0.3" display={{ base: 'block', sm: 'none' }} />

        <Stack>
          <Heading mb={{ base: '20px', md: '30px', lg: '40px' }} fontWeight="bold" fontSize="20px">
            KATEGORIEN
          </Heading>
          <Grid gap="2" gridTemplateColumns={{ base: 'repeat(2,1fr)', md: '1fr' }}>
            {[
              {
                label: 'Großhandel',
              },
              {
                label: 'Luftballons',
              },
              {
                label: 'Ballongas',
              },
              {
                label: 'Bubbles',
              },
              {
                label: 'Pinatas',
              },
              {
                label: 'Partyartikel',
              },
            ].map((item) => (
              <Text fontSize="15px" key={item.label}>
                {item.label}
              </Text>
            ))}
          </Grid>
        </Stack>
        <Divider opacity="0.3" display={{ base: 'block', sm: 'none' }} />

        <Stack>
          <Heading mb={{ base: '20px', md: '30px', lg: '40px' }} fontWeight="bold" fontSize="20px">
            LINKS
          </Heading>
          <Grid gap="2" gridTemplateColumns={{ base: 'repeat(2,1fr)', md: '1fr' }}>
            {[
              {
                label: 'Kontakt',
              },
              {
                label: 'AGB',
              },
              {
                label: 'Datenschutz',
              },
              {
                label: 'Impressum',
              },
            ].map((item) => (
              <Text fontSize="15px" key={item.label}>
                {item.label}
              </Text>
            ))}
          </Grid>
        </Stack>
      </Grid>
    </Container>
  );
};
export default UpperFooter;
