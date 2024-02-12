"use client";
import {
  Container,
  TextArea,
  TextFieldInput,
  Flex,
  Card,
  Heading,
  Button,
} from "@radix-ui/themes";
import axios from "axios";
import { useForm, Controller } from "react-hook-form";

export default function TaskNewPage() {
  const { control, handleSubmit } = useForm({
    values: {
      title: "",
      description: "",
    },
  });

  const onSubmit = handleSubmit(async (data) => {
    console.log(data);
    const res = await axios.post("http://localhost:3000/api/projects", data);
    console.log(res);
  });

  return (
    <Container className="p-3 md:p-0" size="2" height="100%">
      <Flex className="h-screen w-full items-center">
        <Card className="w-full p-7">
          <form className="flex flex-col gap-3" onSubmit={onSubmit}>
            <Heading>Create project</Heading>
            <label>Project title</label>
            <Controller
              name="title"
              control={control}
              render={({ field }) => {
                return (
                  <TextFieldInput
                    size="3"
                    placeholder="Write the title"
                    {...field}
                  />
                );
              }}
            />

            <label>Project description</label>
            <Controller
              name="description"
              control={control}
              render={({ field }) => {
                return (
                  <TextArea
                    size="3"
                    placeholder="Add one description"
                    {...field}
                  />
                );
              }}
            />
            <Button type="submit" mt="5">
              Create project
            </Button>
          </form>
        </Card>
      </Flex>
    </Container>
  );
}
