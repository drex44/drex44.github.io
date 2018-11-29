import React from "react";
import { Flex, Text } from "rebass";
import { Section, makePairs } from "../components/commons";
import windowSize from "react-window-size";

const Message = props => {
  let messages = [
    <Text fontSize={[1, 2, 3]} px={[1, 4]} mt={[4, 6]} textAlign="center">
      Hi! I am Dhanraj, a full stack developer and computer science graduate.
    </Text>,
    <Text fontSize={[1, 2, 3]} px={[1, 4]} mt={[4, 7]} textAlign="center">
      I love experimenting with new tools and tech.
    </Text>,
    <Text fontSize={[1, 2, 3]} px={[1, 4]} mt={[4, 6]} textAlign="center">
      If I’m not working then you can find me in theater/ playing TT.
    </Text>,
    <Text fontSize={[1, 2, 3]} px={[1, 4]} mt={[4, 7]} textAlign="center">
      Other than this, I can be found on a random place enjoying the sun/ wind/
      crowd/ traffic/ life!
    </Text>
  ];
  let itemsPerRow = props.windowWidth < 450 ? 1 : 4;

  return (
    <Section>
      {makePairs(itemsPerRow, messages).map(Row => (
        <Flex justifyContent="center" pt={2}>
          {Row}
        </Flex>
      ))}
    </Section>
  );
};

export default windowSize(Message);
