import {
  Box,
  Flex,
  HStack,
  Image,
  Stack,
  useDisclosure,
  Link as CLink,
  Divider,
} from '@chakra-ui/react';
import { navlinks } from 'constant/navLink';
import { FC } from 'react';
import { AiOutlineShoppingCart, AiOutlineUser } from 'react-icons/ai';
import { IoCloseOutline, IoMenuOutline } from 'react-icons/io5';
import { Link } from 'react-router-dom';

interface IMobileNavProps {}

const MobileNav: FC<IMobileNavProps> = () => {
  const { isOpen, onToggle } = useDisclosure();
  const iconsBtn = [
    {
      icon: <AiOutlineUser />,
      label: 'Account',
    },
    {
      icon: <AiOutlineShoppingCart />,
      label: 'Cart',
    },
  ];

  return (
    <Box px="4" boxShadow="dark">
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
            );
          })}
        </HStack>
      </Flex>
      {isOpen && (
        <Stack align="center" pos="absolute" bg="white" w="full" left="0" px="4" pb="8">
          <Divider />
          {navlinks.map((link, index) => {
            return (
              <CLink
                as={Link}
                to={link.path}
                key={index}
                w="full"
                textAlign="center"
                _hover={{ fontWeight: 'bold', transition: '0.2s ease-in' }}
                fontSize="1.125rem"
                transition="0.2s ease-in"
                color="brand.dark_gray">
                {link.label}
              </CLink>
            );
          })}
        </Stack>
      )}
    </Box>
  );
};
export default MobileNav;
