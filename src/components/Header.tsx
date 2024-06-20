import { Box, Flex, Spacer } from "@chakra-ui/react";
import React from "react";
import Login from "./login-btn";
import LinkItems from "./LinkItems";
import Logo from "./Logo";

const Header = () => {
  return (
    <Box bg={"white"}>
      <Flex pl={2}>
        <Logo />
        <Box p={6}>GeekHub</Box>
        <Spacer />
        <LinkItems />
        <Spacer />
        <Login />
      </Flex>
    </Box>
  );
};

export default Header;
