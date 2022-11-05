import {
  Box,
  Container,
  Flex,
  Grid,
  GridItem,
  Heading,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react"
import { FC, useCallback, useState } from "react"
import { CONTAINER_MAX_WIDTH } from "../../../../constant/sizes"
import CustomImageViewer from "../../../CustomImageViewer"

interface IBallonsSection2Props {}

const BallonsSection2: FC<IBallonsSection2Props> = () => {
  const [currentImage, setCurrentImage] = useState(0)
  const [isViewerOpen, setIsViewerOpen] = useState(false)

  const desktopImages = [
    "/images/decorationen/grid/gridImage1.png",
    "/images/decorationen/grid/gridImage2.png",
    "/images/decorationen/grid/gridImage3.png",
    "/images/decorationen/grid/gridImage4.png",
    "/images/decorationen/grid/gridImage5.png",
    "/images/decorationen/grid/gridImage6.png",
    "/images/decorationen/grid/gridImage7.png",
    "/images/decorationen/grid/gridImage8.png",
    "/images/decorationen/grid/gridImage9.png",
  ]

  const openImageViewer = useCallback((index: number) => {
    setCurrentImage(index)
    setIsViewerOpen(true)
  }, [])

  const closeImageViewer = () => {
    setCurrentImage(0)
    setIsViewerOpen(false)
  }

  return (
    <>
      <Box
        pos="relative"
        top={{
          base: "0",
          md: "-25rem",
        }}
      >
        <Image
          pos="absolute"
          display={{ base: "none", md: "block" }}
          left={{
            md: "-28%",
            lg: "-20%",
            xl: "-18%",
            "2xl": "-16%",
          }}
          w="calc(20vw + 15vh)"
          src="/images/decorationen/ballons.png"
        />
        <Container maxW={CONTAINER_MAX_WIDTH} pos="relative">
          {/* Upper Section */}

          <VStack>
            <Heading
              fontSize={{ base: "md", md: "2xl", lg: "3xl", xl: "4xl" }}
              fontWeight="semibold"
            >
              Steigen lassen von
              <Text ml="4" variant="cursive" size="80" as="span">
                Ballons
              </Text>
            </Heading>
            <Text
              fontSize={{ base: "sm", lg: "md" }}
              textAlign="center"
              maxW={{ md: "60%" }}
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius
              quibusdam, atque iusto culpa libero nostrum sit fuga cumque sunt
              tenetur! Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Recusandae ea praesentium, enim alias a nihil et aperiam
              <br /> <br />
              <Text
                as="span"
                fontSize={{ base: "sm", lg: "md" }}
                display={{ base: "none", md: "inline-block" }}
              >
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Tempora necessitatibus cupiditate explicabo facere, eligendi
                molestias Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Quidem, accusamus.
              </Text>
            </Text>
          </VStack>

          <Grid
            display={{ base: "none", md: "grid" }}
            pos="relative"
            py="40"
            zIndex="1"
            placeItems="center"
            px="4"
            gap={{ base: "4", md: "8", lg: "10", xl: "14" }}
            gridTemplateColumns={{
              md: "repeat(3, 1fr)",
            }}
          >
            {new Array(9).fill("").map((_, i) => (
              <GridItem
                justifySelf="center"
                _hover={{
                  transition: "all 0.2s ease",
                  transform: {
                    md: "scale(1.02) ",
                    lg: "scale(1.02) ",
                  },
                }}
                transition="ease-in 0.2s"
                cursor="pointer"
                // h={{ base: '11.25rem', md: '18.75rem', lg: '25rem', xl: '29.375rem' }}
                key={i}
              >
                <Image
                  src={`/images/decorationen/grid/gridImage${1 + i}.png`}
                  borderRadius="xl"
                  boxShadow="light"
                  onClick={() => openImageViewer(i)}
                />
              </GridItem>
            ))}
          </Grid>
        </Container>
        {/* for Mobile */}
        <Box
          h="25rem"
          pos="relative"
          overflow="hidden"
          display={{ base: "block", md: "none" }}
        >
          <Image
            pos="absolute"
            left="-6.25rem"
            w="12.5rem"
            src="/images/decorationen/ballons.png"
          />
          <Image
            pos="absolute"
            right="-6.25rem"
            w="14.375rem"
            src="/images/decorationen/ballons.png"
          />
          <Box pos="absolute" maxW="full" bottom="3rem">
            <Image
              pos="absolute"
              left="0"
              src="/images/decorationen/left_transparent.svg"
            />
            <Image
              pos="absolute"
              right="0"
              src="/images/decorationen/right_transparent.svg"
            />
            <Flex overflowY="auto">
              {new Array(9).fill("").map((_, i) => (
                <Box key={i} px="2" flexShrink="0" mb="2">
                  <Image
                    _hover={{
                      transition: "all 0.2s ease",
                      transform: {
                        md: "scale(1.02) ",
                        lg: "scale(1.02) ",
                      },
                    }}
                    onClick={() => openImageViewer(i)}
                    transition="ease-in 0.2s"
                    boxSize="10.625rem"
                    boxShadow="light"
                    bg="blue"
                    src={`/images/decorationen/grid/gridImage${1 + i}.png`}
                    borderRadius="lg"
                  />
                </Box>
              ))}
            </Flex>
          </Box>
        </Box>
      </Box>
      <CustomImageViewer
        closeImageViewer={closeImageViewer}
        currentImage={currentImage}
        isViewerOpen={isViewerOpen}
        desktopImages={desktopImages}
      />
    </>
  )
}
export default BallonsSection2
