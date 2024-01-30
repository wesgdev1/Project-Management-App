"use client";
import {
  EnvelopeClosedIcon,
  LockClosedIcon,
  MagnifyingGlassIcon,
} from "@radix-ui/react-icons";
import { Button, Flex, Text, TextField } from "@radix-ui/themes";
import { signIn } from "next-auth/react";

import { useForm, Controller } from "react-hook-form";
import { useRouter } from "next/navigation";

export const SigninForm = () => {
  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    values: {
      email: "",
      password: "",
    },
  });
  const router = useRouter();

  const onSubmit = handleSubmit(async (data) => {
    const res = await signIn("credentials", {
      email: data.email,
      password: data.password,
      redirect: false,
    });

    if (!res?.ok) {
      console.log(res);
    }

    router.push("/dashboard");
  });

  return (
    <form onSubmit={onSubmit}>
      <Flex direction={"column"} gap={"3"}>
        <label htmlFor="email">Email</label>
        <TextField.Root>
          <TextField.Slot>
            <EnvelopeClosedIcon height="16" width="16" />
          </TextField.Slot>
          <Controller
            name="email"
            control={control}
            rules={{
              required: {
                value: true,
                message: "Email is required",
              },
            }}
            render={({ field }) => {
              return (
                <TextField.Input placeholder="Email" type="email" {...field} />
              );
            }}
          />
        </TextField.Root>
        {errors.email && (
          <Text color="ruby" className="text-xs">
            {errors.email.message}
          </Text>
        )}
        span
        <label htmlFor="password">Password</label>
        <TextField.Root>
          <TextField.Slot>
            <LockClosedIcon height="16" width="16" />
          </TextField.Slot>
          <Controller
            name="password"
            control={control}
            rules={{
              required: {
                value: true,
                message: "password is required",
              },
              minLength: {
                value: 6,
                message: "Email must be at least 3 characters long",
              },
            }}
            render={({ field }) => {
              return (
                <TextField.Input
                  placeholder="******"
                  type="password"
                  {...field}
                />
              );
            }}
          />
        </TextField.Root>
        {errors.password && (
          <Text color="ruby" className="text-xs">
            {errors.password.message}
          </Text>
        )}
        <Button type="submit" mt="5">
          Sign In
        </Button>
      </Flex>
    </form>
  );
};
