import { Grid, GridItem } from '@chakra-ui/react';
import CardWithImageBackground from 'components/CardWithImageBackground';
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
      mb="10"
      mt="0"
      gap="8"
      gridTemplateColumns={{
        base: 'repeat(auto-fit, minmax(310px,1fr))',
        sm: 'repeat(auto-fit, minmax(400px,1fr))',
      }}>
      {cards.map((card, i) => (
        <GridItem justifySelf="center" h={{ base: 180, md: 500 }} key={i}>
          <CardWithImageBackground w={{ base: 290, sm: 'auto' }} card={card} key={i} />
        </GridItem>
      ))}
    </Grid>
  );
};
export default RiesgesTopSection;
