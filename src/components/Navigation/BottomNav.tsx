import { HStack, VStack, Link as CLink, Grid } from '@chakra-ui/react';
import { navlinks } from 'constant/navLink';
import { CONTAINER_MAX_WIDTH } from 'constant/sizes';
import { FC } from 'react';
import { Link } from 'react-router-dom';
interface IBottomNavProps {}

const BottomNav: FC<IBottomNavProps> = () => {
  return (
    <VStack h={{ base: '14', lg: '20' }} bg="white" boxShadow="md" justify="center">
      <HStack
        gap={{ md: 6, lg: 8, '2xl': 10 }}
        maxW={CONTAINER_MAX_WIDTH}
        marginX="auto"
        justify="center">
        {navlinks.map((link, index) => {
          return (
            <CLink
              _before={{
                display: 'block',
                content: `"${link.label}"`,
                fontWeight: 'bold',
                height: '0',
                overflow: 'hidden',
                visibility: 'hidden',
              }}
              as={Link}
              to={link.path}
              key={index}
              _hover={{ fontWeight: 'bold', transition: '0.2s ease-in' }}
              fontSize={{ md: '15px', lg: '16px', xl: '18px', '2xl': '20px' }}
              transition="0.2s ease-in"
              color="brand.dark_gray">
              {link.label}
            </CLink>
          );
        })}
      </HStack>
    </VStack>
  );
};
export default BottomNav;
