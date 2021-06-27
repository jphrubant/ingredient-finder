import Head from "next/head";
import React, { useContext, useEffect } from "react";
import { Flex, Box, Heading, Text } from "@chakra-ui/react";
import { GlobalContext } from "./../context/GlobalState";
import { SearchBar } from "./../components/SearchBar";
import { Ingredient } from "./../components/Ingredient";

export default function Home() {
  const { state, setHistory } = useContext(GlobalContext);

  useEffect(() => {
    if (typeof window !== "undefined") {
      let storedHistory = JSON.parse(localStorage.getItem("history"));
      console.log("localStorage.getItem(history)", storedHistory)
      if(storedHistory !== null) setHistory(storedHistory);
    } else {
      console.log("we are running on the server");
    }
  }, [setHistory]);

  return (
    <>
      <Head>
        <title>Ingredient Finder</title>
        <meta name="keywords" content="ingredient, search engine, food" />
      </Head>
      <Flex
        height="100vh"
        flexDirection="column"
        alignItems="center"
        justifyContent="flex-start"
        paddingTop="50px"
      >
        <Heading as="h1" marginBottom="20px" textAlign="center">
          Ingredient Finder
        </Heading>
        <SearchBar />
        <Flex maxW="70%" justifyContent="center" flexWrap="wrap">
          {state.ingredients.map((ingredient) => {
            return <Ingredient key={ingredient.id} {...ingredient} />;
          })}
        </Flex>
        {state.isLoading ? (
          <Box>
            <Text>Loading ingredients...</Text>
          </Box>
        ) : null}
        {state.showSearchError ? (
          <Box>
            <Text>Woopsy, your search did not return any results.</Text>
          </Box>
        ) : null}
      </Flex>
    </>
  );
}
