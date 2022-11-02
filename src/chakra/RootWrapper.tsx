import {ChakraProvider} from '@chakra-ui/react';
import theme from '../styles/theme';

export const RootWrapper = ({ children }: { children: React.ReactNode }) => {
    return <ChakraProvider resetCSS={true} theme={theme}>{children}</ChakraProvider>
}