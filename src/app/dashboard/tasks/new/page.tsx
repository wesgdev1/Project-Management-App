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
import { useRouter } from "next/navigation";
import { useForm, Controller } from "react-hook-form";
import { useParams } from "next/navigation";
import { TrashIcon } from "@radix-ui/react-icons";

export default function TaskNewPage() {
  const router = useRouter();
  const params = useParams();
  console.log(params);
  const { control, handleSubmit } = useForm({
    values: {
      title: "",
      description: "",
    },
  });

  const onSubmit = handleSubmit(async (data) => {
    if (!params.projectId) {
      const res = await axios.post("http://localhost:3000/api/projects", data);
      if (res.status === 201) {
        router.push("/dashboard");
        router.refresh();
      }
    } else {
      console.log("edit project");
    }
  });

  return (
    <Container className="p-3 md:p-0" size="2" height="100%">
      <Flex className="h-screen w-full items-center">
        <Card className="w-full p-7">
          <form className="flex flex-col gap-3" onSubmit={onSubmit}>
            <Heading>
              {params.projectId ? "Edit project" : "Create new project"}
            </Heading>
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
              {params.projectId ? "Edit project" : "Create project"}
            </Button>
          </form>
          <div className="flex justify-end">
            {params.projectId && (
              <Button mt="5" color="red" variant="surface">
                <TrashIcon />
                Delete project
              </Button>
            )}
          </div>
        </Card>
      </Flex>
    </Container>
  );
}
