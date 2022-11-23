import {
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  VStack,
} from "@chakra-ui/react";
import { readFileSync } from "fs";
import { tvSitcom } from "./HorizontalTab";

import React from "react";

export default function TabInsideTab() {
  return (
    <Tabs>
      <TabList
        overflowY="auto"
        sx={{
          scrollbarWidth: "none",
          "::-webkit-scrollbar": {
            display: "none",
          },
        }}
      >
        {tvSitcom.map(({ id, title }) => (
          <Tab px={7} color="#000" whiteSpace="nowrap" key={id}>
            {title}
          </Tab>
        ))}
      </TabList>

      <TabPanels>
        {tvSitcom.map(({ id, title, Season, favChar, rank }) => (
          <TabPanel key={id} overflow="acroll">
            <Text color="#333" fontWeight={700}>
              Name:{" "}
              <Text as="span" color="#000" fontWeight={400}>
                {title}
              </Text>
            </Text>
            <Text color="#333" fontWeight={700}>
              Total Season:{" "}
              <Text as="span" color="#000" fontWeight={400}>
                {Season}
              </Text>
            </Text>
            <Text color="#333" fontWeight={700}>
              Favorite Character:{" "}
              <Text as="span" color="#000" fontWeight={400}>
                {favChar}
              </Text>
            </Text>
            <Text color="#333" fontWeight={700}>
              Personal Ranking:{" "}
              <Text as="span" color="#000" fontWeight={400}>
                {rank}
              </Text>
            </Text>
            <Text color="#333" fontWeight={700}>
              Name:{" "}
              <Text as="span" color="#000" fontWeight={400}>
                {title}
              </Text>
            </Text>
            <Text color="#333" fontWeight={700}>
              Total Season:{" "}
              <Text as="span" color="#000" fontWeight={400}>
                {Season}
              </Text>
            </Text>
            <Text color="#333" fontWeight={700}>
              Favorite Character:{" "}
              <Text as="span" color="#000" fontWeight={400}>
                {favChar}
              </Text>
            </Text>
            <Text color="#333" fontWeight={700}>
              Personal Ranking:{" "}
              <Text as="span" color="#000" fontWeight={400}>
                {rank}
              </Text>
            </Text>
            <Text color="#333" fontWeight={700}>
              Name:{" "}
              <Text as="span" color="#000" fontWeight={400}>
                {title}
              </Text>
            </Text>
            <Text color="#333" fontWeight={700}>
              Total Season:{" "}
              <Text as="span" color="#000" fontWeight={400}>
                {Season}
              </Text>
            </Text>
            <Text color="#333" fontWeight={700}>
              Favorite Character:{" "}
              <Text as="span" color="#000" fontWeight={400}>
                {favChar}
              </Text>
            </Text>
            <Text color="#333" fontWeight={700}>
              Personal Ranking:{" "}
              <Text as="span" color="#000" fontWeight={400}>
                {rank}
              </Text>
            </Text>
            <Text color="#333" fontWeight={700}>
              Name:{" "}
              <Text as="span" color="#000" fontWeight={400}>
                {title}
              </Text>
            </Text>
            <Text color="#333" fontWeight={700}>
              Total Season:{" "}
              <Text as="span" color="#000" fontWeight={400}>
                {Season}
              </Text>
            </Text>
            <Text color="#333" fontWeight={700}>
              Favorite Character:{" "}
              <Text as="span" color="#000" fontWeight={400}>
                {favChar}
              </Text>
            </Text>
            <Text color="#333" fontWeight={700}>
              Personal Ranking:{" "}
              <Text as="span" color="#000" fontWeight={400}>
                {rank}
              </Text>
            </Text>
            <Text color="#333" fontWeight={700}>
              Name:{" "}
              <Text as="span" color="#000" fontWeight={400}>
                {title}
              </Text>
            </Text>
            <Text color="#333" fontWeight={700}>
              Total Season:{" "}
              <Text as="span" color="#000" fontWeight={400}>
                {Season}
              </Text>
            </Text>
            <Text color="#333" fontWeight={700}>
              Favorite Character:{" "}
              <Text as="span" color="#000" fontWeight={400}>
                {favChar}
              </Text>
            </Text>
            <Text color="#333" fontWeight={700}>
              Personal Ranking:{" "}
              <Text as="span" color="#000" fontWeight={400}>
                {rank}
              </Text>
            </Text>
            <Text color="#333" fontWeight={700}>
              Name:{" "}
              <Text as="span" color="#000" fontWeight={400}>
                {title}
              </Text>
            </Text>
            <Text color="#333" fontWeight={700}>
              Total Season:{" "}
              <Text as="span" color="#000" fontWeight={400}>
                {Season}
              </Text>
            </Text>
            <Text color="#333" fontWeight={700}>
              Favorite Character:{" "}
              <Text as="span" color="#000" fontWeight={400}>
                {favChar}
              </Text>
            </Text>
            <Text color="#333" fontWeight={700}>
              Personal Ranking:{" "}
              <Text as="span" color="#000" fontWeight={400}>
                {rank}
              </Text>
            </Text>
          </TabPanel>
        ))}
      </TabPanels>
    </Tabs>
  );
}
