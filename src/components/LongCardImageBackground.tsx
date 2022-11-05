import { Grid, Heading, HStack, Stack, Text } from "@chakra-ui/react"
import { FC } from "react"
import { BiChevronRight } from "react-icons/bi"
interface ILongCardImageBackgroundProps {
  card: {
    title?: string
    text?: string
    image: string
  }
  displayContent?: boolean
  w?: {}
  h?: {}
  isSmallText?: boolean
}

const LongCardImageBackground: FC<ILongCardImageBackgroundProps> = ({
  card,
  displayContent = true,
  w,
  h,
  isSmallText = false,
}) => {
  return (
    <Stack
      boxShadow="darker"
      color="white"
      justify="end"
      h={h ?? "full"}
      w={w ?? {}}
      borderRadius="xl"
      bgImage={`url(${card.image})`}
      bgSize="cover"
      bgRepeat="no-repeat"
    >
      {displayContent && (
        <Stack p="6" pb="4" spacing="0">
          <Heading size="h4020" fontWeight="700">
            {card.title}
          </Heading>
          <Text fontSize="sm" maxW={{ xl: "60%" }} noOfLines={2}>
            {card.text}
          </Text>
          <HStack
            mt="2 !important"
            cursor="pointer"
            _hover={{
              transform: {
                md: "scale(1.05) translateX(0px)",
                lg: "scale(1.05) translateX(5px)",
              },
            }}
          >
            <Text fontSize={{ base: "sm", lg: "md" }} fontWeight="700">
              Mehr anzeigen
            </Text>
            <Grid
              placeItems="center"
              h={{ base: "4", lg: "6" }}
              w={{ base: "4", lg: "6" }}
              color="red.500"
              bg="white"
              fontSize={{ lg: "lg" }}
              borderRadius="full"
            >
              <BiChevronRight />
            </Grid>
          </HStack>
        </Stack>
      )}
    </Stack>
  )
}
export default LongCardImageBackground
