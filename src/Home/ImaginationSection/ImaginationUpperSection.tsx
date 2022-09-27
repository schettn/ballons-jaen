import { Box, Heading, Image, Text, VStack } from '@chakra-ui/react';
import { FC } from 'react';

interface IImaginationUpperSectionProps {}

const ImaginationUpperSection: FC<IImaginationUpperSectionProps> = () => {
  return (
    <VStack>
      <Heading
        mb={{ base: '48', md: '0' }}
        textAlign="center"
        fontSize={{ base: '20px', md: '32px', lg: '40px' }}>
        Was man mit
        <Box as="br" display={{ base: 'block', md: 'none' }} />
        <Box as="span" fontSize={{ base: '38px', md: '32px' }}>
          Ballons
        </Box>
        <Box as="br" display={{ base: 'block', md: 'none' }} />
        alles machen kann...?
      </Heading>
      <Heading textAlign="center" fontSize={{ base: '20px', md: '32px', lg: '40px' }}>
        Mit ein wenig Phatansie…{' '}
      </Heading>
      <Box pos="relative" pt={{ base: '8', md: '12' }} px={{ base: 4, md: '6', lg: '8' }}>
        <Text
          lineHeight={{ base: '60px', lg: '100px' }}
          variant="cursive"
          fontSize={{ base: '64px', md: '80px', lg: '100px' }}>
          Alles
        </Text>
        <Image
          pos="absolute"
          bottom="0"
          src="/images/home/imagination/underline.svg"
          alt="underline"
        />
      </Box>
    </VStack>
  );
};
export default ImaginationUpperSection;
