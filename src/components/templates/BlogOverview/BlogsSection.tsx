import { Box, Button, Container, Divider, Grid, Heading, VStack } from '@chakra-ui/react';
import { CONTAINER_MAX_WIDTH } from '../../../constant/sizes';
import { FC } from 'react';
import BlogCard from './BlogCard';

interface IBlogsSectionProps {}

const BlogsSection: FC<IBlogsSectionProps> = () => {
  return (
    <>
      <Container maxW={CONTAINER_MAX_WIDTH} mt={{ base: '-16', md: '16' }}>
        <Heading fontWeight="semibold" size="h4020">
          Weitere Beiträge
        </Heading>
        <Divider mb="8" mt="4" bg="red.500" h="1px" border="0" />
      </Container>
      <Box
        bgImage="/images/blog_overview/blog_shape.svg"
        bgPos="right -20rem bottom 20rem"
        bgSize="60%"
        bgRepeat="no-repeat">
        <Container maxW={CONTAINER_MAX_WIDTH}>
          <Grid
            gridTemplateColumns={{ md: 'repeat(2,1fr)', xl: 'repeat(3,1fr)' }}
            gap={{ base: '4', md: 6, xl: '8' }}
            rowGap={{ base: '6', md: 12, xl: '16' }}>
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
            <BlogCard />
          </Grid>
          <VStack>
            <Button size={{ base: 'sm', md: 'md' }} mt="16" variant="outline">
              Mehr Artikel anzeigen
            </Button>
          </VStack>
        </Container>
      </Box>
    </>
  );
};
export default BlogsSection;
