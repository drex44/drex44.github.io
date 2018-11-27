import React from "react";
import AwesomeLinks from "awesome-react-links";
import { Link, Text } from "rebass";

export const NavigationLink = props => {
  return (
    <AwesomeLinks
      linkStyle="highlight7 corners"
      customStyles={{
        linkColor: "gray",
        linkHoverColor: "white",
        color1: "gray",
        color2: "white"
      }}
    >
      <Link
        mx={[1, 3]}
        fontSize={[1, 2]}
        href={props.href}
        target={props.new ? "_new" : ""}
        download={props.download ? true : false}
      >
        {props.children}
      </Link>
    </AwesomeLinks>
  );
};

export const HeaderLink = props => {
  return (
    <AwesomeLinks
      linkStyle="highlight1"
      customStyles={{
        linkColor: "white",
        linkHoverColor: "black",
        color1: props.color ? props.color : "blue"
      }}
    >
      <Link
        href={props.href}
        download={props.download ? true : false}
        target={props.new ? "_new" : ""}
      >
        <Text fontSize={[2, 3, 4]} fontWeight="bold">
          {props.children}
        </Text>
      </Link>
    </AwesomeLinks>
  );
};

export const OutsideLink = props => {
  return (
    <AwesomeLinks
      linkStyle="highlight6"
      customStyles={{
        linkColor: props.color ? props.color : "gray",
        linkHoverColor: props.hoverColor ? props.hoverColor : "white",
        color1: "gray",
        color2: "white"
      }}
    >
      <Link
        href={props.href}
        target="_new"
        download={props.download ? true : false}
      >
        {props.children}
      </Link>
    </AwesomeLinks>
  );
};

export const CardLink = props => {
  return (
    <Link
      href={props.href}
      target="_new"
      download={props.download ? true : false}
      css={{ textDecoration: "none" }}
      color={props.color ? props.color : "black"}
    >
      <Text textAlign="center" fontSize={3} mt={3}>
        {props.children}
      </Text>
    </Link>
  );
};
