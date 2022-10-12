import NewsSlider from 'components/NewsSlider/NewsSlider';
import { sliderDummyData } from 'constant/slider';
import { FC } from 'react';
import DekorationenHero from './DekorationenHero';
import HochzeitsballonsSection from './HochzeitsballonsSection/HochzeitsballonsSection';

interface IDekorationensProps {}

const Dekorationens: FC<IDekorationensProps> = () => {
  return (
    <>
      <DekorationenHero />
      <HochzeitsballonsSection />
      <NewsSlider withoutImageVariant showNewsTitle={true} slides={sliderDummyData} />
    </>
  );
};
export default Dekorationens;
