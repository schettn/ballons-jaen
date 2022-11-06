import { Box } from "@chakra-ui/react"
import React from "react"

import Footer from "./components/Footer/Footer"
import Navigation from "./components/Navigation/Navigation"
import ScrollToTop from "./components/ScrollTop"
import { BasketDrawerProvider } from "./services/basket"

export interface LayoutProps {
  pathname: string
  showNavlinks?: boolean
  children: React.ReactElement | React.ReactElement[]
}

export const Layout: React.FC<LayoutProps> = ({ children, pathname, showNavlinks = true }) => {
  return (
    <ScrollToTop pathname={pathname}>
      <Navigation showNavlinks={showNavlinks} />
      <BasketDrawerProvider>{children}</BasketDrawerProvider>
      <Footer />
    </ScrollToTop>
  )
}
