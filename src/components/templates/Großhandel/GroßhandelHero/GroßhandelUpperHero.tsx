import {
  Button,
  Container,
  Grid,
  Heading,
  HStack,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react"
import { FC } from "react"
import { CONTAINER_MAX_WIDTH } from "../../../../constant/sizes"

interface IGroßhandelUpperHeroProps {}

const GroßhandelUpperHero: FC<IGroßhandelUpperHeroProps> = () => {
  return (
    <>
      <Container maxW={CONTAINER_MAX_WIDTH}>
        <VStack
          pos="relative"
          zIndex="1"
          py={{ base: "16", md: "44", lg: "52", xl: "56" }}
        >
          <Heading fontWeight="semibold" size="h5030">
            GROßHANDEL
          </Heading>
          <Heading mb="-4 !important" fontWeight="semibold" size="h5020">
            Werde{" "}
            <Text ml="2" variant="cursive" size="80" as="span">
              Ballon-Partner
            </Text>
          </Heading>
          <HStack>
            <Button size={{ base: "sm", md: "md" }} variant="outline">
              Anmelden
            </Button>
            <Button size={{ base: "sm", md: "md" }}>Registrieren</Button>
          </HStack>
          <Grid
            display={{ base: "none", md: "grid" }}
            right="0"
            pos="absolute"
            top="6.25rem"
            w={{ md: "12.5rem", lg: "16.875rem", xl: "20rem" }}
          >
            <Image src="/images/großhandel/ballon_box.png" />
          </Grid>
        </VStack>
      </Container>
      z
    </>
  )
}
export default GroßhandelUpperHero
