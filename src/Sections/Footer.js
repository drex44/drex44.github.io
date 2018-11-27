import React from "react";
import { Box, Flex, Text } from "rebass";
import { OutsideLink } from "../components/Links";
import { Section } from "../components/commons";

export default props => {
  return (
    <Section bg={"#0f0f0fb3"}>
      <Flex fontSize={[1, 2, 3]}>
        <Box width={[1, 1 / 2]}>
          <Text mb={1} fontWeight="bold">
            Contact
          </Text>
          <OutsideLink href="mailto:dhanrajacharya44@gmail.com">
            dhanrajacharya44@gmail.com
          </OutsideLink>
        </Box>
        <Box width={[1, 1 / 2]}>
          <Text mb={1} fontWeight="bold">
            Social
          </Text>
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
