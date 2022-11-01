import { PageProps } from "gatsby"

import ContactPage from "../components/templates/Contact/Contact"
import { Layout } from "../Layout"

const Page = (props: PageProps) => {
  return <Layout pathname={props.path}>
    <ContactPage />
  </Layout>
}

export default Page
