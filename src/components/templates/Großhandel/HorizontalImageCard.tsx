import {
  Box,
  Button,
  Flex,
  Grid,
  Heading,
  Image,
  Stack,
  Text,
} from "@chakra-ui/react"
import { FC } from "react"
import { CONTAINER_MAX_WIDTH } from "../../../constant/sizes"

interface IHorizontalImageCardProps {
  cardData: {
    tag: string
    cursiveTitle: string
    title: string
    leftCrusive: boolean
    description: string
    buttonText: string
    imgUrl: string
    imageLeft: boolean
  }
}

const HorizontalImageCard: FC<IHorizontalImageCardProps> = ({
  cardData: {
    tag,
    cursiveTitle,
    title,
    leftCrusive,
    description,
    buttonText,
    imgUrl,
    imageLeft,
  },
}) => {
  return (
    <Flex
      maxW={CONTAINER_MAX_WIDTH}
      borderRadius="xl"
      bg="white"
      boxShadow="dark"
      flexDir={{ base: "column", md: imageLeft ? "row" : "row-reverse" }}
    >
      <Grid
        borderRadius="xl"
        overflow="hidden"
        flex="1"
        maxH={{ base: "120px", sm: "240px", md: "400px" }}
      >
        <Image src={imgUrl} h="full" w="full" />
      </Grid>
      <Stack
        flex="1"
        gap={{ base: 2, md: 0 }}
        spacing="0"
        px="10"
        justify="center"
        py="6"
        align={{ base: "center", md: "start" }}
      >
        <Heading
          fontSize="md"
          fontWeight="semibold"
          textTransform="uppercase"
          display={{ base: "none", md: "block" }}
        >
          {tag}
        </Heading>
        <Flex gap="4" flexDir={leftCrusive ? "row-reverse" : "row"}>
          <Heading size="h5020" as="span" fontWeight="semibold">
            {title}
          </Heading>
          <Text mb="-6 !important" as="span" variant="cursive" size="80">
            {cursiveTitle}
          </Text>
        </Flex>
        <Text
          variant="light"
          size="b2012"
          textAlign={{ base: "center", md: "start" }}
        >
          {description}
        </Text>
        <Box>
          <Button
            mt={{ base: "0", md: "4" }}
            size={{ base: "sm", lg: "md" }}
            variant="outline"
          >
            {buttonText}
          </Button>
        </Box>
      </Stack>
    </Flex>
  )
}
export default HorizontalImageCard
