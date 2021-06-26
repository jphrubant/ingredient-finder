import React, { useState, useEffect, useRef, useContext } from "react";
import { GlobalContext } from "./../context/GlobalState";
import { History } from "./History";
import { Flex, Box, Input, Button } from "@chakra-ui/react";

export const SearchBar = () => {
  const [input, setInput] = useState("");

  const { state, setIngredients, toggleSearchError, setHistory, showHistory } =
    useContext(GlobalContext);

  const formInput = useRef(null);

  useEffect(() => {
    document.body.addEventListener("click", (e) => {
      if (e.target.name !== formInput.current.name) showHistory(false);
    });
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setIngredients(input);
    setHistory(input);
    setInput("");
  };

  return (
    <>
      <form
        onSubmit={(e) => handleFormSubmit(e)}
        onClick={() => toggleSearchError(false)}
      >
        <Flex flexDirection="row" marginBottom="20px" position="relative">
          <Box>
            <Input
              ref={formInput}
              name="ingredientInput"
              placeholder="Type in an ingredient"
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onClick={() => showHistory(true)}
              size="md"
              borderRadius="sm"
            ></Input>
            {state.showHistory === true && state.history.length > 0 ? (
              <History />
            ) : null}
          </Box>
          <Button type="submit" size="md" borderRadius="sm">
            Go!
          </Button>
        </Flex>
      </form>
    </>
  );
};
