import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import { Flex, UnorderedList, ListItem, Button } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

export const History = () => {
  const { state, setIngredients } = useContext(GlobalContext);

  let latestSearches = state.history.slice(0, 9);

  return (
    <Flex
      flexDirection="column"
      backgroundColor="white"
      borderRadius="sm"
      boxShadow="xl"
      position="absolute"
      top="40px"
      p="15px"
      w="100%"
    >
      <UnorderedList>
        {latestSearches.map((item, index) => {
          return (
            <ListItem key={index} listStyleType="none" m="5px">
              <Button
                onClick={() => setIngredients(item)}
                backgroundColor="white"
                marginLeft="10px"
                marginRight="10px"
                _hover={{ bg: "white", border: "none" }}
              >
              <SearchIcon marginRight="15px"/>
                {item}
              </Button>
            </ListItem>
          );
        })}
      </UnorderedList>
    </Flex>
  );
};
