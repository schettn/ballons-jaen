import { Box } from "@chakra-ui/react"
import React from "react"

import Footer from "./components/Footer/Footer"
import Navigation from "./components/Navigation/Navigation"
import ScrollToTop from "./components/ScrollTop"
import { BasketDrawerProvider } from "./services/basket"
import { LayoutMode } from "./types/commonTypes"

export interface LayoutProps {
  pathname: string
  mode?: LayoutMode
  children: React.ReactElement | React.ReactElement[]
}

export const Layout: React.FC<LayoutProps> = ({
  children,
  pathname,
  mode = "website",
}) => {
  return (
    <ScrollToTop pathname={pathname}>
      <BasketDrawerProvider>
        <Navigation mode={mode} />
        <>{children}</>
      </BasketDrawerProvider>

      <Footer />
    </ScrollToTop>
  )
}
