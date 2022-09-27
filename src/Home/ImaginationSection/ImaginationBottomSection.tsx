import { Grid, GridItem, Image } from '@chakra-ui/react';
import { FC } from 'react';

interface IImaginationBottomSectionProps {}

const ImaginationBottomSection: FC<IImaginationBottomSectionProps> = () => {
  return (
    <Grid
      px="4"
      gridGap={{ base: '2', md: '4' }}
      gridTemplateAreas={{
        base: `
                "I1 I2"
                "I3 I3"
                "I4 I5"
                "I6 I7"
              `,
        md: `
              "I1 I1 I2 I3"
              "I1 I1 I2 I4"
              "I5 I5 I5 I5"
              "I5 I5 I5 I5"
              "I6 I6 I7 I7"
              `,
      }}>
      {new Array(7).fill(0).map((_, index) => (
        <GridItem gridArea={`I${index + 1}`} key={index}>
          <Image
            boxShadow="lg"
            borderRadius="xl"
            w="full"
            display={{ base: 'block', md: 'none' }}
            h="full"
            src={`/images/home/imagination/mobile/mobileG${index + 1}.png`}
          />
          <Image
            display={{ base: 'none', md: 'block' }}
            boxShadow="lg"
            borderRadius="xl"
            w="full"
            h="full"
            src={`/images/home/imagination/gallary${index + 1}.png`}
          />
        </GridItem>
      ))}
    </Grid>
  );
};
export default ImaginationBottomSection;
