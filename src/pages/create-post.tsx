import React from "react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
} from "@chakra-ui/react";

const CreatePost = () => {
  return (
    <FormControl>
      <FormLabel>Email address</FormLabel>
      <Input type="email" />
      <FormHelperText>We'll never share your email.</FormHelperText>
    </FormControl>
  );
};

export default CreatePost;
