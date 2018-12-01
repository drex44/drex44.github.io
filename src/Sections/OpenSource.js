import React from "react";
import { Flex, Text } from "rebass";
import { HeaderLink, CardLink } from "../components/Links";
import { Section, makePairs } from "../components/commons";
import windowSize from "react-window-size";
import { itemsPerRow } from "../components/Theme";
import CommonCard from "../components/CommonCard";

const Projects = props => {
  let columns = itemsPerRow(props.windowWidth);

  const oss = [
    { title: "Rebass", desc: "Minimal UI library" },
    { title: "Styled Components", desc: "Used in theming" },
    { title: "Awesome React Links", desc: "Used to create animated links" },
    { title: "React Particles", desc: "Used to create background animation" },
    {
      title: "React Window Size",
      desc: "Used to make the components reponsive"
    }
  ];

  let OSSProjects = oss.map((project, index) => (
    <OSSProject key={index} project={project} />
  ));

  return (
    <Section>
      <Text textAlign="center" id="OSS">
        <HeaderLink href="#OSS" color="red">
          Thanks to these amazing open source projects
        </HeaderLink>
      </Text>

      {makePairs(columns, OSSProjects).map((Row, index) => (
        <Flex key={index} m={3}>
          {Row}
        </Flex>
      ))}
    </Section>
  );
};

const OSSProject = props => {
  const { project } = props;
  return (
    <CommonCard>
      <CardLink href={project.title} color="#ff0000">
        {project.title}
      </CardLink>

      <Text mx={2} mb={2} mt={3} fontSize={1} color={"gray"} textAlign="center">
        {project.desc}
      </Text>
    </CommonCard>
  );
};

export default windowSize(Projects);
