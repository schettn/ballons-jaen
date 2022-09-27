import { Box, Stack } from '@chakra-ui/react';
import { FC } from 'react';
import BottomNav from './BottomNav';
import MobileNav from './MobileNav/MobileNav';
import TopNav from './TopNav';

interface INavigationProps {}

const Navigation: FC<INavigationProps> = () => {
  return (
    <Box as="nav" zIndex="sticky" pos="sticky" top="0" bg="white">
      <Stack display={{ base: 'none', md: 'flex' }}>
        <TopNav />
        <BottomNav />
      </Stack>

      <Box as="nav" display={{ base: 'block', md: 'none' }}>
        <MobileNav />
      </Box>
    </Box>
  );
};
export default Navigation;
