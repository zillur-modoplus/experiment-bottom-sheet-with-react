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
      <Button color="blue" onClick={onOpen}>
        Chakra Modal
      </Button>

      <Box>
        <Modal
          isOpen={isOpen}
          onClose={onClose}
          motionPreset="slideInBottom"
          scrollBehavior="inside"
          isCentered={false}
          colorScheme="whiteAlpha"
        >
          <ModalOverlay />
          <ModalContent bg="#fff" pos="absolute" top="0">
            <ModalHeader>Modal Title</ModalHeader>
            <ModalCloseButton color="#000" />
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
    </>
  );
}
