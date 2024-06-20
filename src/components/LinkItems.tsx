import React from "react";
import { Flex, Text } from "@chakra-ui/react";
import { EditIcon } from "@chakra-ui/icons";
import Link from "next/link";

const LinkItems = () => {
  return (
    <Link href={"/create-post"}>
      <Flex p={5} cursor={"pointer"}>
        <EditIcon fontSize={"x-large"} />
        <Text pl={2}>投稿</Text>
      </Flex>
    </Link>
  );
};

export default LinkItems;
