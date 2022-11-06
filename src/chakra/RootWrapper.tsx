import { ChakraProvider } from "@chakra-ui/react"
import Fonts from "../styles/fonts"
import theme from "../styles/theme"

export const RootWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <ChakraProvider resetCSS={true} theme={theme}>
      <Fonts />
      {children}
    </ChakraProvider>
  )
}
