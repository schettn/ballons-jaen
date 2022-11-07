import React, { useCallback } from "react"
import { useDropzone } from "react-dropzone"
import { Center, useColorModeValue, Icon, Box, HStack, IconButton } from "@chakra-ui/react"
import { AiFillFileAdd } from "react-icons/ai"

export interface FileUploadProps {
  onFilesUploaded: (files: File[]) => void
}

export const Dropzone: React.FC<FileUploadProps> = ({ onFilesUploaded }) => {
  const [uploadedFile, setUploadedFile] = React.useState<File | null>(null)

  const onDrop = useCallback((acceptedFiles: File[]) => {
    setUploadedFile(acceptedFiles[0])
  }, [])

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": [
        ".xlsx",
      ],
      "application/vnd.ms-excel": [".xls"],
    },
    maxFiles: 1,
    multiple: false,
  })

  const dropText = isDragActive
    ? "Drop the files here ..."
    : "Drag 'n' drop .xlsx, .xls file here, or click to select files"

  const activeBg = useColorModeValue("gray.100", "gray.600")
  const borderColor = useColorModeValue(
    isDragActive ? "teal.300" : "gray.300",
    isDragActive ? "teal.500" : "gray.500"
  )

  if(uploadedFile) {
    return <Box>
        <HStack>
            <Icon as={AiFillFileAdd} />
            <Box>{uploadedFile.name}</Box>

            <IconButton aria-label="Remove file" icon={<Icon as={AiFillFileAdd} />} onClick={() => setUploadedFile(null)} />
        </HStack>
    </Box>
  }

  return (
    <Center
      p={10}
      cursor="pointer"
      bg={isDragActive ? activeBg : "transparent"}
      _hover={{ bg: activeBg }}
      transition="background-color 0.2s ease"
      borderRadius={4}
      border="3px dashed"
      borderColor={borderColor}
      {...getRootProps()}
    >
      <input {...getInputProps()} />
      <Icon as={AiFillFileAdd} mr={2} />
      <p>{dropText}</p>
    </Center>
  )
}

export default Dropzone
