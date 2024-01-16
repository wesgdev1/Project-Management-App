"use client";
import {
  EnvelopeClosedIcon,
  LockClosedIcon,
  MagnifyingGlassIcon,
} from "@radix-ui/react-icons";
import { Button, Flex, TextField } from "@radix-ui/themes";

export const SigninForm = () => {
  return (
    <Flex direction={"column"} gap={"3"}>
      <label htmlFor="email">Email</label>
      <TextField.Root>
        <TextField.Slot>
          <EnvelopeClosedIcon height="16" width="16" />
        </TextField.Slot>
        <TextField.Input placeholder="Email@email.com" type="email" autoFocus />
      </TextField.Root>

      <label htmlFor="password">Password</label>
      <TextField.Root>
        <TextField.Slot>
          <LockClosedIcon height="16" width="16" />
        </TextField.Slot>
        <TextField.Input placeholder="******" type="password" autoFocus />
      </TextField.Root>

      <Button>Sign In</Button>
    </Flex>
  );
};
