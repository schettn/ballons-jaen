import { FC } from "react"
import FaqBallons from "./FaqBallons"
import FaqQuestionAnswer from "./FaqQuestionAnswer"
import HeroFaq from "./HeroFaq"

interface IFaqProps {}

const Faq: FC<IFaqProps> = () => {
  return (
    <>
      <HeroFaq />
      <FaqQuestionAnswer />
      <FaqBallons />
    </>
  )
}
export default Faq
