import {
  Box,
  Button,
  Container,
  Flex,
  HStack,
  Image,
  Stack,
  Tag,
  Text,
  VStack,
} from "@chakra-ui/react"
import { FC } from "react"
import { BsFillShareFill } from "react-icons/bs"
import Slider from "react-slick"
import { CONTAINER_MAX_WIDTH } from "../../../constant/sizes"
import { blogSliderSettings } from "../../../constant/slider"
interface IBlogSliderProps {}

const BlogSlider: FC<IBlogSliderProps> = () => {
  const sliderImages = [
    "/images/blog_page/sliderImg1.png",
    "/images/blog_page/sliderImg2.png",
    "/images/blog_page/sliderImg3.png",
    "/images/blog_page/sliderImg4.png",
    "/images/blog_page/sliderImg1.png",
    "/images/blog_page/sliderImg2.png",
    "/images/blog_page/sliderImg3.png",
    "/images/blog_page/sliderImg4.png",
    "/images/blog_page/sliderImg1.png",
    "/images/blog_page/sliderImg2.png",
    "/images/blog_page/sliderImg3.png",
    "/images/blog_page/sliderImg4.png",
  ]

  return (
    <Box
      bgSize="cover"
      bgRepeat="no-repeat"
      bgPos="start"
      mt="24"
      py="8"
      bgImage={{
        base: "/images/blog_page/slider_mobile_bg.svg",
        md: "/images/blog_page/sliderBg.svg",
      }}
    >
      <Container maxW={CONTAINER_MAX_WIDTH}>
        <Container
          maxW={CONTAINER_MAX_WIDTH}
          display={{ base: "none", md: "block" }}
        >
          <Slider {...blogSliderSettings}>
            {sliderImages.map((image, index) => (
              <Box key={index}>
                <Box
                  m={{ base: 2, lg: 4 }}
                  mb="8 !important"
                  borderRadius="xl"
                  overflow="hidden"
                  boxShadow="dark"
                >
                  <Image src={image} alt="slider" w="full" />
                </Box>
              </Box>
            ))}
          </Slider>
        </Container>

        <Box pt="12">
          <Box
            pos="relative"
            top="12"
            display={{ base: "block", md: "none" }}
            mb="8"
            bg="red"
            w="full"
            borderRadius="md"
            overflow="hidden"
            boxShadow="dark"
          >
            <Image w="100%" src="/images/blog_page/slider_mobile_image.png" />
          </Box>
        </Box>
        <Text size="b2012" textAlign="center" py={{ base: 16, md: 8, xl: 16 }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus in
          libero risus semper Lorem ipsum dolor sit amet, consectetur adipiscing
          elit. Faucibus in libero risus semper Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Faucibus in libero risus semper Lorem
          ipsum dolor sit amet, cipiscing elit. Faucibus in liber
        </Text>

        <VStack display={{ base: "flex", md: "none" }}>
          <Button size="sm">
            <Flex align="center" gap="2">
              <BsFillShareFill />
              Artikel teilen
            </Flex>
          </Button>
        </VStack>

        <Stack align="end" display={{ base: "none", md: "flex" }}>
          <HStack mb="2">
            <Tag variant="normal">Helium</Tag>
            <Tag variant="normal">Team</Tag>
          </HStack>
          <Box>
            <Text size="b2012" textAlign="end">
              Von{" "}
              <Text as="span" size="b2012" fontWeight="bold" color="gray.700">
                Nikolai Doe
              </Text>
            </Text>
            <Text size="b2012" textAlign="end">
              Veröffentlicht am 20. April 2022
            </Text>
          </Box>
        </Stack>
      </Container>
    </Box>
  )
}
export default BlogSlider
