"use client";
import {
  EnvelopeClosedIcon,
  LockClosedIcon,
  MagnifyingGlassIcon,
  PersonIcon,
} from "@radix-ui/react-icons";
import { Button, Flex, Text, TextField } from "@radix-ui/themes";
import { useForm, Controller } from "react-hook-form";
import axios from "axios";

export const SignupForm = () => {
  const {
    control,

    handleSubmit,
    formState: { errors },
  } = useForm({
    values: {
      name: "",
      email: "",
      password: "",
    },
  });

  const onSubmit = handleSubmit(async (data) => {
    console.log(data);
    const res = await axios.post("http://localhost:3000/api/register", data);
    console.log(res);
  });

  return (
    <form onSubmit={onSubmit}>
      <Flex direction={"column"} gap={"3"}>
        <label htmlFor="name">name</label>
        <TextField.Root>
          <TextField.Slot>
            <PersonIcon height="16" width="16" />
          </TextField.Slot>
          <Controller
            name="name"
            control={control}
            rules={{
              required: {
                value: true,
                message: "name is required",
              },
            }}
            render={({ field }) => {
              return (
                <TextField.Input
                  placeholder="write your name"
                  type="text"
                  {...field}
                />
              );
            }}
          />
        </TextField.Root>
        {errors.name && (
          <Text color="ruby" className="text-xs">
            {errors.name.message}
          </Text>
        )}

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
          Sign Up
        </Button>
      </Flex>
    </form>
  );
};
