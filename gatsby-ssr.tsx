/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/ssr-apis/
 */

import { GatsbySSR } from "gatsby"
import { RootWrapper } from "./src/chakra/RootWrapper"

export const onRenderBody: GatsbySSR["onRenderBody"] = ({
  setHtmlAttributes,
}) => {
  setHtmlAttributes({ lang: `de` })
}

export const wrapRootElement: GatsbySSR["wrapRootElement"] = ({ element }) => {
  return <RootWrapper>{element}</RootWrapper>
}
