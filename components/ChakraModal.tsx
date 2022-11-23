import {
  Box,
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import TabInsideTab from "./TabInsideTab";
import styles from "../styles/modalStyle.module.css";

export default function ChakraModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button onClick={onOpen}>Open Modal</Button>

      <Box pos="relative">
        <Box pos="absolute" bottom="0">
          <Modal
            isOpen={isOpen}
            onClose={onClose}
            motionPreset="slideInBottom"
            scrollBehavior="inside"
            isCentered={false}
          >
            <ModalOverlay />
            <ModalContent>
              <ModalHeader>Modal Title</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <TabInsideTab />
              </ModalBody>

              <ModalFooter>
                <Button colorScheme="blue" mr={3} onClick={onClose}>
                  Close
                </Button>
                <Button variant="ghost">Secondary Action</Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </Box>
      </Box>
    </>
  );
}
