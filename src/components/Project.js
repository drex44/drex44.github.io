import React from "react";
import { Box, Flex, Text } from "rebass";
import { makePairs } from "./commons";
import { CardLink } from "./Links";
import CommonCard from "./CommonCard";

const Project = props => {
  const item = props.item;

  let references = item.references.map((list, index) => (
    <Text key={index} fontSize={1} mx={1} color={"gray"} textAlign="center">
      <b>{list}</b>
    </Text>
  ));

  let tags = item.tags.map((tag, index) => (
    <span key={index} class="Tag">
      #{tag}
    </span>
  ));

  return (
    <CommonCard>
      <Box m={2}>
        <CardLink href={item.link} color="#ff0000">
          {item.title}
        </CardLink>

        <Box mt={4} mx={2} fontSize={1} color={"white"}>
          {item.desc.map((list, index) => (
            <Text key={index} textAlign="justify" mt={2}>
              {list}
            </Text>
          ))}
        </Box>
        <Text fontSize={1} my={4} color={"gray"} textAlign="center">
          {makePairs(3, tags).map((Row, index) => (
            <Flex key={index} justifyContent="center">
              {Row}
            </Flex>
          ))}
        </Text>
        <Flex justifyContent="center" />
        {makePairs(3, references).map((Row, index) => (
          <Flex key={index} justifyContent="center" m={3}>
            {Row}
          </Flex>
        ))}
      </Box>
    </CommonCard>
  );
};

export default Project;
