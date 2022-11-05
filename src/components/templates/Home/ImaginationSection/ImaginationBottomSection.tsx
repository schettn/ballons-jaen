import { Grid, GridItem, Image } from "@chakra-ui/react"
import { FC, useCallback, useState } from "react"
import CustomImageViewer from "../../../../components/CustomImageViewer"
interface IImaginationBottomSectionProps {}

const ImaginationBottomSection: FC<IImaginationBottomSectionProps> = () => {
  const [currentImage, setCurrentImage] = useState(0)
  const [isViewerOpen, setIsViewerOpen] = useState(false)

  const mobileImages = [
    "/images/home/imagination/mobile/mobileG1.png",
    "/images/home/imagination/mobile/mobileG2.png",
    "/images/home/imagination/mobile/mobileG3.png",
    "/images/home/imagination/mobile/mobileG4.png",
    "/images/home/imagination/mobile/mobileG5.png",
    "/images/home/imagination/mobile/mobileG6.png",
    "/images/home/imagination/mobile/mobileG7.png",
  ]
  const desktopImages = [
    "/images/home/imagination/gallary1.png",
    "/images/home/imagination/gallary2.png",
    "/images/home/imagination/gallary3.png",
    "/images/home/imagination/gallary4.png",
    "/images/home/imagination/gallary5.png",
    "/images/home/imagination/gallary6.png",
    "/images/home/imagination/gallary7.png",
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
      {" "}
      <Grid
        px="4"
        gridGap={{ base: "2", md: "4" }}
        gridTemplateAreas={{
          base: `
                "I1 I2"
                "I3 I3"
                "I4 I5"
                "I6 I7"
              `,
          md: `
              "I1 I1 I2 I3"
              "I1 I1 I2 I4"
              "I5 I5 I5 I5"
              "I5 I5 I5 I5"
              "I6 I6 I7 I7"
              `,
        }}
      >
        {new Array(7).fill(0).map((_, index) => (
          <GridItem gridArea={`I${index + 1}`} key={index}>
            <Image
              _hover={{
                transition: "all 0.2s ease",
                transform: {
                  md: "scale(1.02) ",
                  lg: "scale(1.02) ",
                },
              }}
              cursor="pointer"
              transition="ease-in 0.2s"
              boxShadow="dark"
              borderRadius="xl"
              w="full"
              display={{ base: "block", md: "none" }}
              h="full"
              onClick={() => openImageViewer(index)}
              src={`/images/home/imagination/mobile/mobileG${index + 1}.png`}
            />
            <Image
              _hover={{
                transition: "all 0.2s ease",
                transform: {
                  md: "scale(1.02) ",
                  lg: "scale(1.02) ",
                },
              }}
              transition="ease-in 0.2s"
              display={{ base: "none", md: "block" }}
              boxShadow="dark"
              borderRadius="xl"
              w="full"
              h="full"
              onClick={() => openImageViewer(index)}
              src={`/images/home/imagination/gallary${index + 1}.png`}
            />
          </GridItem>
        ))}
      </Grid>
      <CustomImageViewer
        closeImageViewer={closeImageViewer}
        currentImage={currentImage}
        isViewerOpen={isViewerOpen}
        mobileImages={mobileImages}
        desktopImages={desktopImages}
      />
    </>
  )
}
export default ImaginationBottomSection
