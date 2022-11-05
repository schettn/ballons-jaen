import { FC } from "react"
import { sliderDummyData } from "../../../constant/slider"
import NewsSlider from "../../NewsSlider/NewsSlider"
import DekorationenHero from "./DekorationenHero"
import HochzeitsballonsSection from "./HochzeitsballonsSection/HochzeitsballonsSection"

interface IDekorationensProps {}

const Dekorationens: FC<IDekorationensProps> = () => {
  return (
    <>
      <DekorationenHero />
      <HochzeitsballonsSection />
      <NewsSlider
        withoutImageVariant
        showNewsTitle={true}
        slides={sliderDummyData}
      />
    </>
  )
}
export default Dekorationens
