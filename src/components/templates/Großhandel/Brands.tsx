import {
  Box,
  Container,
  Flex,
  Heading,
  HStack,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react"
import { FC } from "react"
import Slider from "react-slick"
import { CONTAINER_MAX_WIDTH } from "../../../constant/sizes"
import { brandSettings } from "../../../constant/slider"

interface IBrandsProps {}

const Brands: FC<IBrandsProps> = () => {
  const brandsImg1 = [
    {
      url: "/images/großhandel/distributors/dist1.png",
    },
    {
      url: "/images/großhandel/distributors/dist2.png",
    },
    {
      url: "/images/großhandel/distributors/dist3.png",
    },
    {
      url: "/images/großhandel/distributors/dist4.png",
    },
    {
      url: "/images/großhandel/distributors/dist5.png",
    },
  ]

  return (
    <HStack
      pos="relative"
      justify="center"
      align="end"
      h={{ base: "800px", md: "1100px", lg: "1400px", "2xl": "1500px" }}
      overflow="hidden"
    >
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
        pb={{ base: "24", md: "60" }}
      >
        <Heading mb="8" fontSize={{ base: "md", lg: "xl" }}>
          Wir sind
        </Heading>

        <BrandsSection
          title="Qualatex"
          images={brandsImg1}
          cursiveTitle="Distributor"
          text="Profitieren Sie von einer unglaublichen Auswahl an Ideen, Produkten und Business-Boostern in unserem Netzwerk."
        />
        <Box mt="8 !important">
          <BrandsSection
            images={brandsImg1}
            title="Conwin"
            cursiveTitle="Distributor"
            text="Wir versorgen Sie mit der professionellen Ausrüstung von Conwin zum Arbeiten und Dekorieren mit Ballons, sowie mit Luft als auch mit Helium."
          />
        </Box>
      </VStack>
    </HStack>
  )
}
export default Brands

interface IBrandsSectionProps {
  title: string
  cursiveTitle: string
  text: string

  images: {
    url: string
  }[]
}

export const BrandsSection: FC<IBrandsSectionProps> = ({
  title,
  cursiveTitle,
  text,
  images,
}) => {
  return (
    <>
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

        <Container
          maxW={{ base: "400px", sm: "600px" }}
          display={{ base: "block", md: "none" }}
        >
          <Slider {...brandSettings}>
            {images.map((img, index) => (
              <Box key={index}>
                <Box mx="4">
                  <Image src={img.url} h="100px" />
                </Box>
              </Box>
            ))}
          </Slider>
        </Container>

        <HStack spacing="4" display={{ base: "none", md: "flex" }}>
          {images.map((image, index) => (
            <Box key={index}>
              <Image src={image.url} />
            </Box>
          ))}
        </HStack>
      </VStack>
    </>
  )
}
