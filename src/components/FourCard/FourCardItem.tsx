import { GridItem } from '@chakra-ui/react';
import CardWithImageBackground from '../CardWithImageBackground';

export const FourCardItem = ({ title, image }: { title?: string; image: string }) => {
  return (
    <GridItem
      justifySelf="center"
      h={{ base: '8.125rem', md: '16rem', lg: '18rem', xl: '21.875rem' }}
      w="full">
      <CardWithImageBackground card={{ title, image }} />
    </GridItem>
  );
};
