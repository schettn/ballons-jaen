import { Box, Stack } from "@chakra-ui/react"
import { FC } from "react"
import BottomNav from "./BottomNav"
import MobileNav from "./MobileNav/MobileNav"
import TopNav from "./TopNav"

interface INavigationProps {
  showNavlinks?: boolean
}

const Navigation: FC<INavigationProps> = (props) => {
  return (
    <Box as="nav" zIndex="sticky" pos="sticky" top="0" bg="white">
      <Stack display={{ base: "none", md: "flex" }} spacing="0">
        <TopNav />
        {
          props.showNavlinks && (
            <BottomNav />
          )
        }
      </Stack>
      <Box as="nav" display={{ base: "block", md: "none" }}>
        <MobileNav showNavlinks={props.showNavlinks} />
      </Box>
    </Box>
  )
}
export default Navigation
