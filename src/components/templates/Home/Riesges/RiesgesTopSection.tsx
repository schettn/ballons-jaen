import { Grid, GridItem } from '@chakra-ui/react';
import CardWithImageBackground from '../../../CardWithImageBackground';
import { FC } from 'react';

interface IRiesgesTopSectionProps {}

const RiesgesTopSection: FC<IRiesgesTopSectionProps> = () => {
  const cards = [
    {
      title: 'Großhandel',
      text: 'Lorem ipsum dolor sit amet, consetetur sadipscing',
      image: '/images/home/reisges/Großhandel.png',
    },
    {
      title: 'Party',
      text: 'Lorem ipsum dolor sit amet, consetetur sadipscing',
      image: '/images/home/reisges/Party.png',
    },
    {
      title: 'Design',
      text: 'Lorem ipsum dolor sit amet, consetetur sadipscing',
      image: '/images/home/reisges/Design.png',
    },
  ];
  return (
    <Grid
      placeItems="center"
      mb={{ lg: 10 }}
      mt="0"
      gap={{ base: '4', md: '4', lg: '8' }}
      gridTemplateColumns={{
        md: 'repeat(3, 1fr)',
      }}>
      {cards.map((card, i) => (
        <GridItem
          justifySelf="center"
          h={{ base: '11.25rem', md: '18.75rem', lg: '25rem', xl: '31.25rem' }}
          key={i}>
          <CardWithImageBackground card={card} key={i} />
        </GridItem>
      ))}
    </Grid>
  );
};
export default RiesgesTopSection;
