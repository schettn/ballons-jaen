import FourCard from 'components/FourCard/FourCard';
import { FC } from 'react';
import BallonGas from './BallonGas';
import ProductCatlog from './ProductCatlog';
import WirGestaltenPartyHero from './WirGestaltenPartyHero';

interface IWirGestaltenPartyProps {}

const WirGestaltenParty: FC<IWirGestaltenPartyProps> = () => {
  const cards = [
    {
      title: 'Geburtstage',
      image: '/images/we_design_party/card1.png',
    },
    {
      title: 'Baby & Geburt',
      image: '/images/we_design_party/card2.png',
    },
    {
      title: 'Großhandel',
      image: '/images/we_design_party/card3.png',
    },
    {
      title: 'Partyartikel',
      image: '/images/we_design_party/card4.png',
    },
  ];
  const cardsMobile = [
    {
      title: 'Hochzeitsballons',
      image: '/images/decorationen/four_cards/card1.png',
    },
    {
      title: 'Hochzeitsballons',
      image: '/images/decorationen/four_cards/card1.png',
    },
  ];

  return (
    <>
      <WirGestaltenPartyHero />
      <ProductCatlog />
      <FourCard cardsMobileData={cardsMobile} cardsData={cards} />
      <BallonGas />
    </>
  );
};
export default WirGestaltenParty;
