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
    <Flex h={{ sm: 20, xl: 24 }} align="center" px="8" justify="space-between" bg="#f4f4f4">
      <Box w="15.625rem" display={{ base: 'none', xl: 'block' }}></Box>
      <Box as="span" justifySelf="center">
        <Image
          w={{ base: '20rem', lg: '26.25rem' }}
          h={{ base: '1.875rem', lg: '2.125rem' }}
          src="/images/red_logo.png"
          alt="logo"
        />
      </Box>
      <HStack gap="2" justifySelf="end">
        {iconsBtn.map((iconBtn, index) => {
          return (
            <Box fontSize={{ base: 'lg', xl: 'xl' }} key={index}>
              {iconBtn.icon}
            </Box>
          );
        })}
        <Text fontSize={{ base: 'sm', xl: 'md' }}> € 0.00 *</Text>
      </HStack>
    </Flex>
  );
};
export default TopNav;
