import {
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import TabInsideTab from "./TabInsideTab";

export const tvSitcom = [
  {
    id: 0,
    title: "F.R.I.E.N.D.S",
    Season: 7,
    favChar: "Chandler",
    rank: 1,
  },
  {
    id: 1,
    title: "The Office",
    Season: 5,
    favChar: "Dwight",
    rank: 2,
  },
  {
    id: 2,
    title: "The Big Bang Theory",
    Season: 5,
    favChar: "Howard",
    rank: 3,
  },
  {
    id: 3,
    title: "Modern Family",
    Season: 5,
    favChar: "Phill",
    rank: 4,
  },
  {
    id: 4,
    title: "Brooklyn 99",
    Season: "NA",
    favChar: "NA",
    rank: "NA",
  },
  {
    id: 4,
    title: "How I Met Your Mother",
    Season: 5,
    favChar: "Bernie",
    rank: "Last",
  },
];

export default function HorizontalTab() {
  return (
    <Tabs overflow="auto">
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
          <TabPanel key={id}>
            <VStack>
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
              {/* {title === "The Office" && <TabInsideTab />} */}
            </VStack>
          </TabPanel>
        ))}
      </TabPanels>
    </Tabs>
  );
}
