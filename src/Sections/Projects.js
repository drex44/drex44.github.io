import React from "react";
import { Flex, Text } from "rebass";
import { HeaderLink } from "../components/Links";
import { Section, makePairs } from "../components/commons";
import Project from "../components/Project";
import windowSize from "react-window-size";
import { itemsPerRow } from "../components/Theme";

const Projects = props => {
  let projects = props.projects.map((project, index) => (
    <Project key={index} item={project} />
  ));

  let columns = itemsPerRow(props.windowWidth);

  return (
    <Section>
      <Text textAlign="center" id="projects">
        <HeaderLink href="#projects" color="red">
          Projects
        </HeaderLink>
      </Text>

      {makePairs(columns, projects).map((Row, index) => (
        <Flex key={index} m={3}>
          {Row}
        </Flex>
      ))}
    </Section>
  );
};

export default windowSize(Projects);
