import {
  Flex,
  Button,
  ChakraProvider,
  Box,
  Input,
  InputGroup,
  InputRightElement,
  Heading,
  VStack,
} from "@chakra-ui/react"
import { connectView } from "@jaenjs/jaen"
import { useSteps, Steps, Step } from "chakra-ui-steps"
import { FaShopify } from "react-icons/fa"

// import { validateSecret } from "shopify-admin"

import theme from "../styles/theme"

import { FileUpload } from "../components/molecules/FileUpload"
import React from "react"

const ExcelShopifyImportView: React.FC = props => {
  const { nextStep, prevStep, setStep, reset, activeStep } = useSteps({
    initialStep: 0,
  })

  const [stepSuccess, setStepSuccess] = React.useState<boolean>(false)

  const onNext = () => {
    nextStep()
    setStepSuccess(false)
  }

  const onPrev = () => {
    prevStep()
    setStepSuccess(false)
  }

  const steps = [
    {
      label: "Upload products sheet",
      content: (
        <FileUpload
          onFilesUploaded={() => {
            setStepSuccess(true)
          }}
        />
      ),
    },
    {
      label: "Enter Shopify secret",
      content: (
        <EnterShopifySecret
          onAuthenticated={() => {
            setStepSuccess(true)
          }}
        />
      ),
    },
    { label: "Import products", content: null },
  ]

  return (
    <Flex flexDir="column" w="100%">
      <Steps activeStep={activeStep}>
        {steps.map(({ label, content }) => (
          <Step label={label} key={label} p={4}>
            <Box p={4}>{content}</Box>
          </Step>
        ))}
      </Steps>
      {activeStep === steps.length ? (
        <Flex p={4}>
          <Button mx="auto" size="sm" onClick={reset} colorScheme="red">
            Reset
          </Button>
        </Flex>
      ) : (
        <Flex width="100%" justify="flex-end">
          <Button
            isDisabled={activeStep === 0}
            mr={4}
            onClick={onPrev}
            size="sm"
            variant="ghost"
            colorScheme={"gray"}
          >
            Prev
          </Button>
          <Button
            size="sm"
            onClick={onNext}
            colorScheme="green"
            disabled={!stepSuccess}
          >
            {activeStep === steps.length - 1 ? "Finish" : "Next"}
          </Button>
        </Flex>
      )}
    </Flex>
  )
}

const EnterShopifySecret = ({
  onAuthenticated,
}: {
  onAuthenticated: () => void
}) => {
  const [show, setShow] = React.useState(false)
  const handleClick = () => setShow(!show)

  const [shopifySecret, setShopifySecret] = React.useState("")

  const handleAuthenticate = async () => {



    // validateSecret({
    //   accessToken: shopifySecret,
    // })

    onAuthenticated()
  }

  return (
    <VStack>
      <InputGroup size="md" maxW="container.lg">
        <Input
          pr="4.5rem"
          type={show ? "text" : "password"}
          placeholder="Enter your Shopify secret"
          value={shopifySecret}
          onChange={e => setShopifySecret(e.target.value)}
        />
        <InputRightElement width="4.5rem">
          <Button
            h="1.75rem"
            size="sm"
            colorScheme={"gray"}
            borderRadius="md"
            onClick={handleClick}
          >
            {show ? "Hide" : "Show"}
          </Button>
        </InputRightElement>
      </InputGroup>
      <Button onClick={handleAuthenticate} colorScheme="green">
        Login
      </Button>
    </VStack>
  )
}

export default connectView(
  () => {
    return (
      <ChakraProvider theme={theme}>
        <ExcelShopifyImportView />
      </ChakraProvider>
    )
  },
  {
    path: "/excel-shopify-import",
    displayName: "Excel-to-Shopify Import",
    description: "Importiert Produkte von Excel in Shopify",
    Icon: FaShopify,
    controls: [],
  }
)
