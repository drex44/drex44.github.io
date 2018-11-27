import React from "react";
import { Box, Flex, Text } from "rebass";
import { Section } from "../components/commons";

export default props => {
  return (
    <Section>
      <Flex pt={2}>
        <Box width={1 / 2}>
          <Text fontSize={[1, 2, 3]} pt={7} px={4} textAlign="center" mt={-6}>
            Hi! I am Dhanraj, a full stack developer and computer science
            graduate.
          </Text>
        </Box>
        <Box width={1 / 2}>
          <Text fontSize={[1, 2, 3]} pt={7} px={4} textAlign="center">
            I love experimenting with new tools and tech.
          </Text>
        </Box>
        <Box width={1 / 2} mt={-6}>
          <Text fontSize={[1, 2, 3]} pt={7} px={4} textAlign="center">
            If I’m not working then you can find me in theater/ playing TT.
          </Text>
        </Box>
        <Box width={1 / 2}>
          <Text fontSize={[1, 2, 3]} pt={7} px={4} textAlign="center">
            Other than this, I can be found on a random place enjoying the sun/
            wind/ crowd/ quit/ traffic/ life!
          </Text>
        </Box>
      </Flex>
    </Section>
  );
};
