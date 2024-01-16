import { SignupForm } from "@/components/auth/SignupForm";
import { Card, Container, Flex, Heading, Link, Text } from "@radix-ui/themes";
import NavLink from "next/link";

export default function RegisterPage() {
  return (
    <>
      <Container size={"1"} height={"100%"} className="p-3 md:p-0">
        <Flex className="h-screen w-full items-center">
          <Card className="w-full p-6">
            <Heading>SignIn</Heading>
            <SignupForm></SignupForm>

            <Flex justify="between" my="4">
              <Text>Already have an account?</Text>
              <Link asChild>
                <NavLink href="/auth/login">Sign In</NavLink>
              </Link>
            </Flex>
          </Card>
        </Flex>
      </Container>
    </>
  );
}
