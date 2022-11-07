/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 */

// You can delete this file if you're not using it



import { GatsbyBrowser } from "gatsby"
import { RootWrapper } from "./src/Wrapper"

export const wrapRootElement: GatsbyBrowser["wrapRootElement"] = ({
  element,
}) => {
  return <RootWrapper>{element}</RootWrapper>
}
