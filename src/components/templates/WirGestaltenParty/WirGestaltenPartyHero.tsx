import {
  Box,
  Button,
  Container,
  Flex,
  Grid,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react"
import { FC } from "react"
import { CONTAINER_MAX_WIDTH } from "../../../constant/sizes"

interface IWirGestaltenPartyHeroProps {}

const WirGestaltenPartyHero: FC<IWirGestaltenPartyHeroProps> = () => {
  return (
    <>
      <Container maxW={CONTAINER_MAX_WIDTH}>
        <Flex
          align={{ base: "start", md: "center" }}
          pos="relative"
          h={{
            base: "25rem",
            sm: "31.25rem",
            md: "43.75rem",
            lg: "62.5rem",
            xl: "75rem",
          }}
        >
          <Image
            pos="absolute"
            top="0"
            left={{ base: "-20%", md: "-40%" }}
            h={{ base: "-20%", md: "full" }}
            src="/images/we_design_party/shape.svg"
          />
          <Stack pos="relative" w="100%" top={{ base: "4rem", md: "unset" }}>
            <Heading
              fontSize={{ base: "md", md: "2xl", lg: "3xl", xl: "4xl" }}
              fontWeight="semibold"
            >
              Wir gestalten
            </Heading>
            <Text
              mb="-8 !important"
              fontSize={{ base: "3xl", md: "4xl", lg: "5xl", xl: "7xl" }}
              variant="cursive"
              as="span"
            >
              Party
            </Text>
            <Text
              display={{ base: "none", sm: "block" }}
              fontSize={{ base: "sm", lg: "md" }}
              maxW={{ md: "70%" }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus
              in libero risus semper
            </Text>
            <Box>
              <Button
                size={{ base: "xs", md: "lg" }}
                mt={{ base: "8 !important", md: "4" }}
              >
                Beratungstermin
              </Button>
            </Box>
          </Stack>
          <Grid
            placeItems="center"
            pos="relative"
            top={{ base: "1.25rem", md: "unset" }}
          >
            <Image
              borderRadius="full"
              boxShadow="light"
              src="/images/we_design_party/round.png"
              w={{ base: "17.5rem", sm: "auto " }}
            />
          </Grid>
        </Flex>
      </Container>
    </>
  )
}
export default WirGestaltenPartyHero
