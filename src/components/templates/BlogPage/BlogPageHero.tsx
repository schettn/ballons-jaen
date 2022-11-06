import {
  Box,
  Container,
  Flex,
  Heading,
  HStack,
  Image,
  Stack,
  Tag,
  Text,
} from "@chakra-ui/react"
import { FC } from "react"
import { CONTAINER_MAX_WIDTH } from "../../../constant/sizes"

interface IBlogPageHeroProps {}

const BlogPageHero: FC<IBlogPageHeroProps> = () => {
  return (
    <Box
      bgImage={{
        base: 'url("/images/blog_page/hero_bg_mobile.svg")',
        md: "/images/blog_overview/hero_bg.svg",
      }}
      pt={{ base: 4, md: 32 }}
      pb={{ base: 16, md: 32 }}
      bgPos={{ base: "top", md: "top 2rem left 0" }}
      bgRepeat="no-repeat"
      bgSize="cover"
    >
      <Container
        maxW={CONTAINER_MAX_WIDTH}
        as={Stack}
        gap={{ base: 4, lg: "8" }}
      >
        <Box pos="relative" top={{ base: "-40px", md: 0 }}>
          <Image
            src="/images/blog_page/hero_image.png"
            borderRadius="1.875rem"
            boxShadow="dark"
          />
          <Flex
            justify="space-between"
            mt="8"
            display={{ base: "flex", md: "none" }}
          >
            <HStack>
              <Tag variant="white">Helium</Tag>
              <Tag variant="white">Team</Tag>
            </HStack>

            <Box>
              <Text size="b2012" textAlign="end">
                Von{" "}
                <Text as="span" size="b2012" fontWeight="bold" color="gray.700">
                  Nikolai Doe
                </Text>
              </Text>
              <Text size="b2012" textAlign="end">
                5. Mai 2022
              </Text>
            </Box>
          </Flex>
        </Box>
        <Stack
          pos="relative"
          top={{ base: "40px", md: 0 }}
          gap={{ base: 4, lg: "8" }}
        >
          <Flex justify="center">
            <Heading size="h4020">Alles Rund ums</Heading>
            <Text ml="4" mb="-6 !important" variant="cursive" size="60">
              Helium
            </Text>
          </Flex>

          <Text size="b2012">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus in
            libero risus semper Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Faucibus in libero risus semper Lorem ipsum dolor
            sit amet, consectetur adipiscing elit. Faucibus in libero risus
            semper Lorem ipsum dolor sit amet, cipiscing elit. Faucibus in
            libero risus semper Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Faucibus in libero risus semper Lorem ipsum dolor
            sit amet, consectetur adipiscing elit. Faucibus in libero risus
            semper Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Faucibus in libero risus semper Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Faucibus in libero risus semper Lorem
            ipsum dolor sit amet, consectetur adipiscing elit. Faucibus in
            libero risus semper
            <br /> <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus in
            libero risus semper Lorem ipsum dolor sit amet, consectetur
            adipiscing elit. Faucibus in libero risus semper Lorem ipsum dolor
            sit amet, consectetur adipiscing elit. Faucibus in libero risus
            semper Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Faucibus in libero risus semper
          </Text>
        </Stack>
      </Container>
    </Box>
  )
}
export default BlogPageHero
