import { Box, Container, Image } from "@chakra-ui/react"
import { FC } from "react"
import { CONTAINER_MAX_WIDTH } from "../../../constant/sizes"
import HorizontalImageCard from "../Großhandel/HorizontalImageCard"
import BlogOverviewHero from "./BlogOverviewHero"
import BlogsSection from "./BlogsSection"

interface IBlogOverviewProps {}

const BlogOverview: FC<IBlogOverviewProps> = () => {
  return (
    <>
      <BlogOverviewHero />
      <BlogsSection />
      <Box
        pos="relative"
        overflow="hidden"
        pb={{ md: "10", xl: 32 }}
        pt={{ base: "16", lg: 48 }}
      >
        <Image
          display={{ base: "none", md: "block" }}
          src="/images/großhandel/card_line.svg"
          pos="absolute"
          top="0"
          w="full"
        />
        <Container
          maxW={CONTAINER_MAX_WIDTH}
          pos="relative"
          mb={{ base: "16 !important", md: "0" }}
        >
          <HorizontalImageCard
            cardData={{
              tag: "PRODUKTE",
              cursiveTitle: "Kataloge",
              title: "Unsere",
              leftCrusive: false,
              description:
                "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et do",
              buttonText: "Zum Shop",
              imgUrl: "/images/großhandel/img1.png",
              imageLeft: true,
            }}
          />
        </Container>
      </Box>
    </>
  )
}
export default BlogOverview
