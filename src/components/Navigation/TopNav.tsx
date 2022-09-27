import { Box, Flex, HStack, Image, Text } from '@chakra-ui/react';
import { FC } from 'react';
import {
  AiOutlineHeart,
  AiOutlineSearch,
  AiOutlineShoppingCart,
  AiOutlineUser,
} from 'react-icons/ai';
interface ITopNavProps {}

const TopNav: FC<ITopNavProps> = () => {
  const iconsBtn = [
    {
      icon: <AiOutlineHeart />,
      label: 'Wishlist',
    },
    {
      icon: <AiOutlineSearch />,
      label: 'Search',
    },
    {
      icon: <AiOutlineShoppingCart />,
      label: 'Cart',
    },
    {
      icon: <AiOutlineUser />,
      label: 'Account',
    },
  ];

  return (
    <Flex h={{ sm: '80px', xl: '90px' }} align="center" px="8" justify="space-between" bg="#f4f4f4">
      <Box w="250px" display={{ base: 'none', xl: 'block' }}></Box>
      <Box as="span" justifySelf="center">
        <Image
          w={{ base: '320px', lg: '420px' }}
          h={{ base: '30px', lg: '34px' }}
          src="/images/red_logo.png"
          alt="logo"
        />
      </Box>
      <HStack gap="2" justifySelf="end">
        {iconsBtn.map((iconBtn, index) => {
          return (
            <Box fontSize={{ md: '24px', xl: '30px' }} key={index}>
              {iconBtn.icon}
            </Box>
          );
        })}
        <Text fontSize={{ md: '16px', xl: '20px' }}> € 0.00 *</Text>
      </HStack>
    </Flex>
  );
};
export default TopNav;
