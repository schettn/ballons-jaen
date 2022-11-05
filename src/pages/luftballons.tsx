import { PageProps } from "gatsby"

import WirGestaltenParty from "../components/templates/WirGestaltenParty/WirGestaltenParty"
import { Layout } from "../Layout"

const Page = (props: PageProps) => {
  return (
    <Layout pathname={props.path}>
      <WirGestaltenParty />
    </Layout>
  )
}

export default Page
