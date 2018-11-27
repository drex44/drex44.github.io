import React from "react";
import { Box, Flex, Heading } from "rebass";
import { OutsideLink } from "../components/Links";
import { Section } from "../components/commons";

export default props => {
  return (
    <Section bg={"#0f0f0fb3"}>
      <Flex>
        <Box width={1 / 2}>
          <Heading as="h6" mb={1}>
            Contact
          </Heading>
          <OutsideLink href="mailto:dhanrajacharya44@gmail.com">
            dhanrajacharya44@gmail.com
          </OutsideLink>
        </Box>
        <Box width={1 / 2}>
          <Heading as="h6" mb={1}>
            Social
          </Heading>
          <OutsideLink href="https://github.com/drex44/">GitHub</OutsideLink> /{" "}
          <OutsideLink href="https://www.linkedin.com/in/dhanraj-acharya/">
            Linkedin
          </OutsideLink>{" "}
          /{" "}
          <OutsideLink href="https://twitter.com/acharya_dhanraj">
            Twitter
          </OutsideLink>{" "}
          /{" "}
          <OutsideLink href="https://medium.com/@dhanraj_acharya">
            Medium
          </OutsideLink>
        </Box>
      </Flex>
    </Section>
  );
};
