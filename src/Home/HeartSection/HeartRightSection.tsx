import { Grid, GridItem } from '@chakra-ui/react';
import CardWithImageBackground from 'components/CardWithImageBackground';
import { FC } from 'react';

interface IHeartRightSectionProps {}

const HeartRightSection: FC<IHeartRightSectionProps> = () => {
  const cards = [
    {
      title: 'Blog Post 1',
      text: 'Lorem ipsum dolor sit amet, consetetur sadipscing',
      image: '/images/home/heart/hsection2.png',
    },
    {
      title: 'Blog Post 2',
      text: 'Lorem ipsum dolor sit amet, consetetur sadipscing',
      image: '/images/home/heart/hsection1.png',
    },
    {
      title: 'Blog Post 3',
      text: 'Lorem ipsum dolor sit amet, consetetur sadipscing',
      image: '/images/home/heart/hsection1.png',
    },
  ];
  return (
    <Grid
      placeItems="center"
      my="8"
      gap="8"
      w={{ base: '100%', lg: 'unset' }}
      gridTemplateColumns={{
        base: 'repeat(auto-fit, minmax(250px,1fr))',
      }}>
      {cards.map((card, i) => (
        <GridItem
          w={{ base: 310, md: 260, lg: 286 }}
          justifySelf="center"
          h={{ base: '240', md: 355 }}
          key={i}>
          <CardWithImageBackground card={card} key={i} />
        </GridItem>
      ))}
    </Grid>
  );
};
export default HeartRightSection;
