import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Avatar,
  Box,
  Button,
  Flex,
  Heading,
  Text,
} from "@chakra-ui/react";
import Post from "./Post";

const Posts = () => {
  return (
    <Flex justifyContent={"center"}>
      <Post />
    </Flex>
  );
};

export default Posts;
