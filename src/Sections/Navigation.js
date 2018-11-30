import React from "react";
import { Box, Flex } from "rebass";
import { NavigationLink, HeaderLink } from "../components/Links";

export default props => {
  return (
    <Flex px={[3, 5, 7]} pt={[1, 3, 4]} color="white" alignItems="center">
      <HeaderLink href="/">Dhanraj Acharya</HeaderLink>
      <Box mx="auto" />
      <Flex mt={3}>
        <NavigationLink href="#projects">Projects</NavigationLink>
        <NavigationLink
          href="https://drive.google.com/open?id=1d6SE-SDEFnVettyqsDDZ4uQfBqbgweN1"
          new
        >
          Resume
        </NavigationLink>
      </Flex>
    </Flex>
  );
};
