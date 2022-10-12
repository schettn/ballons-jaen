import { VStack, Button, Text, Flex, Heading } from '@chakra-ui/react';
import { FC } from 'react';

interface IWhiteBoxWithDashBorderProps {
  title: string;
  text?: string;
  cursiveText?: string;
  button: {
    text: string;
    outline?: boolean;
  };
}

const WhiteBoxWithDashBorder: FC<IWhiteBoxWithDashBorderProps> = ({
  title,
  text,
  button,
  cursiveText,
}) => {
  return (
    <VStack
      bg="#FFFFFFDE"
      pos="relative"
      borderRadius="xl"
      bgImage={`url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='30' ry='30' stroke='red' stroke-width='3' stroke-dasharray='6%2c 14' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e")`}
      maxW={{ base: '90%', md: '80%', xl: '62.5rem' }}
      mx="auto"
      p="10">
      <Flex>
        <Heading fontWeight="semibold" size="h8020">
          {title}
        </Heading>
        <Text ml={title ? { base: 2, md: 4 } : 0} variant="cursive" size="100" as="span">
          {cursiveText}
        </Text>
      </Flex>
      <Text maxW={{ lg: '50%' }} fontSize={{ base: 'sm', lg: 'md' }} textAlign="center">
        {text}
      </Text>
      <Button
        variant={button.outline ? 'outline' : 'solid'}
        size={{ base: 'sm', md: 'md' }}
        mt={{ base: '4 !important', md: '8 !important' }}>
        {button.text}
      </Button>
    </VStack>
  );
};
export default WhiteBoxWithDashBorder;
