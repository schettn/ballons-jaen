import {
  Button,
  Flex,
  Grid,
  Heading,
  HStack,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react"
import { FC } from "react"
import { fonts } from "../../../../styles/theme"

interface IRiesgesBottomSectionProps {}

const RiesgesBottomSection: FC<IRiesgesBottomSectionProps> = () => {
  const leftTexts = {
    title: "Riesiges",
    subtitle: "Produktsortiment",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus imperdiet sed id elementum. Quam vel aliquam sit vulputate. ",
  }

  const items = [
    {
      title: "Latexballons",
      text: "Lorem ipsum dolor sit amet, consetetur sadipscing",
    },
    {
      title: "Bedruckbare Ballons",
      text: "Lorem ipsum dolor sit amet, consetetur sadipscing",
    },
    {
      title: "Bedruckbare Ballons",
      text: "Lorem ipsum dolor sit amet, consetetur sadipscing",
    },
    {
      title: "Bedruckbare Ballons",
      text: "Lorem ipsum dolor sit amet, consetetur sadipscing",
    },
    {
      title: "Bedruckbare Ballons",
      text: "Lorem ipsum dolor sit amet, consetetur sadipscing",
    },
    {
      title: "Bedruckbare Ballons",
      text: "Lorem ipsum dolor sit amet, consetetur sadipscing",
    },
  ]

  return (
    <Flex flexDir={{ base: "column", xl: "row" }} gap="10">
      <Stack flex="1">
        <Heading
          fontSize={{ base: "xl", md: "3xl", lg: "4xl" }}
          mb="4 !important"
          fontWeight="semibold"
        >
          {leftTexts.title}
        </Heading>
        <Heading
          color="red.500"
          lineHeight={{ base: "1.875rem", md: "3.125rem", lg: "5rem" }}
          fontSize={{ base: "2.1875rem", md: "3xl", lg: "6xl" }}
          fontFamily={fonts.font_RB}
          mb={{ base: "4 !important", md: 0 }}
          fontWeight="semibold"
        >
          {leftTexts.subtitle}
        </Heading>
        <Text
          maxW={{ base: "90%", md: "75%" }}
          fontSize={{ base: "sm", lg: "lg" }}
          mt="-4 !important"
          mb="2 !important"
        >
          {leftTexts.description}
        </Text>
        <HStack display={{ base: "none", xl: "block" }}>
          <Button
            size="lg"
            variant="outline"
            colorScheme="red"
            borderRadius="full"
          >
            Mehr erfahren
          </Button>
        </HStack>
      </Stack>

      <Grid
        flex="2"
        gap="4"
        gridTemplateColumns={{
          base: "repeat(auto-fit,minmax(9.375rem,1fr))",
          md: "repeat(auto-fit,minmax(20rem,1fr))",
        }}
      >
        {items.map((item, index) => (
          <Flex key={index} gap="1" flexDir={{ base: "column", xl: "row" }}>
            <Image
              w={{ base: "3.75rem", lg: "5.375rem" }}
              h={{ base: "2.8125rem", lg: "4.6875rem" }}
              ml="-4"
              src="/images/home/reisges/pink_blob.svg"
              alt="pink blob"
            />
            <Stack spacing="0" key={index}>
              <Heading
                fontSize={{ base: "md", lg: "lg" }}
                fontWeight="semibold"
              >
                {item.title}
              </Heading>
              <Text maxW="95%" fontSize={{ base: "xs", sm: "sm", lg: "md" }}>
                {item.text}
              </Text>
            </Stack>
          </Flex>
        ))}
      </Grid>
      <HStack display={{ base: "flex", xl: "none" }}>
        <Button size={{ base: "sm", sm: "md" }} variant="outline">
          Mehr erfahren
        </Button>
      </HStack>
    </Flex>
  )
}
export default RiesgesBottomSection
