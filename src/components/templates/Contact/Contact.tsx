import { FC } from "react"
import { MdLocalPhone, MdLocationPin, MdMail } from "react-icons/md"
import ContactBottomSection from "./ContactBottomSection"
import ContactHero from "./ContactHero"
import ContactTimings from "./ContactTimings"
import Popup from "./Popup"
interface IContactProps {}

const Contact: FC<IContactProps> = () => {
  const contactDetails = [
    {
      text: "Taborstraße 98, 1020 Wien, Österreich",
      icon: <MdLocationPin />,
    },
    {
      text: "+43 2 326 34 25",
      icon: <MdLocalPhone />,
      link: "tel:+43 2 326 34 25",
    },
    {
      text: "office@ballons-ballons.com",
      icon: <MdMail />,
      link: "mailto:office@ballons-ballons.com",
    },
  ]

  return (
    <>
      <ContactHero contactDetails={contactDetails} />
      <ContactTimings contactDetails={contactDetails} />
      <ContactBottomSection />
      <Popup />
    </>
  )
}
export default Contact
