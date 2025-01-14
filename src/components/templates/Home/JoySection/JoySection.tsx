import { Button, Grid, Heading, Stack, Text, VStack } from "@chakra-ui/react"
import { FC } from "react"
import { TransparentCard } from "../../../../chakra/TransparentCard"

interface IJoySectionProps {}

const JoySection: FC<IJoySectionProps> = () => {
  return (
    <Grid
      h={{ base: "43.125rem", md: "60rem" }}
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
        w={{ base: "90%", md: "37.5rem" }}
        h={{ base: "30rem", md: "37.5rem" }}
        as={TransparentCard}
      >
        <VStack>
          <Heading
            lineHeight={{ base: "2.5rem", md: "5rem" }}
            fontWeight="semibold"
            fontSize={{ base: "4xl", md: "8xl" }}
          >
            Freude
          </Heading>
          <Heading
            fontWeight="semibold"
            fontSize={{ base: "lg", md: "3xl" }}
            as="span"
          >
            liegt in der Luft
          </Heading>
        </VStack>
        <Text
          fontSize={{ base: "sm", md: "md" }}
          fontWeight="medium"
          textAlign="center"
        >
          Selbst die kleinsten Dinge können viel Freude machen. Mit mehr als 30
          Jahre Erfahrung sind wir der richtige Ansprechpartner, wenn es um
          wirkungsvolle Ballons, eindrucksvolle Event-Dekorationen, Partyzubehör
          uvm.
        </Text>
        <Button size={{ base: "sm", md: "md" }}>Erfahre mehr über uns</Button>
      </Stack>
    </Grid>
  )
}
export default JoySection
