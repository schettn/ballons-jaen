import { Flex, Button } from "@chakra-ui/react"
import { connectView } from "@jaenjs/jaen"
// import { useSteps, Steps, Step } from "chakra-ui-steps"
import { FaShopify } from "react-icons/fa"
// import { FileUpload } from "../components/molecules/FileUpload"

// const ExcelShopifyImportView: React.FC = props => {
//   const { nextStep, prevStep, setStep, reset, activeStep } = useSteps({
//     initialStep: 0,
//   })

//   return (
//     <Flex flexDir="column" width="100%">
//       <Steps activeStep={activeStep}>
//         {steps.map(({ label, content }) => (
//           <Step label={label} key={label}>
//             {content}
//           </Step>
//         ))}
//       </Steps>
//       {activeStep === steps.length ? (
//         <Flex p={4}>
//           <Button mx="auto" size="sm" onClick={reset}>
//             Reset
//           </Button>
//         </Flex>
//       ) : (
//         <Flex width="100%" justify="flex-end">
//           <Button
//             isDisabled={activeStep === 0}
//             mr={4}
//             onClick={prevStep}
//             size="sm"
//             variant="ghost"
//           >
//             Prev
//           </Button>
//           <Button size="sm" onClick={nextStep}>
//             {activeStep === steps.length - 1 ? "Finish" : "Next"}
//           </Button>
//         </Flex>
//       )}
//     </Flex>
//   )
// }

const content = <Flex py={4}>12345</Flex>

const steps = [
  { label: "Step 1", content },
  { label: "Step 2", content },
  { label: "Step 3", content },
]

export default connectView(() => null, {
  path: "/excel-shopify-import",
  displayName: "Excel-to-Shopify Import",
  description: "Importiert Produkte von Excel in Shopify",
  Icon: FaShopify,
  controls: [],
})
