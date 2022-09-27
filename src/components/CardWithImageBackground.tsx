import { Grid, Heading, HStack, Stack, Text } from '@chakra-ui/react';
import { FC } from 'react';
import { BiChevronRight } from 'react-icons/bi';
interface ICardWithImageBackgroundProps {
  card: {
    title?: string;
    text?: string;
    image: string;
  };
  displayContent?: boolean;
  w?: {};
  h?: {};
}

const CardWithImageBackground: FC<ICardWithImageBackgroundProps> = ({
  card,
  displayContent = true,
  w,
  h,
}) => {
  return (
    <Stack
      boxShadow="0px 4px 10px rgba(0, 0, 0, 0.5)"
      color="white"
      justify="end"
      h={h ?? 'full'}
      w={w ?? {}}
      bg="red"
      borderRadius="2xl"
      bgImage={`url(${card.image})`}
      bgSize="cover"
      bgRepeat="no-repeat">
      {displayContent && (
        <Stack p="6" pb="4">
          <Heading fontSize={{ base: '22px', md: '30px' }} fontWeight="700">
            {card.title}
          </Heading>
          <Text fontSize={{ base: '14px', md: '20px' }} maxW="80%">
            {card.text}
          </Text>
          <HStack>
            <Text fontSize={{ base: '15px', md: '20px' }} fontWeight="700">
              Mehr anzeigen
            </Text>
            <Grid
              placeItems="center"
              h={{ base: '17px', md: '30px' }}
              w={{ base: '17px', md: '30px' }}
              color="red.500"
              bg="white"
              fontSize={{ base: 'lg', md: '2xl' }}
              borderRadius="full">
              <BiChevronRight />
            </Grid>
          </HStack>
        </Stack>
      )}
    </Stack>
  );
};
export default CardWithImageBackground;
