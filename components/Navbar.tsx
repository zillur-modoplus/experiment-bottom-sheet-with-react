import { List, ListItem, Stack } from "@chakra-ui/react";

export default function Navbar() {
  return (
    <Stack>
      <List display={{ base: "block", md: "flex" }}>
        <ListItem cursor="pointer">With current bottom sheet</ListItem>
        <ListItem>With spring bottom sheet</ListItem>
      </List>
    </Stack>
  );
}
