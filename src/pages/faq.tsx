import { PageProps } from "gatsby"

import FaqPage from "../components/templates/Faq/Faq"
import { Layout } from "../Layout"

const Page = (props: PageProps) => {
  return <Layout pathname={props.path}>
    <FaqPage />
  </Layout>
}

export default Page
