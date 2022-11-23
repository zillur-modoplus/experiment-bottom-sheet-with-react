import React, { useCallback, useMemo, useRef } from "react";
import BottomSheet from "@gorhom/bottom-sheet";
import { Box, Text } from "@chakra-ui/react";

export default function ReactNativeBottoSheet() {
  // ref
  const bottomSheetRef = useRef<BottomSheet>(null);

  // variables
  const snapPoints = useMemo(() => ["25%", "50%"], []);

  // callbacks
  const handleSheetChanges = useCallback((index: number) => {
    console.log("handleSheetChanges", index);
  }, []);

  // renders
  return (
    <Box flex={1} p={24} bg="#333">
      <BottomSheet
        ref={bottomSheetRef}
        index={1}
        snapPoints={snapPoints}
        onChange={handleSheetChanges}
      >
        <Box flex={1} alignItems="center">
          <Text>Awesome 🎉</Text>
        </Box>
      </BottomSheet>
    </Box>
  );
}
