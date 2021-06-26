import React from "react";
import { Flex, Box, Heading, Image } from "@chakra-ui/react";

export const Ingredient = ({ name, image }) => {
  const capitalisedName = name.charAt(0).toUpperCase() + name.slice(1);

  return (
    <Flex
      textAlign="center"
      w="160px"
      h="160px"
      m="10px"
      p="5px"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      borderRadius="sm"
      boxShadow="md"
    >
      <Heading as="h3" size="md">
        {capitalisedName}
      </Heading>
      <Image
        src={`https://spoonacular.com/cdn/ingredients_100x100/${image}`}
        alt="ingredient"
        boxSize="75px"
        objectFit="scale-down"
      />
    </Flex>
  );
};
