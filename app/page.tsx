"use client";
import { Box, Text } from "@chakra-ui/react";
import HorizontalTab from "../components/HorizontalTab";
import ReactBottomSheet from "../components/ReactBottomSheet";
import SpringBottomSheet from "../components/SpringBottomSheet";

export default function Page() {
  return (
    <Box bg="#fff">
      <HorizontalTab />
      <ReactBottomSheet />
      <SpringBottomSheet />
    </Box>
  );
}
