import React from "react";
import { Text } from "rebass";
import { HeaderLink, OutsideLink } from "../components/Links";
import { Section } from "../components/commons";
import MediumArticles from "../components/Medium";

export default props => {
  return (
    <Section>
      <Text id="blog">
        <HeaderLink color="green" href="#blog" id="blog">
          Blog
        </HeaderLink>
      </Text>
      <Text mt={3} mb={1}>
        Top Writter in technology on{" "}
        <OutsideLink
          hoverColor="#008000"
          href="https://medium.com/@dhanraj_acharya"
        >
          Medium
        </OutsideLink>
      </Text>
      <Text mb={1}>
        Editor of{" "}
        <OutsideLink hoverColor="#008000" href="https://medium.com/wineofbits">
          Wine of bits
        </OutsideLink>
      </Text>
      <Text mb={1}>
        Writer on{" "}
        <OutsideLink
          hoverColor="#008000"
          href="https://medium.freecodecamp.org/@dhanraj_acharya"
        >
          FreeCodeCamp
        </OutsideLink>
        ,{" "}
        <OutsideLink
          hoverColor="#008000"
          href="https://hackernoon.com/@dhanraj_acharya"
        >
          HackerNoon
        </OutsideLink>
        , and{" "}
        <OutsideLink
          hoverColor="#008000"
          href="https://medium.com/swlh/@dhanraj_acharya"
        >
          The Startup
        </OutsideLink>{" "}
        publications.
      </Text>
      <Text mb={3}>
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
