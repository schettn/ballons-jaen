import NewsSlider from '../../NewsSlider/NewsSlider';
import { sliderDummyData } from '../../../constant/slider';
import { FC } from 'react';
import HeartSection from './HeartSection/HeartSection';
import Hero from './Hero/Hero';
import ImaginationSection from './ImaginationSection/ImaginationSection';
import JoySection from './JoySection/JoySection';
import LittleThingsSection from './LittleThingsSecton/LittleThingsSection';
import NewsSection from './NewsSection/NewsSection';
import Riesges from './Riesges/Riesges';

interface IHomeProps {}

const Home: FC<IHomeProps> = () => {
  return (
    <>
      <Hero />
      <Riesges />
      <HeartSection />
      <LittleThingsSection />
      <JoySection />
      <ImaginationSection />
      <NewsSection />
      <NewsSlider slides={sliderDummyData} />
    </>
  );
};
export default Home;
