import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react"
import { FC } from "react"

interface IPartnersSectionProps {}

const PartnersSection: FC<IPartnersSectionProps> = () => {
  return (
    <VStack gap={{ base: 4, md: "8" }} py="20" bg="white">
      <Flex gap={{ base: 2, md: 4 }}>
        <Heading size="h5020" as="span" fontWeight="semibold">
          Werde
        </Heading>
        <Text mb="-6 !important" as="span" variant="cursive" size="80">
          Ballon-Partner
        </Text>
      </Flex>
      <Box w={{ base: "100%", md: "full" }} overflowX="auto">
        <Image
          src="/images/großhandel/logos3.png"
          minW={{ base: "600px", md: "full" }}
          minH="3.75rem"
          flexShrink="0"
        />
      </Box>
      <Box>
        <Button mt={{ base: 2, md: "4" }} size={{ base: "sm", md: "md" }}>
          Jetzt registrieren
        </Button>
      </Box>
    </VStack>
  )
}
export default PartnersSection
