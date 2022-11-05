import { PageProps } from "gatsby"

import DekorationPage from "../components/templates/Dekoration/Dekoration"
import { Layout } from "../Layout"

const Page = (props: PageProps) => {
  return (
    <Layout pathname={props.path}>
      <DekorationPage />
    </Layout>
  )
}

export default Page
