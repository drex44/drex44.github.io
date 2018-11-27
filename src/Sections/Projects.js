import React from "react";
import { Flex, Text } from "rebass";
import { HeaderLink } from "../components/Links";
import { Section, makePairs } from "../components/commons";
import Project from "../components/Project";

export default props => {
  let projects = props.projects.map((project, index) => (
    <Project key={index} item={project} />
  ));

  return (
    <Section>
      <Text textAlign="center" id="projects">
        <HeaderLink href="#projects" color="red">
          Projects
        </HeaderLink>
      </Text>

      {makePairs(3, projects).map(Row => (
        <Flex m={3}>{Row}</Flex>
      ))}
    </Section>
  );
};
