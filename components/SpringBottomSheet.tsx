import { Button } from "@chakra-ui/react";
import { useState } from "react";
import { BottomSheet } from "react-spring-bottom-sheet";

// if setting up the CSS is tricky, you can add this to your page somewhere:
// <link rel="stylesheet" href="https://unpkg.com/react-spring-bottom-sheet/dist/style.css" crossorigin="anonymous">
import "react-spring-bottom-sheet/dist/style.css";

export default function SpringBottomSheet() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button colorScheme="blue" onClick={() => setOpen(true)}>
        Open
      </Button>
      <BottomSheet open={open}>My awesome content here</BottomSheet>
    </>
  );
}
