import Sheet, { SheetRef } from "react-modal-sheet";
import { useState } from "react";
import HorizontalTab, { tvSitcom } from "./HorizontalTab";
import React from "react";
import { Button, Flex, Icon, Text, VStack } from "@chakra-ui/react";
import { CloseIcon } from "@chakra-ui/icons";

export default function ReactBottomSheet() {
  const ref = React.useRef<SheetRef>();
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)}>Open sheet</Button>

      <Sheet
        ref={ref}
        isOpen={isOpen}
        onClose={() => setOpen(false)}
        snapPoints={[600, 400, 100, 0]}
        springConfig={{ stiffness: 150, damping: 20, mass: 1 }}
        disableDrag={true}
      >
        <Sheet.Container>
          <Sheet.Header
            style={{
              padding: "20px",
            }}
          >
            <Flex justify="space-between">
              <Text>React Bottom Sheet</Text>
              <Icon
                fontSize={24}
                as={CloseIcon}
                onClick={() => setOpen(false)}
              />
            </Flex>
          </Sheet.Header>
          <Sheet.Content>
            <HorizontalTab />
            <Flex whiteSpace="nowrap" overflowX="auto" p={5}>
              {tvSitcom.map(({ id, title }) => (
                <Text p={5} key={id}>
                  {title}
                </Text>
              ))}
            </Flex>
          </Sheet.Content>
        </Sheet.Container>

        <Sheet.Backdrop />
      </Sheet>
    </>
  );
}
