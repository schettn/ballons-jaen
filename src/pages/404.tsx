import { Text } from "@chakra-ui/react"
import { PageProps } from "gatsby"
import { Layout } from "../Layout"

const Page = (props: PageProps) => {
    return <Layout pathname={props.path}>
        <Text>
            404
        </Text>
    </Layout>
}

export default Page