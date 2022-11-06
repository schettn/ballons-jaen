import {
  Box,
  Divider,
  Flex,
  HStack,
  Image,
  Link as CLink,
  Stack,
  useDisclosure,
} from "@chakra-ui/react"
import { FC } from "react"
import { AiOutlineShoppingCart, AiOutlineUser } from "react-icons/ai"
import { IoCloseOutline, IoMenuOutline } from "react-icons/io5"
import { Link } from "gatsby"
import { navlinks } from "../../../constant/navLink"

interface IMobileNavProps {}

const MobileNav: FC<IMobileNavProps> = () => {
  const { isOpen, onToggle } = useDisclosure()
  const iconsBtn = [
    {
      icon: <AiOutlineUser />,
      label: "Account",
    },
    {
      icon: <AiOutlineShoppingCart />,
      label: "Cart",
    },
  ]

  return (
    <>
      <Box px="4" boxShadow="dark" pos="relative" bg="white" zIndex="sticky">
        <Flex h="3.75rem" justify="space-between" align="center">
          <Box fontSize="xl" onClick={onToggle}>
            {isOpen ? <IoCloseOutline /> : <IoMenuOutline />}
          </Box>

          <Box>
            <Image h=".875rem" w="10rem" src="/images/red_logo.png" />
          </Box>
          <HStack gap="0" justifySelf="end">
            {iconsBtn.map((iconBtn, index) => {
              return (
                <Box fontSize="lg" key={index}>
                  {iconBtn.icon}
                </Box>
              )
            })}
          </HStack>
        </Flex>
        {isOpen && (
          <Stack
            align="center"
            pos="absolute"
            bg="white"
            w="full"
            left="0"
            px="4"
            pb="8"
            zIndex="5"
          >
            <Divider />
            {navlinks.map((link, index) => {
              return (
                <CLink
                  as={Link}
                  to={link.path}
                  onClick={onToggle}
                  key={index}
                  w="full"
                  textAlign="center"
                  _hover={{ fontWeight: "bold", transition: "0.2s ease-in" }}
                  fontSize="1.125rem"
                  transition="0.2s ease-in"
                  color="brand.dark_gray"
                >
                  {link.label}
                </CLink>
              )
            })}
          </Stack>
        )}
      </Box>
      <Box
        onClick={onToggle}
        display={isOpen ? "block" : "none"}
        bg="rgba(0,0,0,0.7)"
        h="100vh"
        pos="absolute"
        top="0"
        left="0"
        zIndex="3"
        w="full"
      ></Box>
    </>
  )
}
export default MobileNav
