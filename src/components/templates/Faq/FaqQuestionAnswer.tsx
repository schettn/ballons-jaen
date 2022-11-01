import {
  Container,
  Accordion,
  AccordionItem,
  Stack,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
  VStack,
  Flex,
  Text,
  Box,
} from '@chakra-ui/react';
import { CONTAINER_MAX_WIDTH } from '../../../constant/sizes';
import { FC } from 'react';
import { BiChevronDown } from 'react-icons/bi';

interface IFaqQuestionAnswerProps {}

const FaqQuestionAnswer: FC<IFaqQuestionAnswerProps> = () => {
  const faqData = [
    {
      question: 'Wie lange dauert die Lieferung?',

      answer:
        ' Wir beantworten hier Fragen, welche wir häufig von unseren Kunden hören. Lies dich  gerne ein! Falls du weitere Fragen hast, stehen wir dir natürlich gerne zurˀˀVerfügung.',
    },
    {
      question: 'Wie lange dauert die Lieferung?',

      answer:
        ' Wir beantworten hier Fragen, welche wir häufig von unseren Kunden hören. Lies dich  gerne ein! Falls du weitere Fragen hast, stehen wir dir natürlich gerne zurˀˀVerfügung.',
    },
    {
      question: 'Wie lange dauert die Lieferung?',

      answer:
        ' Wir beantworten hier Fragen, welche wir häufig von unseren Kunden hören. Lies dich  gerne ein! Falls du weitere Fragen hast, stehen wir dir natürlich gerne zurˀˀVerfügung.',
    },
    {
      question: 'Wie lange dauert die Lieferung?',

      answer:
        ' Wir beantworten hier Fragen, welche wir häufig von unseren Kunden hören. Lies dich  gerne ein! Falls du weitere Fragen hast, stehen wir dir natürlich gerne zurˀˀVerfügung.',
    },
  ];
  return (
    <Box
      pb={{ base: '16rem', md: '10rem', lg: '20rem', xl: '30rem' }}
      bgImage="/images/faq/right_bg.svg"
      bgRepeat="no-repeat"
      bgPos={{
        base: 'right -5rem bottom 0',
        md: 'right -15rem bottom 0',
        '2xl': 'right -20rem bottom 0',
      }}
      bgSize={{ base: '55%', sm: '40%', md: '50%' }}>
      <Container maxW={CONTAINER_MAX_WIDTH}>
        <Accordion allowToggle>
          {faqData.map((item, index) => (
            <AccordionItem border="none">
              {({ isExpanded }) => (
                <Stack
                  spacing="0"
                  key={index}
                  p={{ base: 4, md: 6, xl: 8 }}
                  mb={{ base: 4, md: 6, xl: 8 }}
                  borderRadius={{ base: '.625rem', md: '1.25rem', xl: '1.875rem' }}
                  boxShadow="light"
                  borderWidth="1px"
                  borderColor={isExpanded ? 'red.500' : 'gray.200'}>
                  <AccordionButton _hover={{ bg: 'none' }}>
                    <Box flex="1">
                      <Text ml="1" size="b2415" fontWeight="semibold" textAlign="start">
                        {item.question}
                      </Text>
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>

                  <AccordionPanel as={Text} pr="4rem">
                    <Text size="b2012">{item.answer}</Text>
                  </AccordionPanel>
                </Stack>
              )}
            </AccordionItem>
          ))}
        </Accordion>
        <VStack mt={{ base: 4, md: 8 }}>
          <Flex align="center">
            <Text fontWeight="semibold" size="b2415">
              Mehr anzeigen
            </Text>
            <Box as="span" fontSize={{ base: 'md', lg: '2xl' }}>
              <BiChevronDown />
            </Box>
          </Flex>
        </VStack>
      </Container>
    </Box>
  );
};
export default FaqQuestionAnswer;
