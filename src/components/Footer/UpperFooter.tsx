import {
  Box,
  Container,
  Divider,
  Flex,
  Grid,
  Heading,
  Link,
  Stack,
  Table,
  Tbody,
  Td,
  Text,
  Tr,
} from "@chakra-ui/react"
import { FC } from "react"
import { CONTAINER_MAX_WIDTH } from "../../constant/sizes"

interface IUpperFooterProps {}

const UpperFooter: FC<IUpperFooterProps> = () => {
  return (
    <Container color="white" maxW={CONTAINER_MAX_WIDTH}>
      <Grid
        px="4"
        gridTemplateColumns={{ sm: "repeat(2,1fr)", md: "repeat(4,1fr)" }}
        gap={{ base: 4, md: 6, lg: 8 }}
      >
        <Stack>
          <Heading
            mb={{ base: "5", md: "8", lg: "10" }}
            fontWeight="bold"
            fontSize="md"
          >
            UNTERNEHMEN
          </Heading>

          <Text fontSize="sm" pl={{ base: 4, sm: 0 }}>
            Taborstraße 98 <br />
            1020 Wien <br />
            Austria <br />
            <br />
            <Link href="tel:+43 121 634 25">+43 121 634 25</Link> <br />
            <Link href="mailto:office@ballons-ballons.com">
              office@ballons-ballons.com
            </Link>
          </Text>
        </Stack>
        <Divider opacity="0.3" display={{ base: "block", sm: "none" }} />
        <Stack>
          <Heading
            mb={{ base: "5", md: "8", lg: "10" }}
            fontWeight="bold"
            fontSize="md"
          >
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
          </Flex>
        </Stack>
        <Divider opacity="0.3" display={{ base: "block", sm: "none" }} />

        <Stack>
          <Heading
            mb={{ base: "5", md: "8", lg: "10" }}
            fontWeight="bold"
            fontSize="md"
          >
            KATEGORIEN
          </Heading>
          <Grid
            gap="2"
            gridTemplateColumns={{ base: "repeat(2,1fr)", md: "1fr" }}
          >
            {[
              {
                label: "Großhandel",
              },
              {
                label: "Luftballons",
              },
              {
                label: "Ballongas",
              },
              {
                label: "Bubbles",
              },
              {
                label: "Pinatas",
              },
              {
                label: "Partyartikel",
              },
            ].map(item => (
              <Text fontSize="sm" key={item.label}>
                {item.label}
              </Text>
            ))}
          </Grid>
        </Stack>
        <Divider opacity="0.3" display={{ base: "block", sm: "none" }} />

        <Stack>
          <Heading
            mb={{ base: "5", md: "8", lg: "10" }}
            fontWeight="bold"
            fontSize="md"
          >
            LINKS
          </Heading>
          <Grid
            gap="2"
            gridTemplateColumns={{ base: "repeat(2,1fr)", md: "1fr" }}
          >
            {[
              {
                label: "Kontakt",
              },
              {
                label: "AGB",
              },
              {
                label: "Datenschutz",
              },
              {
                label: "Impressum",
              },
            ].map(item => (
              <Text
                fontSize="sm"
                _hover={{ textDecor: "underline" }}
                cursor="pointer"
                key={item.label}
              >
                {item.label}
              </Text>
            ))}
          </Grid>
        </Stack>
      </Grid>
    </Container>
  )
}
export default UpperFooter
