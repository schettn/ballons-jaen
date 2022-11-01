import {
  Box,
  Button,
  Container,
  Flex,
  Grid,
  Heading,
  HStack,
  Image,
  Stack,
  Tag,
  Text,
  VStack,
} from '@chakra-ui/react';
import { CONTAINER_MAX_WIDTH } from '../../../constant/sizes';
import { FC } from 'react';

interface IBlogOverviewHeroProps {}

const BlogOverviewHero: FC<IBlogOverviewHeroProps> = () => {
  return (
    <Box
      bgImage={{
        base: '/images/blog_overview/mobile_hero_bg.svg',
        md: '/images/blog_overview/hero_bg.svg',
      }}
      pt={{ base: 4, md: 32 }}
      pb="32"
      bgPos={{ base: 'top 2rem left 0' }}
      bgRepeat="no-repeat"
      bgSize={{ base: 'contain', md: 'cover' }}>
      <Container maxW={CONTAINER_MAX_WIDTH}>
        <VStack>
          <Flex
            mb={{ base: '25%', md: '5%' }}
            gap={{ base: 2, md: 4 }}
            flexDir={{ base: 'column', md: 'row' }}
            align="center">
            <Heading size="h6020" as="span" fontWeight="semibold" whiteSpace="nowrap">
              Wissenswertes über
            </Heading>
            <Text
              mb="-6 !important"
              as="span"
              variant="cursive"
              size="80"
              display={{ base: 'none', md: 'block' }}>
              Ballons & Ballons
            </Text>
            <Image
              display={{ base: 'block', md: 'none' }}
              src="/images/red_logo.png"
              w="15.625rem"
            />
          </Flex>
        </VStack>
        <Flex
          maxW={CONTAINER_MAX_WIDTH}
          borderRadius="xl"
          bg="white"
          boxShadow="dark"
          flexDir={{ base: 'column', md: 'row' }}>
          <Grid
            borderRadius="xl"
            overflow="hidden"
            flex="1"
            maxH={{ base: '200px', sm: '300px', md: '600px' }}>
            <Image src="/images/blog_overview/blogHero.png" h="full" w="full" />
          </Grid>
          <Stack
            flex="1"
            gap={{ base: 2, md: 0 }}
            spacing="0"
            px={{ base: 4, md: 6, xl: 10 }}
            justify="center"
            py="6">
            <HStack mb="2">
              <Tag variant="normal">Helium</Tag>
              <Tag variant="normal">Team</Tag>
            </HStack>
            <Heading size="h3015">Alles Rund ums Helium</Heading>
            <Text variant="light" size="b2012">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus in libero risus
              semper Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus in libero
              risus semper
              <br /> <br />
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus in libero risus
              semper
            </Text>
            <Flex justify="space-between" w="full" mt="4 !important">
              <Box>
                <Button variant="outline" size={{ base: 'sm', lg: 'md' }}>
                  Weiterlesen
                </Button>
              </Box>
              <Box>
                <Text size="b2012" textAlign="end">
                  Von{' '}
                  <Text as="span" size="b2012" fontWeight="bold" color="gray.700">
                    Nikolai Doe
                  </Text>
                </Text>
                <Text size="b2012" textAlign="end">
                  5. Mai 2022
                </Text>
              </Box>
            </Flex>
          </Stack>
        </Flex>
      </Container>
    </Box>
  );
};
export default BlogOverviewHero;
