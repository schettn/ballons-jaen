import { Box, Button, Container, Heading, Stack, Text } from '@chakra-ui/react';
import { TransparentCard } from 'chakra/TransparentCard';
import { FC } from 'react';
import HeartRightSection from './HeartRightSection';

interface IHeartSectionProps {}

const HeartSection: FC<IHeartSectionProps> = () => {
  return (
    <Box>
      <Box
        h={{ base: '540px', sm: 'auto' }}
        bgImage={{
          base: 'url(/images/home/heart/heart_mobile_bg.png)',
          sm: 'url(/images/home/heart/heart_bg.png)',
        }}
        bgSize="cover"
        bgPos="center"
        bgRepeat="no-repeat">
        <Container
          p="10"
          maxW="1280px"
          display="flex"
          justifyContent="space-between"
          flexDirection={{ base: 'column', lg: 'row' }}
          alignItems="center"
          color="white"
          px="8">
          <Stack
            p="8"
            spacing="4"
            as={TransparentCard}
            h={{ base: '340px', md: '250px', lg: '690px' }}
            w={{ base: '310px', sm: '100%', lg: '610px' }}>
            <Text fontSize={{ base: '15px', lg: '32px' }}>Inspiration</Text>
            <Heading fontSize={{ base: '20px', lg: '64px' }} fontWeight="800">
              Lass dich von uns inspirieren
            </Heading>
            <Text fontSize={{ base: '12px', lg: '20px' }} mb="2 !important">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cursus imperdiet sed id
              elementum. Quam vel aliquam sit vulputate. Faucibus nec gravida ipsum pulvinar vel
              non.
            </Text>
            <Button size={{ base: 'sm', lg: 'md' }} w="200px">
              Mehr erfahren
            </Button>
          </Stack>

          <Box
            pb={{ base: 32, md: 0 }}
            display={{ base: 'none', sm: 'block' }}
            w={{ base: '100%', lg: 'auto' }}>
            <HeartRightSection />
          </Box>
        </Container>
      </Box>
      <Box
        mt="-8"
        bgImage={`url(/images/home/heart/heartbackground2.png)`}
        bgSize="cover"
        bgPos="center"
        pos="relative"
        bgRepeat="no-repeat"
        pb="20"
        display={{ base: 'block', sm: 'none' }}
        w={{ base: '100%', lg: 'auto' }}>
        <Box top="-24" pos="relative">
          <HeartRightSection />
        </Box>
      </Box>
    </Box>
  );
};
export default HeartSection;
