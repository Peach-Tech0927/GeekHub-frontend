import { Avatar, Button, Flex, IconButton, Text } from "@chakra-ui/react";
import { useSession, signIn, signOut } from "next-auth/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";

export default function Login() {
  const { data: session } = useSession();
  if (session) {
    return (
      <>
        <Flex pt={4} pr={12}>
          {session?.user?.image && (
            <Avatar
              name="user name"
              size={"md"}
              src={session.user.image}
              p={2}
            />
          )}
          {session?.user?.name && (
            <Text fontWeight={"bold"} p={3}>
              {session.user.name}
            </Text>
          )}
          <IconButton
            variant="outline"
            colorScheme="teal"
            aria-label="log out"
            icon={<ExternalLinkIcon />}
            onClick={() => signOut()}
            mt={1}
          />
        </Flex>
      </>
    );
  }
  return (
    <>
      <Flex pt={4} pr={12}>
        <Button onClick={() => signIn()}>Sign in</Button>
      </Flex>
    </>
  );
}
