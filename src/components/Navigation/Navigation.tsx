import { Box, Stack } from "@chakra-ui/react"
import { FC } from "react"
import { useBasket } from "../../services/basket"
import { LayoutMode } from "../../types/commonTypes"
import BottomNav from "./BottomNav"
import MobileNav from "./MobileNav/MobileNav"
import TopNav from "./TopNav"

interface INavigationProps {
  mode: LayoutMode
}

const Navigation: FC<INavigationProps> = ({mode}) => {

  const basket = useBasket()

  const handleOnBasketClick = () => {
    basket.onOpen()
  }


  return (
    <Box as="nav" zIndex="sticky" pos="sticky" top="0" bg="white">
      <Stack display={{ base: "none", md: "flex" }} spacing="0">
        <TopNav mode={mode} onBasketClick={handleOnBasketClick} />
        {
          mode === 'website' && (
            <BottomNav />
          )
        }
      </Stack>
      <Box as="nav" display={{ base: "block", md: "none" }}>
        <MobileNav mode={mode}  onBasketClick={handleOnBasketClick} />
      </Box>
    </Box>
  )
}
export default Navigation
