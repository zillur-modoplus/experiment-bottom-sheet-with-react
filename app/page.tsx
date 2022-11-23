"use client";
import { Box, Text } from "@chakra-ui/react";
import ChakraDrawer from "../components/ChakraDrawer";
import ChakraModal from "../components/ChakraModal";
import HorizontalTab from "../components/HorizontalTab";
import ReactBottomSheet from "../components/ReactBottomSheet";
import ReactNativeBottoSheet from "../components/ReactNativeBottomSheet";
import SpringBottomSheet from "../components/SpringBottomSheet";

export default function Page() {
  return (
    <Box bg="#fff">
      {/* <HorizontalTab /> */}
      <ReactBottomSheet />
      <SpringBottomSheet />
      <ChakraModal />
      <ChakraDrawer />
      {/* <ReactNativeBottoSheet /> */}
    </Box>
  );
}
