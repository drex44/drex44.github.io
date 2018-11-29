import React from "react";
import { Text, Flex, Box } from "rebass";
import { HeaderLink } from "../components/Links";
import { Section } from "../components/commons";

const desc = {
  fontSize: [1, 2, 3]
};
const title = {
  fontSize: [1, 2, 3],
  color: "#008000"
};

const Value = props => (
  <Box>
    <Text {...title}>{props.title}</Text>
    <Text {...desc}>{props.desc}</Text>
  </Box>
);

export default props => {
  return (
    <Section>
      <Text textAlign="center" id="values">
        <HeaderLink color="green" id="values" href="#values">
          Values
        </HeaderLink>
        <Text my={3} fontSize={[1, 2, 3]}>
          My top 5 personal beliefs/ values,
        </Text>
        <Flex textAlign="center" my={4}>
          <Box width={1 / 2}>
            <Value
              title="Learning"
              desc="Always keep learning. I try to create MVPs with different stacks to see it’s advantages and disadvantages."
            />
          </Box>
          <Box width={1 / 2}>
            <Value
              title="Semantics"
              desc="Everything should have a meaning behind it. why of everything?"
            />
          </Box>
        </Flex>
        <Flex textAlign="center" my={4}>
          <Box width={1 / 2}>
            <Value title="Introspection" desc="Keeping myself in check." />
          </Box>
          <Box width={1 / 2}>
            <Value title="Transparency" desc="Be honest." />
          </Box>
        </Flex>
        <Box my={2}>
          <Value
            title="Follow a System"
            desc="Many times chasing the outcome doesn’t work but a system followed persistently
            always wins."
          />
        </Box>
      </Text>
    </Section>
  );
};
