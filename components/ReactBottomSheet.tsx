import Sheet, { SheetRef } from "react-modal-sheet";
import { useState } from "react";
import HorizontalTab, { tvSitcom } from "./HorizontalTab";
import React from "react";
import { Button, Flex, Text, VStack } from "@chakra-ui/react";

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
            Hello there
          </Sheet.Header>
          <Sheet.Content>
            {/* <Text color="black" overflow="auto">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quam
              consequatur enim quos quia, adipisci ut possimus sequi, asperiores
              cum excepturi illum nisi atque architecto exercitationem,
              molestiae eveniet. Praesentium iste eligendi excepturi ut
              repellat. Accusamus minima architecto saepe animi dolore provident
              quidem illo, laudantium asperiores tenetur facilis, enim
              reiciendis minus quam, aliquid odio dolorum eos! Totam ullam
              recusandae, illo repellat non ex, architecto eaque natus facere
              cumque earum ducimus nisi, magnam veritatis inventore est quasi
              aspernatur provident id voluptatum vel quis molestiae officiis.
              Harum, vero eligendi provident vel numquam illo exercitationem
              consequatur id obcaecati odit ipsam repellat, quo, sed modi et.
              Atque quidem modi enim alias quia tempore corporis deserunt
              distinctio tempora quae dolorum facilis aut, minima possimus
              provident quo ab eligendi nemo omnis inventore nesciunt? Voluptate
              veniam nobis incidunt illum autem. Possimus rerum quia accusantium
              nostrum laboriosam harum ducimus optio architecto illum. Quos
              dolores ut qui beatae provident commodi eaque eveniet aut? Maxime
              repellendus sed exercitationem iusto. Dignissimos iure perferendis
              corporis dolorum sit, dolore ipsum atque tenetur saepe aperiam
              odit voluptatum veritatis error consectetur voluptatem autem
              molestiae maxime porro. Aperiam minima nihil quis illum optio
              itaque porro quibusdam, sequi facilis expedita placeat vero eius
              voluptate sunt modi consequuntur iusto aspernatur!
            </Text> */}
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
