import { Container, Grid } from '@chakra-ui/react';
import { CONTAINER_MAX_WIDTH } from 'constant/sizes';
import { FC } from 'react';
import { ICardData } from 'types/commonTypes';
import { FourCardItem } from './FourCardItem';

interface IFourCardProps {
  cardsData: ICardData[];
  cardsMobileData: ICardData[];
}

const FourCard: FC<IFourCardProps> = ({ cardsData, cardsMobileData }) => {
  return (
    <Container maxW={CONTAINER_MAX_WIDTH} mb={{ base: 16, md: 0 }}>
      <Grid
        placeItems="center"
        mb={{ lg: 10 }}
        mt="0"
        gap={{ base: '4', md: '2', lg: '4', xl: 8 }}
        display={{ base: 'none', md: 'grid' }}
        gridTemplateColumns={{
          md: 'repeat(2 , 1fr)',
          lg: 'repeat(4 , 1fr)',
        }}>
        {cardsData.map(({ title, image }, i) => (
          <FourCardItem key={i} title={title} image={image} />
        ))}
      </Grid>
      <Grid
        placeItems="center"
        mb={{ lg: 10 }}
        mt="0"
        gap={{ base: '4', md: '2', lg: '4', xl: 8 }}
        display={{ base: 'grid', md: 'none' }}
        gridTemplateColumns={{
          md: 'repeat(2 , 1fr)',
          lg: 'repeat(4 , 1fr)',
        }}>
        {cardsMobileData.map(({ title, image }, i) => (
          <FourCardItem key={i} title={title} image={image} />
        ))}
      </Grid>
    </Container>
  );
};
export default FourCard;
