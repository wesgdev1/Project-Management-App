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
import { toast } from "sonner";
import { useEffect } from "react";

export default function TaskNewPage() {
  const router = useRouter();
  const params = useParams();
  console.log(params);
  const { control, handleSubmit, setValue } = useForm({
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
      const res = await axios.put(
        `http://localhost:3000/api/projects/${params.projectId}`,
        data
      );
      if (res.status === 200) {
        router.push("/dashboard");
        router.refresh();
      }
    }
  });

  const handleDelete = async (ProjectId: string) => {
    const res = await axios.delete(
      `http://localhost:3000/api/projects/${ProjectId}`
    );
    if (res.status === 200) {
      toast.success("Project deleted");
      router.push("/dashboard");
      router.refresh();
    }
  };
  useEffect(() => {
    console.log("por el efecct");
    if (params.projectId) {
      const res = axios
        .get(`http://localhost:3000/api/projects/${params.projectId}`)
        .then((res) => {
          console.log(res.data);
          setValue("title", res.data.title);
          setValue("description", res.data.description);
        });
    }
  }, []);

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
              <Button
                mt="5"
                color="red"
                variant="surface"
                onClick={() => {
                  handleDelete(params.projectId as string);
                }}
              >
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
