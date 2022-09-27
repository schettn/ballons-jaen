import { Box, Container, Flex, Image } from '@chakra-ui/react';
import { CONTAINER_MAX_WIDTH } from 'constant/sizes';
import { FC } from 'react';
import NewsContent from './NewsContent';

interface INewsSectionProps {}

const NewsSection: FC<INewsSectionProps> = () => {
  return (
    <Container
      h={{ base: 'auto', lg: '800px' }}
      alignItems={{ base: 'center', lg: 'start' }}
      justifyContent="space-between"
      flexDirection={{ base: 'column-reverse', md: 'column', lg: 'row' }}
      as={Flex}
      gap="8"
      maxW={CONTAINER_MAX_WIDTH}>
      <Box flex="1">
        <NewsContent />
      </Box>

      <Box flex="1" px="6">
        <Image w={{ base: '100%', md: '400px', lg: 'auto' }} src="/images/home/news/news_img.png" />
      </Box>
    </Container>
  );
};
export default NewsSection;
