import React from "react";
import { Box, Card } from "rebass";
import { AnimatedCard } from "./commons";

const CommonCard = props => {
  return (
    <Box width={[1, 1 / 2, 1 / 3]}>
      <AnimatedCard>
        <Card p={[1, 1, 2]} m={[1, 2, 3]} bg="black" color="white">
          {props.children}
        </Card>
      </AnimatedCard>
    </Box>
  );
};

export default CommonCard;
