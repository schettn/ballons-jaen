import { PageProps } from "gatsby"

import ContentPage1 from "../components/templates/Dekoration/Dekoration"
import { Layout } from "../Layout"

const Page = (props: PageProps) => {
  return <Layout pathname={props.path}>
    <ContentPage1 />
  </Layout>
}

export default Page
