import { PageProps } from "gatsby"

import HomePage from "../components/templates/Home/Home"
import { Layout } from "../Layout"

const Page = (props: PageProps) => {
  return <Layout pathname={props.path}>
    <HomePage />
  </Layout>
}

export default Page
