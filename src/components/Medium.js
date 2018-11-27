import React from "react";
import { Text, Flex } from "rebass";
import { CardLink } from "./Links";
import CommonCard from "./CommonCard";
import { makePairs } from "./commons";
import { itemsPerRow } from "./Theme";

class MediumArticles extends React.Component {
  state = { posts: [] };

  componentDidMount() {
    this.getMediumPosts();
  }

  getMediumPosts() {
    fetch(
      "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@dhanraj_acharya"
    )
      .then(res => res.json())
      .then(data => {
        // Fillter the array to remove comments
        const res = data.items;
        const posts = res.filter(item => item.categories.length > 0);
        console.log(posts);
        this.setState({ posts });
      });
  }
  render() {
    let articles = this.state.posts.map((article, index) => (
      <Article key={index} article={article} />
    ));

    let columns = itemsPerRow(this.props.windowWidth);

    return (
      <div>
        {this.state.posts.length > 0 ? (
          <Text mt={3} fontWeight="bold">
            Recent articles,
          </Text>
        ) : null}

        {makePairs(columns, articles).map(Row => (
          <Flex m={3}>{Row}</Flex>
        ))}
      </div>
    );
  }
}

function toText(node) {
  let tag = document.createElement("div");
  tag.innerHTML = node;
  node = tag.innerText;
  return node;
}
function shortenText(text, startingPoint, maxLength) {
  return text.length > maxLength ? text.slice(startingPoint, maxLength) : text;
}

const Article = props => {
  const item = props.article;
  return (
    <CommonCard>
      {/* <a href={item.link}>
        <Image src={item.thumbnail} mb={3} />
      </a> */}
      <CardLink href={item.link} color="#008000">
        {shortenText(item.title, 0, 40) + "..."}
      </CardLink>

      <Text
        mx={2}
        mb={2}
        mt={3}
        fontSize={1}
        color={"gray"}
        textAlign="justify"
      >
        {shortenText(toText(item.content), 0, 300) + "..."}
      </Text>
    </CommonCard>
  );
};

export default MediumArticles;
