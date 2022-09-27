import { Grid, Image } from '@chakra-ui/react';
import { FC } from 'react';

interface ICricleImageWithBlobBgProps {
  blob: string;
  image: string;
}

const CricleImageWithBlobBg: FC<ICricleImageWithBlobBgProps> = ({ blob, image }) => {
  return (
    <Grid placeItems="center">
      <Image pos="absolute" src={blob} />
      <Image pos="absolute" src={image} />
    </Grid>
  );
};
export default CricleImageWithBlobBg;
