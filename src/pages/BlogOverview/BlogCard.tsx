import { Flex, Grid, Stack, HStack, Tag, Heading, Image, Text, Box } from '@chakra-ui/react';
import { CONTAINER_MAX_WIDTH } from 'constant/sizes';
import { FC } from 'react';
import { BiChevronRight } from 'react-icons/bi';

interface IBlogCardProps {}

const BlogCard: FC<IBlogCardProps> = () => {
  return (
    <Flex maxW={CONTAINER_MAX_WIDTH} borderRadius="xl" bg="white" boxShadow="dark" flexDir="column">
      <Grid
        borderRadius="1.875rem"
        overflow="hidden"
        flex="1"
        maxH={{ base: '8.125rem', sm: '13.75rem', md: '37.5rem' }}>
        <Image src="/images/blog_overview/blogBanner.png" h="full" w="full" />
      </Grid>
      <Stack
        flex="1"
        gap={{ base: 2, md: 0 }}
        spacing="0"
        px={{ base: 4, md: 6 }}
        justify="center"
        py={{ base: 2, md: 0 }}>
        <HStack mb="2">
          <Tag variant="normal">Helium</Tag>
          <Tag variant="normal">Team</Tag>
        </HStack>
        <Heading size="h2418" noOfLines={1}>
          Alles Rund ums Helium
        </Heading>
        <Text variant="light" size="b2012" noOfLines={3}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus in libero risus semper
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus in libero risus semper
        </Text>
        <Flex justify="space-between" w="full" mt="4 !important">
          <HStack>
            <Text color="red.500" fontSize={{ base: 'sm', lg: 'md' }} fontWeight="700">
              Weiterlesen
            </Text>
            <Grid
              placeItems="center"
              h={{ base: '4', lg: '6' }}
              w={{ base: '4', lg: '6' }}
              color="white"
              bg="red.500"
              fontSize={{ lg: 'lg' }}
              borderRadius="full">
              <BiChevronRight />
            </Grid>
          </HStack>
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
  );
};
export default BlogCard;
