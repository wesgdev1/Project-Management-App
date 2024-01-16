"use client";
import {
  EnvelopeClosedIcon,
  LockClosedIcon,
  MagnifyingGlassIcon,
  PersonIcon,
} from "@radix-ui/react-icons";
import { Button, Flex, TextField } from "@radix-ui/themes";

export const SignupForm = () => {
  return (
    <Flex direction={"column"} gap={"3"}>
      <label htmlFor="name">name</label>
      <TextField.Root>
        <TextField.Slot>
          <PersonIcon height="16" width="16" />
        </TextField.Slot>
        <TextField.Input placeholder="write your name" type="text" />
      </TextField.Root>

      <label htmlFor="email">Email</label>
      <TextField.Root>
        <TextField.Slot>
          <EnvelopeClosedIcon height="16" width="16" />
        </TextField.Slot>
        <TextField.Input placeholder="Email@email.com" type="email" />
      </TextField.Root>

      <label htmlFor="password">Password</label>
      <TextField.Root>
        <TextField.Slot>
          <LockClosedIcon height="16" width="16" />
        </TextField.Slot>
        <TextField.Input placeholder="******" type="password" />
      </TextField.Root>

      <Button>Sign Up</Button>
    </Flex>
  );
};
