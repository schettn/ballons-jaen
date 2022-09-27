import { FC } from 'react';
import BottomSlider from './BottomSlider/BottomSlider';
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
      <BottomSlider />
    </>
  );
};
export default Home;
