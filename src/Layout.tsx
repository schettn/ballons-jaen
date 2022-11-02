import { Box } from "@chakra-ui/react"
import React from "react"

import Navigation from "./components/Navigation/Navigation"
import Footer from "./components/Footer/Footer"
import ScrollToTop from "./components/ScrollTop"

export interface LayoutProps {
  pathname: string
  children: React.ReactElement | React.ReactElement[]
}

export const Layout: React.FC<LayoutProps> = ({ children, pathname }) => {
  return (
    <ScrollToTop pathname={pathname}>
      <Navigation />
      <Box>{children}</Box>
      <Footer />
    </ScrollToTop>
  )
}