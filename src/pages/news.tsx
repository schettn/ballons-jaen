import { PageProps } from "gatsby"

import BlogOverview from "../components/templates/BlogOverview/BlogOverview"
import { Layout } from "../Layout"

const Page = (props: PageProps) => {
  return <Layout pathname={props.path}>
    <BlogOverview />
  </Layout>
}

export default Page
