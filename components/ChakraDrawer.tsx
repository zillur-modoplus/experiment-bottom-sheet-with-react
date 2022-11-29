import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Input,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import HorizontalTab from "./HorizontalTab";

export default function ChakraDrawer() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const ref = React.useRef<any>();

  return (
    <>
      <Button ref={ref} colorScheme="green" onClick={onOpen}>
        Chakra Drawer
      </Button>
      <Drawer
        isOpen={isOpen}
        onClose={onClose}
        finalFocusRef={ref}
        placement="bottom"
      >
        <DrawerOverlay />
        <DrawerContent h="90%" bg="bisque">
          <DrawerCloseButton color="green" />
          <DrawerHeader color="green">Create your account</DrawerHeader>

          <DrawerBody>
            <HorizontalTab />
          </DrawerBody>

          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}
