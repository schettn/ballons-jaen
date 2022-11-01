import { PageProps } from "gatsby"

import GroßhandelPage from "../components/templates/Großhandel/Großhandel"
import { Layout } from "../Layout"

const Page = (props: PageProps) => {
  return <Layout pathname={props.path}>
    <GroßhandelPage />
  </Layout>
}

export default Page
