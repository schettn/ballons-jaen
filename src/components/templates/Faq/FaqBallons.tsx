import { Box, Container, Image } from "@chakra-ui/react"
import { FC } from "react"
import WhiteBoxWithDashBorder from "../../../components/WhiteBoxWithDashBorder"
import { CONTAINER_MAX_WIDTH } from "../../../constant/sizes"

interface IFaqBallonsProps {}

const FaqBallons: FC<IFaqBallonsProps> = () => {
  return (
    <>
      <Box
        pos="relative"
        top={{ base: "-16rem", md: "-10rem", lg: "-18rem", xl: "-24rem" }}
        mb={{ base: "-16rem", md: "-10rem", lg: "-18rem", xl: "-24rem" }}
        pt={{ base: "10rem", md: "15rem", lg: "20rem", xl: "30rem" }}
        bgSize={{ base: "40%", md: "30%" }}
        bgImage="/images/faq/ballon_gift.png"
        bgRepeat="no-repeat"
        bgPos={{
          base: "left -2rem top 0",
          md: "left -5rem top 0",
          "2xl": "left 0 top 0",
        }}
      >
        <Container maxW={CONTAINER_MAX_WIDTH}>
          <WhiteBoxWithDashBorder
            title="Brauchst du "
            cursiveText="Hilfe?"
            text="   Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus imperdiet sed id
                elementum. Quam vel aliquam sit vulputate."
            button={{ text: " Zur Beratung", outline: true }}
          />
        </Container>
      </Box>
      <Image
        mt={{ base: 32, md: 60, xl: 80 }}
        src="/images/faq/bottom-bg.svg"
        w="full"
      />
    </>
  )
}
export default FaqBallons
