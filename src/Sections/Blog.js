import React from "react";
import { Text } from "rebass";
import { HeaderLink, OutsideLink } from "../components/Links";
import { Section } from "../components/commons";
import MediumArticles from "../components/Medium";

export default props => {
  return (
    <Section>
      <Text id="blog" fontSize={[1, 2, 3]} mb={3}>
        <HeaderLink color="green" href="#blog" id="blog">
          Blog
        </HeaderLink>
      </Text>
      <Text mb={1} fontSize={[1, 2, 3]}>
        Writer on{" "}
        <OutsideLink
          hoverColor="#008000"
          href="https://medium.com/@dhanraj_acharya"
        >
          Medium
        </OutsideLink>{" "}
        and the editor of{" "}
        <OutsideLink hoverColor="#008000" href="https://medium.com/wineofbits">
          Wine of bits
        </OutsideLink>{" "}
        publication.
      </Text>
      <Text mb={1} fontSize={[1, 2, 3]}>
        One of the Top 50 Writer in technology on{" "}
        <OutsideLink
          hoverColor="#008000"
          href="https://medium.com/@dhanraj_acharya"
        >
          Medium
        </OutsideLink>{" "}
        in October, 2018.
      </Text>
      <Text mb={3} fontSize={[1, 2, 3]}>
        * I have removed the{" "}
        <OutsideLink hoverColor="#008000" href="#">
          http://www.wineofbits.com
        </OutsideLink>{" "}
        (old blog site) and moved all articles to{" "}
        <OutsideLink hoverColor="#008000" href="https://medium.com/wineofbits">
          Medium
        </OutsideLink>
        .
      </Text>
      <MediumArticles />
    </Section>
  );
};
