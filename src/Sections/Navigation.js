import React from "react";
import { Box, Flex } from "rebass";
import { NavigationLink, HeaderLink } from "../components/Links";

export default props => {
  return (
    <Flex px={7} pt={4} color="white" bg="black" alignItems="center">
      <HeaderLink href="/">Dhanraj Acharya</HeaderLink>
      <Box mx="auto" />
      <Box mt={3}>
        <NavigationLink href="#projects">Projects</NavigationLink>
        <NavigationLink href="/resume/Dhanraj Acharya Resume.pdf" new download>
          Resume
        </NavigationLink>
      </Box>
    </Flex>
  );
};
