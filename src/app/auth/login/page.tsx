import { Card, Container, Flex, Heading, Link, Text } from "@radix-ui/themes";
import { SigninForm } from "../../../components/auth/SigninForm";
import NavLink from "next/link";

export default function LoginPage() {
  return (
    <>
      <Container size={"1"} height={"100%"} className="p-3 md:p-0">
        <Flex className="h-screen w-full items-center">
          <Card className="w-full p-6">
            <Heading>SignIn</Heading>
            <SigninForm />
            <Flex justify="between" my="4">
              <Text>Don´t hace a account?</Text>
              <Link asChild>
                <NavLink href="/auth/register">Sign Up</NavLink>
              </Link>
            </Flex>
          </Card>
        </Flex>
      </Container>
    </>
  );
}
