"use client";
import {
  Button,
  Container,
  DropdownMenu,
  Flex,
  Heading,
  Link,
} from "@radix-ui/themes";
import Nextlink from "next/link";
import { useSession } from "next-auth/react";
import { CaretDownIcon } from "@radix-ui/react-icons";
import { signOut } from "next-auth/react";

export const Navbar = () => {
  const { data: session } = useSession();
  console.log(session);

  const logout = () => {
    signOut();
  };

  return (
    <nav className="bg-stone-700 py-5">
      <Container>
        <Flex justify="between" align="center">
          <Nextlink href="/" passHref>
            <Heading>Radix Next</Heading>
          </Nextlink>

          <ul className="flex gap-2 items-center">
            {!session && (
              <>
                <li>
                  <Link asChild>
                    <Nextlink href={"/auth/login"} passHref>
                      Login
                    </Nextlink>
                  </Link>
                </li>
                <li>
                  <Link asChild>
                    <Nextlink href={"/auth/register"} passHref>
                      Register
                    </Nextlink>
                  </Link>
                </li>
              </>
            )}

            {session && (
              <>
                <li>
                  <Link asChild>
                    <Nextlink href={"/dashboard"} passHref>
                      Dashboard
                    </Nextlink>
                  </Link>
                </li>
                <li>
                  <DropdownMenu.Root>
                    <DropdownMenu.Trigger>
                      <Button variant="soft">
                        {session?.user?.name || "User"}
                        <CaretDownIcon />
                      </Button>
                    </DropdownMenu.Trigger>
                    <DropdownMenu.Content>
                      <DropdownMenu.Item>My Profile</DropdownMenu.Item>

                      <DropdownMenu.Item>Settings</DropdownMenu.Item>

                      <DropdownMenu.Separator />
                      <DropdownMenu.Item
                        color="red"
                        onClick={() => {
                          logout();
                        }}
                      >
                        Logout
                      </DropdownMenu.Item>
                    </DropdownMenu.Content>
                  </DropdownMenu.Root>
                </li>
              </>
            )}
          </ul>
        </Flex>
      </Container>
    </nav>
  );
};
